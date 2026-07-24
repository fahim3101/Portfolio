import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'
import profile from '../data/profile'

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
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Light mode preserves the original transparent-top + terminal-scrolled look.
  // Dark mode uses an adaptive navbar on non-home pages so the page's dark
  // background shows through instead of a dark bar on dark bar.
  const useTerminalStyle = !isDark

  const headerClass = useTerminalStyle
    ? scrolled
      ? 'bg-terminal/95 backdrop-blur-sm border-b border-terminal-line'
      : 'bg-transparent'
    : scrolled
      ? 'bg-terminal/95 backdrop-blur-sm border-b border-terminal-line'
      : 'bg-paper-d/80 backdrop-blur-sm border-b border-border-d'

  const linkClass = useTerminalStyle
    ? 'text-white/70 hover:text-add'
    : scrolled
      ? 'text-white/70 hover:text-add'
      : 'text-ink-soft-d hover:text-add'

  const brandClass = useTerminalStyle
    ? 'text-white'
    : scrolled
      ? 'text-white'
      : 'text-ink-d'

  const brandTildeClass = useTerminalStyle
    ? 'text-ink-faint'
    : scrolled
      ? 'text-white/60'
      : 'text-ink-faint-d'

  const mobileBtnClass = useTerminalStyle
    ? 'text-white'
    : scrolled
      ? 'text-white'
      : 'text-ink-d'

  const mobileMenuClass = useTerminalStyle
    ? 'bg-terminal border-t border-terminal-line'
    : 'bg-paper-d border-t border-border-d'

  const mobileLinkClass = useTerminalStyle
    ? 'text-white/80 hover:text-add'
    : 'text-ink-d hover:text-add'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${headerClass}`}
    >
      <nav className="max-w-content mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm md:text-base text-add flex items-center gap-1.5">
          <span className={brandTildeClass}>~/</span>
          <span className={`font-semibold ${brandClass}`}>fahim</span>
          <span className="animate-pulse text-add">_</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm transition-colors font-medium ${linkClass}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle terminalStyle={useTerminalStyle} scrolled={scrolled} onChange={setIsDark} />
          <a
            href={profile.resumeLink}
            target={profile.resumeLink === '#' ? undefined : '_blank'}
            rel="noreferrer"
            download={profile.resumeLink !== '#' ? 'Fahim_Rana_Resume.pdf' : undefined}
            onClick={(e) => profile.resumeLink === '#' && e.preventDefault()}
            className="font-mono text-sm px-4 py-2 rounded-md border border-add/40 text-add hover:bg-add hover:text-terminal transition-colors"
          >
            resume.pdf
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <ThemeToggle terminalStyle={useTerminalStyle} scrolled={scrolled} onChange={setIsDark} />
          </div>
          <button
            className={`md:hidden text-2xl ${mobileBtnClass}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden ${mobileMenuClass}`}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left py-2.5 font-medium ${mobileLinkClass}`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resumeLink}
                target={profile.resumeLink === '#' ? undefined : '_blank'}
                rel="noreferrer"
                download={profile.resumeLink !== '#' ? 'Fahim_Rana_Resume.pdf' : undefined}
                onClick={(e) => profile.resumeLink === '#' && e.preventDefault()}
                className="font-mono text-sm mt-2 px-4 py-2.5 rounded-md border border-add/40 text-add text-center"
              >
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
