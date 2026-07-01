import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/case-study' },
  { label: 'Contact', to: '/contact' },
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm5.2-1.9 4.3 4.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4.5 4.5h4.5V9H4.5V4.5Zm10.5 0h4.5V9H15V4.5ZM4.5 15h4.5v4.5H4.5V15Zm10.5 0h4.5v4.5H15V15Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative isolate overflow-hidden px-3 py-5 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_30%),linear-gradient(135deg,#fafaf8_0%,#ebe7e3_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.04)_1px,transparent_1px),linear-gradient(rgba(15,15,15,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      <div className="absolute inset-x-4 top-10 -z-10 h-40 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(166,135,76,0.24),transparent_60%)] blur-3xl" />

      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-[#d9d2c2] bg-white/85 shadow-[0_24px_80px_rgba(15,15,15,0.12)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 text-[#111111]"
            aria-label="Constrc home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2b2b2b] shadow-lg shadow-black/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-[#fafaf8]">
                <path d="M4 18.5 10.8 5.5l4.1 7.6 2.4-3.4L20 18.5H4Z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
                Constrc
              </div>
              <div className="hidden text-[11px] uppercase tracking-[0.28em] text-[#8a8a8a] sm:block">
                Construction Studio
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition hover:bg-[#ebe7e3] hover:text-[#0f0f0f] ${
                    isActive ? 'bg-[#ebe7e3] text-[#0f0f0f]' : 'text-[#545454]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#545454] transition hover:bg-[#ebe7e3] hover:text-[#0f0f0f]"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <Link
              to="/contact"
              className="rounded-full bg-[#a6874c] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#a6874c]/25 transition hover:bg-[#917342]"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d2c2] bg-[#2b2b2b] text-[#fafaf8] transition hover:bg-[#0f0f0f]"
              aria-label="Open applications menu"
            >
              <GridIcon />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d2c2] bg-white text-[#0f0f0f] transition hover:bg-[#ebe7e3] xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 xl:hidden ${
            menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0 border-t border-[#d9d2c2] px-4 pb-4 pt-2 sm:px-5">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-[#ebe7e3] hover:text-[#0f0f0f] ${
                      isActive ? 'bg-[#ebe7e3] text-[#0f0f0f]' : 'text-[#545454]'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9d2c2] bg-white px-4 py-3 text-sm font-medium text-[#111111] transition hover:bg-[#ebe7e3] sm:flex-1"
              >
                <SearchIcon />
                Search
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#a6874c] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#a6874c]/25 transition hover:bg-[#917342] sm:flex-1"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
