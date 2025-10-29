import React from 'react'
import { Mail, Linkedin } from 'lucide-react'
import { socialLinks } from '../data/portfolioData'

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Content */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm currently exploring opportunities in computational fluid dynamics, machine learning, and aerodynamics research.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <p className="text-lg text-gray-400 mb-12">
            My inbox is always open. I'll try my best to get back to you!
          </p>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:atharvm@umich.edu"
              className="group relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
              <Mail className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 relative" size={24} />
              <div className="text-left relative">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">atharvm@umich.edu</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/atharva-mahajan-"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
              <Linkedin className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 relative" size={24} />
              <div className="text-left relative">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-white font-medium">Connect with me</p>
              </div>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <a
            href="mailto:atharvm@umich.edu"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-105"
          >
            Say Hello
            <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Designed & Built by Atharva Mahajan
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
