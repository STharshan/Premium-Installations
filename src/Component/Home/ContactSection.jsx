import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Clock3, Mail, MapPin, Phone, Play } from 'lucide-react';

const contactItems = [
  { title: 'Call Us', value: '+00 (41) 039 4688', Icon: Phone },
  { title: 'Our Email Us', value: 'example@gmail.com', Icon: Mail },
  { title: 'Opening Hours', value: 'Mon - Fri: 09am - 05pm sat-sun: closed', Icon: Clock3 },
  { title: 'Location', value: ' 147 Church Walk, London N16 8QW, United Kingdom', Icon: MapPin },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Exact gray/white inputs as per reference image_d0493c.jpg
  const inputBaseClass =
    'h-[56px] w-full rounded-full border border-[#c6c5c1] bg-[#ebe7e3] px-5 text-[13px] text-[#0f0f0f] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#a6874c] focus:bg-white';

  return (
    <section className="overflow-hidden bg-[#fafaf8] px-4 py-14 font-sans text-[#111111] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1240px] relative">
        
        {/* UPPER CONTENT LAYOUT */}
        <div className="relative z-20 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Side Content */}
          <div className="space-y-10 pb-4 lg:col-span-5 lg:pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c6c5c1]" />
                <span className="text-[10px] text-[#8a8a8a] font-extrabold uppercase tracking-[0.18em]">
                  Contact Us
                </span>
              </div>
              <h2 className="max-w-[440px] text-[2.7rem] font-black leading-[0.96] tracking-[-0.055em] text-[#0f0f0f] sm:text-[3.3rem] lg:text-[4.1rem]">
                Let&apos;s Work Together
              </h2>
            </div>

            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
              {contactItems.map(({ title, value, Icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#a6874c] text-white shadow-[0_12px_24px_rgba(166,135,76,0.2)]">
                    <Icon size={17} strokeWidth={2.2} />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="text-[1rem] font-black leading-none tracking-[-0.03em] text-[#0f0f0f]">
                      {title}
                    </h3>
                    <p className="text-[12.5px] text-[#545454] leading-tight pt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form Panel */}
          <div className="bg-white p-2 lg:col-span-7 lg:pl-6">
            <p className="mb-6 max-w-[540px] text-[14px] leading-relaxed text-[#545454]">
              We&apos;d love to share more with you, please complete this form and our dedicated team will get back to you shortly.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={inputBaseClass} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={inputBaseClass} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone no" className={inputBaseClass} />
                <div className="relative">
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none pr-12 text-[#8a8a8a]`}
                  >
                    <option value="">Your inquiry about</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="architecture">Architecture Design</option>
                    <option value="renovation">Renovation Planning</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#8a8a8a]">
                    <ChevronDown size={18} />
                  </span>
                </div>
              </div>

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="min-h-[128px] w-full rounded-[24px] border border-[#c6c5c1] bg-[#ebe7e3] px-5 py-4 text-[13px] text-[#0f0f0f] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#a6874c] focus:bg-white"
              />

              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-[12px] text-[#545454] leading-tight">
                  <p>We&apos;re excited to connect with you!</p>
                  <p>Required fields are marked *</p>
                </div>

                <button type="submit" className="group inline-flex h-[54px] items-center justify-between rounded-full bg-[#a6874c] p-1 pl-6 text-left shadow-[0_12px_24px_rgba(166,135,76,0.2)] transition min-w-[200px]">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">Contact Now</span>
                  <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#0f0f0f] text-white">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM SHAPED IMAGE SYSTEM */}
        <div className="relative z-10 w-full -mt-4 lg:-mt-12">
          
          {/* THE EXACT WAVE MASK WITH BLENDED PURE WHITE COLOR MATCH */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 hidden h-[62px] select-none lg:block">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1240 60" 
              preserveAspectRatio="none" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0 0H1240V60H525C495 60 480 0 440 0H0V0Z" 
                fill="#ffffff" 
              />
              <path 
                d="M525 60C545 60 555 45 560 35" 
                stroke="#ffffff" 
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* MAIN CONTAINER FIELD */}
          <div className="relative overflow-hidden rounded-[34px] shadow-[0_22px_56px_rgba(0,0,0,0.06)] sm:rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop"
              alt="Modern construction architectural showcase layout"
              className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[560px]"
            />
            <div className="absolute inset-0 bg-[#0f0f0f]/5" />

            {/* Video Play Component Trigger */}
            <div className="absolute bottom-6 right-6 z-40 sm:bottom-10 sm:right-10">
              <button
                type="button"
                className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-[4px] border-[#a6874c] bg-[#0f0f0f] text-white shadow-2xl transition duration-300 hover:scale-105 sm:h-[96px] sm:w-[96px]"
              >
                <Play size={26} className="translate-x-0.5 fill-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
