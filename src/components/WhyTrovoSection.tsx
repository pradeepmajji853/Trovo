const WhyTrovoSection = () => {
  const stats = [
    { number: "₹15,000+", label: "Saved Annually", description: "Average user savings per year" },
    { number: "5 Mins", label: "Setup Time", description: "Get started instantly" },
    { number: "Zero", label: "Hidden Fees", description: "Complete transparency" },
    { number: "24/7", label: "Support", description: "Always here to help" },
  ]

  const benefits = [
    { title: "Stop Losing Money", description: "Your credit card points are expiring. Your UPI payments earn nothing. We fix both problems." },
    { title: "Convert Everything to Cash", description: "Turn all your credit card points into real money. No more hunting for redemption options." },
    { title: "Earn on Every UPI Payment", description: "Get cashback on groceries, bills, restaurants - every single UPI transaction pays you back." },
    { title: "One App for Everything", description: "Manage all your cards, track spending, earn rewards, and save money from a single place." },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-trovo-green-50 via-white to-trovo-green-100"></div>
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">The Numbers Don't Lie</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results, real savings, real peace of mind. Here's what happens when you stop leaving money on the table
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-trovo-green/20">
                <div className="text-3xl md:text-4xl font-bold text-trovo-green mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-trovo-green/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyTrovoSection