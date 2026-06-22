import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to Commercial Construction (Index 2)

  const services = [
    {
      id: 0,
      title: "Building Construction",
      desc: "Comprehensive engineering and structural layout builds for foundational frameworks, built to withstand generational environmental shifts seamlessly.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 1,
      title: "Residential Construction",
      desc: "Tailored luxury spaces built around modular layouts, maximizing eco-friendly footprints while delivering high-end structural comfort.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Construction",
      desc: "Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's competitive architectural and corporate landscape.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Architecture Design",
      desc: "Sleek and minimalist structural planning focusing on ergonomic spatial optimization, lighting systems, and modern workflows.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Renovation Planning",
      desc: "Breathing brand new life into classical historical frameworks with contemporary engineering without diminishing their core structural aesthetics.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Structural Engineering",
      desc: "Precision safety layouts, load bearing structural evaluations, and modern high-grade materials verification blueprints.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-24 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Headings & Service Tabs Selector */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-neutral-700" />
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                Awesome Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] max-w-md">
              Construction Service To Our Clients
            </h2>
          </div>

          {/* Interactive Navigation Tabs List */}
          <div className="space-y-3">
            {services.map((service) => {
              const isSelected = activeTab === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-full transition-all duration-300 text-left group ${
                    isSelected 
                      ? 'bg-white text-black font-semibold pl-8 shadow-lg shadow-white/5' 
                      : 'bg-[#121212] text-neutral-400 hover:bg-neutral-900 hover:text-white border border-neutral-850'
                  }`}
                >
                  <span className="text-sm sm:text-base tracking-wide uppercase">
                    {service.title}
                  </span>
                  
                  {/* Arrow Icon Dynamic State Container */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'bg-neutral-950 text-white' : 'bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700'
                  }`}>
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Asymmetrical Image Container Layout */}
        <div className="lg:col-span-7 lg:pl-6 space-y-8">
          
          {/* Main Display Box with custom image_906d63 curve metrics */}
          <div className="relative w-full h-[460px] sm:h-[540px] z-10">
            
            {/* The Image Wrapper Frame mimicking the distinct asymmetric corner layout */}
            <div className="absolute inset-0 overflow-hidden rounded-[50px] rounded-br-[140px] border border-neutral-800 bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={services[activeTab].img}
                  alt={services[activeTab].title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Premium Pill Floating Discover Action Control Badge */}
            <div className="absolute bottom-[-4px] right-[-4px] z-20 bg-neutral-950 pl-8 pt-8 rounded-tl-[40px]">
              <button className="flex items-center gap-4 bg-white text-black pl-7 pr-2 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-neutral-200 group shadow-2xl">
                Discover More
                <div className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </div>

          </div>

          {/* Real-time Meta Data Text Container aligned with layout spec */}
          <div className="min-h-[120px] pt-4 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-2"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                  {services[activeTab].title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                  {services[activeTab].desc}
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