import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiClock } from 'react-icons/fi'
import { GiCricketBat, GiShuttlecock } from 'react-icons/gi'
import SectionTag, { SectionRule } from '../SectionTag'
import { stagger, viewport, useReveal } from '../../lib/motion'
import profile from '../../data/profile'

const DETAILS = [
  {
    icon: FiMapPin,
    label: 'Based in',
    value: profile.location,
  },
  {
    icon: FiBookOpen,
    label: 'Studying',
    value: 'BSc CSE · BUP · Class of 2027',
  },
  {
    icon: FiClock,
    label: 'Focus',
    value: 'Full-stack · Product UI · APIs',
  },
]

const INTERESTS = [
  { icon: GiCricketBat, label: 'Cricket' },
  { icon: GiShuttlecock, label: 'Badminton' },
]

export default function About() {
  const reveal = useReveal()
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28 md:pl-14 lg:pl-16">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16"
      >
        {/* ── Narrative ── */}
        <div>
          <motion.div variants={reveal}>
            <SectionTag hash="b201" label="About" />
          </motion.div>

          <motion.div variants={reveal}>
            <SectionRule />
            <h2 className="max-w-[18ch] text-section font-semibold text-ink dark:text-ink-d">
              Engineer’s eye, end-to-end range.
            </h2>
          </motion.div>

          <motion.div variants={reveal} className="mt-8 max-w-measure space-y-6">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-prose text-ink-soft dark:text-ink-soft-d first:text-[1.125rem] first:text-ink dark:first:text-ink-d"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] accent-text">
              Get in touch
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block py-1 text-[15px] font-medium text-ink underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors duration-250 hover:accent-text hover:decoration-add dark:text-ink-d dark:decoration-border-strong-d"
            >
              {profile.email}
            </a>
          </motion.div>
        </div>

        {/* ── Details card ── */}
        <motion.aside
          variants={reveal}
          className="surface-card self-start p-2 transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1 hover:border-border-strong hover:shadow-lift dark:hover:border-border-strong-d dark:hover:shadow-lift-d lg:sticky lg:top-28"
        >
          <div className="px-4 pb-4 pt-5">
            <p className="hash-label">Profile</p>
          </div>

          <ul className="space-y-1">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <li key={label}>
                <div className="group flex items-start gap-4 rounded-xl px-4 py-3.5 transition-colors duration-250 ease-premium hover:bg-paper-alt dark:hover:bg-surface-alt-d">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-ink-faint transition-colors duration-250 group-hover:border-add/40 group-hover:accent-text dark:border-border-d">
                    <Icon className="text-[15px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                      {label}
                    </span>
                    <span className="mt-1 block text-[14.5px] leading-snug text-ink dark:text-ink-d">
                      {value}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mx-4 my-4 h-px bg-border dark:bg-border-d" />

          <div className="px-4 pb-5">
            <p className="hash-label mb-3">Off the clock</p>
            <ul className="flex flex-wrap gap-2">
              {INTERESTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-3 py-1.5 font-mono text-[11px] text-ink-soft transition-colors duration-250 hover:border-add/40 hover:accent-text dark:border-border-d dark:bg-paper-alt-d dark:text-ink-soft-d"
                >
                  <Icon className="text-[13px]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  )
}