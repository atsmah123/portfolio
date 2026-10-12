import React from 'react'
import { ArrowRight, FileText } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/siteContent'

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL
  const reduceMotion = useReducedMotion()

  // Staggered entrance so the eye reads name, then summary, then actions.
  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section id="home" className="pb-16 pt-24 sm:pb-20 lg:pb-24">
      <div className="section-shell grid items-end gap-8 pt-6 lg:grid-cols-12 lg:gap-12 lg:pt-12">
        {/* Portrait: a small square above the text on phones, a tall
            portrait beside it on large screens. */}
        <motion.div
          {...rise(0.1)}
          className="w-24 overflow-hidden rounded-xl bg-border sm:w-28 lg:order-last lg:col-span-5 lg:ml-auto lg:w-full lg:max-w-[400px]"
        >
          <img
            src={`${baseUrl}${profile.photo}`}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="aspect-square w-full object-cover lg:aspect-[4/5]"
            fetchpriority="high"
          />
        </motion.div>

        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted"
          >
            {profile.kicker} ·{' '}
            <a
              href={profile.institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary hover:decoration-accent"
            >
              {profile.institution.name}
            </a>
          </motion.p>

          <motion.h1
            {...rise(0.06)}
            className="mt-5 text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.045em] text-primary sm:text-7xl lg:text-[5.75rem]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-[36ch] text-lg leading-relaxed text-secondary sm:text-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              View projects
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={`${baseUrl}${profile.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FileText size={16} strokeWidth={1.75} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
