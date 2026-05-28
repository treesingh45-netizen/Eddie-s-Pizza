import { motion } from 'motion/react';
import { MapPin, Beer, Utensils, Users, Car, Accessibility, Banknote } from 'lucide-react';

const amenities = [
  { icon: Beer, label: "Full Bar" },
  { icon: Utensils, label: "Waiter Service" },
  { icon: Users, label: "Group & Child Friendly" },
  { icon: Car, label: "Take-out + Parking Lot" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
  { icon: Banknote, label: "Cash Only" },
];

export function RestaurantHeritage() {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-brand-ivory relative border-t border-brand-crust/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Text & Heritage */}
          <div className="flex flex-col justify-center">
            <span className="text-brand-olive uppercase tracking-[0.2em] text-sm mb-6 block">The Original</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-forest mb-8 leading-tight">
              Where it all started.
            </h2>
            <p className="text-brand-forest/70 text-lg leading-relaxed font-light mb-12">
              Before the trucks hit the road, Eddie's was a staple in New Hyde Park. Our brick-and-mortar restaurant remains the beating heart of our legacy—serving up the same bar pies since the 1930s. Step in, grab a booth, and taste history.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
              {amenities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-brand-forest/80"
                  >
                    <Icon className="w-5 h-5 text-brand-crust stroke-[1.5]" />
                    <span className="text-sm tracking-wide">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-white/50 border border-brand-crust/20 p-8 shadow-sm">
              <h4 className="font-serif text-xl text-brand-forest mb-4">Hours</h4>
              <ul className="space-y-2 text-brand-forest/70 font-light text-sm tracking-wide">
                <li className="flex justify-between border-b border-brand-crust/10 pb-2">
                  <span>Thursday – Tuesday</span>
                  <span>11:00 AM – 10:00 PM</span>
                </li>
                <li className="flex justify-between pt-2 text-brand-terracotta">
                  <span>Wednesday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visuals - Map Representation */}
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-[#EFECE5] flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1561255254057-UF3D3A1DJQ56H877FH6K/Restaurant-Background.jpg?format=2500w"
                alt="Restaurant Front"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3
                  }}
                  className="bg-brand-ivory text-brand-terracotta p-4 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.15)] mb-4"
                >
                  <MapPin className="w-8 h-8 stroke-[1.5] fill-brand-ivory" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-brand-ivory/95 backdrop-blur-md px-8 py-5 text-center shadow-lg transform translate-y-4"
                >
                  <p className="font-serif text-xl text-brand-forest mb-1">Eddie's Pizza</p>
                  <p className="text-sm font-light text-brand-forest/70 uppercase tracking-widest">2048 Hillside Ave</p>
                  <p className="text-xs font-light text-brand-forest/50 tracking-widest mt-1">New Hyde Park, NY 11040</p>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
