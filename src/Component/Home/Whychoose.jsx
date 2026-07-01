import { 
  ShieldCheck, 
  GitCommit, 
  Briefcase, 
  Layers, 
  Award, 
  Clock, 
  DollarSign, 
  Compass, 
  Eye, 
  Headphones, 
  Handshake, 
  Sparkles 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "No Subcontractors",
      desc: "We provide flexible construction solutions without unnecessary limitations. Clients have the freedom to choose designs and plans as per their needs.",
      icon: ShieldCheck
    },
    {
      title: "Process",
      desc: "Our construction process is simple, well-structured, and easy to understand. Each stage is clearly defined from planning to completion.",
      icon: GitCommit
    },
    {
      title: "Professional Project Management",
      desc: "Experienced professionals manage every stage of the project efficiently. This ensures smooth coordination, quality control, and timely execution.",
      icon: Briefcase
    },
    {
      title: "Unique and Modern Design",
      desc: "We offer creative designs that are modern, functional, and visually appealing. Each design is customized to suit current trends and client preferences.",
      icon: Layers
    },
    {
      title: "Quality",
      desc: "We maintain high construction quality using trusted materials and skilled workmanship. Quality checks are followed at every stage of the project.",
      icon: Award
    },
    {
      title: "Adherence To Timeline",
      desc: "Projects are completed within the committed timeframe without delays. Proper planning ensures smooth progress at every stage.",
      icon: Clock
    },
    {
      title: "Competitive Pricing",
      desc: "Our pricing is fair, transparent, and market competitive. Clients receive the best value without compromising on quality.",
      icon: DollarSign
    },
    {
      title: "High-Quality Design",
      desc: "Designs are created with attention to detail and functionality. Every plan ensures durability, comfort, and aesthetic appeal.",
      icon: Compass
    },
    {
      title: "Transparency",
      desc: "We maintain complete transparency in pricing, planning, and execution. Clients receive clear updates throughout the project.",
      icon: Eye
    },
    {
      title: "Professional Customer Service",
      desc: "Our customer service team provides continuous support and guidance. Client queries are handled promptly and professionally.",
      icon: Headphones
    },
    {
      title: "Trustworthy",
      desc: "We build trust through honest communication and reliable execution. Our commitment ensures long-term client satisfaction.",
      icon: Handshake
    },
    {
      title: "Hassle-Free Service",
      desc: "We handle all construction responsibilities from start to finish. Clients enjoy a smooth and stress-free building experience.",
      icon: Sparkles
    }
  ];

  return (
    <section className="w-full bg-[#fafaf8] text-[#0f0f0f] py-24 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8a8a8a] font-bold block">
            Right Choice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0f0f0f]">
            Why Choose Builtline
          </h2>
          <p className="text-[#545454] text-sm sm:text-base max-w-xl mx-auto font-light">
            Where innovation meets strong and reliable construction.
          </p>
        </div>

        {/* 12-Card Grid with Flawless 3D Flip Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            
            return (
              <div 
                key={idx} 
                className="group h-[260px] w-full [perspective:1000px] cursor-pointer"
              >
                {/* 3D Transform Core Wrapper */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT PANEL: Clean State */}
                  <div className="absolute inset-0 bg-white border border-[#c6c5c1] rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] space-y-4 shadow-sm group-hover:border-[#8a8a8a] transition-colors">
                    <div className="p-4 bg-[#ebe7e3] rounded-xl text-[#2b2b2b] transition-colors duration-300">
                      <IconComponent size={40} strokeWidth={1.25} />
                    </div>
                    <h3 className="font-bold text-base tracking-wide max-w-[90%] leading-snug text-[#0f0f0f] uppercase">
                      {item.title}
                    </h3>
                  </div>

                  {/* BACK PANEL: Content Reveal on Flip */}
                  <div className="absolute inset-0 bg-[#0f0f0f] border border-[#2b2b2b] rounded-2xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl z-20">
                    <p className="text-xs sm:text-[13px] text-[#c5c5c1] leading-relaxed font-normal px-2">
                      {item.desc}
                    </p>
                    {/* Minimal Core Accent Divider Line */}
                    <div className="absolute bottom-5 h-[3px] w-8 bg-[#a6874c] rounded-full" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
