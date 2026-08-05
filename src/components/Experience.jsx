import React, { useMemo, useState } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { experience } from '../data/portfolioData'
import { sections } from '../data/siteContent'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

/** Groups consecutive roles that share an `org` into one chapter. */
const groupByOrg = (roles) => {
  const groups = []
  for (const role of roles) {
    const key = role.org || role.company || 'Other'
    const last = groups[groups.length - 1]
    if (last && last.org === key) last.roles.push(role)
    else groups.push({ org: key, orgMeta: role.orgMeta, roles: [role] })
  }
  return groups
}

/** "Aug 2025 — Present" + "Jan 2024 — May 2025"  →  "Jan 2024 — Present" */
const spanFor = (roles) => {
  const start = roles[roles.length - 1]?.date?.split('—')[0]?.trim() ?? ''
  const end = roles[0]?.date?.split('—')[1]?.trim() ?? ''
  return start && end ? `${start} — ${end}` : roles[0]?.date ?? ''
}

const RoleBody = ({ role }) => (
  <div className="pb-1">
    <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="font-manrope text-[11px] font-semibold uppercase tracking-wider text-accent">
        {role.date}
      </span>
      {role.current && (
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/25">
          Current
        </span>
      )}
    </div>

    <h4 className="font-montserrat text-[15px] font-bold leading-snug text-primary sm:text-base">
      {role.role}
    </h4>

    <p className="mt-2 font-manrope text-sm leading-relaxed text-secondary">
      {role.description}
    </p>

    {role.technologies?.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-1.5">
        {role.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
)

const OrgChapter = ({ group, index, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen)
  const reduceMotion = useReducedMotion()
  const isCurrent = group.roles.some((r) => r.current)
  const panelId = `org-panel-${index}`

  return (
    <Reveal delay={Math.min(index * 0.07, 0.28)}>
      <div className="relative pl-10 sm:pl-14">
        {/* Node on the rail */}
        <span className="absolute left-0 top-5 flex h-6 w-6 items-center justify-center">
          {isCurrent && (
            <span className="pulse-ring absolute inline-flex h-4 w-4 rounded-full bg-accent/50" />
          )}
          <span
            className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-background text-[9px] font-black ${
              isCurrent ? 'bg-accent text-black' : 'bg-[#2b3340] text-secondary'
            }`}
          >
            {group.roles.length}
          </span>
        </span>

        <div className="surface-card overflow-hidden">
          {/* Chapter header — click to expand */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.02] sm:p-6"
          >
            <div className="min-w-0">
              <h3 className="font-montserrat text-base font-bold leading-tight text-primary sm:text-lg">
                {group.org}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-manrope text-xs text-muted">
                <span className="font-semibold text-secondary">{spanFor(group.roles)}</span>
                {group.orgMeta && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {group.orgMeta}
                  </span>
                )}
                <span>
                  {group.roles.length} {group.roles.length === 1 ? 'role' : 'roles'}
                </span>
              </div>
            </div>

            <ChevronDown
              size={18}
              className={`shrink-0 text-muted transition-transform duration-300 ${
                open ? 'rotate-180 text-accent' : ''
              }`}
            />
          </button>

          {/* Roles */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-5 border-t border-border px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                  {group.roles.map((role, i) => (
                    <div
                      key={role.role}
                      className={
                        i > 0 ? 'border-t border-border/60 pt-5' : undefined
                      }
                    >
                      <RoleBody role={role} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  )
}

const Experience = () => {
  const groups = useMemo(() => groupByOrg(experience), [])

  return (
    <section id="experience" className="section-spacing">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Where I've Worked"
          title={sections.experience.heading}
          subtitle={sections.experience.subheading}
        />

        <div className="relative">
          {/* Rail linking the chapters */}
          <div
            aria-hidden
            className="absolute bottom-6 left-[11px] top-6 w-0.5 rounded-full bg-gradient-to-b from-accent via-accent/30 to-transparent"
          />

          <div className="space-y-4">
            {groups.map((group, i) => (
              <OrgChapter
                key={group.org}
                group={group}
                index={i}
                /* Current employer opens by default; the rest stay collapsed
                   so the section reads as chapters, not a wall of text. */
                defaultOpen={group.roles.some((r) => r.current)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
