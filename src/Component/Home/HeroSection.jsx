function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 stroke-current">
      <path
        d="M7 17 17 7M10 7h7v7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="bg-white px-3 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">


      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-end">
              <div className="relative max-w-lg">
                <p className="hidden -translate-x-1/2 text-xs font-medium uppercase tracking-[0.45em] text-[#8a8a8a] lg:absolute lg:left-0 lg:top-1/2 lg:block lg:-rotate-90 lg:transform">
                  Since 2015
                </p>
                <h1 className="max-w-md text-4xl font-medium tracking-tight text-[#0f0f0f] sm:text-5xl lg:text-[4.35rem] lg:leading-[0.98]">
                  Where vision meets construction
                </h1>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#545454] sm:text-base">
                  We create modern spaces with strong form, clean rhythm, and a responsive layout that
                  adapts beautifully to every screen size.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:col-span-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[0.25rem] bg-[#ebe7e3] shadow-[0_20px_40px_rgba(15,15,15,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
                    alt="Construction worker in orange helmet"
                    className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[390px]"
                  />
                  <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white/90 to-transparent" />
                  <div className="absolute left-[-2.8rem] top-1/2 hidden -translate-y-1/2 rotate-180 text-[11px] font-medium uppercase tracking-[0.35em] text-[#8a8a8a] lg:block">
                    Since 2015
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-[0.25rem] bg-[#ebe7e3] shadow-[0_20px_40px_rgba(15,15,15,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
                    alt="Abstract architecture and construction shapes"
                    className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[560px]"
                  />

                  <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#2b2b2b] shadow-lg sm:bottom-6 sm:right-6">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f0f0f] text-white">
                      <ArrowIcon />
                    </span>
                    More Templates
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5 lg:col-start-1 lg:pt-6">
              <h2 className="max-w-lg text-4xl font-medium tracking-tight text-[#0f0f0f] sm:text-5xl lg:text-[4.4rem] lg:leading-[0.95]">
                Where vision meets construction
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 lg:self-end">
              <p className="max-w-2xl text-sm leading-7 text-[#545454] sm:text-base">
                The layout stays airy on desktop and stacks cleanly on smaller screens, keeping the
                logo, images, and content readable without losing the original composition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
