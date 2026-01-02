
import React from 'react';
import { Twitter, Youtube, MessageCircle, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="bg-white text-black font-bebas text-xl px-2 rounded">RE</div>
            <span className="font-bebas text-3xl tracking-widest">ReubensEditz</span>
          </div>
          <p className="text-zinc-500 max-w-xs">
            Professional high-quality editing services for creators, gamers, and businesses.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="p-4 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} ReubensEditz. All rights reserved.
          </p>
        </div>

        <nav className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
