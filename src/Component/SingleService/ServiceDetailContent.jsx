import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug, services } from '../../data/service';

const ServiceDetailContent = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug) || services[0];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <section className="w-full bg-[#fafaf8] text-[#2b2b2b] py-16 md:py-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0f0f0f] tracking-tight">Overview</h2>
              <p className="text-[#545454] leading-relaxed font-medium">
                {service.introLead}
              </p>
              <p className="text-[#545454] leading-relaxed text-sm md:text-base">
                {service.overviewBody}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0f0f0f] tracking-tight">Benefit of service</h2>
              <p className="text-[#545454] leading-relaxed text-sm md:text-base">
                {service.benefitIntro}
              </p>

              <ul className="space-y-4 list-none pl-0">
                {service.benefits.map((benefit) => (
                  <li key={benefit.title} className="text-[#545454] text-sm md:text-base leading-relaxed flex items-start">
                    <span className="mr-2 text-[#8a8a8a]">•</span>
                    <span>
                      <strong className="text-[#0f0f0f] font-semibold">{benefit.title}:</strong> {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#0f0f0f] tracking-tight">Our process</h2>

              <div className="relative w-full">
                <div className="absolute top-6 left-6 right-6 h-[1px] border-t border-dashed border-[#c6c5c1] hidden md:block z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {service.process.map((step, index) => {
                    const isDark = index % 2 === 1;

                    return (
                      <div key={step} className="flex flex-col items-start space-y-4">
                        <div
                          className={`w-12 h-12 flex items-center justify-center font-medium text-sm ${
                            isDark
                              ? 'bg-[#0f0f0f] text-white'
                              : 'bg-[#ebe7e3] text-[#8a8a8a] border border-[#c6c5c1]'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="text-[#2b2b2b] font-medium text-sm leading-snug pr-2">
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:sticky lg:top-8 space-y-8">
            <div className="bg-[#0f0f0f] text-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-8">
                Fill out the form to receive a call
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#2b2b2b] pb-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-[#8a8a8a] text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-[#2b2b2b] pb-2">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-[#8a8a8a] text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-[#2b2b2b] pb-2">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-[#8a8a8a] text-sm focus:outline-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#a6874c] text-white px-6 py-3 text-sm font-medium hover:bg-[#917342] transition-opacity cursor-pointer"
                  >
                    Request a call
                  </button>
                </div>
              </form>

              {status === 'success' && (
                <div className="mt-4 text-xs text-[#c5c5c1] bg-[#2b2b2b] p-3 border border-[#545454]">
                  Thank you! Your submission has been received!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-xs text-[#c5c5c1] bg-[#2b2b2b] p-3 border border-[#545454]">
                  Oops! Something went wrong while submitting the form.
                </div>
              )}
            </div>

            <div className="bg-[#ebe7e3]/60 p-8 md:p-10">
              <h3 className="text-xl font-bold text-[#0f0f0f] mb-8">All services</h3>

              <div className="space-y-4">
                {services.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className={`block border-b pb-3 text-sm md:text-base font-medium transition ${
                      item.slug === service.slug ? 'text-[#0f0f0f]' : 'text-[#545454] hover:text-[#0f0f0f]'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;
