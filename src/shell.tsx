import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoRTP from './assets/logo-rtp-v2.png'

type NLProps = { to: string; active: boolean; label: string }

const NavLink: React.FC<NLProps> = ({ to, active, label }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-xl text-sm transition ${
      active
        ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30'
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`}
  >
    {label}
  </Link>
)

const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-40 bg-gray-950/70 backdrop-blur-md border-b border-white/5">
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoRTP}
              alt="Road to Plat"
              className="h-10 w-10 rounded-xl ring-1 ring-emerald-500/30 transition group-hover:scale-[1.02]"
            />
            <span className="font-semibold tracking-wide">Road to Plat</span>
          </Link>

          <div className="flex items-center gap-1">
            <NavLink to="/concept" active={pathname === '/concept'} label="Concept" />
            <NavLink to="/classement" active={pathname === '/classement'} label="Classement" />
            <NavLink to="/inscription" active={pathname === '/inscription'} label="Inscription" />
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

      <footer className="mt-16 border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        By ZanKBTWxoxo • CraZyBTW Content © • Made for viewers
      </footer>
    </div>
  )
}

export default Shell
