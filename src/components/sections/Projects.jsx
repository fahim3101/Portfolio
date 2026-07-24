import { motion } from 'framer-motion'
import SectionTag from '../SectionTag'
import ProjectCard from '../ProjectCard'
import projects from '../../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 md:py-28 pl-5 pr-5 md:pl-24 md:pr-8 lg:pl-32 lg:pr-16 bg-paper-alt dark:bg-paper-alt-d"
    >
      <div className="max-w-6xl">
        <SectionTag hash="e400" label="Projects" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-3 text-ink dark:text-ink-d"
        >
          Shipped and live.
        </motion.h2>
        <p className="text-ink-soft dark:text-ink-soft-d mb-10 max-w-xl">
          A few builds that made it from an empty folder to a real, deployed link.
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
