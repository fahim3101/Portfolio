import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Renders the "commit node" for a section: a dot that lights up on the
 * BuildLogRail line when scrolled into view, plus a monospace hash label.
 */
export default function SectionTag({ hash, label }) {
  // Read theme synchronously on mount — the inline script in index.html
  // has already applied the .dark class to <html> by the time we render.
  const [isDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  const idleBg = isDark ? '#1A1F26' : '#EDEFEA'
  const idleBorder = isDark ? '#2A2F37' : '#D5D9CF'

  return (
    <div className="relative flex items-center mb-4">
      {/* Positioned to land exactly on the BuildLogRail line: section padding
          (pl-24 / pl-32) minus the rail's own offset (left-6 / left-10). */}
      <motion.span
        initial={{ backgroundColor: idleBg, borderColor: idleBorder }}
        whileInView={{ backgroundColor: 'rgba(61,163,93,1)', borderColor: '#3DA35D' }}
        viewport={{ once: true, margin: '-35% 0px -35% 0px' }}
        transition={{ duration: 0.4 }}
        className="hidden md:block absolute top-1/2 -translate-y-1/2 md:-left-[72px] lg:-left-[88px] w-3 h-3 rounded-full border-2 shrink-0 z-10"
      />
      <span className="hash-label">
        <span className="text-ink-faint">commit</span> {hash} <span className="text-ink-faint">·</span>{' '}
        {label}
      </span>
    </div>
  )
}
