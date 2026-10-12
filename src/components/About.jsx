import React from 'react'
import { about, coreSkills } from '../data/siteContent'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

/**
 * Renders **bold** and *italic* markers from the content file, so bio copy
 * can be edited in siteContent.js without touching JSX.
 */
const renderInline = (text) =>
  text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-medium text-primary">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })

const About = () => {
  const [lead, ...rest] = about.paragraphs

  return (
    <section id="about" className="section-spacing">
      <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Bio */}
        <div className="lg:col-span-7">
          <SectionHeading title={about.heading} className="mb-8 sm:mb-10" />

          <Reveal>
            <p className="text-xl leading-snug tracking-tight text-primary sm:text-2xl">
              {renderInline(lead)}
            </p>
          </Reveal>

          <div className="mt-8 max-w-[65ch] space-y-5">
            {rest.map((text, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                <p className="text-base leading-relaxed text-secondary sm:text-[17px]">
                  {renderInline(text)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Toolkit + numbers */}
        <Reveal className="lg:col-span-5 lg:pt-24" delay={0.1}>
          <aside className="rounded-xl border border-border bg-surface lg:sticky lg:top-24">
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-medium text-primary">Toolkit</h3>
              <dl className="mt-5 space-y-5">
                {coreSkills.map((group) => (
                  <div key={group.area}>
                    <dt className="font-mono text-xs text-muted">{group.area}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-secondary">
                      {group.items.join(', ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <dl className="grid grid-cols-3 border-t border-border">
              {about.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col-reverse justify-end gap-1.5 p-5 sm:p-6 ${
                    i > 0 ? 'border-l border-border' : ''
                  }`}
                >
                  <dt className="text-xs leading-snug text-muted">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tabular-nums tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

export default About
