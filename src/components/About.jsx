import React from 'react'
import { Globe, BookOpen, Banknote, Sparkles, Cpu, Award, Users } from 'lucide-react'
import { about, profile } from '../data/siteContent'

/**
 * Icons available to the `stats` entries in siteContent.js.
 * To use a new icon, import it above and add it to this map.
 */
const statIcons = { Globe, BookOpen, Banknote, Sparkles, Cpu, Award, Users }
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import StatCounter from './ui/StatCounter'

/**
 * Renders **bold** markers from the content file as accent-coloured text,
 * so bio copy can be edited in siteContent.js without touching JSX.
 */
const renderHighlights = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={i} className="font-semibold text-accent">
        {part.slice(2, -2)}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )

const About = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section id="about" className="section-spacing">
      <div className="section-shell">
        <SectionHeading eyebrow="Who I Am" title={about.heading} />

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Bio */}
          <div className="space-y-5">
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-manrope text-base leading-relaxed text-secondary sm:text-lg">
                  {renderHighlights(text)}
                </p>
              </Reveal>
            ))}

            {/* Stats */}
            <RevealGroup className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3" delay={0.1}>
              {about.stats.map((stat) => {
                const Icon = statIcons[stat.icon] || Sparkles
                return (
                  <RevealItem key={stat.label}>
                    <div className="surface-card group h-full p-5 text-center">
                      <Icon
                        className="mx-auto mb-3 h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.8}
                      />
                      <div className="font-montserrat text-2xl font-black text-primary sm:text-3xl">
                        <StatCounter
                          value={stat.value}
                          prefix={stat.prefix || ''}
                          suffix={stat.suffix || ''}
                        />
                      </div>
                      <div className="mt-2 font-manrope text-[11px] uppercase leading-snug tracking-wider text-muted">
                        {stat.label}
                      </div>
                    </div>
                  </RevealItem>
                )
              })}
            </RevealGroup>
          </div>

          {/* Portrait */}
          <Reveal direction="left" delay={0.15}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Offset accent frame */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl border border-accent/20 lg:-inset-4"
              />
              <div className="surface-card overflow-hidden rounded-2xl p-0">
                <img
                  src={`${baseUrl}${profile.photo}`}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* Caption strip */}
              <div className="glass absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-xl px-4 py-2.5 text-center">
                <p className="font-manrope text-[11px] uppercase tracking-[0.16em] text-secondary">
                  Ann Arbor, Michigan
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
