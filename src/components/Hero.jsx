
import React from 'react'
import { ExternalLink } from 'lucide-react'

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden pt-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4a9eff]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5eb3c7]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      {/* Decorative shadow elements - inspired by reference image */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        {/* Large geometric shapes in background */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#1a1a1a] to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-tl from-[#1a1a1a] to-transparent rounded-full blur-2xl"></div>

        {/* Diagonal shadow bands */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-[#0d0d0d] via-transparent to-transparent rotate-12 transform translate-x-32 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-gradient-to-tr from-[#0d0d0d] via-transparent to-transparent -rotate-12 transform -translate-x-32 translate-y-20"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Aerodynamic elements - streamlines and flow visualization */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        {/* Horizontal streamlines - simulating airflow */}
        <div className="absolute top-[30%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4a9eff]/30 to-transparent"></div>
        <div className="absolute top-[35%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#5eb3c7]/20 to-transparent" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4a9eff]/25 to-transparent" style={{ animationDelay: '2s' }}></div>

        {/* Airfoil-inspired curved shape on the right */}
        <div className="absolute top-1/3 right-0 w-96 h-48 opacity-10">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <path d="M 0 100 Q 100 50, 200 80 T 400 100 Q 300 120, 200 110 T 0 100 Z"
                  fill="none"
                  stroke="#4a9eff"
                  strokeWidth="2"
                  className="opacity-50"/>
          </svg>
        </div>

        {/* Vortex/flow particles on the left */}
        <div className="absolute bottom-1/4 left-10 w-32 h-32 border-2 border-[#5eb3c7]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-[#4a9eff]/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Top left info card with enhanced styling - positioned to overlap name */}
      <div className="absolute top-16 left-4 md:top-20 md:left-12 lg:left-24 bg-gradient-to-br from-[#1a1a1a]/90 to-[#151515]/90 border border-[#333333] rounded-xl p-5 md:p-6 max-w-[260px] md:max-w-[300px] z-20 shadow-xl backdrop-blur-sm">
        <p className="text-[#999999] text-sm leading-relaxed mb-3">
          MS Mechanical Engineering | CFD,<br />
          Machine Learning, Optimization
        </p>
        <a
          href="https://umich.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a9eff] text-sm font-medium flex items-center gap-1 hover:text-[#6bb0ff] transition-colors group"
        >
          University of Michigan
          <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Main name section with nested profile - centered and wider */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 z-10">
        {/* Shadow elements behind the text */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dark shadows behind name for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-transparent via-[#050505] to-transparent blur-xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0d0d0d] rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0d0d0d] rounded-full blur-3xl opacity-70"></div>
        </div>

        <h1 className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] xl:text-[9vw] font-black tracking-[-0.05em] text-center leading-[0.85] mb-0 font-montserrat text-white relative">
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">ATHARVA</span>
          <span className="block drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">MAHAJAN</span>
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a9eff] to-[#5eb3c7] rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src={`${baseUrl}profile.jpeg`}
              alt="Atharva Mahajan"
              className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-full object-cover border-[5px] border-[#0a0a0a] shadow-2xl ring-2 ring-[#333333]"
            />
          </div>
        </div>
      </div>

      {/* Tagline with better spacing */}
      <div className="mt-28 md:mt-36 lg:mt-40 mb-12 text-center px-4 max-w-3xl z-10">
        <p className="text-base md:text-lg lg:text-xl font-manrope text-[#a0a0a0] leading-relaxed">
          Driving innovation in engineering with advanced numerical<br className="hidden sm:block" />
          methods, AI, and aerodynamic research.
        </p>
      </div>

      {/* Scroll indicator with refined styling */}
      <div className="mt-8 text-center text-[#666666] text-sm font-manrope tracking-wider uppercase z-10">
        Scroll
        <div className="mt-3 animate-bounce">
          <svg className="w-5 h-5 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Get in Touch button - smaller and less intrusive */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-br from-[#5eb3c7] to-[#4a9eff] text-black font-bold rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-xs md:text-sm shadow-lg hover:shadow-[#5eb3c7]/40 hover:scale-105 transition-all duration-300 z-20"
      >
        <span className="text-center leading-tight">Get in<br />Touch</span>
      </a>
    </section>
  )
}

export default Hero
