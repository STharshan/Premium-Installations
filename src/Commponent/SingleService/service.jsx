import React, { useState } from 'react';

const ServiceInfoSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section className="w-full bg-white text-gray-800 py-16 md:py-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Main Info Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 1. Overview Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black tracking-tight">Overview</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                From concept to completion, we approach every project with a focus on innovation, sustainability, and efficiency. Our team of experienced professionals is committed to providing tailored solutions that ensure every build is completed on time, within budget, and to the highest standards.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                We specialize in delivering high-quality construction services that meet the unique needs of each client. From concept to completion, we approach every project with a focus on innovation, sustainability, and efficiency. Our team of experienced professionals is committed to providing tailored solutions that ensure every build is completed on time, within budget, and to the highest standards. Whether it’s a residential development or a large-scale commercial project, we bring a level of craftsmanship and attention to detail that sets us apart in the industry.
              </p>
            </div>

            {/* 2. Benefit of Service */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black tracking-tight">Benefit of service</h2>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Our team of experienced professionals is committed to providing tailored solutions that ensure every build is completed on time, within budget, and to the highest standards
              </p>
              
              <ul className="space-y-4 list-none pl-0">
                <li className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span><strong className="text-black font-semibold">Tailored solutions:</strong> We customize our services to meet the specific requirements of each client, ensuring a personalized experience and optimal outcomes.</span>
                </li>
                <li className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span><strong className="text-black font-semibold">Sustainable building practices:</strong> Our commitment to sustainability helps reduce environmental impact while delivering high-performance structures.</span>
                </li>
                <li className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span><strong className="text-black font-semibold">Innovative technologies:</strong> From advanced construction techniques to cutting-edge project management tools, we leverage the latest technologies.</span>
                </li>
                <li className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span><strong className="text-black font-semibold">Comprehensive service:</strong> From initial design to final handover, we offer a full range of construction services, managing every aspect of the project.</span>
                </li>
                <li className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                  <span className="mr-2 text-gray-400">•</span>
                  <span><strong className="text-black font-semibold">Quality assurance:</strong> Our thorough quality control process ensures that every detail is perfect, from the materials used to the final touches.</span>
                </li>
              </ul>
            </div>

            {/* 3. Our Process Horizontal Timeline Layout */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black tracking-tight">Our process</h2>
              
              <div className="relative w-full">
                {/* Connecting Dotted Line */}
                <div className="absolute top-6 left-6 right-6 h-[1px] border-t border-dashed border-gray-300 hidden md:block z-0" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {/* Step 1 */}
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-400 font-medium text-sm border border-gray-100">
                      01
                    </div>
                    <p className="text-gray-900 font-medium text-sm leading-snug pr-2">
                      Initial consultation & planning
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-black text-white font-medium text-sm">
                      02
                    </div>
                    <p className="text-gray-900 font-medium text-sm leading-snug pr-2">
                      Design & architectural development
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-gray-400 font-medium text-sm border border-gray-100">
                      03
                    </div>
                    <p className="text-gray-900 font-medium text-sm leading-snug pr-2">
                      Construction & project management
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-black text-white font-medium text-sm">
                      04
                    </div>
                    <p className="text-gray-900 font-medium text-sm leading-snug pr-2">
                      Final inspection & handover
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar Wrapper */}
          <div className="lg:col-span-1 lg:sticky lg:top-8 space-y-8">
            
            {/* Form Card */}
            <div className="bg-[#111111] text-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-8">
                Fill out the form to receive a call
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-neutral-800 pb-2">
                  <input 
                    type="text" 
                    placeholder="Full name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-neutral-800 pb-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-neutral-800 pb-2">
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="bg-[#B62025] dark:bg-[#FF4B4B] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Request a call
                  </button>
                </div>
              </form>

              {status === 'success' && (
                <div className="mt-4 text-xs text-green-400 bg-green-950/30 p-3 border border-green-900">
                  Thank you! Your submission has been received!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-xs text-red-400 bg-red-950/30 p-3 border border-red-900">
                  Oops! Something went wrong while submitting the form.
                </div>
              )}
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gray-50/60 p-8 md:p-10">
              <h3 className="text-xl font-bold text-black mb-8">Why choose us</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672b60e2723d51118adee075_choose-01.svg" 
                    alt="Experience Icon" 
                    className="w-5 h-5 shrink-0" 
                  />
                  <span className="text-gray-700 text-sm md:text-base font-medium">14 years of experience</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672b60e201b4c69a37bda158_choose-02.svg" 
                    alt="Awards Icon" 
                    className="w-5 h-5 shrink-0" 
                  />
                  <span className="text-gray-700 text-sm md:text-base font-medium">Many prestigious awards</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672b60e2adc12e4df1508cae_choose-03.svg" 
                    alt="Engineer Icon" 
                    className="w-5 h-5 shrink-0" 
                  />
                  <span className="text-gray-700 text-sm md:text-base font-medium">Experienced engineer</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://cdn.prod.website-files.com/671b486c83140ddbd5311c35/672b60e2346e6621e9f475b3_choose-04.svg" 
                    alt="Consulting Icon" 
                    className="w-5 h-5 shrink-0" 
                  />
                  <span className="text-gray-700 text-sm md:text-base font-medium">Free consulting</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceInfoSection;