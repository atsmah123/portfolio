import React from 'react'
import { ExternalLink, ArrowDown, Mail, FileText } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/siteContent'

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:pt-36"
    >
      {/* ---------- Decorative background ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft colour blooms */}
        <div className="absolute -left-24 top-10 h-[34rem] w-[34rem] rounded-full bg-accent/[0.07] blur-[110px]" />
        <div className="absolute -right-20 bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent-secondary/[0.06] blur-[110px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.5) 1px, transparent 1px)',
            backgroundSize: '76px 76px',
            maskImage: 'radial-gradient(ellipse 75% 55% at 50% 45%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 55% at 50% 45%, #000 40%, transparent 100%)',
          }}
        />

        {/* Streamlines — a nod to the CFD work */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          {[210, 268, 326, 384].map((y, i) => (
            <path
              key={y}
              d={`M -50 ${y} C 300 ${y - 34 - i * 5}, 640 ${y + 30 + i * 5}, 1250 ${y - 12}`}
              fill="none"
              stroke="url(#streamGradient)"
              strokeWidth="1.2"
            />
          ))}
          <defs>
            <linearGradient id="streamGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="45%" stopColor="#4a9eff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Vortex rings */}
        <div className="absolute bottom-24 left-8 hidden lg:block">
          <div className="h-36 w-36 animate-spin-slow rounded-full border border-accent-secondary/20" />
          <div className="absolute inset-5 animate-spin-slower rounded-full border border-accent/25" />
        </div>
      </div>

      {/* ---------- Institution card ---------- */}
      <motion.div
        {...rise(0)}
        className="glass absolute left-4 top-24 hidden max-w-[248px] rounded-2xl p-4 lg:block lg:left-10 xl:left-16"
      >
        <p className="font-manrope text-[13px] leading-relaxed text-secondary">
          {profile.tagline}
        </p>
        <a
          href={profile.institution.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent transition-colors hover:text-accent-secondary"
        >
          {profile.institution.name}
          <ExternalLink
            size={13}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </motion.div>

      {/* ---------- Name + portrait ----------
           The portrait sits in normal flow between the two name lines, so it
           can never overlap the text at any viewport width. ---------- */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <motion.h1
          {...rise(0.08)}
          className="w-full text-center font-montserrat font-black leading-[0.86] tracking-[-0.045em] text-primary"
          style={{ fontSize: 'clamp(2.75rem, 13vw, 9.5rem)' }}
        >
          <span className="block">{profile.firstName}</span>

          {/* Portrait nested between the names */}
          <motion.span
            {...rise(0.18)}
            className="my-2 flex items-center justify-center gap-4 sm:my-3 sm:gap-6"
          >
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/35"
            />
            <span className="relative shrink-0">
              <span className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/35 to-accent-secondary/25 blur-lg" />
              <img
                src={`${baseUrl}${profile.photo}`}
                alt={`${profile.firstName} ${profile.lastName}`}
                width="132"
                height="132"
                className="relative block h-[62px] w-[62px] rounded-full object-cover ring-1 ring-white/15 sm:h-[86px] sm:w-[86px] md:h-[108px] md:w-[108px] lg:h-[132px] lg:w-[132px]"
              />
            </span>
            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-secondary/35"
            />
          </motion.span>

          <span className="block bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
            {profile.lastName}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...rise(0.28)}
          className="mt-8 max-w-2xl text-balance text-center font-manrope text-base leading-relaxed text-secondary sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        {/* Calls to action */}
        <motion.div {...rise(0.36)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
      </div>

      {/* ---------- Scroll cue ---------- */}
      <motion.a
        {...rise(0.5)}
        href="#about"
        className="group mt-16 flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to About section"
      >
        <span className="font-manrope text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

export default Hero
