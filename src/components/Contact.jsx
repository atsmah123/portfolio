import React from 'react'
import { ArrowUp, ArrowUpRight, FileText, Linkedin } from 'lucide-react'
import { profile, sections, footer } from '../data/siteContent'
import Reveal from './ui/Reveal'

const Contact = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section id="contact" className="pt-20 sm:pt-28">
      <div className="section-shell">
        <Reveal>
          <div className="border-t border-border pt-16 sm:pt-20">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-6xl">
              {sections.contact.heading}
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-secondary sm:text-lg">
              {sections.contact.subheading}
            </p>

            {/* The address itself is the main call to action */}
            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex max-w-full items-center gap-3 break-all text-2xl font-semibold tracking-tight text-primary underline decoration-border-strong decoration-1 underline-offset-[10px] transition-colors hover:decoration-accent sm:text-4xl lg:text-5xl"
            >
              {profile.email}
              <ArrowUpRight
                className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-9 sm:w-9"
                strokeWidth={1.75}
              />
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin size={16} strokeWidth={1.75} />
                LinkedIn
              </a>
              <a
                href={`${baseUrl}${profile.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FileText size={16} strokeWidth={1.75} />
                Download CV
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-24 flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-secondary">
              © {new Date().getFullYear()} {footer.owner}
            </p>
            <p className="mt-1 text-xs text-muted">{footer.builtWith}</p>
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp
              size={15}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
