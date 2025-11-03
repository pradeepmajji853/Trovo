import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Wasted Credit Card Points",
      description: "Credit card points are confusing and often expire unused. Indians lose over ₹8,000 crore worth of rewards annually.",
      impact: "₹8,000+ crore lost annually"
    },
    {
      title: "UPI Without Rewards", 
      description: "UPI payments rarely include rewards unless using a credit card on UPI. Given average annual spending, users may be missing out on ₹1,500+ in cashback or points per month.",
      impact: "₹1,500+ missed monthly"
    },
    {
      title: "Unsafe Card Sharing",
      description: "Friends ask to use your credit card for better rewards but sharing cards is risky and tracking payments is a nightmare.",
      impact: "Security risks daily"
    }
  ];

  return (
    <section id="problem" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-trovo-green-50"></div>
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Your Money Is Bleeding</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, millions of Indians lose thousands of rupees to expired rewards, missed cashback, and unsafe financial decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{problem.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-4">{problem.description}</p>
              <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 text-red-700 text-xs font-semibold px-4 py-2 rounded-full mx-auto block text-center">
                {problem.impact}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200/50">
            <span className="text-sm font-medium">But there's a better way</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
