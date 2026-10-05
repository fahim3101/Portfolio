import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE } from '../lib/motion'

/**
 * The commit marker that opens every section: a node on the BuildLogRail line
 * plus a quiet monospace label. Reads as provenance, not decoration.
 *
 * The node starts as an empty accent ring and fills in once the section is read
 * — no theme sniffing needed, because it only ever uses accent colours.
 */
/**
 * The short accent rule that sits above every section heading. Two pixels of
 * accent doing the work of a whole design decision — cheap, and it gives the
 * page its editorial cadence.
 */
export function SectionRule() {
  return (
    <span aria-hidden="true" className="mb-5 block h-[2px] w-10 rounded-full bg-add" />
  )
}

export default function SectionTag({ hash, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })

  return (
    <div ref={ref} className="relative mb-6 flex items-center gap-3">
      {/*
        A zero-width anchor pinned to the BuildLogRail line (which sits on the
        wrapper's padding edge), with the visible dot centred inside it so the
        line always passes through the dot's centre rather than its edge.
      */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-0 w-0 md:-left-14 md:block lg:-left-16"
      >
        <motion.span
          initial={{ backgroundColor: 'rgba(61,163,93,0)', borderColor: 'rgba(61,163,93,0.32)' }}
          animate={
            inView
              ? { backgroundColor: 'rgb(61 163 93)', borderColor: 'rgb(61 163 93)' }
              : { backgroundColor: 'rgba(61,163,93,0)', borderColor: 'rgba(61,163,93,0.32)' }
          }
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute left-0 top-1/2 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        />
      </span>

      <span className="font-mono text-[11px] uppercase leading-none tracking-[0.14em] text-ink-faint dark:text-ink-faint-d">
        {hash}
      </span>
      <span aria-hidden="true" className="h-px w-5 bg-border-strong dark:bg-border-strong-d" />
      <span className="font-mono text-[11px] uppercase leading-none tracking-[0.14em] text-ink-soft dark:text-ink-soft-d">
        {label}
      </span>
    </div>
  )
}