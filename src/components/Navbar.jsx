import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'
import profile from '../data/profile'
import { EASE } from '../lib/motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()

  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Highlight whichever section owns the upper third of the viewport.
  // Computed from scroll position rather than an IntersectionObserver: an
  // observer never fires for "nothing is in view", which left the last pill
  // stuck on the section you had just scrolled back up from.
  useEffect(() => {
    if (!onHome) {
      setActive('')
      return
    }

    const compute = () => {
      const line = window.scrollY + window.innerHeight * 0.35
      let current = ''

      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href)
        if (!section) continue
        // Document-absolute: offsetTop would be relative to the rail wrapper.
        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = link.href
      }

      setActive(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)

    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [onHome, location.hash])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const handleNav = (href) => {
    setOpen(false)
    if (!onHome) {
      navigate(`/${href}`)
      return
    }
    scrollTo(href)
    window.history.replaceState(null, '', href)
    setActive(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ease-premium ${
        scrolled || open
          ? 'border-b border-border bg-paper/80 backdrop-blur-xl backdrop-saturate-150 dark:border-border-d dark:bg-paper-d/75'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] max-w-content items-center justify-between gap-4 px-6 md:px-8"
      >
        <Link
          to="/"
          onClick={() => setActive('')}
          className="group flex shrink-0 items-center gap-2 rounded-full py-2 pr-3 font-mono text-[13px] leading-none"
          aria-label={`${profile.name} — home`}
        >
          <span className="accent-text">~/</span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:accent-text dark:text-ink-d">
            fahim
          </span>
          <span className="hidden text-ink-faint sm:inline dark:text-ink-faint-d">· portfolio</span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = onHome && active === link.href
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNav(link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2.5 text-[13.5px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-ink dark:text-ink-d'
                      : 'text-ink-soft hover:text-ink dark:text-ink-soft-d dark:hover:text-ink-d'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-add-soft dark:bg-add-soft-d"
                      transition={{ duration: 0.35, ease: EASE }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />

          <a
            href={profile.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center rounded-lg border border-border-strong bg-surface px-4 font-mono text-[12px] text-ink transition-colors duration-200 hover:border-add/50 hover:accent-text sm:inline-flex dark:border-border-strong-d dark:bg-surface-d dark:text-ink-d"
          >
            résumé.pdf
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors duration-200 hover:border-add/50 hover:accent-text md:hidden dark:border-border-d dark:bg-surface-d dark:text-ink-d"
          >
            {open ? <HiX className="text-lg" /> : <HiMenu className="text-lg" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden border-b border-border bg-paper/95 backdrop-blur-xl md:hidden dark:border-border-d dark:bg-paper-d/95"
          >
            <ul className="flex flex-col px-6 pb-6 pt-2">
              {NAV_LINKS.map((link, i) => {
                const isActive = onHome && active === link.href
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: EASE, delay: 0.04 * i }}
                    className="border-b border-border/70 last:border-0 dark:border-border-d/70"
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(link.href)}
                      className={`flex w-full items-center justify-between py-4 text-left text-[15px] font-medium transition-colors ${
                        isActive ? 'accent-text' : 'text-ink dark:text-ink-d'
                      }`}
                    >
                      {link.label}
                      <span className="font-mono text-[11px] text-ink-faint dark:text-ink-faint-d">
                        0{i + 1}
                      </span>
                    </button>
                  </motion.li>
                )
              })}

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE, delay: 0.24 }}
                className="pt-5"
              >
                <a
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-ink font-medium text-surface transition-colors duration-250 hover:bg-add-deep dark:bg-ink-d dark:text-paper-d dark:hover:bg-add"
                >
                  Download résumé
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}