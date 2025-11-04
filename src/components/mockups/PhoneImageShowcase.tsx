import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PhoneImageShowcaseProps {
  autoPlayMs?: number
  className?: string
}

const IMAGES = [
  encodeURI('/iPhone 16 - 20.png'),
  encodeURI('/iPhone 16 - 30.png'),
]

const PhoneImageShowcase: React.FC<PhoneImageShowcaseProps> = ({ autoPlayMs = 4000, className = '' }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), autoPlayMs)
    return () => clearInterval(t)
  }, [autoPlayMs])

  return (
    <div className={`relative mx-auto ${className}`} aria-label="Trovo app preview on iPhone">
      {/* iPhone bezel */}
      <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1.5 sm:p-2 md:p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
          {/* Notch details */}
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-20 h-2 bg-black rounded-b-xl" aria-hidden />
          {/* Image crossfade */}
          <AnimatePresence mode="popLayout">
            <motion.img
              key={IMAGES[index]}
              src={IMAGES[index]}
              alt="Trovo product mockup"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0.0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>
      </div>
      {/* Top and bottom speaker details */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gray-600 rounded-full" aria-hidden />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full" aria-hidden />
    </div>
  )
}

export default PhoneImageShowcase