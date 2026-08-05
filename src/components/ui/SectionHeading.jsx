import React from 'react'
import Reveal from './Reveal'

/**
 * Consistent heading block used at the top of every section.
 * Keeps titles, rules and spacing identical site-wide.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const centered = align === 'center'

  return (
    <Reveal className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <div className={`title-rule mt-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl font-manrope text-base leading-relaxed text-secondary sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
