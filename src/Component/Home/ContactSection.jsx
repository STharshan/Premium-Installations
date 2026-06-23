import React, { useState } from 'react'
import { ArrowUpRight, ChevronDown, Clock3, Mail, MapPin, Phone, Play } from 'lucide-react'

const contactItems = [
  {
    title: 'Call Us',
    value: '+00 (41) 039 4688',
    Icon: Phone,
  },
  {
    title: 'Our Email Us',
    value: 'example@gmail.com',
    Icon: Mail,
  },
  {
    title: 'Opening Hours',
    value: 'Mon - Fri: 9.00am - 6pm',
    Icon: Clock3,
  },
  {
    title: 'Location',
    value: '1712 Down Street Monmouth',
    Icon: MapPin,
  },
]

const inputBaseClass =
  'h-[54px] w-full rounded-full border border-[#efefef] bg-[#f7f7f7] px-5 text-[13px] text-[#121212] outline-none transition placeholder:text-[#9c9c9c] focus:border-[#f47b08] focus:bg-white'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-4 py-14 text-[#111111] sm:px-6 lg:px-8 xl:px-10 xl:py-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative z-10 grid items-start gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:gap-8">
          <div className="space-y-8 pt-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#dfcfb4]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d38a38]">
                  Contact Us
                </span>
              </div>

              <h2 className="max-w-[430px] text-[2.3rem] font-black leading-[0.96] tracking-[-0.05em] text-[#090909] sm:text-[3.05rem] lg:text-[4rem]">
                Let&apos;s Work Together
              </h2>
            </div>

            <div className="grid max-w-[540px] gap-x-6 gap-y-8 sm:grid-cols-2">
              {contactItems.map(({ title, value, Icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#ff8300] text-white shadow-[0_14px_24px_rgba(255,131,0,0.26)]">
                    <Icon size={17} strokeWidth={2.15} />
                  </div>
                  <div className="space-y-1 pt-1">
                    <h3 className="text-[1rem] font-black leading-none tracking-[-0.03em] text-[#101010] sm:text-[1.05rem]">
                      {title}
                    </h3>
                    <p className="text-[12.5px] text-[#8c847a] sm:text-[13px]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-20 rounded-[32px] rounded-bl-[56px] bg-white px-5 py-5 shadow-[0_18px_42px_rgba(25,25,25,0.06)] sm:px-7 sm:py-6 lg:px-8 lg:py-7 xl:rounded-bl-[76px]">
            <p className="max-w-[620px] text-[14px] leading-7 text-[#46413b] sm:text-[15px]">
              We&apos;d love to share more with you, please complete this form and our dedicated team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={inputBaseClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={inputBaseClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone no"
                  className={inputBaseClass}
                />

                <div className="relative">
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none pr-12 ${formData.inquiry ? 'text-[#121212]' : 'text-[#8d877d]'}`}
                  >
                    <option value="">Your inquiry about</option>
                    <option value="kitchen">Kitchen Installation</option>
                    <option value="bedroom">Bedroom Installation</option>
                    <option value="renovation">Home Renovation</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#8d877d]">
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </span>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="min-h-[128px] w-full rounded-[22px] border border-[#efefef] bg-[#f7f7f7] px-5 py-4 text-[13px] text-[#121212] outline-none transition placeholder:text-[#9c9c9c] focus:border-[#f47b08] focus:bg-white"
              />

              <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-end sm:justify-between">
                <div className="text-[12px] leading-6 text-[#36322d] sm:text-[13px]">
                  <p>We&apos;re excited to connect with you!</p>
                  <p>Required fields are marked *</p>
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-[54px] w-full items-center justify-between rounded-full bg-[#ff8300] p-1 pl-6 text-left shadow-[0_18px_30px_rgba(255,131,0,0.24)] transition hover:translate-y-[-2px] sm:w-auto sm:min-w-[210px]"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
                    Contact Now
                  </span>
                  <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#121212] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative mt-8 overflow-visible rounded-[34px] rounded-tr-[58px] shadow-[0_18px_40px_rgba(20,20,20,0.1)] sm:mt-9 lg:mt-10 xl:-mt-[3.9rem] xl:mr-8 xl:rounded-tr-[100px]">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop"
            alt="Modern apartment building exterior"
            className="h-[320px] w-full rounded-[34px] rounded-tr-[58px] object-cover object-center sm:h-[460px] lg:h-[590px] xl:rounded-tr-[100px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(17,17,17,0.03)_100%)]" />

          <div className="absolute bottom-0 right-5 translate-y-[34%] rounded-tl-[42px] bg-white p-2.5 sm:right-8 sm:p-3">
            <button
              type="button"
              aria-label="Play introductory video"
              className="group flex h-[86px] w-[86px] items-center justify-center rounded-full border-[4px] border-[#ff8300] bg-[#090909] text-white shadow-[0_18px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 sm:h-[98px] sm:w-[98px]"
            >
              <Play size={28} className="translate-x-0.5 fill-white transition-transform duration-300 group-hover:scale-110 sm:size-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
