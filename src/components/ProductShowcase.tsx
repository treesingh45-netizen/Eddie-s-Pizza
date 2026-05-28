import { motion } from 'motion/react';

const scenarios = [
  {
    title: "Home Gatherings",
    visual: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613239218-0TD8WL8MFJAUHPR4GJN7/catering+grab+and+go.jpg?format=1000w",
    description: "Intimate dinners, family nights, lazy Sundays",
  },
  {
    title: "Commuting / Office",
    visual: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613253910-PK0VO9DS0ZUWXGTPF8OS/EddiesPizzaCart2.jpg?format=1000w",
    description: "Lunch breaks made memorable",
  },
  {
    title: "Outdoor Festivals",
    visual: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613346867-8FHF7ALWFW5G4I1UGOA9/wedding+2.png?format=1000w",
    description: "Festivals, weddings, markets, celebrations",
  }
];

export function ProductShowcase() {
  return (
    <section id="catering" className="py-24 md:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-forest mb-6">Wherever you <br className="hidden md:block"/> gather.</h2>
            <p className="text-brand-forest/70 text-lg leading-relaxed font-light">
              We bring the heat and the flavor to every table. Simple, perfectly executed pizzas served fresh from our mobile wood-fired ovens.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#menu" className="text-brand-terracotta uppercase tracking-widest text-sm font-medium hover:text-brand-forest transition-colors inline-flex items-center gap-2 group">
              View Menu
              <span className="w-10 h-[1px] bg-brand-terracotta group-hover:bg-brand-forest group-hover:w-12 transition-all duration-300"></span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {scenarios.map((scenario, index) => (
            <motion.div 
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-brand-forest/5">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={scenario.visual} 
                  alt={scenario.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-serif text-brand-forest mb-2">{scenario.title}</h3>
              <p className="text-brand-forest/60 font-light italic">{scenario.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
