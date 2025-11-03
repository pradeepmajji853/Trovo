import NativeSEO from '../components/NativeSEO'

const TrovoFiLandingSection = () => {
  return (
    <>
      <NativeSEO 
        title="Trovo Fi - India's #1 Fintech App for Credit Card Points & Digital Payments"
        description="Trovo Fi revolutionizes how Indians manage finances. Convert credit card points to instant cash, earn UPI cashback, and enjoy seamless digital payments. Join 10,000+ satisfied users."
        keywords="trovo fi, trovo fintech, trovo app india, credit card points conversion, UPI cashback, digital payments india, fintech app, instant rewards, money management, financial technology india"
      />
      <section className="bg-gradient-to-r from-trovo-green/5 to-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the Future of <span className="text-trovo-green">Fintech</span> with Trovo Fi
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join over <strong>10,000+ Indians</strong> who trust <strong>Trovo Fi</strong> for their financial needs. 
              Transform your credit card points, earn instant rewards, and enjoy seamless digital payments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">India's #1 Choice</h3>
                <p className="text-gray-600">Most trusted fintech platform for credit card optimization</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
                <p className="text-gray-600">Convert points to cash in under 4 clicks</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
                <p className="text-gray-600">RBI compliant with complete data protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrovoFiLandingSection
