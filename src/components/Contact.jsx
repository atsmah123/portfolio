import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary tracking-tighter mb-3 sm:mb-4">
            Contact
          </h2>
          <div className="w-20 sm:w-24 h-0.5 bg-accent"></div>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <p className="text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed">
            I'm currently exploring opportunities in computational fluid dynamics, machine learning, and aerodynamics research.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <a
              href="mailto:atharva@umich.edu"
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm sm:text-base text-primary font-medium break-all">atharva@umich.edu</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/atharva-mahajan-4b8b3a1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-sm sm:text-base text-primary font-medium">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/AppliedAero1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 group sm:col-span-2 md:col-span-1"
            >
              <Github className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-xs text-secondary uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-sm sm:text-base text-primary font-medium">View my code</p>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8">
            <a
              href="mailto:atharva@umich.edu"
              className="inline-flex items-center gap-2 px-8 py-3 sm:py-4 bg-accent text-background rounded font-bold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-300 uppercase tracking-wider shadow-lg hover:scale-105"
            >
              Say Hello
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-border text-center space-y-4">
          <p className="text-secondary text-sm sm:text-base">
            © 2025 Atharva Mahajan. All rights reserved.
          </p>
          <p className="text-secondary text-xs sm:text-sm">
            Designed & Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
