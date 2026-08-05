import React from 'react'
import { ArrowDown, Mail, FileText, BrainCircuit, Bot, ScanSearch, Cpu } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile, coreSkills } from '../data/siteContent'

/** Icons usable by `coreSkills` in siteContent.js. Add new ones here. */
const skillIcons = { BrainCircuit, Bot, ScanSearch, Cpu }

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-14 pt-28 sm:pt-32"
    >
      {/* Background: a soft gradient wash only. The CFD-era streamlines,
          vortex rings and grid were removed — nothing competes with content. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[38rem] w-[38rem] rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="absolute -right-28 bottom-0 h-[34rem] w-[34rem] rounded-full bg-accent-secondary/[0.07] blur-[130px]" />
      </div>

      {/* ---------- Positioning kicker ---------- */}
      <motion.div {...rise(0)} className="relative z-10 mb-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {profile.kicker}
          </span>
        </span>
      </motion.div>

      {/* ---------- Name with the portrait overlapping the seam ----------
           The photo is sized in `em`, so it scales with the type and the
           overlap ratio stays identical from 390px to 1440px. Negative
           margins pull the two lines together so the portrait genuinely
           straddles them rather than sitting in a gap. ---------- */}
      <motion.h1
        {...rise(0.08)}
        className="relative z-10 w-full text-center font-montserrat font-black leading-[0.78] tracking-[-0.045em] text-primary"
        style={{ fontSize: 'clamp(2.9rem, 12.5vw, 9rem)' }}
      >
        <span className="block">{profile.firstName}</span>

        {/* Portrait layer — overlaps the line above and the line below.
            Sized with a vw floor so the face stays readable on phones, where
            a purely em-based size would shrink it to an unrecognisable dot. */}
        <span
          className="relative z-20 mx-auto block"
          style={{
            /* One size expression, reused for the margins, so the photo and
               its overlap always scale together — the overlap stays a fixed
               ~27% of the photo at every viewport width. */
            '--photo': 'max(0.62em, 76px)',
            width: 'var(--photo)',
            height: 'var(--photo)',
            marginTop: 'calc(var(--photo) * -0.275)',
            marginBottom: 'calc(var(--photo) * -0.275)',
          }}
        >
          {/* Dark halo carves the photo out of the letters behind it */}
          <span
            aria-hidden
            className="absolute -inset-[0.1em] rounded-full bg-background/85 blur-[6px]"
          />
          <span
            aria-hidden
            className="absolute -inset-[0.045em] rounded-full bg-gradient-to-br from-accent/45 to-accent-secondary/30 blur-md"
          />
          <img
            src={`${baseUrl}${profile.photo}`}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="relative h-full w-full rounded-full object-cover shadow-2xl ring-[0.035em] ring-white/25"
          />
        </span>

        <span className="block bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
          {profile.lastName}
        </span>
      </motion.h1>

      {/* ---------- Tagline ---------- */}
      <motion.p
        {...rise(0.22)}
        className="relative z-10 mt-7 max-w-2xl text-balance text-center font-manrope text-[15px] leading-relaxed text-secondary sm:text-lg"
      >
        {profile.intro}
      </motion.p>

      {/* ---------- Core skills: a recruiter's first read ---------- */}
      <motion.div
        {...rise(0.32)}
        className="relative z-10 mt-9 grid w-full max-w-4xl grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4"
      >
        {coreSkills.map((group) => {
          const Icon = skillIcons[group.icon] || BrainCircuit
          return (
            <div
              key={group.area}
              className="glass rounded-xl p-3.5 text-left transition-colors duration-300 hover:border-accent/40"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon size={15} className="shrink-0 text-accent" strokeWidth={1.9} />
                <h2 className="font-manrope text-[11px] font-bold uppercase leading-tight tracking-wider text-primary">
                  {group.area}
                </h2>
              </div>
              <p className="font-manrope text-[11px] leading-relaxed text-secondary">
                {group.items.join(' · ')}
              </p>
            </div>
          )
        })}
      </motion.div>

      {/* ---------- Calls to action ---------- */}
      <motion.div
        {...rise(0.42)}
        className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a
          href={`${baseUrl}${profile.resume}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <FileText size={16} />
          Download CV
        </a>
        <a href="#contact" className="btn-ghost">
          <Mail size={16} />
          Get in Touch
        </a>
      </motion.div>

      {/* ---------- Scroll cue ---------- */}
      <motion.a
        {...rise(0.55)}
        href="#about"
        className="relative z-10 mt-12 flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to About section"
      >
        <span className="font-manrope text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

export default Hero
