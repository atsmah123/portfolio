import React, { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { projects } from '../data/portfolioData'

const Projects = () => {
  const baseUrl = import.meta.env.BASE_URL
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter mb-3 sm:mb-4">
            Projects
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-accent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 bg-background overflow-hidden">
                <img
                  src={`${baseUrl}${project.image.replace(/^\//, '')}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-secondary text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-background rounded transition-colors duration-300 text-secondary hover:text-primary"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="relative rounded-lg overflow-hidden mb-6">
                <img
                  src={`${baseUrl}${selectedProject.image.replace(/^\//, '')}`}
                  alt={selectedProject.title}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                />
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded border border-accent/20 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-base sm:text-lg text-secondary leading-relaxed mb-6 whitespace-pre-line">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-primary font-bold mb-3 text-base sm:text-lg">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-accent/10 text-accent text-xs sm:text-sm rounded border border-accent/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 uppercase tracking-wider"
                >
                  View Publication
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
