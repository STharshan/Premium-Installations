
const Banner = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Main Container with Rounded Corners and Overflow Hidden */}
      <div className="relative overflow-hidden rounded-3xl bg-[#2b2b2b] min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-end">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" // Replace with your actual image path
            alt="Greenview Apartments"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark overlay for readability on smaller screens where text overlays the image */}
          <div className="absolute inset-0 bg-[#0f0f0f]/10 mix-blend-multiply" />
        </div>

  

        {/* Floating Content Card Container */}
        <div className="relative z-10 w-full p-4 sm:p-8 md:p-12 lg:p-16 flex justify-end items-end">

          {/* White Card */}
          <div className="relative bg-[#fafaf8] text-[#2b2b2b] p-6 sm:p-8 md:p-10 rounded-3xl max-w-xl shadow-xl w-full md:w-[450px] lg:w-[500px]">

            {/* Card Header (Builder Tag & Location) */}
            <div className="flex items-center justify-between gap-4 mb-4 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="text-[#a6874c] uppercase">Builder</span>
              <div className="flex items-center gap-1 text-[#545454]">
                <svg
                  className="w-4 h-4 text-[#8a8a8a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Hollywood, Florida</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0f0f0f] mb-4 tracking-tight leading-tight">
              Greenview <br className="hidden sm:inline" /> Apartments
            </h1>

            {/* Description Text */}
            <p className="text-[#545454] text-xs sm:text-sm leading-relaxed mb-6">
              Our solutions are designed to meet the needs of modern enterprises,
              ensuring they thrive in today's competitive online landscape.
            </p>

            {/* Dynamic Corner Orange Button Implementation */}
            <div className="absolute -bottom-6 right-6 sm:right-12 z-20 flex items-center justify-center">
              {/* The Orange Action Button */}
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#a6874c] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#917342] transition-colors duration-200 group">
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
