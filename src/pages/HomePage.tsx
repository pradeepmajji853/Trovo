import PageTransition from '../components/PageTransition'
import HeroSection from '../components/HeroSectionNew'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSectionNew'
import WhyTrovoSection from '../components/WhyTrovoSection'
import EarlyAccessSection from '../components/EarlyAccessSection'

const HomePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
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
