import React, { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { navLinks, profile } from '../data/siteContent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const baseUrl = import.meta.env.BASE_URL

  // Thin progress bar across the top of the page
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  // Highlight the nav item for whichever section is currently on screen
  useEffect(() => {
    const ids = ['home', ...navLinks.map((l) => l.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Shrink / solidify the bar once the user scrolls away from the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-accent to-accent-secondary"
      />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
        <nav
          className={`glass w-full max-w-3xl overflow-hidden transition-all duration-300 ${
            /* Pill shape when collapsed; rounded panel once the mobile menu
               expands, otherwise the container renders as a circle. */
            isOpen ? 'rounded-3xl bg-[#0d1015]/95' : 'rounded-full'
          } ${scrolled ? 'shadow-lg shadow-black/40' : ''}`}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
            {/* Logo */}
            <a
              href="#home"
              className="font-montserrat text-sm font-black tracking-tight text-accent transition-opacity hover:opacity-80"
            >
              [{profile.initials}]
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((item) => {
                const isActive = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Résumé link + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href={`${baseUrl}${profile.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-secondary transition-colors hover:border-accent/40 hover:text-primary sm:inline-flex"
              >
                <FileText size={13} />
                CV
              </a>

              <button
                onClick={() => setIsOpen((v) => !v)}
                className="p-1.5 text-secondary transition-colors hover:text-primary md:hidden"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div className="border-t border-white/5 px-3 pb-3 pt-2 md:hidden">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? 'bg-white/[0.06] text-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${baseUrl}${profile.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-accent"
              >
                <FileText size={15} />
                Download CV
              </a>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
