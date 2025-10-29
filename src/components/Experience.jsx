import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter mb-3 sm:mb-4">
            Experience
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-accent"></div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 sm:space-y-16">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-border md:-translate-x-1/2"></div>

          {/* Experience items */}
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 sm:border-4 border-background md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 hover:border-accent transition-all duration-300 hover:shadow-lg">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wider">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{exp.date}</span>
                  </div>

                  {/* Role */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    {exp.role}
                  </h3>

                  {/* Company & Location */}
                  <div className="space-y-1 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-secondary text-sm sm:text-base">
                      <Briefcase size={14} className="sm:w-4 sm:h-4" />
                      <span>{exp.company}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 text-secondary text-sm sm:text-base">
                        <MapPin size={14} className="sm:w-4 sm:h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm rounded border border-accent/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
