import React from 'react'
import { ExternalLink, BookText } from 'lucide-react'
import { publications, authorName } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

/** Bolds your own name within the author list. */
const renderAuthors = (authors) =>
  authors.split(new RegExp(`(${authorName})`, 'g')).map((part, i) =>
    part === authorName ? (
      <span key={i} className="font-semibold text-primary">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )

const Publications = () => {
  if (!publications.length) return null

  return (
    <section id="publications" className="section-spacing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Research Output"
          title={sections.publications.heading}
          subtitle={sections.publications.subheading}
        />

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <Reveal key={pub.title} delay={index * 0.08}>
              <article className="surface-card group p-5 sm:p-7">
                <div className="flex gap-4 sm:gap-5">
                  {/* Icon badge */}
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 sm:flex">
                    <BookText size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* Meta row */}
                    <div className="mb-2.5 flex flex-wrap items-center gap-2">
                      <span className="chip">{pub.type}</span>
                      <span className="font-manrope text-xs font-medium text-muted">
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="font-montserrat text-base font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-accent sm:text-lg">
                      {pub.title}
                    </h3>

                    <p className="mt-2 font-manrope text-sm text-secondary">
                      {renderAuthors(pub.authors)}
                    </p>

                    <p className="mt-1 font-manrope text-sm italic text-muted">{pub.venue}</p>

                    {pub.abstract && (
                      <p className="mt-3.5 border-l-2 border-border pl-4 font-manrope text-sm leading-relaxed text-secondary">
                        {pub.abstract}
                      </p>
                    )}

                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 font-manrope text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
                      >
                        Read the paper
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
