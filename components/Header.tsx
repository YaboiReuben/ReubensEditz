
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Prices', href: '#services' },
    { label: 'Book Me', href: '#book' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg rotate-3 group-hover:rotate-6 transition-transform">
            <span className="font-bebas text-2xl tracking-tighter">RE</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-2xl tracking-widest leading-none">ReubensEditz</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Fast. Clean. Viral.</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="#book"
            className="px-5 py-2 bg-white text-black font-bold text-xs rounded-full uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Book Now
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
