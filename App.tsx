
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Send, Clock, PlayCircle, MessageCircle, Star, Mail, Layout, Github, Twitter, Youtube } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { SERVICES } from './constants';
import { EditType } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [filteredServices, setFilteredServices] = useState(SERVICES);
  const [selectedTypeForBooking, setSelectedTypeForBooking] = useState<EditType | undefined>();
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToServices = useCallback(() => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToBooking = useCallback((type?: EditType) => {
    if (type) setSelectedTypeForBooking(type);
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Filtering Logic
  useEffect(() => {
    const query = (searchQuery || activeFilter).toLowerCase();
    
    if (!query) {
      setFilteredServices(SERVICES);
      return;
    }

    const matches = SERVICES.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.tags.some(tag => tag.toLowerCase().includes(query))
    );

    setFilteredServices(matches);
    
    // Auto-scroll if typing or selecting a filter
    if (query.length > 2 || activeFilter) {
      scrollToServices();
    }
  }, [searchQuery, activeFilter, scrollToServices]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToServices();
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveFilter('');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <HowItWorks />

        <div ref={servicesRef} className="scroll-mt-24">
          <Services 
            services={filteredServices} 
            isFiltered={!!(searchQuery || activeFilter)}
            onBook={scrollToBooking}
            onClearFilters={clearFilters}
          />
        </div>

        <div ref={bookingRef} className="scroll-mt-24">
          <BookingForm selectedType={selectedTypeForBooking} />
        </div>

        <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wider mb-8 flex items-center justify-center gap-3">
            <Star className="text-yellow-400 fill-yellow-400" /> Reviews
          </h2>
          <div className="p-12 border-2 border-dashed border-zinc-800 rounded-3xl bg-zinc-900/30">
            <h3 className="text-2xl font-bold mb-4">🚧 Coming Soon</h3>
            <p className="text-zinc-400">Client reviews will appear here soon. Be the first to leave one!</p>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-zinc-900">
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wider mb-8 flex items-center justify-center gap-3">
            <Mail className="text-blue-500" /> Contact Us
          </h2>
          <div className="p-12 border-2 border-dashed border-zinc-800 rounded-3xl bg-zinc-900/30">
            <h3 className="text-2xl font-bold mb-4">🚧 Coming Soon</h3>
            <p className="text-zinc-400">For now, use the Book Me section for any inquiries.</p>
          </div>
        </section>

        <section className="py-24 px-6 bg-zinc-900/50 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bebas tracking-wider mb-8">
              Ready to Get Your Edit?
            </h2>
            <button 
              onClick={() => scrollToBooking()}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/20 uppercase tracking-widest"
            >
              BOOK ME NOW
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
