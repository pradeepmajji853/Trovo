import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import WhyTrovoSection from '../components/WhyTrovoSection'
import EarlyAccessSection from '../components/EarlyAccessSection'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <PageTransition>
      <div className="relative">
        <HeroSection />
        <motion.div 
          className="relative bg-white z-30"
          initial={{ scale: 0.8, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3 
          }}
        >
          <ProblemSection />
          <SolutionSection />
          <WhyTrovoSection />
          <EarlyAccessSection />
        </motion.div>
      </div>
    </PageTransition>
  )
}

export default HomePage
