import React from 'react'
import logoRTP from '../assets/logo-rtp-v2.png'
import { Card, ButtonPrimary } from '../ui'
import { ExternalLink } from 'lucide-react'

const Concept: React.FC = () => (
  <div className="grid gap-6">
    <Card>
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-extrabold mb-4">ROAD TO PLAT – The Challenge Begins</h1>
        <p>Bienvenue dans le Road to Plat, le défi ultime entre tryhardeurs.</p>
        <p>Le principe est simple : le premier joueur à atteindre le rang Platine sur League of Legends remporte la victoire… et un skin aléatoire d’une valeur de <strong>1350 RP</strong> !</p>
        <h2 className="text-2xl font-bold mt-6 mb-2">Règles du défi</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Le but : être le premier à atteindre le rang Platine.</li>
          <li>Chacun part sur son compte personnel, en solo queue.</li>
          <li>Le premier qui atteint le rang Plat gagne un skin aléatoire (1350 RP) offert par le ZanK !</li>
          <li>Si tu atteins Plat sur un compte, tu peux relancer le défi avec un deuxième compte pour continuer la compétition. ➜ Plus tu grimpes, plus tu montres ta constance et ton skill.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2">Esprit du challenge</h2>
        <p>C’est une course de performance, d’endurance et de mental. Pas besoin d’être pro, mais il faut tenir la pression, progresser, et garder le focus. Chaque game compte. Chaque tilt coûte cher.</p>
        <p>Ici, l’objectif n’est pas juste de monter — c’est de prouver que t’as le mental d’un vrai compétiteur.</p>
        <h2 className="text-2xl font-bold mt-6 mb-2">Comment participer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Inscris-toi sur le site.</li>
          <li>Joue tes games en tryhard, montre tes progrès.</li>
          <li>Le moment où tu passes Plat sera célébré en live (On forcera CraZy).</li>
          <li>Et si tu gagnes ? Tu repars avec ton skin mystère 1350 RP <em>(Nécessite d'être sub à la chaine twitch de CraZy)</em>.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2">Ready to climb?</h2>
        <p>Le grind commence maintenant. Un seul arrivera Plat le premier. Mais tous deviendront meilleurs.</p>
        <div className="mt-6"><a href="https://discord.gg/KbhQEezp3Z" target="_blank" rel="noreferrer" className="inline-flex"><ButtonPrimary className="flex items-center gap-2"><ExternalLink size={16}/> Rejoindre le Discord</ButtonPrimary></a></div>
      </div>
    </Card>
  </div>
)


const RTPHero: React.FC = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#10b98122,_transparent_60%)]" />
    <div className="relative mx-auto max-w-4xl px-4 py-12 text-center">
      <img src={logoRTP} alt="" className="mx-auto h-20 w-20 drop-shadow-[0_0_20px_#10b98166]" />
      <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Road to Plat</h1>
      <p className="mt-2 text-gray-400">Tracke ta progression, compare-toi et grimpe le ladder.</p>
    </div>
  </section>
)

export default Concept
