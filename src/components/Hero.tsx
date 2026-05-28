import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/9993754/pexels-photo-9993754.jpeg')" }}
      >
        <div className="absolute inset-0 bg-brand-forest/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-brand-ivory flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 drop-shadow-md">
            The Original <br className="hidden md:block"/> Bar Pie, Elevated.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl font-light text-brand-ivory/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-sm"
        >
          Since the early 1930s, Eddie's Pizza has been crafting the original "bar pie" — a 10-inch personal pizza made with honest ingredients, simple techniques, and love. Now mobile, we bring New Hyde Park's legacy to your backyard, festival, or city event across NYC and the Tri-State Area.
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          href="#booking"
          className="px-10 py-4 bg-brand-terracotta text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-terracotta/90 hover:shadow-[0_0_20px_rgba(185,76,56,0.4)] min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-sm group relative overflow-hidden"
        >
          <span className="relative z-10">Book a Truck</span>
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-brand-ivory/60"
      >
        <span className="text-[10px] tracking-widest uppercase mb-3">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-ivory/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
