import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-800"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                } ml-8 md:ml-0`}>
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
