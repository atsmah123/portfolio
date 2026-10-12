import React from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { publications, authorName } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

/** Emphasises your own name within the author list. */
const renderAuthors = (authors) =>
  authors.split(new RegExp(`(${authorName})`, 'g')).map((part, i) =>
    part === authorName ? (
      <span key={i} className="font-medium text-primary">
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
          title={sections.publications.heading}
          subtitle={sections.publications.subheading}
        />

        <div className="space-y-5">
          {publications.map((pub, index) => (
            <Reveal key={pub.title} delay={index * 0.06}>
              <article className="rounded-xl border border-border bg-surface p-6 sm:p-10">
                <p className="font-mono text-xs">
                  <span className="text-accent">{pub.type}</span>
                  <span className="ml-3 text-muted">{pub.year}</span>
                </p>

                <h3 className="mt-4 max-w-[34ch] text-xl font-semibold leading-snug tracking-tight text-primary sm:text-2xl lg:text-3xl">
                  {pub.title}
                </h3>

                <p className="mt-4 text-[15px] text-secondary">{renderAuthors(pub.authors)}</p>
                <p className="mt-1 text-[15px] italic text-muted">{pub.venue}</p>

                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                    >
                      Read the paper
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.75}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>

                {pub.abstract && (
                  <details className="group/abs mt-5 border-t border-border pt-5">
                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                      Abstract
                      <ChevronDown
                        size={16}
                        strokeWidth={1.75}
                        className="transition-transform duration-300 group-open/abs:rotate-180"
                      />
                    </summary>
                    <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-secondary">
                      {pub.abstract}
                    </p>
                  </details>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
