import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionTag from '../SectionTag'
import profile from '../../data/profile'

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-20 md:py-28 pl-5 pr-5 md:pl-24 md:pr-8 lg:pl-32 lg:pr-16"
    >
      <div className="max-w-5xl">
        <SectionTag hash="d100" label="Education" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-10"
        >
          Educational background.
        </motion.h2>

        <div className="space-y-5 max-w-2xl">
          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.hash}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 bg-surface border border-border rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-add-soft text-add flex items-center justify-center shrink-0">
                <FiBookOpen />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-semibold text-lg">{edu.institution}</h3>
                  <span className="font-mono text-xs text-ink-faint">{edu.period}</span>
                </div>
                <p className="text-ink-soft mt-1">{edu.degree}</p>
                <span className="inline-block mt-2 font-mono text-xs text-add bg-add-soft px-2 py-1 rounded">
                  {edu.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
