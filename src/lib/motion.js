import { useNavigationType } from 'react-router-dom'

/**
 * Shared motion language.
 *
 * One place for the easing curves, reveal distance and timings so every
 * section of the site moves with the same hand. Deliberately no springs —
 * everything is a controlled, eased transition.
 */

/** Primary reveal curve. */
export const EASE = [0.25, 0.1, 0.25, 1]

/** Slightly softer, for larger elements settling into place. */
export const EASE_ENTRANCE = [0.16, 0.84, 0.44, 1]

/** Shared viewport config — reveals a touch before the element is centred. */
export const viewport = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' }

/** Standard scroll reveal: fade + rise. */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Standard scroll reveal for elements that settle from the left (timelines). */
export const fadeRight = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Parent wrapper that staggers whatever `fadeUp` children it holds. */
export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

/** Hero entrance — slightly longer, no bounce. */
export const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_ENTRANCE },
  },
}

export const heroStagger = (delayChildren = 0.15) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren } },
})

/** Page-to-page transition used by the route wrapper in App.jsx. */
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.28, ease: EASE } },
}

/* ── Back/forward arrivals ────────────────────────────────────────────────
 * Every scroll-triggered reveal starts at opacity 0 and animates in over
 * ~0.55s with a stagger. On a POP the page is already where the visitor left
 * it, so re-running that whole sequence means the screen sits empty for a
 * beat and then rebuilds itself in front of them. Arriving via back/forward
 * should simply *be there*.
 */
const alreadyVisible = {
  hidden: { opacity: 1, y: 0, x: 0 },
  show: { opacity: 1, y: 0, x: 0 },
}

/** Reveal variants that respect how the visitor arrived. */
export function useReveal() {
  return useNavigationType() === 'POP' ? alreadyVisible : fadeUp
}