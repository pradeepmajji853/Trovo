import React, { useState } from 'react'

const EarlyAccessSectionSimple: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="py-16 bg-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Be among the first to unlock your treasure</h2>
        <p className="text-xl mb-8">Get notified when we launch and be the first to experience the future of fintech</p>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-500 px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <div className="bg-white bg-opacity-20 p-6 rounded max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">You're In! 🎉</h3>
            <p>Welcome to the treasure hunt! We'll notify you when Trovo launches.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default EarlyAccessSectionSimple
