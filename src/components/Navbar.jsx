import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navLinks, profile } from '../data/siteContent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const baseUrl = import.meta.env.BASE_URL

  // Give the bar a solid background once the page has scrolled. React skips
  // the re-render when the boolean doesn't change, so this only fires at the
  // threshold, not on every scroll frame.
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))

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

  // Close the mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || isOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" className="text-[15px] font-semibold tracking-tight text-primary">
          {profile.firstName} {profile.lastName}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
              </a>
            )
          })}

          <a
            href={`${baseUrl}${profile.resume}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-4 py-1.5 text-[13px]"
          >
            Download CV
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="-mr-1.5 p-1.5 text-secondary transition-colors hover:text-primary md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="section-shell pb-5 pt-1 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block py-2.5 text-lg tracking-tight ${
                activeId === item.id ? 'text-primary' : 'text-secondary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${baseUrl}${profile.resume}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-3"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
