import React from 'react'
import { Card, Select, RankPill } from '../ui'
import { ListChecks, Users } from 'lucide-react'
import { supabase } from '../supabase'

type Rank = "Unranked"
  | "Iron 4" | "Iron 3" | "Iron 2" | "Iron 1"
  | "Bronze 4" | "Bronze 3" | "Bronze 2" | "Bronze 1"
  | "Silver 4" | "Silver 3" | "Silver 2" | "Silver 1"
  | "Gold 4" | "Gold 3" | "Gold 2" | "Gold 1"
  | "Platinum 4"

interface Player { id:string; pseudo:string; dpm_url:string; discord?:string|null; rank:Rank; created_at:string }

const ORDER: Rank[] = ["Unranked","Iron 4","Iron 3","Iron 2","Iron 1","Bronze 4","Bronze 3","Bronze 2","Bronze 1","Silver 4","Silver 3","Silver 2","Silver 1","Gold 4","Gold 3","Gold 2","Gold 1","Platinum 4"]
const score = (r:Rank)=> ORDER.indexOf(r)

const Classement: React.FC = () => {
  const [players,setPlayers]=React.useState<Player[]|null>(null)
  async function load(){ const {data}=await supabase.from('players').select('id,pseudo,dpm_url,discord,rank,created_at'); const sorted=(data as Player[]).sort((a,b)=> score(b.rank)-score(a.rank) || a.pseudo.localeCompare(b.pseudo)); setPlayers(sorted) }
  async function updateRank(id:string, newRank:Rank){ const {error}=await supabase.from('players').update({rank:newRank}).eq('id',id); if(error){console.error(error); alert('Erreur lors de la mise à jour du rang'); return} setPlayers(p=> p? [...p].map(x=> x.id===id?{...x,rank:newRank}:x).sort((a,b)=> score(b.rank)-score(a.rank) || a.pseudo.localeCompare(b.pseudo)) : p) }
  React.useEffect(()=>{ load(); const ch=supabase.channel('players-ranks').on('postgres_changes',{event:'UPDATE',schema:'public',table:'players'},()=>load()).subscribe(); return ()=>{ supabase.removeChannel(ch) } },[])
  return (<div className="grid gap-6">
    <Card title={<><ListChecks size={18}/> Classement</>}><div className="text-xs text-gray-400">Tri auto : du plus haut rang vers le plus bas. La première ligne est mise en avant.</div></Card>
    <Card title={<><Users size={18}/> Joueurs ({players?.length ?? 0})</>}>
      <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left text-gray-400"><th className="py-2 w-10">#</th><th className="py-2">Pseudo</th><th className="py-2">Voir DPM</th><th className="py-2">Discord</th><th className="py-2">Rang</th></tr></thead><tbody>
        {players?.map((p,idx)=> (<tr key={p.id} className={`fade-in border-t border-gray-800 ${idx===0?'bg-emerald-500/5':''}`}><td className="py-2 pr-2 text-gray-400">{idx+1}</td><td className="py-2 font-medium">{p.pseudo}</td><td className="py-2"><a className="underline text-blue-400 inline-flex items-center gap-1" href={p.dpm_url} target="_blank" rel="noreferrer">Voir sur DPM ↗</a></td><td className="py-2 text-gray-300">{p.discord || <span className="opacity-50">—</span>}</td><td className="py-2"><div className="flex items-center gap-2"><RankPill rank={p.rank}/><Select value={p.rank} onChange={e=>updateRank(p.id, e.target.value as Rank)}>{ORDER.map(r=> <option key={r} value={r}>{r}</option>)}</Select></div></td></tr>))}
        {players && !players.length && (<tr><td colSpan={5} className="py-6 text-center text-gray-500">Aucun joueur. Ajoutez des joueurs via l'onglet Inscription.</td></tr>)}
      </tbody></table></div>
    </Card>
  </div>)
}
export default Classement
