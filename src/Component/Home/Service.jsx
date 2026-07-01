import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../data/service';

const Services = ({ heroLevel = false } = {}) => {
  const defaultService = services.find((service) => service.slug === 'commercial-construction') || services[0];
  const [activeSlug, setActiveSlug] = useState(defaultService.slug);
  const activeService = services.find((service) => service.slug === activeSlug) || defaultService;

  return (
    <section className="w-full bg-[#0f0f0f] text-white py-24 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Headings & Service Tabs Selector */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#545454]" />
              <span className="text-xs uppercase tracking-widest text-[#8a8a8a] font-bold">
                Awesome Services
              </span>
            </div>
            {heroLevel ? (
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-md">
                Construction Service To Our Clients
              </h1>
            ) : (
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-md">
                Construction Service To Our Clients
              </h2>
            )}
          </div>

          {/* Interactive Navigation Tabs List */}
          <div className="space-y-3">
            {services.map((service) => {
              const isSelected = activeSlug === service.slug;
              
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  className={`w-full flex items-center justify-between p-5 rounded-full transition-all duration-300 text-left group ${
                    isSelected 
                      ? 'bg-white text-[#0f0f0f] font-semibold pl-8 shadow-lg shadow-white/5' 
                      : 'bg-[#2b2b2b] text-[#8a8a8a] hover:bg-[#545454] hover:text-white border border-[#2b2b2b]'
                  }`}
                >
                  <span className="text-sm sm:text-base tracking-wide uppercase">
                    {service.title}
                  </span>
                  
                  {/* Arrow Icon Dynamic State Container */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'bg-[#0f0f0f] text-white' : 'bg-[#545454] text-[#c5c5c1] group-hover:bg-[#2b2b2b]'
                  }`}>
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Asymmetrical Image Container Layout */}
        <div className="lg:col-span-7 lg:pl-6 space-y-8">
          
          {/* Main Display Box with custom image_906d63 curve metrics */}
          <div className="relative w-full h-[460px] sm:h-[540px] z-10">
            
            {/* The Image Wrapper Frame mimicking the distinct asymmetric corner layout */}
            <div className="absolute inset-0 overflow-hidden rounded-[50px] rounded-br-[140px] border border-[#2b2b2b] bg-[#2b2b2b]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.slug}
                  src={activeService.heroImage}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Premium Pill Floating Discover Action Control Badge */}
            <div className="absolute bottom-[-4px] right-[-4px] z-20 bg-[#0f0f0f] pl-8 pt-8 rounded-tl-[40px]">
              <Link to={`/services/${activeService.slug}`} className="flex items-center gap-4 bg-white text-[#0f0f0f] pl-7 pr-2 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#ebe7e3] group shadow-2xl">
                Discover More
                <div className="w-10 h-10 rounded-full bg-[#0f0f0f] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </Link>
            </div>

          </div>

          {/* Real-time Meta Data Text Container aligned with layout spec */}
          <div className="min-h-[120px] pt-4 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-2"
              >
                {heroLevel ? (
                  <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {activeService.title}
                  </h2>
                ) : (
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                    {activeService.title}
                  </h3>
                )}
                <p className="text-[#c5c5c1] text-sm sm:text-base leading-relaxed font-light">
                  {activeService.shortDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
