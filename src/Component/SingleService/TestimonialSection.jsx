import { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah W.',
    avatar: 'https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/671cb8f2f2358c2e9905f9b6_review-01.avif',
    content: 'The professionalism and attention to detail of the team were outstanding. Our project was delivered beyond expectations! We couldn’t have asked for a better partner in building our dream home.'
  },
  {
    id: 2,
    name: 'Carolyn Ortiz',
    avatar: 'https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/671cb8f3733661b3b7f31b71_review-03.avif',
    content: 'Their work is impeccable, and I felt comfortable with every decision we made together. I can’t say enough good things about their professionalism and the quality of their work!'
  },
  {
    id: 3,
    name: 'Samuel Bishop',
    avatar: 'https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/671cb8f31567a8ca3fa3326d_review-04.avif',
    content: 'Their work has transformed our home, and we appreciate how they respected our budget and time constraints. The team’s friendly approach made the experience even better!'
  },
  {
    id: 4,
    name: 'Joan Wallace',
    avatar: 'https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/671cb8f24980a82d64bc56a7_review-02.avif',
    content: 'The team was incredibly accommodating and kept the worksite safe and clean every day. My new office has already received compliments from clients and employees alike.'
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Samuel Bishop default

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full bg-[#fafaf8] text-[#0f0f0f] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Testimonial Image Banner */}
        <div className="w-full h-[400px] lg:h-[650px]">
          <img 
            src="https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672c3f1f062d62b550b56694_testimonial-01.avif" 
            alt="Testimonial Construction Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content Wrapper */}
        <div className="flex flex-col justify-center items-center text-center px-6 py-12 md:px-12 lg:px-20 bg-[#ebe7e3]">
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-8 text-[#0f0f0f]">
            Client feedbacks
          </h2>

          {/* Active Testimonial Box */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center">
            {/* Avatar */}
            <img 
              src={testimonialsData[currentIndex].avatar} 
              alt={testimonialsData[currentIndex].name} 
              className="w-14 h-14 rounded-full object-cover mb-6"
            />

            {/* Stars */}
            <div className="flex items-center space-x-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-4 h-4 text-[#a6874c] fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>

            {/* Content Text */}
            <p className="text-[#c5c5c1] text-sm md:text-base leading-relaxed mb-6 max-w-lg px-2">
              {testimonialsData[currentIndex].content}
            </p>

            {/* Author Name */}
            <h4 className="text-[#0f0f0f] font-medium text-base mb-8">
              {testimonialsData[currentIndex].name}
            </h4>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-[#a6874c] text-white transition-opacity hover:bg-[#917342] cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-[#a6874c] text-white transition-opacity hover:bg-[#917342] cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
