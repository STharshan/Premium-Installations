import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const highlights = [
    "Skilled workers",
    "Quality guaranteed",
    "Extensive experience",
    "Customized quote"
  ];

  return (
    <section className="w-full bg-[#fafaf8] text-[#0f0f0f] py-24 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Overlapping Image Composition Grid */}
        <div className="lg:col-span-6 relative w-full h-[480px] sm:h-[560px] flex items-center justify-center">
          
          {/* Background Offset Image Frame */}
          <div className="absolute left-0 bottom-0 w-[70%] h-[85%] rounded-[32px] overflow-hidden border border-[#c6c5c1]/80 shadow-md z-10">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" 
              alt="Construction site close-up equipment" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground Main Overlapping Image Box */}
          <div className="absolute right-0 top-0 w-[68%] h-[85%] rounded-[32px] overflow-hidden border-[8px] border-white shadow-2xl z-20">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop" 
              alt="Professional site engineer supervising structural setup" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT COLUMN: Typography Content & Highlights */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#8a8a8a]" />
              <span className="text-xs uppercase tracking-widest text-[#8a8a8a] font-bold">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0f0f0f] uppercase leading-[1.08] max-w-xl">
              We Offer the Best Service for Building
            </h2>
          </div>

          <p className="text-[#545454] text-sm sm:text-base font-light leading-relaxed max-w-xl">
            We are committed to providing the best professionals to make your project a unique and unparalleled work of structural architecture and precision construction.
          </p>

          {/* Core Feature Checklist Grid Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-md pt-2">
            {highlights.map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <CheckCircle2 size={18} className="text-[#0f0f0f] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm sm:text-base font-medium text-[#2b2b2b] tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Action Premium Deep Block Button */}
          <div className="pt-4">
            <Link to="/case-study" className="inline-flex bg-[#0f0f0f] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:bg-[#2b2b2b] transition-colors duration-300 active:scale-98">
              View the Projects
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
