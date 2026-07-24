import { motion } from 'framer-motion'
import { FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import SectionTag from '../SectionTag'
import profile from '../../data/profile'

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fahim-rana',
    href: profile.socials.linkedin,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/fahim3101',
    href: profile.socials.github,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 md:py-28 pl-5 pr-5 md:pl-24 md:pr-8 lg:pl-32 lg:pr-16"
    >
      <div className="max-w-5xl">
        <SectionTag hash="f900" label="Contact" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl mb-3"
        >
          Let's build something together.
        </motion.h2>
        <p className="text-ink-soft mb-10 max-w-xl">
          Open to frontend and full-stack opportunities — reach out through whichever works best.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-surface border border-border rounded-xl p-5 hover:border-add/50 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-add-soft text-add flex items-center justify-center mb-4">
                <method.icon className="text-lg" />
              </div>
              <p className="hash-label mb-1">{method.label}</p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-ink break-all">{method.value}</span>
                <FiArrowUpRight className="text-ink-faint group-hover:text-add shrink-0 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-5"
        >
          <span className="hash-label">// find me elsewhere</span>
          <div className="flex items-center gap-4">
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-ink-soft hover:text-add transition-colors text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-ink-soft hover:text-add transition-colors text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
