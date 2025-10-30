import React from 'react'
import { Linkedin, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Streamlines */}
        <div className="absolute w-20 sm:w-32 md:w-36 h-0.5 sm:h-1 md:w-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 streamline" style={{ top: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-20 sm:w-24 md:w-36 h-0.5 sm:h-1 md:w-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-30 streamline" style={{ top: '40%', animationDelay: '2s' }}></div>
        <div className="absolute w-20 sm:w-32 md:w-36 h-0.5 sm:h-1 md:w-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 streamline" style={{ top: '60%', animationDelay: '4s' }}></div>
        <div className="absolute w-20 sm:w-24 md:w-36 h-0.5 sm:h-1 md:w-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-30 streamline" style={{ top: '80%', animationDelay: '6s' }}></div>

        {/* Crisp ML kernel grid (SVG) */}
        <div className="absolute bottom-6 left-6 opacity-20" aria-hidden>
          <svg className="kernel-grid-svg" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="14" height="14" patternUnits="userSpaceOnUse">
                <path d="M 14 0 L 0 0 0 14" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="140" height="140" fill="url(#grid)" />
            {/* Shimmering convolution kernel */}
            <g>
              <rect x="42" y="42" width="56" height="56" rx="8" stroke="currentColor" strokeWidth="1" fill="transparent" />
              {[0,1,2].map(r => (
                [0,1,2].map(c => (
                  <rect key={`${r}-${c}`} x={46 + c*18} y={46 + r*18} width="14" height="14" rx="2" className="kernel-cell" />
                ))
              ))}
            </g>
          </svg>
        </div>

        {/* Faint Navier–Stokes equations */}
        <div className="absolute top-8 left-6 text-secondary/30 text-xs sm:text-sm font-mono select-none hidden md:block">
          ∂u/∂t + (u·∇)u = -∇p + ν∇²u + f
          <br />
          ∇·u = 0
        </div>
      </div>

      {/* Floating airfoil */}
      <div className="absolute top-1/4 -right-1/4 opacity-5 pointer-events-none">
        <img
          src="/airfoil.png"
          alt="Airfoil decoration"
          className="w-32 h-32 sm:h-48 md:h-60 object-contain float-animation airfoil-glow"
        />
      </div>

      {/* Underwater pitching decoration */}
      <div className="absolute bottom-1/4 -left-1/4 opacity-10 pointer-events-none">
        <img
          src="/underwater-pitching.jpg"
          alt="Underwater pitching decoration"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl float-animation"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Centered profile photo */}
          <div className="flex justify-center mb-8">
            <img
              src="/profile.jpeg"
              alt="Atharva Mahajan"
              className="profile-orb"
            />
          </div>

          {/* Name */}
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter leading-[0.85]">
              <span className="block">Atharva</span>
              <span className="block">Mahajan</span>
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary tracking-tight">
            Fluid Mechanics × Machine Learning
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Working at the intersection of CFD and AI: high-fidelity simulations, CNN-based surrogates, and deep reinforcement learning for flow control and design exploration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-accent text-background rounded font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 uppercase tracking-wider shadow-lg w-full sm:w-fit justify-center"
            >
              View My Work
              <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-accent text-accent rounded font-bold text-sm sm:text-base hover:bg-accent hover:text-background transition-all duration-300 uppercase tracking-wider w-full sm:w-fit justify-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <a
              href="https://www.linkedin.com/in/atharva-mahajan-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full text-secondary hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:atharva@umich.edu"
              className="p-3 border border-border rounded-full text-secondary hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <div className="absolute right-6 bottom-6 hidden md:flex gap-2 pointer-events-none">
        <span className="tech-chip">CFD</span>
        <span className="tech-chip">CNNs</span>
        <span className="tech-chip">DRL</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 neon-flicker"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
