import { useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { ISourceOptions } from 'tsparticles-engine'

const ParticlesBackground = () => {
  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 35, density: { enable: true, area: 800 } },
      color: { value: ['#1DB954', '#34d399', '#10b981'] },
      opacity: { value: 0.12 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'out' } },
      links: { enable: false },
      shape: { type: 'circle' }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } }
    },
    pauseOnOutsideViewport: true,
    reduceDuplicates: true
  }), [])

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  )
}

export default ParticlesBackground