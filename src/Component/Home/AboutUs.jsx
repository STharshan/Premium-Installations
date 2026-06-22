function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M20 6 9 17l-5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
    </svg>
  )
}

export default function AboutUs() {
  const features = [
    'Skilled workers',
    'Quality guaranteed',
    'Extensive experience',
    'Customized quote',
  ]

  return (
    <section className="bg-[#f5f5f5] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute left-0 top-[18%] hidden h-[76%] w-[34%] rounded-lg bg-[linear-gradient(180deg,rgba(23,23,23,0.88),rgba(255,107,24,0.88))] shadow-[0_18px_40px_rgba(0,0,0,0.2)] md:block" />
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80"
              alt="Construction worker wearing orange safety gear"
              className="relative z-10 mx-auto h-[340px] w-[72%] rounded-[0.5rem] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:h-[460px] lg:h-[520px] lg:w-[62%]"
            />
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
              alt="Construction worker safety gloves and equipment"
              className="absolute left-0 top-[22%] h-[60%] w-[42%] rounded-[0.5rem] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:h-[68%] lg:h-[72%]"
            />
            <div className="absolute left-[10%] top-[6%] hidden h-[22%] w-[36%] rounded-[0.5rem] bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center shadow-[0_18px_40px_rgba(0,0,0,0.16)] lg:block" />
          </div>

          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              We Offer the Best Service for Building
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We are committed to providing the best professionals to make your project a unique and
              unparalleled work of construction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-300 text-orange-500">
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-[0_16px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400"
              >
                View the Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
