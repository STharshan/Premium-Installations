import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/caseStudies';

export default function CaseStudyGrid() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);
  const itemRefs = useRef({});

  useEffect(() => {
    // Left side-il ulla list item screen-in naduvil varum bodhu intersect aagum padi rootMargin set seyyappattulladhu
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', 
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.dataset.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    Object.values(itemRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeStudy = CASE_STUDIES.find((study) => study.id === activeId) || CASE_STUDIES[0];

  return (
    <div className="bg-[#fafaf8] text-[#0f0f0f] font-sans relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* LEFT PANEL: Scrollable Titles */}
          <div className="lg:col-span-7 flex flex-col space-y-24 my-[20vh]">
            {CASE_STUDIES.map((study) => {
              const isActive = study.id === activeId;
              return (
                <Link
                  key={study.id}
                  to={`/case-study/${study.id}`}
                  data-id={study.id}
                  ref={(el) => (itemRefs.current[study.id] = el)}
                  className={`transition-all duration-500 ease-in-out transform min-h-[180px] flex flex-col justify-center ${
                    isActive 
                      ? 'opacity-100 translate-x-2' 
                      : 'opacity-20 scale-95 blur-[0.5px]'
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.1]">
                    {study.title}
                  </h1>
                </Link>
              );
            })}
          </div>

          {/* RIGHT PANEL: Fixed/Sticky Live Card Content Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-[15vh] w-full hidden lg:block">
            <div className="flex flex-col space-y-6">
              
              {/* Top View Window Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#ebe7e3] shadow-md">
                <img
                  key={activeStudy.id}
                  src={activeStudy.imageUrl}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover animate-fade-in transition-transform duration-700"
                />
              </div>

              {/* Bottom Explanatory Grid Info Panel */}
              <div className="space-y-4 pt-2">
                <h2 className="text-xl font-bold tracking-tight text-[#0f0f0f]">
                  {activeStudy.title}
                </h2>
                
                {/* Meta details labels */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold tracking-wider uppercase text-[#8a8a8a]">
                  <span>{activeStudy.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6c5c1]" />
                  <span>{activeStudy.size}</span>
                </div>

                {/* Tags array rendering mapping layout */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium tracking-wide px-3 py-1 bg-[#ebe7e3] text-[#545454] rounded-sm border border-[#c6c5c1]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Smooth updated small layout description detail */}
                <p className="text-[#545454] text-sm font-light leading-relaxed max-w-md pt-1">
                  {activeStudy.description}
                </p>

                <Link
                  to={`/case-study/${activeStudy.id}`}
                  className="inline-flex items-center rounded-full bg-[#0f0f0f] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#2b2b2b]"
                >
                  Open Case Study
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
