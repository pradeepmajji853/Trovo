import { useState, useEffect, type MouseEvent } from 'react'
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
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Data Security', path: '/data-security' },
  ]

  const handleEarlyAccessClick = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event?.preventDefault()
      const el = document.getElementById('early-access')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
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
        className={`relative w-[85%] sm:w-[90%] max-w-6xl mx-0 rounded-full border overflow-hidden backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 ease-in-out ${
          isScrolled
            ? 'bg-white/40 border-gray-200/70 ring-1 ring-black/10'
            : 'bg-white/30 border-gray-200/60 ring-1 ring-black/8'
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/10 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1 left-6 right-6 h-px rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-1 left-6 right-6 h-px rounded-full bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-trovo-green/15 via-blue-500/5 to-trovo-green/15 blur-lg opacity-60"
        />

        <div className="relative flex items-center justify-between px-6 sm:px-8 h-12 sm:h-14">
          <div className="flex items-center justify-start">
            <Link
              to="/"
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                if (location.pathname === '/') {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/50 rounded-xl"
            >
              <div className="relative">
                <img
                  src="/trovo.svg"
                  alt="Trovo Fi Logo - Revolutionary Fintech Platform"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(45%) sepia(78%) saturate(2476%) hue-rotate(92deg) brightness(101%) contrast(107%)'
                  }}
                />
              </div>
              <span
                className="text-xl sm:text-2xl font-bold text-trovo-green tracking-tight ml-2"
                aria-label="Trovo Fi — Your Rewards, Reimagined"
              >
                Trovo
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40 ${
                    location.pathname === item.path ? 'text-gray-900 bg-gray-100/60' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/40'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-trovo-green/10 rounded-full" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/#early-access"
              onClick={handleEarlyAccessClick}
              className="inline-flex items-center gap-2 rounded-full bg-trovo-green text-white px-4 py-2 text-sm font-semibold hover:bg-trovo-green/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-all duration-200"
              data-attr="cta:join-early-access"
            >
              <span>Join Early Access</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40 hover:bg-gray-100/40"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-pressed={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-4 h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}
              />
              <span
                className={`w-4 h-0.5 bg-gray-700 mt-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-4 h-0.5 bg-gray-700 mt-1 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" aria-modal="true" role="dialog">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            id="mobile-menu"
            className="absolute left-3 right-3 top-16 sm:top-20 rounded-2xl border border-gray-200/60 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 via-white/10 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1 left-4 right-4 h-px rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />
            
            <div className="py-2 relative">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-trovo-green bg-trovo-green/10'
                        : 'text-gray-700 hover:bg-gray-100/70 hover:text-gray-900'
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
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    handleEarlyAccessClick(event)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block mx-2 my-2 text-center rounded-xl bg-trovo-green text-white px-4 py-3 font-semibold hover:bg-trovo-green/90"
                  data-attr="cta:join-early-access"
                >
                  Join Early Access
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
