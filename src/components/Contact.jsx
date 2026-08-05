import React from 'react'
import { Mail, Linkedin, FileText, ArrowUp } from 'lucide-react'
import { profile, sections, footer } from '../data/siteContent'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const Contact = () => {
  const baseUrl = import.meta.env.BASE_URL

  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      external: true,
    },
    {
      icon: FileText,
      label: 'Résumé',
      value: 'Download CV',
      href: `${baseUrl}${profile.resume}`,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section-spacing pb-0">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title={sections.contact.heading}
          subtitle={sections.contact.subheading}
          align="center"
        />

        {/* Contact channels */}
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            return (
              <Reveal key={channel.label} delay={i * 0.08}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="surface-card group flex h-full flex-col items-center gap-2.5 p-6 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="font-manrope text-[11px] uppercase tracking-[0.18em] text-muted">
                    {channel.label}
                  </span>
                  <span className="break-all font-manrope text-sm font-medium text-primary transition-colors group-hover:text-accent">
                    {channel.value}
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        {/* Primary CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <a href={`mailto:${profile.email}`} className="btn-primary px-8 py-3.5 text-base">
              Say Hello
              <Mail size={17} />
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-20 border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-manrope text-sm text-secondary">
                © {new Date().getFullYear()} {footer.owner}
              </p>
              <p className="mt-1 font-manrope text-xs text-muted">{footer.builtWith}</p>
            </div>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
