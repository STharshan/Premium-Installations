import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] flex items-end overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672b4def533ee573b5b443cd_service-01.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-16 z-20">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-sans">
            Commercial construction
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;