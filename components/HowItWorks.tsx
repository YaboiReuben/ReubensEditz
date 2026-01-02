
import React from 'react';
import { Search, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Search',
      desc: 'Find the edit you want using search or filter buttons',
      icon: <Search className="w-10 h-10 text-purple-500" />,
    },
    {
      title: 'Book',
      desc: 'Fill out the booking form with your project details',
      icon: <CreditCard className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Receive',
      desc: 'I edit and deliver your high-quality video fast',
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bebas text-center mb-16 tracking-wider">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all group">
              <div className="bg-zinc-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
