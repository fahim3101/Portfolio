import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Wraps the main content sections and draws a scroll-linked vertical line
 * behind them — a quiet nod to a git commit graph. Each section's commit
 * node (see SectionTag) sits on top of this line.
 */
export default function BuildLogRail({ children }) {
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 62%', 'end 45%'],
  })

  // A touch of damping keeps the line from feeling mechanically tied to scroll.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <div className="relative">
      <div ref={containerRef} className="relative mx-auto max-w-content px-6 md:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-6 hidden w-px bg-border md:block md:left-8 dark:bg-border-d"
        />

        <motion.div
          aria-hidden="true"
          style={reduceMotion ? { scaleY: 1 } : { scaleY: progress }}
          className="absolute inset-y-0 left-6 hidden w-px origin-top bg-gradient-to-b from-add via-add to-add/40 md:block md:left-8"
        />

        {children}
      </div>
    </div>
  )
}