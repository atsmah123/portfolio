import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: '[AM]', href: '#home', isLogo: true },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <div className="relative bg-white/5 backdrop-blur-xl border border-[#4a9eff]/30 rounded-full px-6 py-3 shadow-xl shadow-[#4a9eff]/20">
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full pointer-events-none"></div>

        <div className="flex items-center justify-center gap-8 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isLogo
                    ? 'text-[#4a9eff] font-bold text-base drop-shadow-[0_0_8px_rgba(74,158,255,0.5)]'
                    : 'text-[#cccccc] hover:text-white transition-colors duration-300 text-sm font-medium'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="#home" className="text-[#4a9eff] font-bold text-base drop-shadow-[0_0_8px_rgba(74,158,255,0.5)]">
              [AM]
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#cccccc] hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 relative bg-white/5 backdrop-blur-xl border border-[#4a9eff]/30 rounded-2xl overflow-hidden shadow-xl shadow-[#4a9eff]/20">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

          <div className="px-4 py-3 space-y-2 relative">
            {navItems.filter(item => !item.isLogo).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-[#cccccc] hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
