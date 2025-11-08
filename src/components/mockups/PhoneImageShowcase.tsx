import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PhoneImageShowcaseProps { autoPlayMs?: number; className?: string }

// Use Rectangle SVG mockups from public folder
const IMAGES = [
  '/Rectangle.svg',
  '/Rectangle-1.svg',
  '/Rectangle-2.svg',
  '/Rectangle-3.svg',
  '/Rectangle-4.svg',
  '/Rectangle-5.svg'
].map(encodeURI)

const PhoneImageShowcase: React.FC<PhoneImageShowcaseProps> = ({ autoPlayMs = 4000, className = '' }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), autoPlayMs)
    return () => clearInterval(t)
  }, [autoPlayMs])

  return (
    <div className={`relative inline-block ${className}`} aria-label="Trovo app preview">
      <AnimatePresence mode="wait">
        <motion.img
          key={IMAGES[index]}
          src={IMAGES[index]}
          alt="Trovo product mockup"
          className="block w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[22rem] xl:w-[24rem] h-auto select-none drop-shadow-sm"
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.995 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          draggable={false}
        />
      </AnimatePresence>
    </div>
  )
}

export default PhoneImageShowcase