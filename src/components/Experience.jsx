import React from 'react'
import { Building2, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const Experience = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Where I've Worked"
          title={sections.experience.heading}
          subtitle={sections.experience.subheading}
        />

        {/* Timeline. The rail sits at a fixed left offset on all screens, which
            keeps dots, line and cards aligned (the old layout drifted apart). */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
          />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Reveal key={`${exp.role}-${index}`} delay={Math.min(index * 0.05, 0.25)}>
                <div className="relative pl-9 sm:pl-12">
                  {/* Dot */}
                  <span className="absolute left-0 top-6 flex h-3.5 w-3.5 items-center justify-center">
                    {exp.current && (
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent/60" />
                    )}
                    <span
                      className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background ${
                        exp.current ? 'bg-accent' : 'bg-[#39414f]'
                      }`}
                    />
                  </span>

                  <article className="surface-card p-5 sm:p-6">
                    {/* Date + current badge */}
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold uppercase tracking-wider text-accent">
                        <Calendar size={13} />
                        {exp.date}
                      </span>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/25">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-montserrat text-lg font-bold leading-snug text-primary sm:text-xl">
                      {exp.role}
                    </h3>

                    {/* Company + location */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-manrope text-sm text-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 size={14} className="text-muted" />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} className="text-muted" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <p className="mt-3.5 font-manrope text-sm leading-relaxed text-secondary">
                      {exp.description}
                    </p>

                    {exp.technologies?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
