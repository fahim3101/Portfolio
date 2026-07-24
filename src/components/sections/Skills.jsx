import { motion } from 'framer-motion'
import SectionTag from '../SectionTag'
import profile from '../../data/profile'

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 md:py-28 pl-5 pr-5 md:pl-24 md:pr-8 lg:pl-32 lg:pr-16 bg-paper-alt"
    >
      <div className="max-w-5xl">
        <SectionTag hash="c000" label="Skills" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-3"
        >
          Everything currently in the stack.
        </motion.h2>
        <p className="text-ink-soft mb-10 max-w-xl">
          Shown the way I'd track it myself — each skill added like a line in a diff.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">{group.category}</h3>
                <span className="font-mono text-xs text-ink-faint">{group.hash}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="tag-add">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
