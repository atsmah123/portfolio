import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ExternalLink, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import SectionHeading from './ui/SectionHeading'
import SmartImage from './ui/SmartImage'
import { RevealGroup, RevealItem } from './ui/Reveal'

const Projects = () => {
  const [selected, setSelected] = useState(null)
  const closeButtonRef = useRef(null)
  const lastFocused = useRef(null)

  const close = useCallback(() => setSelected(null), [])

  const open = (project) => {
    lastFocused.current = document.activeElement
    setSelected(project)
  }

  // Close on Escape, lock body scroll while open, and move focus into the
  // dialog — then return it to the card that opened it.
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

  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title={sections.projects.heading}
          subtitle={sections.projects.subheading}
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RevealItem
              key={project.title}
              className={project.featured ? 'sm:col-span-2' : ''}
            >
              <button
                type="button"
                onClick={() => open(project)}
                className="surface-card group h-full w-full overflow-hidden text-left"
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    ratio={project.featured ? '16 / 9' : '16 / 10'}
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm ring-1 ring-white/10">
                    {project.category}
                  </span>

                  <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-primary opacity-0 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-montserrat text-base font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-accent sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-manrope text-sm leading-relaxed text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="chip border-transparent bg-transparent text-muted">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* ---------- Detail modal ---------- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
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
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card/95 px-5 py-4 backdrop-blur-sm sm:px-6">
                <div>
                  <p className="eyebrow mb-1">{selected.category}</p>
                  <h3
                    id="project-modal-title"
                    className="font-montserrat text-lg font-black leading-tight text-primary sm:text-2xl"
                  >
                    {selected.title}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={close}
                  className="shrink-0 rounded-full p-2 text-secondary transition-colors hover:bg-white/5 hover:text-primary"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-5 pb-6 pt-5 sm:px-6">
                <SmartImage
                  src={selected.image}
                  alt={selected.title}
                  ratio="16 / 9"
                  eager
                  className="mb-5 rounded-xl"
                />

                <p className="font-manrope text-sm leading-relaxed text-secondary sm:text-base">
                  {selected.longDescription || selected.description}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selected.liveUrl && selected.liveUrl !== '#' && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6"
                  >
                    {selected.linkLabel || 'View Project'}
                    <ExternalLink size={15} />
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
