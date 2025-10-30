
import React from 'react'
import { Linkedin, Mail } from 'lucide-react'


const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#181c2b] via-[#1e2336] to-[#2a314d] text-white">
    <div className="relative flex flex-col items-center justify-center w-full">
      <h1 className="text-[7vw] sm:text-[6vw] md:text-[5vw] font-black tracking-tight text-center leading-none mb-0 font-montserrat">
        <span className="block">ATHARVA</span>
        <span className="block">MAHAJAN</span>
      </h1>
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2">
        <img
          src="/profile.jpeg"
          alt="Atharva Mahajan"
          className="profile-orb border-4 border-[#4fd1c5] shadow-2xl"
          style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    </div>
    <div className="mt-20 mb-8 text-center">
      <span className="text-xl sm:text-2xl font-manrope text-[#b3c2e6]">
        Driving innovation in engineering with advanced numerical methods, AI, and aerodynamic research.
      </span>
    </div>
    <div className="fixed bottom-8 right-8 flex gap-4">
      <a
        href="https://www.linkedin.com/in/atharva-mahajan-/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-[#232a3d] rounded-full text-[#b3c2e6] hover:text-[#4fd1c5] hover:bg-[#181c2b] transition-all duration-300 shadow-lg"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:atharvm@umich.edu"
        className="p-3 bg-[#232a3d] rounded-full text-[#b3c2e6] hover:text-[#4fd1c5] hover:bg-[#181c2b] transition-all duration-300 shadow-lg"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
    {/* Scroll indicator */}
    <div className="mt-8 text-center text-gray-300 text-base font-manrope">
      Scroll
      <div className="mt-2 animate-bounce">
        <span className="text-2xl">↓</span>
      </div>
    </div>
    {/* Get in Touch button */}
    <a
      href="#contact"
      className="fixed bottom-16 right-16 bg-[#6bb7cc] text-black font-bold rounded-full w-32 h-32 flex items-center justify-center text-xl shadow-lg hover:bg-[#4fd1c5] transition-all duration-300"
      style={{ zIndex: 20 }}
    >
      Get in Touch
    </a>
    {/* Optional: subtle background pattern */}
    <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 80% 20%, #232a3d 0%, transparent 60%)'}}></div>
  </section>
)

export default Hero
