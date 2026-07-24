import { motion } from 'framer-motion'
import { GiCricketBat, GiShuttlecock } from 'react-icons/gi'
import SectionTag from '../SectionTag'
import profile from '../../data/profile'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 md:py-28 pl-5 pr-5 md:pl-24 md:pr-8 lg:pl-32 lg:pr-16"
    >
      <div className="max-w-5xl">
        <SectionTag hash="b201" label="About Me" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-8"
        >
          A bit about who's behind the code.
        </motion.h2>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <div className="space-y-5">
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-ink-soft leading-relaxed text-base md:text-lg"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <p className="hash-label mb-4">// when not coding</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-paper rounded-lg px-4 py-3">
                <GiCricketBat className="text-add text-xl shrink-0" />
                <span className="font-medium text-ink">Cricket</span>
              </div>
              <div className="flex items-center gap-3 bg-paper rounded-lg px-4 py-3">
                <GiShuttlecock className="text-amber text-xl shrink-0" />
                <span className="font-medium text-ink">Badminton</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
