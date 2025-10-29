import React from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

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
      </div>

      {/* Floating airfoil */}
      <div className="absolute top-1/4 -right-1/4 opacity-5 pointer-events-none">
        <img
          src="/airfoil.png"
          alt="Airfoil decoration"
          className="w-32 h-32 sm:h-48 md:h-60 object-contain float-animation airfoil-glow"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Name */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter leading-none">
            Atharva<br />Mahajan
          </h1>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary tracking-tight">
            MS Mechanical Engineering
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Specializing in CFD, Machine Learning, and Optimization.<br />
            Driving innovation in engineering with advanced numerical methods, AI, and aerodynamic research.
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
              href="https://github.com/AppliedAero1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full text-secondary hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-mahajan-4b8b3a1b3/"
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
