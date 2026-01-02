
import React from 'react';
import { Check, ArrowRight, FilterX } from 'lucide-react';
import { Service, EditType } from '../types';

interface ServicesProps {
  services: Service[];
  isFiltered: boolean;
  onBook: (type: EditType) => void;
  onClearFilters: () => void;
}

const Services: React.FC<ServicesProps> = ({ services, isFiltered, onBook, onClearFilters }) => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wider">Services & Prices</h2>
          <p className="text-zinc-500">Fast delivery, clean edits, and viral potential guaranteed.</p>
        </div>
        {isFiltered && (
          <button 
            onClick={onClearFilters}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1"
          >
            <FilterX className="w-4 h-4" /> Clear filters
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {services.length > 0 ? (
          services.map((service) => (
            <div 
              key={service.id} 
              className={`flex flex-col bg-zinc-900/50 border-2 rounded-[2.5rem] p-10 transition-all duration-500 ${
                isFiltered 
                ? 'border-purple-500 scale-105 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]' 
                : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-2">
                  <div className="text-5xl">{service.icon}</div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">{service.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Starts at</span>
                  <div className="text-4xl font-bebas text-purple-500">{service.price}</div>
                </div>
              </div>

              <ul className="space-y-4 flex-grow mb-12">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-purple-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onBook(service.id)}
                className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors uppercase tracking-widest"
              >
                Book {service.title}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-2 py-20 text-center space-y-4 bg-zinc-900/30 border-2 border-dashed border-zinc-800 rounded-[2.5rem]">
            <p className="text-zinc-500 text-xl italic">No services found matching your search...</p>
            <button 
              onClick={onClearFilters}
              className="px-8 py-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            >
              Show all services
            </button>
          </div>
        )}
      </div>

      <p className="mt-12 text-center text-zinc-500 text-sm italic">
        * Final price depends on edit style, complexity, and deadline requirements.
      </p>
    </section>
  );
};

export default Services;
