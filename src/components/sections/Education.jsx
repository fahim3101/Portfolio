import { motion } from 'framer-motion'
import SectionTag, { SectionRule } from '../SectionTag'
import { stagger, viewport, useReveal } from '../../lib/motion'
import profile from '../../data/profile'

export default function Education() {
  const reveal = useReveal()
  return (
    <section id="education" className="relative scroll-mt-24 py-20 md:py-28 md:pl-14 lg:pl-16">
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport}>
        <motion.div variants={reveal}>
          <SectionTag hash="d100" label="Education" />
        </motion.div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div variants={reveal}>
            <SectionRule />
            <h2 className="max-w-[18ch] text-section font-semibold text-ink dark:text-ink-d">
              Where the foundations came from.
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            className="max-w-md text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-soft-d"
          >
            Computer science fundamentals first — data structures, OOP and databases — then the
            framework work on top of it.
          </motion.p>
        </div>

        <div className="mt-12 max-w-3xl">
          <ol className="space-y-5">
            {profile.education.map((entry) => {
              const current = /present/i.test(entry.period)

              return (
                <motion.li
                  key={entry.hash}
                  variants={reveal}
                  className="group relative grid gap-3 md:grid-cols-[6rem_1fr] md:gap-8"
                >
                  <div className="flex items-center gap-3 md:pt-6">
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                      {entry.period}
                    </span>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-add/25 bg-add-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] accent-text dark:border-add/20 dark:bg-add-soft-d">
                        <span className="h-1 w-1 rounded-full bg-add" />
                        now
                      </span>
                    )}
                  </div>

                  <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:border-border-strong hover:shadow-lift dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:border-border-strong-d dark:hover:shadow-lift-d">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-add transition-transform duration-500 ease-premium group-hover:scale-y-100"
                    />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-[26ch] font-display text-[1.125rem] font-semibold leading-snug tracking-tight text-ink dark:text-ink-d">
                        {entry.institution}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                        {entry.hash}
                      </span>
                    </div>

                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
                      {entry.degree}
                    </p>

                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-paper px-3 py-1.5 font-mono text-[11.5px] text-ink-soft dark:border-border-d dark:bg-paper-alt-d dark:text-ink-soft-d">
                      {entry.meta}
                    </p>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </motion.div>
    </section>
  )
}