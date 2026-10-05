import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiArrowUp } from 'react-icons/fi'
import { EASE } from '../lib/motion'
import profile from '../data/profile'

const SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const ELSEWHERE = [
  { label: 'GitHub', href: profile.socials.github },
  { label: 'LinkedIn', href: profile.socials.linkedin },
  { label: 'Facebook', href: profile.socials.facebook },
]

export default function Footer() {
  const reduceMotion = useReducedMotion()
  const location = useLocation()
  const navigate = useNavigate()
  const year = new Date().getFullYear()
  const onHome = location.pathname === '/'

  const goToSection = (href) => {
    if (!onHome) {
      navigate(`/${href}`)
      return
    }
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-paper-alt dark:border-border-d dark:bg-paper-alt-d">
      <div className="mx-auto max-w-content px-6 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.75fr_0.75fr] md:gap-8">
          {/* Identity */}
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold tracking-tight text-ink dark:text-ink-d">
              {profile.name}
            </p>
            <p className="mt-2 font-mono text-[12.5px] text-ink-soft dark:text-ink-soft-d">
              {profile.designation} · {profile.location}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
              Available for frontend and full-stack roles.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block py-1 font-mono text-[13px] accent-text underline decoration-border-strong underline-offset-[6px] transition-colors duration-200 hover:decoration-add dark:decoration-border-strong-d"
            >
              {profile.email}
            </a>
          </div>

          {/* Section directory */}
          <nav aria-label="Footer sections">
            <p className="hash-label mb-4">Sections</p>
            <ul className="flex flex-col gap-1.5">
              {SECTIONS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => goToSection(item.href)}
                    className="-my-1 block py-1 text-[15px] text-ink-soft underline-offset-4 transition-colors duration-200 hover:accent-text dark:text-ink-soft-d"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profiles */}
          <nav aria-label="Social profiles">
            <p className="hash-label mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-1.5">
              {ELSEWHERE.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="-my-1 block py-1 text-[15px] text-ink-soft underline-offset-4 transition-colors duration-200 hover:accent-text dark:text-ink-soft-d"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-border-d">
          <p className="font-mono text-[11.5px] text-ink-faint dark:text-ink-faint-d">
            © {year} {profile.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex items-center gap-1.5 py-1 font-mono text-[11.5px] text-ink-soft transition-colors duration-200 hover:accent-text dark:text-ink-soft-d"
          >
            Back to top
            <motion.span
              className="inline-flex"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <FiArrowUp className="text-[12px]" />
            </motion.span>
          </button>
        </div>
      </div>
    </footer>
  )
}