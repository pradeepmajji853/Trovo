import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import PreLaunchStats from '../components/PreLaunchStats'
import TestimonialsSection from '../components/TestimonialsSection'
import WhyTrovoSection from '../components/WhyTrovoSection'
import LaunchCountdown from '../components/LaunchCountdown'
import EarlyAccessSection from '../components/EarlyAccessSection'

const HomePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PreLaunchStats />
        <TestimonialsSection />
        <WhyTrovoSection />
        <LaunchCountdown />
        <EarlyAccessSection />
      </div>
    </PageTransition>
  )
}

export default HomePage
