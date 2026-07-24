import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ className = '', terminalStyle = true, scrolled = false, onChange }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    // Keep state in sync if the class is changed elsewhere
    const current = document.documentElement.classList.contains('dark')
    setIsDark(current)
    onChange?.(current)
  }, [onChange])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    onChange?.(next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {
      // localStorage might be unavailable in private mode
    }
  }

  // Light mode always uses the white-on-dark styling (matches the original).
  // Dark mode adapts to whether the navbar is on a dark scrolled bar or
  // over the page's dark bg.
  const stateClasses = terminalStyle
    ? 'border-white/15 text-white/70 hover:text-add hover:border-add/40'
    : scrolled
      ? 'border-white/15 text-white/70 hover:text-add hover:border-add/40'
      : 'border-border-d text-ink-soft-d hover:text-add hover:border-add/40'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-md border transition-colors ${stateClasses} ${className}`}
    >
      {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
    </button>
  )
}
