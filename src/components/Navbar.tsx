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

  const handleEarlyAccessClick = (e?: React.MouseEvent) => {
    // If already on home, smooth scroll to the section
    if (location.pathname === '/') {
      e?.preventDefault()
      const el = document.getElementById('early-access')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Fallback to hash if element not found yet
        window.location.hash = '#early-access'
      }
    }
  }

  return (
    <nav
      className="fixed inset-x-0 top-4 sm:top-6 z-50 flex justify-center overflow-x-hidden"
      role="navigation"
      aria-label="Main navigation for Trovo Fi"
    >
      <div
        className={`relative w-[92%] sm:w-[92%] max-w-6xl mx-0 rounded-2xl sm:rounded-full border overflow-hidden backdrop-blur-xl transition-all duration-200 ${
          isScrolled
            ? 'bg-white/85 border-gray-200/70 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5'
            : 'bg-white/60 border-gray-200/40 shadow-xl ring-1 ring-black/5'
        }`}
      >
        {/* Subtle gradient glow clipped inside container */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-full bg-gradient-to-r from-trovo-green/10 via-transparent to-trovo-green/10 blur-xl opacity-60"
        />
        {/* Ambient bottom shadow for more depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-4 left-6 right-6 h-6 rounded-full bg-black/20 blur-2xl opacity-40"
        />

        <div className="relative flex items-center justify-between px-2 sm:px-4 h-14">
          {/* Logo */}
          <div className="flex items-center justify-start -ml-1 sm:ml-0">
            <Link to="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/50 rounded-xl">
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
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40 ${
                    location.pathname === item.path ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active indicator (static) */}
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-trovo-green/10 rounded-full" />
                  )}

                  {/* Bottom line indicator (static on active) */}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-trovo-green w-3/5" />)
                  }
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/#early-access"
              onClick={handleEarlyAccessClick}
              className="inline-flex items-center gap-2 rounded-full bg-trovo-green text-white px-4 py-2 font-semibold shadow-md hover:bg-trovo-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span>Get Early Access</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-pressed={isMobileMenuOpen}
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center">
              <span
                className={`w-5 h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 mt-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 mt-1 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (outside rounded container to avoid clipping) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            className="absolute left-3 right-3 top-20 sm:top-24 rounded-2xl border border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="py-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-trovo-green bg-trovo-green/10'
                        : 'text-gray-700 hover:bg-gray-100/70'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="border-t border-gray-200/70 mt-2 pt-2">
                <Link
                  to="/#early-access"
                  onClick={(e) => { handleEarlyAccessClick(e); setIsMobileMenuOpen(false) }}
                  className="block mx-2 my-2 text-center rounded-xl bg-trovo-green text-white px-4 py-3 font-semibold hover:bg-trovo-green/90"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
