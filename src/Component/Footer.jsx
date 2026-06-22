import React from 'react'

const footerLinks = [
  ['Solutions', 'Pricing', 'Meet Our Team', 'Blog', 'HR Guides'],
  ['Testimonials', 'Outsourcing', 'Privacy Policy', 'HR Training', 'Careers'],
  ['About Us', 'Our Services', 'Events', 'Contact Us'],
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M13.5 8.5V7.2c0-.6.4-1 1-1H16V3.5h-1.9c-2.1 0-3.6 1.4-3.6 3.7v1.3H8.7V12h1.8v8.5h3.2V12h2.2l.3-3.5h-2.7Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M5 4h4.2l3.4 4.9L17 4h2l-5.2 7.5L19 20h-4.2l-3.6-5.2L7.5 20h-2l5.4-7.8L5 4Z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M21.5 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.5 12 5.5 12 5.5s-6 0-7.6.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2.2 12c0 1.6.1 3.2.3 4.3a2.7 2.7 0 0 0 1.9 1.9c1.6.3 7.6.3 7.6.3s6 0 7.6-.3a2.7 2.7 0 0 0 1.9-1.9c.2-1.1.3-2.7.3-4.3s-.1-3.2-.3-4.3ZM10.2 15V9l5.3 3-5.3 3Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M7.2 3.8h9.6A3.4 3.4 0 0 1 20.2 7.2v9.6a3.4 3.4 0 0 1-3.4 3.4H7.2a3.4 3.4 0 0 1-3.4-3.4V7.2a3.4 3.4 0 0 1 3.4-3.4Zm0 2A1.4 1.4 0 0 0 5.8 7.2v9.6a1.4 1.4 0 0 0 1.4 1.4h9.6a1.4 1.4 0 0 0 1.4-1.4V7.2a1.4 1.4 0 0 0-1.4-1.4H7.2Zm4.8 1.8a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.8-.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  )
}

function BrandMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/90 shadow-lg shadow-orange-500/25">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-white">
        <path d="M4 18.5 10.8 5.5l4.1 7.6 2.4-3.4L20 18.5H4Z" />
      </svg>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="px-3 pb-8 pt-4 sm:px-6 lg:px-8">
      {/* Absolute positioning relative anchor context wrapper */}
      <div className="relative mx-auto max-w-6xl">

        {/* ========================================== */}
        {/* TOP LEFT CUTOUT COMPOSITE                  */}
        {/* ========================================== */}
        <div className="hidden md:block absolute top-0 left-0 bg-white w-48 h-16 rounded-br-3xl z-20">
          <div className="absolute -bottom-6 left-0 w-6 h-6 rounded-tl-3xl shadow-[-6px_-6px_0_0_#fff]" />
          <div className="absolute top-0 -right-6 w-6 h-6 rounded-tl-3xl shadow-[-6px_-6px_0_0_#fff]" />
        </div>

        {/* ========================================== */}
        {/* TOP RIGHT CUTOUT COMPOSITE                 */}
        {/* ========================================== */}
        <div className="hidden md:block absolute top-0 right-0 bg-white w-48 h-16 rounded-bl-3xl z-20">
          <div className="absolute -bottom-6 right-0 w-6 h-6 rounded-tr-3xl shadow-[6px_-6px_0_0_#fff]" />
          <div className="absolute top-0 -left-6 w-6 h-6 rounded-tr-3xl shadow-[6px_-6px_0_0_#fff]" />
        </div>

        {/* Main Dark Footer Wrapper */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#07090d] text-white shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
          {/* Background Gradients & Accents */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#12151b_0%,#07090d_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0)_22%),linear-gradient(315deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0)_20%)]" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />

          {/* Core Content Area */}
          <div className="relative px-5 pb-5 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">

            {/* Newsletter Subscription Row */}
            <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  Subscribe Newsletter
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/65 sm:text-base">
                  Sign up today to get the latest inspiration and insights.
                </p>
              </div>

              <form className="w-full sm:max-w-xl">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-3 rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter Your Email Address..."
                    className="min-w-0 flex-1 rounded-full border-0 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-400"
                  >
                    Subscribe
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-[11px]">
                      Go
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Middle Layout Blocks */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1.8fr] lg:gap-12">
              <div className="max-w-md">
                <div className="flex items-center gap-3">
                  <BrandMark />
                  <div>
                    <div className="text-2xl font-semibold tracking-tight">Constrc</div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                      Construction Studio
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
                  For clients, our employees, and our community, through our commitment to leadership,
                  excellence in craft, and attention to detail.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-medium text-white/85">Follow Us:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="X"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                    >
                      <XIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                    >
                      <YoutubeIcon />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Dynamic Footer Hyperlinks */}
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {footerLinks.map((group, index) => (
                  <ul key={index} className="space-y-3">
                    {group.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-sm transition hover:text-orange-400 text-white/78"
                        >
                          <span className="text-[10px] text-white/40">•</span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="relative mt-10 overflow-hidden rounded-full bg-white/8 px-4 py-3 text-xs text-white/70 ring-1 ring-white/8 sm:px-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p>Copyright 2026 - All Rights Reserved By expert-themes</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href="#" className="transition hover:text-white">
                    Support Center
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </div>
              </div>
            </div>

            {/* Giant Graphic Text */}
            <div className="pointer-events-none absolute bottom-10 left-1/2 -z-0 hidden -translate-x-1/2 select-none text-[clamp(4rem,18vw,12rem)] font-black leading-none tracking-tight text-white/5 lg:block">
              constrc
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}