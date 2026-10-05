import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Deterministic scroll restoration for an SPA.
 *
 * Why this exists: the browser's built-in restoration races with client-side
 * routing. On a POP back to `/` from `/projects/:slug`, Chrome restores while the
 * *previous* page is still mounted, so the offset gets clamped to that page's
 * max scroll — which is how "back from a project" used to land on Skills
 * instead of Projects. It also fights any manual `scrollTo(0)`.
 *
 * So we take over `history.scrollRestoration` and do it ourselves:
 *   - remember each history entry's offset as you scroll
 *   - POP  -> put the visitor back exactly where they were
 *   - PUSH -> start at the top (unless the URL carries a hash, which the page
 *             handles itself)
 */
const positions = new Map()

export function useScrollRestoration() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const keyRef = useRef(location.key)

  keyRef.current = location.key

  // Take over from the browser.
  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  // Record where we are, continuously, so nothing is lost to effect ordering.
  useEffect(() => {
    let ticking = false

    const record = () => {
      positions.set(keyRef.current, window.scrollY)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(record)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    record()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    // A hash target is owned by the destination page (see pages/Home.jsx).
    if (location.hash) return

    const top = navigationType === 'POP' ? (positions.get(location.key) ?? 0) : 0

    if (top === 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }

    /*
     * AnimatePresence unmounts the old page before mounting the new one, so at
     * this instant the outgoing (much shorter) page is still in the DOM. Scrolling
     * straight away would clamp to *its* maximum and land somewhere arbitrary —
     * then jump again once the real page mounts. So: only scroll once the
     * document is genuinely tall enough to reach the target, and never before.
     * The new page is mid-fade at that point, so the jump is not seen.
     */
    let frames = 0
    let raf = 0

    const attempt = () => {
      const reachable = document.documentElement.scrollHeight - window.innerHeight

      if (reachable >= top - 1) {
        window.scrollTo({ top, left: 0, behavior: 'instant' })
        return
      }

      frames += 1
      if (frames < 120) raf = requestAnimationFrame(attempt)
    }

    raf = requestAnimationFrame(attempt)
    return () => cancelAnimationFrame(raf)
  }, [location.key, location.pathname, location.hash, navigationType])
}