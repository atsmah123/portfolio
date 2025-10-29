import React from 'react'
import { GraduationCap, Award, Code } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'MS Mechanical Engineering - University of Michigan',
        'Exchange Student - KTH Royal Institute of Technology',
        'BE Mechanical Engineering - BITS Pilani'
      ]
    },
    {
      icon: Award,
      title: 'Achievements',
      items: [
        'Published in International Journal of Heat and Fluid Flow',
        '$12,000 Government Grant Recipient',
        '450× GPU Acceleration Achievement'
      ]
    },
    {
      icon: Code,
      title: 'Expertise',
      items: [
        'Computational Fluid Dynamics (CFD)',
        'Machine Learning & Deep RL',
        'High-Performance Computing (HPC)'
      ]
    }
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a graduate student at the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                University of Michigan
              </span>
              , specializing in computational fluid dynamics, machine learning, and optimization. My research focuses on
              developing innovative solutions at the intersection of AI and engineering.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With published research in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                turbulent boundary layers
              </span>{' '}
              and hands-on experience in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                CUDA-accelerated computing
              </span>
              , I bring both theoretical depth and practical expertise to complex engineering challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a co-founder of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                Applied Aero Labs
              </span>
              , I've successfully led hardware projects from conception to commercialization, demonstrating entrepreneurial
              skills alongside technical prowess.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <Icon className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {highlight.items.map((item, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2 group-hover:text-gray-300 transition-colors duration-300">
                          <span className="text-blue-400 mt-1 group-hover:text-cyan-400 transition-colors duration-300">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
