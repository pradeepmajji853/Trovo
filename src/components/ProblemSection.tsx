import React from 'react';
import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

const ProblemSection: React.FC = () => {
  const problems = [
    { title: 'Points go unused.', description: 'Complex programs lead to value left on the table.' },
    { title: 'UPI rarely rewards.', description: 'Everyday payments don’t feel rewarding.' },
    { title: 'Card sharing feels risky.', description: 'Security and tracking are hard.' },
  ]

  return (
    <section id="problem" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="relative container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <FadeInSection>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The problem</h2>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-300" aria-hidden />
                    <div>
                      <div className="font-semibold text-gray-900">{p.title}</div>
                      <p className="text-gray-600">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">The promise</h3>
              <p className="mt-3 text-gray-700">Trovo turns complexity into effortless value.</p>
              <a href="/how-it-works" className="mt-6 inline-flex items-center text-trovo-green font-semibold hover:underline">See how it works →</a>
            </div>
          </motion.div>
        </div>
      </div>
      <div aria-hidden className="h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default ProblemSection;
