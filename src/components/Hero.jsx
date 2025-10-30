
import React from 'react'
import { ExternalLink } from 'lucide-react'


const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">
    {/* Top left info card */}
    <div className="absolute top-24 left-8 md:left-16 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 max-w-sm z-10">
      <p className="text-[#999999] text-sm leading-relaxed mb-3">
        MS Mechanical Engineering | CFD,<br />
        Machine Learning, Optimization
      </p>
      <a
        href="https://umich.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4a9eff] text-sm font-medium flex items-center gap-1 hover:text-[#6bb0ff] transition-colors"
      >
        University of Michigan <ExternalLink size={14} />
      </a>
    </div>

    {/* Main name section with nested profile */}
    <div className="relative flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-black tracking-tighter text-center leading-[0.85] mb-0 font-montserrat text-white">
        <span className="block">ATHARVA</span>
        <span className="block">MAHAJAN</span>
      </h1>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/profile.jpeg"
          alt="Atharva Mahajan"
          className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-[#0a0a0a] shadow-2xl"
        />
      </div>
    </div>

    {/* Tagline */}
    <div className="mt-24 md:mt-32 mb-8 text-center px-4 max-w-3xl">
      <p className="text-base md:text-lg font-manrope text-[#999999] leading-relaxed">
        Driving innovation in engineering with advanced numerical<br className="hidden sm:block" />
        methods, AI, and aerodynamic research.
      </p>
    </div>

    {/* Scroll indicator */}
    <div className="mt-12 text-center text-[#666666] text-sm font-manrope">
      Scroll
      <div className="mt-2 animate-bounce">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>

    {/* Get in Touch button */}
    <a
      href="#contact"
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 bg-[#5eb3c7] text-black font-bold rounded-full w-36 h-36 md:w-40 md:h-40 flex items-center justify-center text-lg shadow-2xl hover:bg-[#6fc4d8] transition-all duration-300"
      style={{ zIndex: 20 }}
    >
      Get in Touch
    </a>

    {/* Subtle background gradient */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 70% 30%, rgba(35, 42, 61, 0.15) 0%, transparent 50%)'}}></div>
  </section>
)

export default Hero
