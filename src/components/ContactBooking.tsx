import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ContactBooking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-brand-forest text-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-5/12 flex flex-col justify-center">
          <span className="text-brand-olive uppercase tracking-[0.2em] text-sm mb-6 block">Inquire Now</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            Bring the <br className="hidden md:block"/> legacy to <br className="hidden md:block" /> your table.
          </h2>
          <p className="text-brand-ivory/70 text-lg font-light mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
            Serving NYC, New Jersey, Connecticut, and the greater Tri-State Area. Fill out the details, and we'll handle the fire.
          </p>
          <div className="mt-auto hidden md:block">
            <p className="text-sm uppercase tracking-widest text-brand-olive mb-2">Direct Contact</p>
            <p className="text-xl font-serif">516-354-9780</p>
          </div>
        </div>

        <div className="md:w-7/12">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#2D3C33] p-8 md:p-12 shadow-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2 text-left">
                <label className="text-xs uppercase tracking-widest text-brand-ivory/60">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-ivory/20 pb-2 text-brand-ivory focus:outline-none focus:border-brand-crust transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs uppercase tracking-widest text-brand-ivory/60">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-brand-ivory/20 pb-2 text-brand-ivory focus:outline-none focus:border-brand-crust transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2 text-left">
                <label className="text-xs uppercase tracking-widest text-brand-ivory/60">Event Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-brand-ivory/20 pb-2 text-brand-ivory focus:outline-none focus:border-brand-crust transition-colors placeholder-transparent"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs uppercase tracking-widest text-brand-ivory/60">Location & Guest Count</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-ivory/20 pb-2 text-brand-ivory focus:outline-none focus:border-brand-crust transition-colors"
                  placeholder="Brooklyn, ~50 guests"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-brand-terracotta text-white uppercase tracking-[0.15em] text-sm font-medium hover:bg-[#A33D2A] transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Request Booking</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              
              {/* Pulse / glow element */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-brand-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </button>
          </motion.form>
          
          <div className="mt-10 md:hidden flex justify-between items-center px-4">
             <div>
                <p className="text-xs uppercase tracking-widest text-brand-olive mb-1 text-left">Direct Call</p>
                <p className="font-serif">516-354-9780</p>
             </div>
             <div>
                <p className="text-xs uppercase tracking-widest text-brand-olive mb-1 text-right">Location</p>
                <p className="font-serif text-right text-sm">NYC & Suburbs</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
