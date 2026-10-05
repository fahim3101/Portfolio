import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiTool, FiBookOpen } from 'react-icons/fi'
import SectionTag, { SectionRule } from '../SectionTag'
import { stagger, viewport, useReveal } from '../../lib/motion'
import profile from '../../data/profile'

const ICONS = {
  frontend: FiCode,
  backend: FiServer,
  database: FiDatabase,
  tools: FiTool,
  others: FiTool,
  academic: FiBookOpen,
}

const iconFor = (category) => ICONS[category.toLowerCase().replace(/[^a-z]/g, '')] || FiCode

export default function Skills() {
  const reveal = useReveal()
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-border bg-paper-alt py-20 md:py-28 md:pl-14 lg:pl-16 dark:border-border-d dark:bg-paper-alt-d"
    >
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport}>
        <motion.div variants={reveal}>
          <SectionTag hash="c000" label="Stack" />
        </motion.div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div variants={reveal}>
            <SectionRule />
            <h2 className="max-w-[16ch] text-section font-semibold text-ink dark:text-ink-d">
              Tools I reach for every day.
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            className="max-w-md text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-soft-d"
          >
            Grouped the way I keep them in my own notes — fundamentals first, frameworks on top,
            and enough tooling to keep it all shippable.
          </motion.p>
        </div>

        <motion.div variants={stagger(0.09)} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => {
            const Icon = iconFor(group.category)

            return (
              <motion.article
                key={group.category}
                variants={reveal}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:border-add/40 hover:shadow-lift dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:shadow-lift-d"
              >
                {/* Accent hairline that wipes in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-add transition-transform duration-500 ease-premium group-hover:scale-x-100"
                />

                <header className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-paper text-ink-soft transition-colors duration-300 group-hover:border-add/40 group-hover:bg-add-soft group-hover:accent-text dark:border-border-d dark:bg-paper-alt-d dark:text-ink-soft-d">
                    <Icon className="text-[17px]" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                    {group.hash} · {String(group.items.length).padStart(2, '0')}
                  </span>
                </header>

                <h3 className="mt-5 font-display text-card font-semibold tracking-tight text-ink dark:text-ink-d">
                  {group.category}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-paper px-2.5 py-1 font-mono text-[11.5px] leading-none text-ink-soft transition-colors duration-250 group-hover:border-border-strong dark:border-border-d dark:bg-paper-alt-d dark:text-ink-soft-d"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}