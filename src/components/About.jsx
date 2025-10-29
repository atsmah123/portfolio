import React from 'react'
import { GraduationCap, Award, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Universities', value: '3' },
    { icon: Award, label: 'Publications', value: '1+' },
    { icon: Zap, label: 'GPU Speed-up', value: '450×' },
  ]

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter mb-3 sm:mb-4">
            About
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-accent"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              I am a graduate student at the{' '}
              <span className="text-accent font-semibold">University of Michigan</span>, 
              specializing in computational fluid dynamics, machine learning, and optimization.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              My research focuses on developing innovative solutions at the intersection of AI and engineering, 
              with published work in{' '}
              <span className="text-accent font-semibold">turbulent boundary layers</span> and 
              hands-on experience in CUDA-accelerated computing.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              As a co-founder of{' '}
              <span className="text-accent font-semibold">Applied Aero Labs</span>, 
              I've led hardware projects from conception to commercialization, demonstrating both 
              technical expertise and entrepreneurial skills.
            </p>

            {/* Profile Image */}
            <div className="mt-6 sm:mt-8 md:hidden">
              <img
                src="/profile.jpeg"
                alt="Atharva Mahajan"
                className="w-full max-w-md mx-auto rounded-lg border-4 sm:border-4 border-accent shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-6 sm:space-y-12">
            <div className="hidden md:block">
              <img
                src="/profile.jpeg"
                alt="Atharva Mahajan"
                className="w-full rounded-lg border-4 border-accent shadow-2xl"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:border-accent transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent mx-auto mb-2 sm:mb-3" />
                    <div className="text-2xl sm:text-4xl font-black text-primary mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-secondary uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
