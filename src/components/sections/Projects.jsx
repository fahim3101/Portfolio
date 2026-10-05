import { motion } from 'framer-motion'
import SectionTag, { SectionRule } from '../SectionTag'
import ProjectCard from '../ProjectCard'
import { stagger, viewport, useReveal } from '../../lib/motion'
import projects from '../../data/projects'

export default function Projects() {
  const reveal = useReveal()
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-y border-border bg-paper-alt py-20 md:py-28 md:pl-14 lg:pl-16 dark:border-border-d dark:bg-paper-alt-d"
    >
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport}>
        <motion.div variants={reveal}>
          <SectionTag hash="e400" label="Projects" />
        </motion.div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div variants={reveal}>
            <SectionRule />
            <h2 className="max-w-[16ch] text-section font-semibold text-ink dark:text-ink-d">
              Five builds, all shipped.
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-soft-d">
              Each one went from an empty folder to a deployed, working product — auth, payments,
              roles and the unglamorous edge cases in between.
            </p>
          </motion.div>

          <motion.p variants={reveal} className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-d">
            {String(projects.length).padStart(2, '0')} repositories · main
          </motion.p>
        </div>

        <motion.div
          variants={stagger(0.1)}
          className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}