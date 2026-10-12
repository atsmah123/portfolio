import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import Reveal from './ui/Reveal'

/**
 * Below the lead project, entries pair up 7/5 then 5/7 on large screens.
 * The two aspect ratios are chosen so both images in a row end up the same
 * height (16:10 at 7 columns ≈ 9:8 at 5 columns), which keeps titles aligned.
 */
const slotFor = (i, total) => {
  const pair = Math.floor(i / 2)
  const first = i % 2 === 0
  if (first && i === total - 1) return { col: 'lg:col-span-12', ratio: 'aspect-[16/10] lg:aspect-[21/9]' }
  const wide = pair % 2 === 0 ? first : !first
  return wide
    ? { col: 'lg:col-span-7', ratio: 'aspect-[16/10]' }
    : { col: 'lg:col-span-5', ratio: 'aspect-[16/10] lg:aspect-[9/8]' }
}

const Tech = ({ items }) => (
  <p className="font-mono text-xs text-muted">{items.join(' / ')}</p>
)

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const closeButtonRef = useRef(null)
  const lastFocused = useRef(null)
  const reduceMotion = useReducedMotion()

  const close = useCallback(() => setSelected(null), [])

  const open = (project) => {
    lastFocused.current = document.activeElement
    setSelected(project)
  }

  // Close on Escape, lock body scroll while open, and move focus into the
  // dialog, then return it to the entry that opened it.
  useEffect(() => {
    if (!selected) return

    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`

    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      lastFocused.current?.focus?.()
    }
  }, [selected, close])

  const [lead, ...rest] = projects

  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <SectionHeading title={sections.projects.heading} subtitle={sections.projects.subheading} />

        {/* ---------- Lead project ---------- */}
        {lead && (
          <Reveal>
            <button
              type="button"
              onClick={() => open(lead)}
              className="group grid w-full items-center gap-6 text-left lg:grid-cols-12 lg:gap-12"
              aria-label={`View details for ${lead.title}`}
            >
              <SmartImage
                src={lead.image}
                alt={lead.title}
                fit={lead.fit}
                className="aspect-[16/10] rounded-xl border border-border lg:col-span-7"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              <div className="lg:col-span-5">
                <p className="meta">{lead.category}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-primary transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                  {lead.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-secondary">{lead.description}</p>
                <div className="mt-5">
                  <Tech items={lead.techStack} />
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read more
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </button>
          </Reveal>
        )}

        {/* ---------- The rest, in alternating pairs ---------- */}
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:mt-24 lg:grid-cols-12 lg:gap-y-20">
          {rest.map((project, i) => {
            const slot = slotFor(i, rest.length)
            return (
              <Reveal key={project.title} className={slot.col} delay={i % 2 ? 0.08 : 0}>
                <button
                  type="button"
                  onClick={() => open(project)}
                  className="group block w-full text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    fit={project.fit}
                    className={`${slot.ratio} rounded-xl border border-border`}
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                  <p className="meta mt-5">{project.category}</p>
                  <h3 className="mt-2 flex items-start justify-between gap-4 text-lg font-semibold leading-snug tracking-tight text-primary transition-colors duration-300 group-hover:text-accent sm:text-xl">
                    {project.title}
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.75}
                      className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-secondary">
                    {project.description}
                  </p>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* ---------- Detail view ---------- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              className="max-h-[88dvh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface shadow-2xl shadow-black/20"
              onClick={(e) => e.stopPropagation()}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-5 py-4 backdrop-blur-sm sm:px-7 sm:py-5">
                <div>
                  <p className="meta">{selected.category}</p>
                  <h3
                    id="project-modal-title"
                    className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-primary sm:text-2xl"
                  >
                    {selected.title}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={close}
                  className="-mr-2 shrink-0 rounded-full p-2 text-secondary transition-colors hover:text-primary"
                  aria-label="Close dialog"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <div className="px-5 pb-7 pt-5 sm:px-7">
                <SmartImage
                  src={selected.image}
                  alt={selected.title}
                  fit={selected.fit}
                  eager
                  className="aspect-[16/10] rounded-xl border border-border"
                />

                <p className="mt-6 text-[15px] leading-relaxed text-secondary sm:text-base">
                  {selected.longDescription || selected.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selected.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {selected.liveUrl && selected.liveUrl !== '#' && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7"
                  >
                    {selected.linkLabel || 'View Project'}
                    <ArrowUpRight size={16} strokeWidth={1.75} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
