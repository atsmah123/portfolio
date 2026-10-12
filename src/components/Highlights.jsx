import React from 'react'
import { highlights } from '../data/siteContent'
import { RevealGroup, RevealItem } from './ui/Reveal'

/** The row of headline results directly under the hero. */
const Highlights = () => (
  <section aria-label="Highlights" className="section-shell">
    <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-10 sm:py-12 lg:grid-cols-4 lg:gap-x-10">
      {highlights.map((item) => (
        <RevealItem key={item.label}>
          <p className="text-3xl font-semibold tabular-nums tracking-tight text-primary sm:text-4xl">
            {item.value}
          </p>
          <p className="mt-2 max-w-[24ch] text-sm leading-snug text-muted">{item.label}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  </section>
)

export default Highlights
