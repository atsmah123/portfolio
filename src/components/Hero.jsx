import React from 'react'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/portfolioData'

const Hero = () => {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Mail: Mail,
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950"></div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting with icon */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold text-lg">
              <Sparkles size={20} className="text-blue-400" />
              Hi, my name is
            </span>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              Atharva Mahajan
            </span>
          </h1>

          {/* Title with subtle gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
              MS Mechanical Engineering
            </span>
          </h2>

          {/* Subtitle with enhanced styling */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Specializing in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              CFD
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              Machine Learning
            </span>
            , and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              Optimization
            </span>
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Driving innovation in engineering with advanced numerical methods, AI, and aerodynamic research.
            Published researcher with expertise in computational fluid dynamics and deep learning applications.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-blue-500/50 text-blue-400 rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 font-medium hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-1000">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={link.name}
                >
                  <Icon size={24} className="group-hover:rotate-6 transition-transform duration-300" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
