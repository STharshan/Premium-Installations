import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CASE_STUDIES } from '../../data/caseStudies';

// Live actual high-quality imagery content from the project screen structure
const CASE_STUDY_IMAGES = [
  {
    id: 0,
    large: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/ARUPs-biophillic-reception.jpg",
    thumb_stack_1: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/Arup-Edinburgh.jpg",
    thumb_stack_2: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/arup-staircase.jpg",
    alt: "ARUP Biophilic Reception main area layout"
  },
  {
    id: 1,
    large: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/Arup-Edinburgh.jpg",
    thumb_stack_1: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/arup-staircase.jpg",
    thumb_stack_2: "https://d31fl6kv41tqjh.cloudfront.net/v2/accreditations/ARUPs-biophillic-reception.jpg",
    alt: "Arup Edinburgh central structural corridor"
  }
];

export default function ArupCaseStudyPage() {
  const { studyId } = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const activeStudy = CASE_STUDIES.find((study) => study.id === studyId) || CASE_STUDIES[0];

  const triggerNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % CASE_STUDY_IMAGES.length);
  };

  const triggerPrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + CASE_STUDY_IMAGES.length) % CASE_STUDY_IMAGES.length);
  };

  return (
    <div className="bg-[#fafaf8] text-[#0f0f0f] min-h-screen font-sans selection:bg-[#ebe7e3] antialiased selection:text-[#0f0f0f]">
      
      {/* SECTION 1: INTERACTIVE IMAGE GRID CONTROLLER */}
      <section className="max-w-[1440px] mx-auto px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Main big layout window frame (8 Columns wide) */}
          <div className="lg:col-span-8 relative aspect-[16/10] bg-[#ebe7e3] overflow-hidden rounded-xs border border-[#c6c5c1]">
            <img
              src={CASE_STUDY_IMAGES[currentSlideIndex].large}
              alt={CASE_STUDY_IMAGES[currentSlideIndex].alt}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Right hand side context thumbnails stack structure (4 Columns wide) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#ebe7e3] border border-[#c6c5c1] rounded-xs">
              <img
                src={CASE_STUDY_IMAGES[currentSlideIndex].thumb_stack_1}
                alt="Workspace preview frame alpha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#ebe7e3] border border-[#c6c5c1] rounded-xs">
              <img
                src={CASE_STUDY_IMAGES[currentSlideIndex].thumb_stack_2}
                alt="Workspace preview frame beta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* NAVIGATION ARROWS - EXACT HORIZONTAL CENTER ALIGNMENT SYSTEM */}
        <div className="flex justify-center items-center gap-4 mt-8 w-full">
          <button
            onClick={triggerPrev}
            className="w-12 h-12 bg-white text-[#0f0f0f] hover:bg-[#ebe7e3] active:scale-95 transition-all flex items-center justify-center cursor-pointer rounded-full shadow-lg"
            aria-label="Previous view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Visual Divider / Slider Indicator Dots */}
          <div className="flex items-center gap-2">
            {CASE_STUDY_IMAGES.map((_, idx) => (
              <span 
                key={idx}
                className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentSlideIndex ? 'w-6 bg-white' : 'w-1.5 bg-[#8a8a8a]'}`}
              />
            ))}
          </div>

          <button
            onClick={triggerNext}
            className="w-12 h-12 bg-white text-[#0f0f0f] hover:bg-[#ebe7e3] active:scale-95 transition-all flex items-center justify-center cursor-pointer rounded-full shadow-lg"
            aria-label="Next view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* SECTION 2: METADATA & ARUP DETAILED ARCHITECTURE SPECS */}
      <section className="max-w-[1440px] mx-auto px-6 py-12">
        
        {/* Dynamic upper breadcrumb block tracing line links */}
        <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest font-mono mb-6">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/case-study" className="transition hover:text-white">Case studies</Link>
          <span>/</span>
          <span className="text-gray-800">{activeStudy.title}</span>
        </div>

        {/* Split structural layout representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main core textual reporting content container (Left side 8/12 blocks) */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white mb-6">
                {activeStudy.title}
              </h1>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#fafaf8] leading-tight">
                An office fit out achieving a <span className="text-[#a6874c]">50 per cent reduction</span> in embodied carbon
              </h2>
            </div>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl">
              {activeStudy.description} We developed this case study page so each selected project now opens in its own
              detail view while keeping the same premium presentation layout.
            </p>

            {/* Split row matching exact layout for partners listing & clients side quote */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#2b2b2b]">
              
              {/* Core verified business project partners listing */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600">
                  Project partners
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#a6874c] rounded-full" />
                    Arup Acoustics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8a8a8a] rounded-full" />
                    Savills UK
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8a8a8a] rounded-full" />
                    Michael Laird Architects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8a8a8a] rounded-full" />
                    Etive Consulting Engineers
                  </li>
                </ul>
              </div>

              {/* Verified client executive response endorsement review statement box */}
              <div className="border-l-2 border-[#a6874c] pl-5 space-y-2">
                <p className="text-sm text-gray-600 font-medium italic leading-relaxed">
                  "Sustainability was important to us as was acoustic performance, creative and technical design. 
                  Overbury had the best balance of all three, along with delivery certainty."
                </p>
                <span className="block text-xs font-semibold uppercase text-gray-600 tracking-wider pt-1">
                  Elliot Wishlade, Arup
                </span>
              </div>

            </div>

            {/* Read more summary extension footer segment section block */}
            <div className="pt-6 text-black text-sm leading-relaxed max-w-3xl">
              <p>
                Our team were delighted with the clear direction underpinning this office project in Edinburgh. The fit out in Arup's new George Street 
                office must reduce the embodied carbon at every stage - from concept design through to site delivery.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#a6874c] font-bold uppercase tracking-wider mt-4 cursor-pointer hover:underline">
                <span>↓ Read more</span>
              </div>
            </div>

          </div>

          {/* Location / Params Sidebar layout row block (Right side 4/12 blocks) */}
          <div className="lg:col-span-4 border-t lg:border-t-0 border-[#2b2b2b] pt-8 lg:pt-0 space-y-6">
            
            {/* Meta Row Parameter Block 1 */}
          <div className="border-b border-[#2b2b2b] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-gray-600">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Location</span>
              </div>
              <span className="text-sm font-semibold text-white">{activeStudy.location}</span>
              
            </div>

            {/* Meta Row Parameter Block 2 */}
            <div className="border-b border-[#2b2b2b] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-gray-600">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Project Size</span>
              </div>
              <span className="text-sm font-semibold text-white">{activeStudy.size}</span>
            </div>

            {/* Meta Row Parameter Block 3 */}
            <div className="border-b border-[#2b2b2b] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-gray-600">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Theme</span>
              </div>
              <span className="text-sm font-semibold text-white">Sustainability</span>
            </div>

            {/* Meta Row Parameter Block 4 */}
            <div className="border-b border-[#2b2b2b] pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-gray-600">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Metric Goal</span>
              </div>
              <span className="text-sm font-semibold text-white">Carbon reduction</span>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: FOOTER PARALLAX REVEAL HERO STAGE WINDOW LINK */}
      <section className="mt-8 border-t border-[#c6c5c1] bg-[#fafaf8]">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-[#0f0f0f] uppercase">
            Explore another project
          </h2>
        </div>

        {/* Absolute screen tracking container banner system with custom cta actions overlay */}
        <div className="relative w-full h-[55vh] min-h-[420px] bg-[#ebe7e3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Pinsent Masons consultation setup overview showcase"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/70 via-transparent to-transparent" />

          {/* Fixed contextual identity grid data display system wrapper */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 max-w-[1440px] mx-auto w-full text-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-black font-mono text-xs uppercase tracking-widest">
                  <span>Pinsent Masons Workspace</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight uppercase">
                  Pinsent Masons
                </h3>
              </div>
              
              <div>
                <Link
                  to="/case-study"
                  className="inline-flex px-6 py-3 bg-[#a6874c] hover:bg-[#917342] active:scale-97 text-white font-bold tracking-wide uppercase text-xs transition-all shadow-md rounded-none"
                >
                  View project
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
