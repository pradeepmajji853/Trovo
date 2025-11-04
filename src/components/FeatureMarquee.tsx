// filepath: /Users/majjipradeepkumar/Downloads/trovofi/Trovo/src/components/FeatureMarquee.tsx
import React from 'react'

// Use the five provided public images, portrait orientation
const imgs: string[] = [
  encodeURI('/iPhone 16 - 20.png'),
  encodeURI('/iPhone 16 - 21.png'),
  encodeURI('/iPhone 16 - 22.png'),
  encodeURI('/iPhone 16 - 30.png'),
  encodeURI('/welcome screen.png'),
]

const FeatureCard: React.FC<{ img: string }> = ({ img }) => (
  <figure className="relative h-full aspect-[9/16] overflow-hidden rounded-3xl shadow-lg bg-white">
    <img src={img} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
  </figure>
)

const FeatureMarquee: React.FC = () => {
  const track = [...imgs, ...imgs]
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-trovo-green-50 via-white to-trovo-green-100">
      {/* Left/Right fade masks */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Slightly reduced height for smaller cards */}
        <div className="relative h-[24rem] sm:h-[32rem] md:h-[36rem] overflow-hidden rounded-2xl">
          <div className="marquee-x" role="list" aria-label="Trovo scrolling photo gallery">
            {track.map((src, idx) => (
              <div role="listitem" key={`${src}-${idx}`} className="h-full shrink-0">
                <FeatureCard img={src} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-x {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 1rem; /* larger gap for bigger cards */
          width: max-content;
          height: 100%;
          will-change: transform;
          animation: trovo-marquee-x 38s linear infinite;
        }
        .marquee-x:hover { animation-play-state: paused; }
        @keyframes trovo-marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (min-width: 640px) {
          .marquee-x { gap: 1.25rem; animation-duration: 44s; }
        }
        @media (min-width: 1024px) {
          .marquee-x { gap: 1.5rem; animation-duration: 50s; }
        }
      `}</style>
    </section>
  )
}

export default FeatureMarquee