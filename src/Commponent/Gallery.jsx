import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const projects = [
    {
      id: 1,
      title: "Cedar Lane Tiny Home",
      location: "Flagstaff, AZ / 2023",
      desc: "A versatile tiny home designed for sustainable living, emphasizing minimalism, energy efficiency, and adaptability for all seasons.",
      link: "/projects/cedar-lane-tiny-home",
      img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      img2: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Nordic Modular Cabin",
      location: "Catskills, NY / 2024",
      desc: "A Scandinavian-inspired prefabricated module prioritizing wide open frame view windows, local timber craftsmanship, and footprint reduction.",
      link: "/projects/nordic-modular-cabin",
      img1: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80",
      img2: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "High Desert Micro Oasis",
      location: "Joshua Tree, CA / 2025",
      desc: "Off-grid engineered structure featuring high durability composite metal engineering to absorb solar warmth while presenting complete luxury layouts.",
      link: "/projects/high-desert-oasis",
      img1: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80",
      img2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const currentProject = projects[activeIndex];

  return (
    <section className="overflow-hidden bg-white px-6 py-24 text-neutral-900 sm:px-10 lg:px-20 lg:py-32 font-sans">
      <div className="mx-auto max-w-[1680px] relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[14px] uppercase tracking-wider text-neutral-400 font-semibold">
            You may also be interested in
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase leading-[1.05] tracking-tight text-neutral-950">
            A selection of newly built modular and tiny homes
          </h2>
        </div>

        {/* Carousel Active Track Area */}
        <div className="relative min-h-[640px] sm:min-h-[680px] lg:min-h-[560px] w-full">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article 
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="grid w-full gap-8 lg:grid-cols-[300px_minmax(0,1fr)_200px] lg:items-start lg:gap-12 absolute inset-0"
            >
              
              {/* LEFT SIDEBAR: Text Content Block */}
              <div className="flex h-full flex-col justify-between pb-1 pt-1 lg:min-h-[33.5rem] z-20">
                <div className="space-y-4">
                  <h3 className="text-[34px] font-bold uppercase leading-[1.05] tracking-tight text-neutral-950">
                    {currentProject.title}
                  </h3>
                  <div className="text-[14px] tracking-wide text-neutral-400 font-medium">
                    {currentProject.location}
                  </div>
                </div>
                <p className="max-w-[24rem] lg:max-w-[17rem] text-[15px] leading-[1.7] text-neutral-500 mt-6 lg:mt-0 font-normal">
                  {currentProject.desc}
                </p>
              </div>

              {/* CENTER DISPLAY: Asymmetrical Overlapping Images (image_8ffd9d.png Style) */}
              <div className="relative mt-6 min-h-[26rem] sm:min-h-[34rem] lg:mt-0 lg:min-h-[33.5rem] w-full z-10">
                {/* Base Image Frame */}
                <img 
                  alt={currentProject.title} 
                  className="h-[22rem] w-[80%] sm:h-[30rem] lg:h-[33.5rem] object-cover rounded-sm shadow-sm" 
                  src={currentProject.img1}
                />
                
                {/* Elevated Foreground Inset Image Frame */}
                <div className="absolute bottom-2 sm:bottom-6 right-0 h-[14rem] w-[60%] sm:h-[20rem] lg:h-[22rem] z-20 shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-4 border-white rounded-sm overflow-hidden">
                  <img 
                    alt={`${currentProject.title} alternate inside perspective view`} 
                    className="h-full w-full object-cover" 
                    src={currentProject.img2}
                  />
                </div>
              </div>

              {/* RIGHT SIDEBAR: Action Link Elements */}
              <div className="flex h-full flex-col justify-end pt-6 lg:min-h-[33.5rem] lg:pt-0 z-20">
                <div className="flex items-start justify-start lg:justify-end">
                  <a 
                    className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wider text-neutral-900 group" 
                    href={currentProject.link}
                  >
                    <span className="h-5 w-5 rounded-full bg-neutral-100 p-[4px] flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                      <span className="block h-full w-full rounded-full bg-[#9c9c55]" />
                    </span>
                    LEARN MORE
                  </a>
                </div>
              </div>

            </motion.article>
          </AnimatePresence>

          {/* ABSOLUTE CONTROLS ON TOP RIGHT LAYER */}
          <div className="absolute right-0 -top-24 sm:-top-28 lg:-top-28 z-30 flex items-center gap-3">
            <button 
              type="button" 
              onClick={handlePrev}
              aria-label="Show previous project" 
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition shadow-sm hover:bg-neutral-950 hover:text-white active:scale-95"
            >
              <ArrowLeft size={22} strokeWidth={1.5} />
            </button>
            
            <button 
              type="button" 
              onClick={handleNext}
              aria-label="Show next project" 
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition shadow-sm hover:bg-neutral-950 hover:text-white active:scale-95"
            >
              <ArrowRight size={22} strokeWidth={1.5} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;