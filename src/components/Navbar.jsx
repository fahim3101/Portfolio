import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
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
  const location = useLocation()
  const navigate = useNavigate()

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-terminal/95 backdrop-blur-sm border-b border-terminal-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm md:text-base text-add flex items-center gap-1.5">
          <span className="text-ink-faint">~/</span>
          <span className="text-white font-semibold">fahim</span>
          <span className="animate-pulse text-add">_</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-white/70 hover:text-add transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
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

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-terminal border-t border-terminal-line overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/80 hover:text-add py-2.5 font-medium"
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
