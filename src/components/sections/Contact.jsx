import { motion } from 'framer-motion'
import { FiMail, FiArrowUpRight, FiArrowRight, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import SectionTag, { SectionRule } from '../SectionTag'
import { stagger, viewport, useReveal } from '../../lib/motion'
import profile from '../../data/profile'

const CHANNELS = [
  {
    icon: FiMail,
    label: 'Email',
    note: 'Fastest route — best for anything with detail',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    note: 'Roles, referrals and professional updates',
    value: 'in/fahim-rana',
    href: profile.socials.linkedin,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    note: 'Source for most of the work on this page',
    value: '@fahim3101',
    href: profile.socials.github,
  },
]

const SOCIALS = [
  { label: 'GitHub', href: profile.socials.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: FaLinkedin },
  { label: 'Facebook', href: profile.socials.facebook, icon: FaFacebook },
  { label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`, icon: FaWhatsapp },
]

export default function Contact() {
  const reveal = useReveal()
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28 md:pl-14 lg:pl-16">
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport}>
        <motion.div variants={reveal}>
          <SectionTag hash="f900" label="Contact" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* ── Invitation ── */}
          <div>
            <motion.div variants={reveal}>
              <SectionRule />
              <h2 className="max-w-[15ch] text-section font-semibold text-ink dark:text-ink-d">
                Let’s build something together.
              </h2>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-measure text-[1.0625rem] leading-relaxed text-ink-soft dark:text-ink-soft-d"
            >
              I’m open to frontend and full-stack roles, freelance builds, and interesting problems
              that need someone who cares about the details. If you have a project in mind, I’d
              like to hear about it.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex h-12 items-center gap-2.5 rounded-lg bg-ink px-6 text-[14.5px] font-medium text-paper transition-colors duration-250 hover:bg-add-deep dark:bg-ink-d dark:text-paper-d dark:hover:bg-add"
              >
                <FiMail className="text-[15px]" />
                Send an email
                <FiArrowRight className="text-[15px] transition-transform duration-250 ease-premium group-hover:translate-x-1" />
              </a>

              <a
                href={profile.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-2.5 rounded-lg border border-border-strong bg-surface px-6 text-[14.5px] font-medium text-ink transition-colors duration-250 hover:border-add/50 hover:accent-text dark:border-border-strong-d dark:bg-surface-d dark:text-ink-d"
              >
                <FiDownload className="text-[15px] transition-transform duration-250 ease-premium group-hover:translate-y-0.5" />
                Résumé
              </a>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${profile.name} on ${label}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-soft transition-all duration-250 ease-premium hover:-translate-y-0.5 hover:border-add/40 hover:accent-text hover:shadow-card dark:border-border-d dark:text-ink-soft-d dark:hover:shadow-card-d"
                >
                  <Icon className="text-[16px]" />
                </a>
              ))}
              <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                Replies within a day
              </span>
            </motion.div>
          </div>

          {/* ── Channels ── */}
          <motion.ul variants={reveal} className="rounded-2xl border border-border bg-surface p-2 shadow-card dark:border-border-d dark:bg-surface-d dark:shadow-card-d">
            {CHANNELS.map(({ icon: Icon, label, note, value, href }) => {
              const isMail = href.startsWith('mailto:')

              return (
                <li key={label}>
                  <a
                    href={href}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noreferrer'}
                    className="group flex items-center gap-4 rounded-xl px-4 py-5 transition-colors duration-250 ease-premium hover:bg-paper-alt sm:gap-5 dark:hover:bg-surface-alt-d"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-ink-faint transition-colors duration-250 group-hover:border-add/40 group-hover:bg-add-soft group-hover:accent-text dark:border-border-d">
                      <Icon className="text-[17px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-ink-faint-d">
                        {label}
                      </span>
                      <span className="mt-1 block truncate text-[15px] font-medium text-ink dark:text-ink-d">
                        {value}
                      </span>
                      <span className="mt-1 block text-[13px] leading-snug text-ink-faint dark:text-ink-faint-d">
                        {note}
                      </span>
                    </span>

                    <FiArrowUpRight className="shrink-0 text-[16px] text-ink-faint transition-all duration-250 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:accent-text" />
                  </a>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  )
}