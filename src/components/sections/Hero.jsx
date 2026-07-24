import { motion } from 'framer-motion'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import profile from '../../data/profile'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative bg-terminal text-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* faint dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-add/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-content mx-auto px-5 md:px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center"
      >
        <div>
          <motion.div variants={item} className="font-mono text-sm text-add mb-5 flex items-center gap-2">
            <span className="text-ink-faint">$</span> whoami
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-4 flex items-center gap-2">
            <span className="tag-add">{profile.designation}</span>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
            I design clean interfaces and wire them up to real backend logic — then ship the whole
            thing to a live URL. Based in {profile.location}.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeLink}
              target={profile.resumeLink === '#' ? undefined : '_blank'}
              rel="noreferrer"
              download={profile.resumeLink !== '#' ? 'Fahim_Rana_Resume.pdf' : undefined}
              onClick={(e) => profile.resumeLink === '#' && e.preventDefault()}
              className="inline-flex items-center gap-2 bg-add text-terminal font-semibold px-5 py-3 rounded-md hover:bg-add/90 transition-colors"
            >
              <FiDownload /> Download Resume
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-md hover:border-add hover:text-add transition-colors font-medium"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/50 hover:text-add transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/50 hover:text-add transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-add transition-colors text-xl"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-add/40 rounded-2xl" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-terminal border border-terminal-line rounded-lg px-3 py-2 font-mono text-xs text-add shadow-lg">
              status: available
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative flex justify-center mt-16"
      >
        <FiArrowDown className="text-white/30 animate-bounce text-xl" />
      </motion.div>
    </section>
  )
}
