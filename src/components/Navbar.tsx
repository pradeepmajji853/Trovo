import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 12)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <nav
      className="fixed inset-x-0 top-6 z-50 flex justify-center pointer-events-none overflow-x-hidden"
      role="navigation"
      aria-label="Main navigation for Trovo Fi"
    >
      <div
        className={`pointer-events-auto relative w-full max-w-6xl mx-0 rounded-2xl sm:rounded-full border backdrop-blur-xl shadow-lg ${
          isScrolled ? 'bg-white/80 border-gray-200/60' : 'bg-white/60 border-gray-200/40'
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-4 h-14">
          {/* Logo */}
          <div className="flex items-center justify-start -ml-1 sm:ml-0">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <img
                  src="/image2.png"
                  alt="Trovo Fi Logo - Revolutionary Fintech Platform"
                  className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                  style={{
                    filter:
                      'brightness(0) saturate(100%) invert(85%) sepia(40%) saturate(2000%) hue-rotate(80deg) brightness(95%) contrast(105%)',
                  }}
                />
              </div>
              <span
                className="text-2xl sm:text-3xl font-bold text-trovo-green tracking-tight ml-1"
                aria-label="Trovo Fi - India's #1 Fintech App"
              >
                Trovo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-gray-700 font-medium"
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator (static) */}
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-trovo-green/10 rounded-full" />
                  )}

                  {/* Bottom line indicator (static on active) */}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-trovo-green w-3/5" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-5 h-0.5 bg-gray-700 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full mt-2 mx-2 sm:mx-0 rounded-2xl border border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="py-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-gray-700 font-medium ${
                      location.pathname === item.path ? 'text-trovo-green bg-trovo-green/10' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
