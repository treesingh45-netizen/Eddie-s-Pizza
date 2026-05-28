import { motion } from 'motion/react';
import { Leaf, Flame, Package } from 'lucide-react';

export function Craftsmanship() {
  return (
    <section className="py-24 md:py-32 bg-brand-forest text-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-brand-olive uppercase tracking-[0.2em] text-sm mb-6 block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory mb-8 leading-tight">
              Honest ingredients.<br />Time-honored craft.
            </h2>
            <p className="text-brand-ivory/70 text-lg leading-relaxed font-light mb-12">
              Great pizza doesn't need to be complicated. It needs care. We source the best natural ingredients and prepare our dough by hand every single day, keeping our footprint small and our quality uncompromising.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="mt-1 text-brand-crust">
                  <Leaf className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-brand-ivory mb-2">Locally Sourced</h4>
                  <p className="text-brand-ivory/60 font-light text-sm">Organic flour, locally vine-ripened tomatoes, and fresh torn basil.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1 text-brand-crust">
                  <Flame className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-brand-ivory mb-2">Handmade Daily</h4>
                  <p className="text-brand-ivory/60 font-light text-sm">Targeted fermentation, hand-kneaded dough, and sauce from scratch. Baked in our signature wood-fired oven.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="mt-1 text-brand-crust">
                  <Package className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-brand-ivory mb-2">Low Waste</h4>
                  <p className="text-brand-ivory/60 font-light text-sm">Served in 100% recyclable, eco-friendly containers right out of the truck window.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] lg:aspect-square">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 right-10 bottom-10 bg-brand-crust/20"
            ></motion.div>
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613293963-K57ISLD41IW86Z9Q9LF3/martin+5+eddies+pizza.jpg?format=1500w" 
              alt="Hands kneading fresh pizza dough"
              className="absolute inset-4 sm:inset-8 object-cover w-[calc(100%-2rem)] h-[calc(100%-2rem)] shadow-2xl"
            />
            {/* Superimposed small image element */}
            <motion.img 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src="https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613640556-I2R38YPKI93TA1GJTSYG/untitled-259.jpg?format=1000w" 
              alt="Fresh basil and tomatoes"
              className="absolute -right-4 md:-right-10 bottom-12 w-1/3 aspect-square object-cover shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-4 border-brand-forest"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
