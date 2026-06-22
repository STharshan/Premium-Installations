import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // 3D Card Perspective tilt properties for the interaction effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth angle calculations based on mouse coordinates over card boundary
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  function handleMouseMove(event) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const faqData = [
    {
      question: "What is Wood Academy",
      answer: "Wood Academy is an educational institution specializing in woodworking and craftsmanship. It is a school that offers formal education programs and practical training for students."
    },
    {
      question: "What can I expect from a Wood Academy class?",
      answer: "You can expect hands-on training, expert guidance from seasoned instructors, access to premium tools, and a structured learning environment tailored to both beginners and advanced woodworkers."
    },
    {
      question: "Who can enroll in Wood Academy classes?",
      answer: "Anyone with a passion for woodworking! Whether you are an absolute beginner looking to learn the basics or a professional looking to refine your craftsmanship skills, our courses are open to all."
    },
    {
      question: "How experienced are the instructors at Wood Academy?",
      answer: "Our instructors are master craftsmen with decades of combined industry experience, passionate about sharing traditional techniques and modern woodworking efficiencies."
    },
    {
      question: "Are the courses at Wood Academy accredited?",
      answer: "Yes, we offer certified completion certificates and accredited career-track programs for individuals seeking professional milestones in carpentry and wood design."
    }
  ];

  return (
    <section className="w-full bg-[#14151a] text-white py-28 px-6 sm:px-10 lg:px-20 font-sans overflow-hidden flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto perspective-[1500px]">
        
        {/* 3D FLOATING CANVAS INTERACTION CONTAINER */}
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-full bg-[#1b1c24] rounded-[24px] p-8 sm:p-12 lg:p-16 border border-neutral-800/60 shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" style={{ transform: "translateZ(30px)" }}>
            
            {/* LEFT SIDE COLUMN: Image Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-neutral-700/30">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c24]/30 to-transparent z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&w=900&q=80" 
                  alt="Craftsman handling woodwork circular electric saw machinery inside academy studio" 
                  className="w-full h-[28rem] sm:h-[34rem] lg:h-[36rem] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT SIDE COLUMN: Header and Dynamic Sliding Accordions */}
            <div className="lg:col-span-7 space-y-8 w-full">
              <h2 className="text-3xl sm:text-[2.3rem] font-bold uppercase tracking-tight text-white leading-none">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqData.map((item, index) => {
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={index} 
                      className={`transition-all duration-300 rounded-xl overflow-hidden border ${
                        isOpen 
                          ? 'bg-[#232530] border-neutral-700 shadow-[0_15px_30px_rgba(0,0,0,0.25)] translate-x-2' 
                          : 'bg-[#1e2029]/80 border-neutral-800/60 hover:border-neutral-700/60'
                      }`}
                    >
                      {/* Accordion Clicking Button Trigger Row */}
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left font-semibold text-sm sm:text-[16px] tracking-wide text-white/95 focus:outline-none transition-colors cursor-pointer select-none"
                      >
                        <span className="pr-4">{item.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-neutral-400 shrink-0"
                        >
                          <ChevronDown size={20} strokeWidth={2.5} />
                        </motion.div>
                      </button>

                      {/* Smooth Height Reveal Transition Effect */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                          >
                            <div className="px-6 pb-6 pt-1 text-xs sm:text-[14px] leading-[1.65] text-gray-400 font-normal border-t border-neutral-700/20">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;