import React from 'react'
import { ArrowUpRight, Building2, Users } from 'lucide-react'

function HardHatOutline() {
  return (
    <svg viewBox="0 0 220 120" aria-hidden="true" className="h-auto w-full">
      <path
        d="M34 92c0-28 16-51 39-59 5-2 11-3 17-3h35c18 0 34 8 46 22l17 21c5 6 8 12 8 19v6H34v-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 34c1 24-2 40-8 58M108 31v61M138 37c5 16 7 34 6 55M54 92h143M183 79l10 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ConstructionBadge() {
  return (
    <div className="absolute -bottom-12 left-1/2 z-10 flex -translate-x-1/2 rotate-[-10deg] flex-col items-center">
      <div className="relative">
        <div className="absolute left-1/2 top-10 h-14 w-16 -translate-x-1/2 rounded-b-[1.8rem] bg-[linear-gradient(180deg,#d86f00_0%,#a94a00_100%)] opacity-85" />
        <div className="relative h-20 w-28 rounded-t-full rounded-b-xl border-[5px] border-[#d39a08] bg-[linear-gradient(180deg,#ffd94f_0%,#f5ae00_100%)] shadow-[0_18px_35px_rgba(245,174,0,0.28)]">
          <div className="absolute left-1/2 top-4 h-8 w-[72px] -translate-x-1/2 rounded-t-full border-[4px] border-[#f8cb31] border-b-0" />
          <div className="absolute left-[18px] right-[18px] top-[42px] h-[5px] rounded-full bg-[#c88700]" />
        </div>
      </div>
      <div className="relative -mt-1 rounded-md border-[3px] border-[#3b2a00] bg-[#ffd52a] px-3 py-1 shadow-[0_10px_18px_rgba(0,0,0,0.15)]">
        <span className="block text-[10px] font-black uppercase tracking-[0.12em] text-[#141414] sm:text-xs">
          Under
        </span>
        <span className="block text-sm font-black uppercase tracking-[0.08em] text-[#141414] sm:text-base">
          Construction
        </span>
      </div>
    </div>
  )
}

const stats = [
  {
    label: 'Global Reach',
    value: '85',
    suffix: '+',
    caption: 'Offices Worldwide',
    cardClass: 'bg-[#181818] text-white',
    Icon: Building2,
  },
  {
    label: 'Local Expertise',
    value: '1500',
    suffix: '+',
    caption: 'Employees',
    cardClass: 'bg-[#f47b08] text-white',
    Icon: Users,
  },
]

const WhoWeAre = () => {
  return (
    <section className="overflow-hidden bg-[#f7f4ee] px-5 py-20 text-[#111111] sm:px-8 lg:px-14 xl:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[205px_minmax(0,1fr)]">
          <div className="pt-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d08b35]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d08b35]">
                Who We Are
              </span>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="max-w-[860px] text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#101010] sm:text-5xl lg:text-[4rem]">
              The Largest Privately Held Real Estate Investors And Managers In The World
            </h2>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_minmax(0,1fr)_280px] xl:grid-cols-[190px_minmax(0,1fr)_320px] xl:gap-9">
              <div className="flex flex-col items-start">
                <div className="relative w-full pb-20">
                  <div className="overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=900&auto=format&fit=crop"
                      alt="Tall commercial tower exterior"
                      className="h-[310px] w-full object-cover sm:h-[360px] lg:h-[390px]"
                    />
                  </div>
                  <ConstructionBadge />
                </div>

                <button
                  type="button"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#f47b08] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_16px_28px_rgba(244,123,8,0.25)] transition hover:translate-y-[-2px]"
                >
                  Learn More
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
                  </span>
                </button>
              </div>

              <div className="overflow-hidden rounded-[34px] shadow-[0_18px_44px_rgba(0,0,0,0.1)] lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                  alt="City real estate skyline"
                  className="h-[360px] w-full object-cover object-center sm:h-[430px] lg:h-full lg:min-h-[470px]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-between gap-8 pt-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[1.75rem] font-black tracking-[-0.03em] text-[#111111] sm:text-[2rem] lg:text-[1.95rem]">
                      Our Vision
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#77716b]">
                      To empower businesses with cutting-edge web solutions that enhance their digital presence and drive growth.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[1.75rem] font-black tracking-[-0.03em] text-[#111111] sm:text-[2rem] lg:text-[1.95rem]">
                      Our Mission
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#77716b]">
                      Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today&apos;s competitive online landscape.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {stats.map(({ label, value, suffix, caption, cardClass, Icon }) => (
                    <div
                      key={label}
                      className={`rounded-[22px] px-5 py-5 shadow-[0_16px_32px_rgba(0,0,0,0.08)] ${cardClass}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-80">
                          {label}
                        </div>
                        <Icon size={18} className="opacity-80" strokeWidth={2.2} />
                      </div>
                      <div className="mt-10 border-t border-white/20 pt-5">
                        <div className="text-[2.2rem] font-black tracking-[-0.05em]">
                          {value}
                          <span className="ml-0.5 text-[1.6rem] align-top opacity-90">{suffix}</span>
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-[0.08em] opacity-[0.85]">
                          {caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute -bottom-3 right-[-18px] hidden w-[170px] text-[#d9d4cd] lg:block">
                  <HardHatOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
