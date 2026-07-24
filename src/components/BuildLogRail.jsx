import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

/**
 * Wraps the main content sections (About → Contact) and draws a
 * scroll-linked vertical line behind them, echoing a git commit graph.
 * Individual section nodes (see SectionTag.jsx) sit on top of this line.
 */
export default function BuildLogRail({ children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  })

  return (
    <div ref={containerRef} className="relative">
      <div
        className="hidden md:block absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border dark:bg-border-d"
        aria-hidden="true"
      />
      <motion.div
        className="hidden md:block absolute left-6 lg:left-10 top-0 w-px bg-add origin-top"
        style={{ scaleY: scrollYProgress, height: '100%' }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
