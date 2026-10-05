import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { useReveal } from '../lib/motion'

const VISIBLE_TAGS = 4

export default function ProjectCard({ project }) {
  const tags = project.techStack.slice(0, VISIBLE_TAGS)
  const overflow = project.techStack.length - tags.length

  const reveal = useReveal()
  return (
    <motion.article variants={reveal} className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-[border-color,box-shadow,transform] duration-300 ease-premium hover:-translate-y-1.5 hover:border-add/40 hover:shadow-lift focus-visible:-translate-y-1.5 dark:border-border-d dark:bg-surface-d dark:shadow-card-d dark:hover:shadow-lift-d"
        aria-label={`View case study: ${project.name}`}
      >
        {/* ── Cover ── */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-alt dark:bg-paper-alt-d">
          <img
            src={project.cover}
            alt={`${project.name} interface screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-600 ease-premium group-hover:scale-[1.045]"
          />

          {/* Scrim only appears on hover, so the cover reads clean at rest */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/30 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-paper/85 px-2.5 py-1 font-mono text-[10.5px] uppercase leading-none tracking-[0.1em] text-ink-soft backdrop-blur-sm transition-colors duration-300 group-hover:border-add/30 group-hover:accent-text dark:border-border-d/70 dark:bg-paper-d/85 dark:text-ink-soft-d">
            {project.hash}
          </span>

          <span
            aria-hidden="true"
            className="absolute right-4 top-4 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-add text-paper opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:opacity-100 dark:text-paper-d"
          >
            <FiArrowUpRight className="text-[15px]" />
          </span>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:accent-text dark:text-ink-d">
            {project.name}
          </h3>

          <p className="mt-2.5 line-clamp-2 text-[14.5px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
            {project.tagline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
            {overflow > 0 && <li className="tag border-dashed text-ink-faint">+{overflow}</li>}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5 dark:border-border-d">
            <span className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink transition-colors duration-300 group-hover:accent-text dark:text-ink-d">
              View case study
              <FiArrowRight className="text-[15px] transition-transform duration-300 ease-premium group-hover:translate-x-1" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint dark:text-ink-faint-d">
              {project.gallery?.length ?? 1} views
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}