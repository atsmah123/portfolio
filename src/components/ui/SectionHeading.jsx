import React from 'react'
import Reveal from './Reveal'

/**
 * Consistent heading block used at the top of each section: a title with an
 * optional one-line description stacked underneath it.
 */
const SectionHeading = ({ title, subtitle, className = 'mb-12 sm:mb-16' }) => (
  <Reveal className={className}>
    <h2 className="section-title">{title}</h2>
    {subtitle && (
      <p className="mt-4 max-w-[60ch] text-pretty text-base leading-relaxed text-secondary sm:text-lg">
        {subtitle}
      </p>
    )}
  </Reveal>
)

export default SectionHeading
