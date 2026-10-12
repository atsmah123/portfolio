import React, { useMemo } from 'react'
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

/** "Aug 2025 - Present" + "Jan 2024 - May 2025"  →  "Jan 2024 - Present" */
const spanFor = (roles) => {
  const start = roles[roles.length - 1]?.date?.split(' - ')[0]?.trim() ?? ''
  const end = roles[0]?.date?.split(' - ')[1]?.trim() ?? ''
  return start && end ? `${start} - ${end}` : roles[0]?.date ?? ''
}

const Role = ({ role }) => (
  <article>
    <p className="meta">
      {role.date}
      {role.current && <span className="ml-3 text-accent">Current</span>}
    </p>
    <h4 className="mt-2 text-base font-medium leading-snug tracking-tight text-primary sm:text-lg">
      {role.role}
    </h4>
    <p className="mt-2.5 max-w-[65ch] text-[15px] leading-relaxed text-secondary">
      {role.description}
    </p>
    {role.technologies?.length > 0 && (
      <p className="mt-3 font-mono text-xs text-muted">{role.technologies.join(' / ')}</p>
    )}
  </article>
)

const Experience = () => {
  const groups = useMemo(() => groupByOrg(experience), [])

  return (
    <section id="experience" className="section-spacing">
      <div className="section-shell">
        <SectionHeading title={sections.experience.heading} subtitle={sections.experience.subheading} />

        <div>
          {groups.map((group) => (
            <Reveal key={group.org}>
              <div className="grid gap-6 border-t border-border py-10 sm:py-12 lg:grid-cols-12 lg:gap-12">
                {/* Organisation stays in view while its roles scroll past */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-24">
                    <h3 className="text-xl font-semibold tracking-tight text-primary">{group.org}</h3>
                    <p className="mt-1.5 text-sm text-secondary">{group.orgMeta}</p>
                    <p className="meta mt-1">{spanFor(group.roles)}</p>
                  </div>
                </div>

                <div className="space-y-10 lg:col-span-8">
                  {group.roles.map((role) => (
                    <Role key={role.role} role={role} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
