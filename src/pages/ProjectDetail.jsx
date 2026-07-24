import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub, FiAlertTriangle, FiTrendingUp } from 'react-icons/fi'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setActiveImage(0)
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="pt-24 pb-20 px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-ink-soft hover:text-add transition-colors mb-8 font-medium text-sm"
        >
          <FiArrowLeft /> Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hash-label">
            <span className="text-ink-faint">commit</span> {project.hash}
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl mt-2 mb-3">{project.name}</h1>
          <p className="text-ink-soft text-lg max-w-2xl">{project.tagline}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-md font-medium hover:bg-add transition-colors"
            >
              <FiExternalLink /> Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md font-medium hover:border-add hover:text-add transition-colors"
            >
              <FiGithub /> GitHub (Client)
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <div className="rounded-xl overflow-hidden border border-border bg-terminal">
            <img
              src={project.gallery[activeImage]}
              alt={`${project.name} screenshot ${activeImage + 1}`}
              className="w-full object-cover object-top"
            />
          </div>
          {project.gallery.length > 1 && (
            <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
              {project.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-add' : 'border-border opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5 }}
          >
            <p className="hash-label mb-3">// tech stack</p>
            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="font-mono text-sm text-ink mb-3">{project.mainStack}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag-add">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="hash-label mb-3">// description</p>
            <p className="text-ink-soft leading-relaxed">{project.description}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5 }}
            className="bg-remove-soft border border-remove/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3 text-remove font-display font-semibold">
              <FiAlertTriangle /> Challenges Faced
            </div>
            <p className="text-ink-soft leading-relaxed text-sm">{project.challenges}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-add-soft border border-add/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3 text-add font-display font-semibold">
              <FiTrendingUp /> Future Improvements
            </div>
            <p className="text-ink-soft leading-relaxed text-sm">{project.improvements}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
