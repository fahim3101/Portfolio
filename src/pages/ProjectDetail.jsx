import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiAlertTriangle,
  FiTrendingUp,
} from 'react-icons/fi'
import projects from '../data/projects'
import { SectionRule } from '../components/SectionTag'
import { stagger, viewport, EASE, useReveal } from '../lib/motion'

/** The gallery lands a beat after the header, once the title has settled. */
const galleryReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.15 },
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [activeImage, setActiveImage] = useState(0)
  const reveal = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => setActiveImage(0), [slug])

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.name} — Fahim Rana`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const gallery = project.gallery?.length ? project.gallery : [project.cover]

  return (
    <article className="relative isolate overflow-hidden pb-24 pt-28 md:pb-28 md:pt-36">
      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] md:h-[48rem]"
      >
        <div className="grid-field absolute inset-0" />

        {/* Same drifting accent fields as the home hero, so a case study opens
            under the same green-cast light instead of a flat black slab.
            The box is pinned to the top of the page — the percentage offsets
            below are relative to this region, not the whole article. */}
        <motion.div
          className="absolute -left-[14%] -top-[20%] h-[38rem] w-[38rem] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(61,163,93,0.17) 0%, rgba(61,163,93,0.065) 38%, transparent 68%)',
            filter: 'blur(28px)',
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], x: [0, 34, 0], y: [0, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-[10%] -top-[8%] h-[28rem] w-[28rem] rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(61,163,93,0.13) 0%, rgba(61,163,93,0.045) 40%, transparent 70%)',
            filter: 'blur(32px)',
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.1, 1], x: [0, -26, 0], y: [0, -16, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="noise-field absolute inset-0 opacity-[0.025] mix-blend-multiply dark:opacity-[0.045] dark:mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-content px-6 md:px-8">
        {/* ── Back ── */}
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-2 py-1.5 text-[13.5px] font-medium text-ink-soft transition-colors duration-250 hover:accent-text md:py-2 md:pl-14 lg:pl-16 dark:text-ink-soft-d"
        >
          <FiArrowLeft className="text-[14px] transition-transform duration-250 ease-premium group-hover:-translate-x-1" />
          All projects
        </Link>

        {/* ── Header ── */}
        <motion.header
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-3xl md:pl-14 lg:pl-16"
        >
          <motion.div variants={reveal} className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] accent-text">
              {project.hash}
            </span>
            <span aria-hidden="true" className="h-px w-6 bg-border-strong dark:bg-border-strong-d" />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-d">
              Case study
            </span>
          </motion.div>

          <motion.div variants={reveal}>
            <SectionRule />
          </motion.div>

          <motion.h1
            variants={reveal}
            className="mt-4 text-[clamp(2.25rem,5.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink dark:text-ink-d"
          >
            {project.name}
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft dark:text-ink-soft-d"
          >
            {project.tagline}
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 items-center gap-2.5 rounded-lg bg-ink px-6 text-[14.5px] font-medium text-paper transition-colors duration-250 hover:bg-add-deep dark:bg-ink-d dark:text-paper-d dark:hover:bg-add"
            >
              View live site
              <FiArrowUpRight className="text-[15px] transition-transform duration-250 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 items-center gap-2.5 rounded-lg border border-border-strong bg-surface px-6 text-[14.5px] font-medium text-ink transition-colors duration-250 hover:border-add/50 hover:accent-text dark:border-border-strong-d dark:bg-surface-d dark:text-ink-d"
            >
              <FiGithub className="text-[16px] transition-transform duration-250 ease-premium group-hover:-translate-y-0.5" />
              Source code
            </a>
          </motion.div>

          <motion.dl
            variants={reveal}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 dark:border-border-d"
          >
            {[
              { term: 'Screens', value: String(gallery.length).padStart(2, '0') },
              { term: 'Technologies', value: String(project.techStack.length).padStart(2, '0') },
              { term: 'Status', value: 'Deployed' },
            ].map((item) => (
              <div key={item.term} className="flex items-baseline gap-2">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                  {item.term}
                </dt>
                <dd className="font-mono text-[12px] text-ink dark:text-ink-d">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.header>

        {/* ── Gallery ── */}
        <motion.section
          variants={galleryReveal}
          initial="hidden"
          animate="show"
          aria-label={`${project.name} screenshots`}
          className="mt-14 md:ml-14 md:mt-16 lg:ml-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-card dark:border-border-d dark:bg-surface-alt-d">
            <div className="relative aspect-[16/10] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={gallery[activeImage]}
                  src={gallery[activeImage]}
                  alt={`${project.name} screenshot ${activeImage + 1} of ${gallery.length}`}
                  initial={{ opacity: 0, scale: 1.012 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/20 to-transparent"
              />
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 dark:border-border-d">
                <ul className="no-scrollbar flex items-center gap-2 overflow-x-auto">
                  {gallery.map((image, i) => (
                    <li key={image}>
                      <button
                        type="button"
                        onClick={() => setActiveImage(i)}
                        aria-label={`Show screenshot ${i + 1}`}
                        aria-current={activeImage === i}
                        className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-[border-color,opacity,transform] duration-250 ease-premium hover:opacity-100 ${
                          activeImage === i
                            ? 'border-add opacity-100'
                            : 'border-border opacity-55 hover:-translate-y-0.5 dark:border-border-d'
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover object-top"
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                <span className="hidden shrink-0 font-mono text-[11px] tabular-nums tracking-[0.1em] text-ink-faint sm:block dark:text-ink-faint-d">
                  {String(activeImage + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        </motion.section>

        {/* ── Overview + stack ──
            Carries the same banded background as the home page so the two
            pages read as one system rather than two different themes. */}
        <motion.section
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="-mx-6 mt-20 border-y border-border bg-paper-alt px-6 py-16 md:-mx-8 md:px-8 md:py-20 dark:border-border-d dark:bg-paper-alt-d"
        >
          <div className="grid gap-12 md:pl-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pl-16">
            <div>
              <motion.div variants={reveal}>
                <p className="hash-label">Overview</p>
              </motion.div>
            <motion.p
              variants={reveal}
              className="mt-5 max-w-prose text-prose text-ink-soft dark:text-ink-soft-d"
            >
              {project.description}
            </motion.p>
            </div>

            <div>
              <motion.div variants={reveal}>
                <p className="hash-label">Stack</p>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-5 rounded-2xl border border-border bg-surface p-6 shadow-card dark:border-border-d dark:bg-surface-d dark:shadow-card-d"
              >
                <p className="font-mono text-[12.5px] leading-relaxed text-ink dark:text-ink-d">
                  {project.mainStack}
                </p>
                <div className="my-5 h-px bg-border dark:bg-border-d" />
                <ul className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="tag-accent">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ── Challenges / Improvements ── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 md:ml-14 lg:ml-16 md:grid-cols-2"
        >
          <motion.article
            variants={reveal}
            className="group rounded-2xl border border-border bg-surface p-7 shadow-card transition-[border-color,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:shadow-lift-d"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-remove/25 bg-remove-soft text-remove dark:border-remove/25 dark:bg-remove-soft-d">
                <FiAlertTriangle className="text-[16px]" />
              </span>
              <h2 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink dark:text-ink-d">
                Challenges faced
              </h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
              {project.challenges}
            </p>
          </motion.article>

          <motion.article
            variants={reveal}
            className="group rounded-2xl border border-border bg-surface p-7 shadow-card transition-[border-color,transform] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:shadow-lift-d"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-add/25 bg-add-soft accent-text dark:border-add/25 dark:bg-add-soft-d">
                <FiTrendingUp className="text-[16px]" />
              </span>
              <h2 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink dark:text-ink-d">
                What comes next
              </h2>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
              {project.improvements}
            </p>
          </motion.article>
        </motion.div>

        {/* ── Next project ── */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-20 border-t border-border pt-10 md:ml-14 lg:ml-16 dark:border-border-d"
        >
          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-card transition-[border-color,transform] duration-300 ease-premium hover:-translate-y-1 hover:border-add/40 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:shadow-lift-d"
          >
            <span className="flex items-center gap-5">
              <span className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-paper-alt dark:border-border-d dark:bg-paper-alt-d">
                <img
                  src={next.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-600 ease-premium group-hover:scale-105"
                />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-d">
                  Next project
                </span>
                <span className="mt-1.5 block font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:accent-text dark:text-ink-d">
                  {next.name}
                </span>
              </span>
            </span>

            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full border border-border text-ink-soft transition-all duration-300 ease-premium group-hover:border-add/40 group-hover:bg-add group-hover:text-paper sm:self-auto dark:border-border-d dark:text-ink-soft-d dark:group-hover:text-paper-d">
              <FiArrowRight className="text-[16px] transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </article>
  )
}