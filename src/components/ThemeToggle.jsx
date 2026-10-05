import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { EASE } from '../lib/motion'

const readTheme = () => {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(readTheme)

  // Stay in sync if the class is toggled from anywhere else.
  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(readTheme()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* localStorage can be unavailable in private mode */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative inline-flex h-9 w-[62px] shrink-0 items-center rounded-full border border-border bg-surface p-1 transition-colors duration-300 hover:border-border-strong dark:border-border-d dark:bg-surface-alt-d dark:hover:border-border-strong-d ${className}`}
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1 h-7 w-7 rounded-full bg-ink dark:bg-ink-d"
        animate={{ x: isDark ? 22 : 0 }}
        transition={{ duration: 0.32, ease: EASE }}
      />
      <span className="relative z-10 flex h-7 w-7 items-center justify-center">
        <FiSun
          className={`text-[13px] transition-colors duration-300 ${
            isDark ? 'text-ink-faint' : 'text-paper'
          }`}
        />
      </span>
      <span className="relative z-10 flex h-7 w-7 items-center justify-center">
        <FiMoon
          className={`text-[13px] transition-colors duration-300 ${
            isDark ? 'text-paper-d' : 'text-ink-faint'
          }`}
        />
      </span>
    </button>
  )
}