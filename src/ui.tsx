import React from 'react'
export const Card: React.FC<{title?: React.ReactNode; className?: string; children: React.ReactNode}> = ({ title, className, children }) => (
  <div className={`bg-gray-900/90 rounded-2xl shadow-sm border border-gray-800 p-4 ${className ?? ""}`}>
    {title && <div className="mb-3 font-semibold flex items-center gap-2 text-gray-100">{title}</div>}
    {children}
  </div>
)
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className={`px-3 py-2 rounded-xl border bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 outline-none transition focus:border-emerald-500 ${props.className ?? ""}`} />
)
export const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...props} className={`px-3 py-2 rounded-xl border bg-gray-800 border-gray-700 text-gray-100 outline-none transition focus:border-emerald-500 ${props.className ?? ""}`} />
)
export const ButtonPrimary: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...rest}) => (
  <button {...rest} className={`px-4 py-2 rounded-xl bg-emerald-500 text-gray-900 font-medium hover:bg-emerald-400 active:translate-y-px transition ${className ?? ""}`}>{children}</button>
)
export const RankPill: React.FC<{rank: string}> = ({rank}) => {
  const tone = (r: string) => {
    if (r.startsWith("Platinum")) return "bg-emerald-500/15 text-emerald-300 border-emerald-400/40"
    if (r.startsWith("Gold"))     return "bg-yellow-500/15 text-yellow-300 border-yellow-400/40"
    if (r.startsWith("Silver"))   return "bg-slate-500/15 text-slate-300 border-slate-400/40"
    if (r.startsWith("Bronze"))   return "bg-orange-700/20 text-orange-300 border-orange-600/40"
    if (r.startsWith("Iron")||r==='Unranked') return "bg-neutral-700/40 text-neutral-300 border-neutral-600/40"
    return "bg-gray-800 text-gray-300 border-gray-700"
  }
  return <span className={`px-2 py-1 rounded-lg text-xs border ${tone(rank)}`}>{rank}</span>
}

export const NeonButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({className = "", ...props}) => (
  <button
    className={`px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/40 shadow-[0_0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_20px_0_rgba(16,185,129,0.35)] hover:bg-emerald-500/20 transition ${className}`}
    {...props}
  />
)
