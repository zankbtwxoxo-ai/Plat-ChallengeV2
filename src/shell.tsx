import React from 'react'
import logoRTP from './assets/logo-rtp-v2.png'
import { Link, useLocation } from 'react-router-dom'

const NavLink: React.FC<{to:string; active:boolean; label:string}> = ({to, active, label}) => (
  <Link to={to} className={`px-3 py-2 rounded-xl text-sm transition ${active ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>{label}</Link>
    {label}
  </Link>
)

const Shell: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="sticky top-0 z-40 bg-gray-950/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="font-semibold text-gray-100 group logo-wrap">
            <img src={logoRTP} alt="Road to Plat" className="h-10 w-10 rounded-xl ring-1 ring-emerald-500/30 transition group-hover:scale-[1.02]" />
            Road to Plat
          </Link>
          <nav className="mx-auto max-w-6xl px-4 ml-auto flex items-center gap-1">
            <NavLink to="/" active={pathname==='/' } label="Concept"/>
            <NavLink to="/inscription" active={pathname.startsWith('/inscription')} label="Inscription"/>
            <NavLink to="/classement" active={pathname.startsWith('/classement')} label="Classement"/>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <footer className="mt-16 border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        By ZanKBTWxoxo • CraZyBTW Content © • Made for viewers
      </footer>
    </div>
  )
}

export default Shell
