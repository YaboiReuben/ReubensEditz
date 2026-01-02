
import React from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;
  activeFilter: string;
  setActiveFilter: (val: string) => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, onSearch, activeFilter, setActiveFilter }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 w-full text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-bebas tracking-wider leading-[0.9] gradient-text animate-in slide-in-from-bottom duration-700">
            Find the Edit You Need.
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-widest uppercase animate-in slide-in-from-bottom duration-1000">
            TikTok • YouTube • Gaming • Movie • Meme • Custom
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto group">
          <form onSubmit={onSearch} className="relative">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search: TikTok edit, Gaming montage, Cinematic..."
              className="w-full bg-zinc-900/50 border-2 border-zinc-800 rounded-3xl py-6 px-8 pl-16 text-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all group-hover:border-zinc-700 placeholder:text-zinc-600"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-500" />
            <button 
              type="submit"
              className="absolute right-3 top-3 bottom-3 px-8 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm"
            >
              Find My Edit
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(activeFilter === cat.value ? '' : cat.value)}
              className={`px-6 py-3 rounded-2xl border transition-all flex items-center gap-2 font-semibold ${
                activeFilter === cat.value 
                ? 'bg-purple-500 border-purple-400 text-white' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
