import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'

/**
 * Section order on the page. Reorder these lines to reorder the site —
 * remember to reorder navLinks in src/data/siteContent.js to match.
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Lets keyboard users jump straight past the nav */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  )
}

export default App
