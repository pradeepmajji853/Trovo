import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import WhyTrovoSection from '../components/WhyTrovoSection'
import EarlyAccessSection from '../components/EarlyAccessSection'

const HomePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 md:pt-20">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhyTrovoSection />
        <EarlyAccessSection />
      </div>
    </PageTransition>
  )
}

export default HomePage
