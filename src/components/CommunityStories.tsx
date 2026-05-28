import { motion } from 'motion/react';

const stories = [
  {
    author: "Sarah & James",
    quote: "Eddie's truck at our seaside wedding – the bar pie was the star! The olive green setup blended perfectly with our aesthetic.",
    image: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613350472-4HVWSWFKUDG01WSK5FR1/wedding+3.png?format=1000w",
    colSpan: "md:col-span-2",
  },
  {
    author: "Marco, NYC",
    quote: "Our office lunch game changed. Perfect sizes, perfect crust.",
    image: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613689707-KSUIZNZKEEEYO50555NW/untitled-73.jpg?format=1000w",
    colSpan: "md:col-span-1",
  },
  {
    author: "Elena & Family",
    quote: "Weekends aren't the same without the truck parked at the local market.",
    image: "https://images.squarespace-cdn.com/content/v1/5d0e3d64bcdca40001f9401c/1562613773498-67TT39MHR8N9ER6F23D4/untitled-109.jpg?format=1000w",
    colSpan: "md:col-span-3",
  }
];

export function CommunityStories() {
  return (
    <section className="py-24 md:py-32 bg-[#F3F0E6] text-brand-forest">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-terracotta uppercase tracking-[0.2em] text-sm mb-4 block">Real Moments</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Shared memories.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative overflow-hidden group ${story.colSpan}`}
            >
              <img 
                src={story.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Community moment"
              />
              <div className="absolute inset-0 bg-brand-forest/40 group-hover:bg-brand-forest/50 transition-colors duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col justify-end h-full">
                <p className="text-brand-ivory text-xl md:text-2xl font-serif italic mb-4 leading-snug drop-shadow-md">"{story.quote}"</p>
                <span className="text-brand-ivory/80 text-sm tracking-wide uppercase">— {story.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-brand-olive hover:text-brand-forest transition-colors font-medium tracking-wide">
            Share Your Eddie's Moment
            <span className="opacity-60">#EddiesPizzaTruck</span>
          </a>
        </div>
      </div>
    </section>
  );
}
