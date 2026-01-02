
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Check } from 'lucide-react';
import { BookingFormData, EditType } from '../types';

interface BookingFormProps {
  selectedType?: EditType;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedType }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    discord: '',
    type: 'short',
    description: '',
    deadline: '',
    budget: '',
    footageLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setFormData(prev => ({ ...prev, type: selectedType }));
    }
  }, [selectedType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Netlify Forms AJAX Submission
    const body = new URLSearchParams();
    body.append('form-name', 'booking');
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value || '');
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        discord: '',
        type: selectedType || 'short',
        description: '',
        deadline: '',
        budget: '',
        footageLink: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again or contact me directly.");
    }
  };

  const inputClasses = "w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-5 py-4 focus:border-purple-500 outline-none transition-colors placeholder:text-zinc-600";
  const labelClasses = "block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 ml-1";

  return (
    <section id="book" className="py-24 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wider">Book Me for an Edit</h2>
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-medium">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            Your request is sent straight to my Discord.
          </div>
        </div>

        <form 
          name="booking" 
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="grid md:grid-cols-2 gap-8 bg-zinc-900/50 p-8 md:p-12 rounded-[3rem] border border-zinc-800"
        >
          {/* Netlify hidden field */}
          <input type="hidden" name="form-name" value="booking" />

          <div className="space-y-6">
            <div>
              <label className={labelClasses}>Name / Username</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="How should I call you?"
                className={inputClasses}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className={labelClasses}>Discord Username</label>
              <input 
                required
                name="discord"
                type="text" 
                placeholder="User#0000"
                className={inputClasses}
                value={formData.discord}
                onChange={e => setFormData({...formData, discord: e.target.value})}
              />
            </div>
            <div>
              <label className={labelClasses}>Edit Type</label>
              <select 
                name="type"
                className={inputClasses}
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value as EditType})}
              >
                <option value="short">Short Edit (TikTok/Shorts)</option>
                <option value="long">Long Edit (YouTube/Gaming)</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className={labelClasses}>Footage Link</label>
              <input 
                required
                name="footageLink"
                type="url" 
                placeholder="Drive, Dropbox, WeTransfer..."
                className={inputClasses}
                value={formData.footageLink}
                onChange={e => setFormData({...formData, footageLink: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Deadline</label>
                <input 
                  required
                  name="deadline"
                  type="date" 
                  className={inputClasses}
                  value={formData.deadline}
                  onChange={e => setFormData({...formData, deadline: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClasses}>Budget (optional)</label>
                <input 
                  name="budget"
                  type="text" 
                  placeholder="$15"
                  className={inputClasses}
                  value={formData.budget}
                  onChange={e => setFormData({...formData, budget: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className={labelClasses}>Edit Description</label>
              <textarea 
                required
                name="description"
                rows={3}
                placeholder="Describe your vision, references, or specific vibes..."
                className={inputClasses}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-6 rounded-2xl font-bold text-xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl ${
                isSuccess 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="w-6 h-6" />
                  Request Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  BOOK ME NOW
                </>
              )}
            </button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Sent to Discord</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> I get pinged instantly</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> I reply via Discord</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
