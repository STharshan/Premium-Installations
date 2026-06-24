import React, { useState } from 'react';
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
    <section className="w-full bg-white text-gray-800 py-16 md:py-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black tracking-tight">Overview</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                {service.introLead}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {service.overviewBody}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black tracking-tight">Benefit of service</h2>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {service.benefitIntro}
              </p>

              <ul className="space-y-4 list-none pl-0">
                {service.benefits.map((benefit) => (
                  <li key={benefit.title} className="text-gray-500 text-sm md:text-base leading-relaxed flex items-start">
                    <span className="mr-2 text-gray-400">&bull;</span>
                    <span>
                      <strong className="text-black font-semibold">{benefit.title}:</strong> {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black tracking-tight">Our process</h2>

              <div className="relative w-full">
                <div className="absolute top-6 left-6 right-6 h-[1px] border-t border-dashed border-gray-300 hidden md:block z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                  {service.process.map((step, index) => {
                    const isDark = index % 2 === 1;

                    return (
                      <div key={step} className="flex flex-col items-start space-y-4">
                        <div
                          className={`w-12 h-12 flex items-center justify-center font-medium text-sm ${
                            isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-400 border border-gray-100'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="text-gray-900 font-medium text-sm leading-snug pr-2">
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-neutral-800 pb-2">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none"
                  />
                </div>
                <div className="border-b border-neutral-800 pb-2">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

            <div className="bg-gray-50/60 p-8 md:p-10">
              <h3 className="text-xl font-bold text-black mb-8">All services</h3>

              <div className="space-y-4">
                {services.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className={`block border-b pb-3 text-sm md:text-base font-medium transition ${
                      item.slug === service.slug ? 'text-black' : 'text-gray-500 hover:text-black'
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
