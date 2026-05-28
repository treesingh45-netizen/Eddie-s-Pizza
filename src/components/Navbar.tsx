import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-brand-ivory/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] z-10">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1561233488530-43723X00TI1NPCUPR4RB/Website-Logo.png?format=1500w" 
            alt="Eddie's Pizza" 
            className={`transition-all duration-300 object-contain drop-shadow-sm ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'}`}
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {['Menu', 'Catering', 'Heritage', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm tracking-widest uppercase transition-colors ${
              isScrolled ? 'text-brand-forest/70 hover:text-brand-terracotta' : 'text-brand-ivory/80 hover:text-white'
            }`}>
              {item}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2.5 bg-brand-terracotta text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brand-terracotta/90 hover:shadow-[0_0_15px_rgba(185,76,56,0.3)] min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm ml-2"
          >
            Book
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-end">
          <button 
            className="min-w-[44px] min-h-[44px] flex items-center justify-center outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled || mobileMenuOpen ? 'text-brand-forest' : 'text-brand-ivory'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-brand-forest' : 'text-brand-ivory'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-ivory border-t border-brand-forest/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {['Menu', 'Catering', 'Heritage', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-serif text-brand-forest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-4 bg-brand-terracotta text-white text-sm tracking-wide uppercase w-full rounded-sm"
              >
                Book a Truck
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
