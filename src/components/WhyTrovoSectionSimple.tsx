import React from 'react'

const WhyTrovoSectionSimple: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Why Trovo?</h2>
        <p className="text-xl text-center text-gray-600">
          Your treasure unlocked in seconds. Built for India's digital-first users.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-gray-600">Credit Card Users Surveyed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">&lt;3s</div>
            <div className="text-gray-600">Average Redemption Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600">Digital-First Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyTrovoSectionSimple
