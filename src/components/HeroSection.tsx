import { useEffect, useRef, useState } from 'react'
import TrovoPhoneMockup from './mockups/TrovoPhoneMockup'

const HeroSection: React.FC = () => {
  // Scroll-driven blur effect like About hero
  const sectionRef = useRef<HTMLElement | null>(null)
  const [fx, setFx] = useState({ contentOpacity: 1, contentScale: 1, bgOpacity: 1, blur: 0 })

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // Subtle effect over ~50% of viewport
      const span = Math.max(vh * 0.5, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), span)
      const p = Math.min(Math.max(scrolled / span, 0), 1)
      setFx({
        contentOpacity: 1 - p,
        contentScale: 1 + p * 0.1,
        bgOpacity: 1 - p,
        blur: p * 10
      })
    }
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden flex flex-col">
      {/* Background accents with fading opacity */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: fx.bgOpacity, transition: 'opacity 120ms linear' }}>
        <div className="absolute -top-40 -right-40 w-64 h-64 bg-trovo-green opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-trovo-green-light opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Spacer to avoid overlapping the floating navbar (approx 6rem) */}
      <div aria-hidden className="shrink-0 h-20 md:h-24" />

      <div className="container-custom flex-1">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-0">
          {/* Left Content */}
          <header className="text-center lg:text-left overflow-hidden">
            {/* Content wrapper with blur/scale/opacity applied */}
            <div style={{
              opacity: fx.contentOpacity,
              transform: `scale(${fx.contentScale})`,
              filter: `blur(${fx.blur}px)`,
              transformOrigin: '50% 20% 0',
              transition: 'opacity 120ms linear, filter 120ms linear, transform 120ms linear'
            }}>
              <div className="mb-5">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-3">
                  {['Do','you','want','your','treasure','back?'].map((w) => (
                    <h1 key={w} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block">{w}</h1>
                  ))}
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-trovo-green mb-4">Reclaim your financial power</div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong>Trovo Fi</strong> transforms your unused credit card points into instant rewards. Experience guaranteed UPI cashback, seamless tap-to-pay convenience, and safely share financial resources with trusted friends. Join <strong>Trovo</strong> - India's revolutionary fintech platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="btn-primary text-base md:text-lg px-7 py-3.5">Join Early Access</button>
                <button className="border-2 border-trovo-green text-trovo-green font-semibold px-7 py-3.5 rounded-full hover:bg-trovo-green hover:text-white transition-all duration-300">Learn More</button>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Users Surveyed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">4 Clicks</div>
                  <div className="text-sm md:text-base text-gray-600">Redemption Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">100%</div>
                  <div className="text-sm md:text-base text-gray-600">Digital First</div>
                </div>
              </div>
            </div>
          </header>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end overflow-hidden">
            <div className="scale-90 md:scale-100">
              <div
                className="relative overflow-hidden"
                style={{
                  opacity: fx.contentOpacity,
                  transform: `scale(${fx.contentScale})`,
                  filter: `blur(${fx.blur}px)`,
                  transformOrigin: '50% 20% 0',
                  transition: 'opacity 120ms linear, filter 120ms linear, transform 120ms linear'
                }}
              >
                <TrovoPhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
