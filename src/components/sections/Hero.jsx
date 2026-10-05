import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowRight, FiArrowDown, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { EASE, heroItem, heroStagger } from '../../lib/motion'
import profile from '../../data/profile'

const SOCIALS = [
  { label: 'GitHub', href: profile.socials.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: FaLinkedin },
  { label: 'Facebook', href: profile.socials.facebook, icon: FaFacebook },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const scrollTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 md:pb-24 md:pt-36">
      {/* ── Backdrop: faint grid, two slow accent fields, film grain ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-paper dark:bg-paper-d" />

        <div className="grid-field absolute inset-0" />

        {/* Accent field — one light, one deep. Barely there. */}
        <motion.div
          className="absolute -left-[12%] -top-[18%] h-[46rem] w-[46rem] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(61,163,93,0.16) 0%, rgba(61,163,93,0.06) 38%, transparent 68%)',
            filter: 'blur(28px)',
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-[24%] -right-[8%] h-[38rem] w-[38rem] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(61,163,93,0.12) 0%, rgba(61,163,93,0.04) 40%, transparent 70%)',
            filter: 'blur(32px)',
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], x: [0, -32, 0], y: [0, -20, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Reads as depth rather than decoration */}
        <div className="noise-field absolute inset-0 opacity-[0.028] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen" />

        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper dark:to-paper-d" />
      </div>

      <motion.div
        variants={heroStagger(0.12)}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-content px-6 md:px-8"
      >
        <div className="md:pl-14 lg:pl-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            {/* ── Copy ── */}
            <div className="max-w-2xl">
              <motion.div variants={heroItem} className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft dark:text-ink-soft-d">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-add opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-add" />
                  </span>
                  Available for work
                </span>
                <span aria-hidden="true" className="hidden h-3 w-px bg-border-strong sm:block dark:bg-border-strong-d" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-d">
                  {profile.location}
                </span>
              </motion.div>

              <motion.h1 variants={heroItem} className="text-hero font-semibold text-ink dark:text-ink-d">
                {profile.name}
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft dark:text-ink-soft-d md:text-[1.1875rem]"
              >
                I design interfaces that feel considered, wire them to real backend logic, and ship
                the whole thing to a live URL —{' '}
                <span className="text-ink dark:text-ink-d">from empty repo to production.</span>
              </motion.p>

              <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollTo('#projects')}
                  className="group inline-flex h-12 items-center gap-2.5 rounded-lg bg-ink px-6 text-[14.5px] font-medium text-paper transition-colors duration-250 hover:bg-add-deep dark:bg-ink-d dark:text-paper-d dark:hover:bg-add"
                >
                  View selected work
                  <FiArrowRight className="text-[15px] transition-transform duration-250 ease-premium group-hover:translate-x-1" />
                </button>

                <a
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-lg border border-border-strong bg-surface px-6 text-[14.5px] font-medium text-ink transition-colors duration-250 hover:border-add/50 hover:accent-text dark:border-border-strong-d dark:bg-surface-d dark:text-ink-d"
                >
                  <FiDownload className="text-[15px] transition-transform duration-250 ease-premium group-hover:translate-y-0.5" />
                  Résumé
                </a>
              </motion.div>

              <motion.div variants={heroItem} className="mt-10 flex items-center gap-3">
                <span className="hash-label hidden sm:inline">Elsewhere</span>
                <span aria-hidden="true" className="hidden h-3 w-px bg-border-strong sm:block dark:bg-border-strong-d" />
                <ul className="flex items-center gap-1.5">
                  {SOCIALS.map(({ label, href, icon: Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${profile.name} on ${label}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-ink-soft transition-all duration-250 ease-premium hover:-translate-y-0.5 hover:border-border hover:bg-surface hover:accent-text hover:shadow-card dark:text-ink-soft-d dark:hover:border-border-d dark:hover:bg-surface-d"
                      >
                        <Icon className="text-[17px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ── Portrait ── */}
            <motion.div
              variants={heroItem}
              className="relative mx-auto w-full max-w-[19rem] lg:max-w-[22rem] lg:justify-self-end"
            >
              <motion.div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-frame dark:border-border-d dark:bg-surface-d"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width="800"
                  height="1000"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
                />
                <div aria-hidden="true" className="noise-field absolute inset-0 opacity-[0.04]" />
              </motion.div>

              {/* Offset accent frame — a single, deliberate flourish */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[1.75rem] border border-add/35"
              />

              {/* Status chip */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 shadow-lift dark:border-border-d dark:bg-surface-d dark:shadow-lift-d">
                <span className="h-1.5 w-1.5 rounded-full bg-add" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft dark:text-ink-soft-d">
                  {profile.designation}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
        className="group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint transition-colors duration-250 group-hover:accent-text dark:text-ink-faint-d">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-border-strong dark:bg-border-strong-d">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-add"
            animate={reduceMotion ? undefined : { y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <FiArrowDown className="text-[13px] text-ink-faint transition-transform duration-250 group-hover:translate-y-0.5 group-hover:accent-text dark:text-ink-faint-d" />
      </motion.button>
    </section>
  )
}