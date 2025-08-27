import { motion } from 'framer-motion'
import NativeSEO from '../components/NativeSEO'

const TrovoFiLandingSection = () => {
  return (
    <>
      <NativeSEO 
        title="Trovo Fi - India's #1 Fintech App for Credit Card Points & Digital Payments"
        description="Trovo Fi revolutionizes how Indians manage finances. Convert credit card points to instant cash, earn UPI cashback, and enjoy seamless digital payments. Join 10,000+ satisfied users."
        keywords="trovo fi, trovo fintech, trovo app india, credit card points conversion, UPI cashback, digital payments india, fintech app, instant rewards, money management, financial technology india"
      />
      
      {/* SEO-optimized hidden content for better indexing */}
      <div className="sr-only">
        <h1>Trovo Fi - Revolutionary Fintech Platform</h1>
        <h2>Transform Your Credit Card Points with Trovo</h2>
        <h3>Why Choose Trovo Fi for Digital Payments?</h3>
        <p>
          Trovo Fi is India's most innovative fintech application that helps users unlock the true potential 
          of their unused credit card points. Our platform provides instant rewards, guaranteed UPI cashback, 
          and seamless digital payment solutions designed specifically for Indian consumers.
        </p>
        <p>
          With Trovo, you can convert your accumulated credit card points into real cash rewards within 
          seconds. Our advanced fintech technology ensures secure transactions, competitive cashback rates, 
          and user-friendly interface that makes financial management effortless.
        </p>
        <p>
          Join thousands of Indians who have already discovered the power of Trovo Fi. Experience the 
          future of financial technology with our comprehensive suite of services including point conversion, 
          UPI payments, tap-to-pay functionality, and secure money sharing features.
        </p>
        
        {/* FAQ Section for SEO */}
        <section>
          <h3>Frequently Asked Questions about Trovo Fi</h3>
          <div>
            <h4>What is Trovo Fi?</h4>
            <p>Trovo Fi is a revolutionary fintech platform that transforms unused credit card points into instant rewards and provides seamless digital payment solutions for Indian users.</p>
          </div>
          <div>
            <h4>How does Trovo help with credit card points?</h4>
            <p>Trovo Fi converts your accumulated credit card points into real cash rewards, allowing you to maximize the value of your credit card usage and earn more from every transaction.</p>
          </div>
          <div>
            <h4>Is Trovo Fi safe and secure?</h4>
            <p>Yes, Trovo Fi follows all RBI guidelines, implements bank-grade security measures, and ensures all user data is stored securely in India with complete data localization compliance.</p>
          </div>
          <div>
            <h4>What makes Trovo different from other fintech apps?</h4>
            <p>Trovo Fi focuses specifically on credit card optimization, offers guaranteed UPI cashback, provides instant point conversion, and includes unique features like secure money sharing and tap-to-pay convenience.</p>
          </div>
        </section>
        
        {/* Local SEO Content */}
        <section>
          <h3>Trovo Fi Services Across India</h3>
          <p>Trovo Fi serves customers across major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and many more. Our fintech platform is designed to meet the unique financial needs of Indian consumers.</p>
        </section>
        
        {/* Keywords for better indexing */}
        <section>
          <h3>Trovo Fi Features</h3>
          <ul>
            <li>Credit card points conversion</li>
            <li>Instant rewards and cashback</li>
            <li>UPI digital payments</li>
            <li>Secure money sharing</li>
            <li>Tap-to-pay technology</li>
            <li>Financial management tools</li>
            <li>Real-time transaction tracking</li>
            <li>Multi-bank compatibility</li>
            <li>24/7 customer support</li>
            <li>RBI compliant platform</li>
          </ul>
        </section>
      </div>
      
      {/* Visible content optimization */}
      <motion.section 
        className="bg-gradient-to-r from-trovo-green/5 to-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the Future of <span className="text-trovo-green">Fintech</span> with Trovo Fi
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join over <strong>10,000+ Indians</strong> who trust <strong>Trovo Fi</strong> for their financial needs. 
              Transform your credit card points, earn instant rewards, and enjoy seamless digital payments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">India's #1 Choice</h3>
                <p className="text-gray-600">Most trusted fintech platform for credit card optimization</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
                <p className="text-gray-600">Convert points to cash in under 4 clicks</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
                <p className="text-gray-600">RBI compliant with complete data protection</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default TrovoFiLandingSection
