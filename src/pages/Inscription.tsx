import React from 'react'
import { Card, Input, ButtonPrimary, Select, RankPill } from '../ui'
import { ExternalLink, Plus, Users } from 'lucide-react'
import { supabase } from '../supabase'

type Rank = "Unranked"
  | "Iron 4" | "Iron 3" | "Iron 2" | "Iron 1"
  | "Bronze 4" | "Bronze 3" | "Bronze 2" | "Bronze 1"
  | "Silver 4" | "Silver 3" | "Silver 2" | "Silver 1"
  | "Gold 4" | "Gold 3" | "Gold 2" | "Gold 1"
  | "Platinum 4"

export interface Player { id:string; pseudo:string; dpm_url:string; discord?:string|null; rank:Rank; created_at:string }

const RANKS: Rank[] = ["Unranked","Iron 4","Iron 3","Iron 2","Iron 1","Bronze 4","Bronze 3","Bronze 2","Bronze 1","Silver 4","Silver 3","Silver 2","Silver 1","Gold 4","Gold 3","Gold 2","Gold 1","Platinum 4"]

const Inscription: React.FC = () => {
  const [pseudo,setPseudo]=React.useState('')
  const [dpmUrl,setDpmUrl]=React.useState('')
  const [discord,setDiscord]=React.useState('')
  const [rank,setRank]=React.useState<Rank>('Unranked')
  const [submitting,setSubmitting]=React.useState(false)
  const [players,setPlayers]=React.useState<Player[]|null>(null)

  async function load(){ const {data}=await supabase.from('players').select('id,pseudo,dpm_url,discord,rank,created_at').order('created_at',{ascending:false}); setPlayers(data as Player[]) }
  React.useEffect(()=>{ load(); const ch=supabase.channel('players-all').on('postgres_changes',{event:'*',schema:'public',table:'players'},()=>load()).subscribe(); return ()=>{ supabase.removeChannel(ch) } },[])

  async function addPlayer(){ if(!pseudo.trim()) return alert('Entre un pseudo.'); setSubmitting(true); const {error}=await supabase.from('players').insert({ pseudo:pseudo.trim(), dpm_url:dpmUrl.trim(), discord:discord.trim()||null, rank }); setSubmitting(false); if(error){ console.error(error); return alert("Erreur d'inscription") } setPseudo(''); setDpmUrl(''); setDiscord(''); setRank('Unranked') }

  return (<div className="grid gap-6">
    <Card title={<><Users size={18}/> Inscription</> }>
      <div className="grid gap-3">
        <label className="text-sm font-medium">Pseudo</label>
        <Input value={pseudo} onChange={e=>setPseudo(e.target.value)} placeholder="Ex: CraZyBTW"/>
        <label className="text-sm font-medium mt-2">Lien DPM</label>
        <div className="grid sm:grid-cols-3 gap-2">
          <Input value={dpmUrl} onChange={e=>setDpmUrl(e.target.value)} placeholder="https://dpm.lol/summoner/euw/CraZyBTW-spray" className="sm:col-span-2"/>
          <a href="https://dpm.lol/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border border-gray-700 hover:bg-gray-900 inline-flex items-center justify-center text-gray-200"><ExternalLink size={16}/> Ouvrir DPM</a>
        </div>
        <label className="text-sm font-medium mt-2">Discord (optionnel)</label>
        <Input value={discord} onChange={e=>setDiscord(e.target.value)} placeholder="Ex: Pseudo#0000 ou @pseudo"/>
        <label className="text-sm font-medium mt-2">Rang initial</label>
        <div className="flex items-center gap-3">
          <Select value={rank} onChange={e=>setRank(e.target.value as Rank)}>{RANKS.map(r=> <option key={r} value={r}>{r}</option>)}</Select>
          <RankPill rank={rank}/>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <ButtonPrimary onClick={addPlayer} disabled={submitting}><Plus size={16}/> S'inscrire</ButtonPrimary>
        </div>
        <div className="text-xs text-gray-400">Astuce : "S'inscrire" ajoute immédiatement le joueur au classement partagé.</div>
      </div>
    </Card>
    <Card title={<><Users size={18}/> Joueurs inscrits ({players?.length ?? 0})</>}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-gray-400"><th className="py-2">Pseudo</th><th className="py-2">Voir DPM</th><th className="py-2">Discord</th><th className="py-2">Rang</th><th className="py-2">Date</th></tr></thead>
          <tbody>
            {players?.map(p=> (<tr key={p.id} className="fade-in border-t border-gray-800"><td className="py-2 font-medium">{p.pseudo}</td><td className="py-2"><a className="underline text-blue-400 inline-flex items-center gap-1" href={p.dpm_url} target="_blank" rel="noreferrer">Voir sur DPM ↗</a></td><td className="py-2 text-gray-300">{p.discord || <span className="opacity-50">—</span>}</td><td className="py-2"><RankPill rank={p.rank}/></td><td className="py-2 text-gray-400">{new Date(p.created_at).toLocaleString()}</td></tr>))}
            {players && !players.length && (<tr><td colSpan={5} className="py-6 text-center text-gray-500">Aucune inscription pour l'instant.</td></tr>)}
          </tbody>
        </table>
      </div>
    </Card>
  </div>)
}

export default Inscription
