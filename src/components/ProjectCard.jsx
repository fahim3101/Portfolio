import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-add/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-terminal">
        <img
          src={project.cover}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 font-mono text-xs bg-terminal/80 text-add px-2 py-1 rounded backdrop-blur-sm">
          {project.hash}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-xl mb-1.5">{project.name}</h3>
        <p className="text-ink-soft text-sm leading-relaxed mb-4 line-clamp-2">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="font-mono text-xs text-ink-faint bg-paper px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-medium text-add hover:gap-2.5 transition-all text-sm"
        >
          View Details <FiArrowUpRight />
        </Link>
      </div>
    </motion.div>
  )
}
