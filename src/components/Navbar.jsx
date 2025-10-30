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
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border-2 border-[#4a9eff] rounded-full px-6 py-3 shadow-xl">
        <div className="flex items-center justify-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isLogo
                    ? 'text-[#4a9eff] font-bold text-base'
                    : 'text-[#999999] hover:text-white transition-colors duration-300 text-sm font-medium'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="#home" className="text-[#4a9eff] font-bold text-base">
              [AM]
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#999999] hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a]/95 backdrop-blur-xl border-2 border-[#4a9eff] rounded-2xl overflow-hidden">
          <div className="px-4 py-3 space-y-2">
            {navItems.filter(item => !item.isLogo).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-[#999999] hover:text-white transition-colors duration-300 text-sm font-medium"
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
