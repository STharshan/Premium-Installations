import React, { useState, useEffect, useRef } from 'react';

const CASE_STUDIES = [
  {
    id: 'investment-management',
    title: 'Investment Management Firm',
    location: 'SW1, London',
    size: '23,000 SQ FT',
    tags: ['Office Design', 'Office Fit Out', 'Finance & Banking'],
    description: 'When an Investment Management Firm decided to halve their footprint, they didn\'t want to compromise...',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'entertainment-company',
    title: 'Entertainment Company',
    location: 'SE1, London',
    size: '25,000 SQ FT',
    tags: ['Office Design', 'Office Fit Out', 'Advertising & Media', 'Technology'],
    description: 'In partnership with a global entertainment company, we have created a workplace destination that embodies...',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'international-tech',
    title: 'International Technology and Data Firm',
    location: 'EC2, London',
    size: '58,000 SQ FT',
    tags: ['Office Design', 'Office Fit Out', 'Finance & Banking'],
    description: 'Our client needed to accommodate a rapidly growing workforce in a workspace which could adapt to the fast-moving data...',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'newflex',
    title: 'Newflex, One Station Hill',
    location: 'Reading',
    size: '31,000 SQ FT',
    tags: ['Office Fit Out', 'Property & Serviced Office'],
    description: 'Newflex\'s latest coworking space at ONE Station Hill brings colour, texture, and personality...',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cz-czarnikow',
    title: 'CZ (Czarnikow)',
    location: 'EC3, London',
    size: '14,350 SQ FT',
    tags: ['Office Design', 'Office Fit Out', 'Professional Services'],
    description: 'As CZ\'s team grew, they needed a workplace that reflected their heritage and future...',
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mcgill-partners',
    title: 'McGill & Partners',
    location: 'EC3, London',
    size: '43,500 SQ FT',
    tags: ['Office Design', 'STRIDE', 'Finance & Banking'],
    description: 'In collaboration with McGill and Nuveen, we have brought Architects\' BDG vision to...',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  }
];

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
    <div className="bg-white text-slate-900 font-sans relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* LEFT PANEL: Scrollable Titles */}
          <div className="lg:col-span-7 flex flex-col space-y-24 my-[20vh]">
            {CASE_STUDIES.map((study) => {
              const isActive = study.id === activeId;
              return (
                <div
                  key={study.id}
                  data-id={study.id}
                  ref={(el) => (itemRefs.current[study.id] = el)}
                  className={`transition-all duration-500 ease-in-out transform min-h-[180px] flex flex-col justify-center ${
                    isActive 
                      ? 'opacity-100 translate-x-2' 
                      : 'opacity-20 scale-95 blur-[0.5px]'
                  }`}
                >
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                    {study.title}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL: Fixed/Sticky Live Card Content Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-[15vh] w-full hidden lg:block">
            <div className="flex flex-col space-y-6">
              
              {/* Top View Window Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-md">
                <img
                  key={activeStudy.id}
                  src={activeStudy.imageUrl}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover animate-fade-in transition-transform duration-700"
                />
              </div>

              {/* Bottom Explanatory Grid Info Panel */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                  {activeStudy.title}
                </h3>
                
                {/* Meta details labels */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold tracking-wider uppercase text-neutral-400">
                  <span>{activeStudy.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                  <span>{activeStudy.size}</span>
                </div>

                {/* Tags array rendering mapping layout */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium tracking-wide px-3 py-1 bg-neutral-50 text-neutral-600 rounded-sm border border-neutral-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Smooth updated small layout description detail */}
                <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-md pt-1">
                  {activeStudy.description}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}