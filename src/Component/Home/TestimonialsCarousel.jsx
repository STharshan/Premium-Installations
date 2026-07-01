import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Patrick Nawrocki",
      role: "UX Manager at Superhabits",
      quote: `"The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!"`,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Pri Patel",
      role: "Product Designer at Lightdash",
      quote: `"DesignMe has completely revitalized our product interface structure. The workflow is incredibly linear, clear, and execution speed exceeded every milestone we benchmarked initially."`,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Rob West",
      role: "CEO of Kingdom Advisors",
      quote: `"DesignMe has greatly exceeded our expectations. The communication is always excellent, the turnaround is extremely quick, and the designs are fresh, innovative, and spot on!"`,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Dom Ty",
      role: "CEO of Kraftco",
      quote: `"The level of dedication is rare. They didn't just build layout specs; they actively provided architecture direction that optimized our core system workflow seamlessly."`,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Infinite Autoplay Loop Engine
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Infinite carousel shifting slice array
  const visibleCards = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-24 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Header Layout directly matching image_8ff622.jpg */}
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8a8a8a] block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#0f0f0f] leading-[1.1]">
            Don't take our word for it!<br />
            <span className="text-[#2b2b2b]">Hear it from our partners.</span>
          </h2>
        </div>

        {/* Carousel Window Track */}
        <div className="relative w-full overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((item, idx) => {
                const isHovered = hoveredCard === item.id;

                return (
                  <motion.div
                    key={`${item.id}-${idx}`}
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      setHoveredCard(item.id);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                      setHoveredCard(null);
                    }}
                    className="relative h-[480px] w-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-sm border border-[#c6c5c1] cursor-pointer bg-white"
                  >
                    {/* Background Dynamic Image Transition Layer */}
                    <div 
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 ${
                        isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                      style={{ backgroundImage: `url(${item.bgImage})` }}
                    />

                    {/* Dark Tint overlay for media background clarity */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-b from-[#fafaf8]/20 via-[#ebe7e3]/35 to-[#fafaf8]/80 transition-opacity duration-500 z-10 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* TOP: Avatar Metadata Row */}
                    <div className="relative z-20 flex items-center justify-between">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className={`w-12 h-12 rounded-full object-cover border-2 transition-colors duration-300 ${
                          isHovered ? 'border-[#2b2b2b]/80' : 'border-[#0f0f0f]'
                        }`}
                      />
                      
                      {/* Play Action Indicator overlay visible only on Hover */}
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-10 h-10 rounded-full bg-[#fafaf8]/80 backdrop-blur-md flex items-center justify-center text-[#0f0f0f]"
                        >
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER: Description Quote Block */}
                    <div className="relative z-20 mt-6 flex-grow">
                      <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 line-clamp-6 ${
                        isHovered ? 'text-[#0f0f0f] font-normal' : 'text-[#545454] font-normal'
                      }`}>
                        {item.quote}
                      </p>
                    </div>

                    {/* BOTTOM: Signature Signature Meta Details */}
                    <div className="relative z-20 pt-4 border-t border-transparent">
                      <h4 
                        className={`text-xl font-serif tracking-wide transition-colors duration-300 ${
                          isHovered ? 'text-[#0f0f0f]' : 'text-[#0f0f0f]'
                        }`}
                        style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                      >
                        {item.name}
                      </h4>
                      <p className={`text-xs mt-1 transition-colors duration-300 ${
                        isHovered ? 'text-[#545454]' : 'text-[#8a8a8a]'
                      }`}>
                        {item.role}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCarousel;
