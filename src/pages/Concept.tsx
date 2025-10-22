// src/pages/Concept.tsx
import React from 'react'
import logoRTP from '../assets/logo-rtp-v2.png'

const Section: React.FC<{title?: string; children: React.ReactNode}> = ({ title, children }) => (
  <section className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
    {title ? <h2 className="text-xl font-semibold text-white mb-2">{title}</h2> : null}
    <div className="text-gray-300 leading-relaxed text-[15px]">{children}</div>
  </section>
)

const Concept: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#10b98122,_transparent_60%)]" />
        <div className="relative px-6 py-10 text-center">
          <img src={logoRTP} alt="" className="mx-auto h-20 w-20 drop-shadow-[0_0_20px_#10b98166]" />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
            ROAD TO PLAT – The Challenge Begins
          </h1>
        </div>
      </section>

      <Section>
        <p>Bienvenue dans le Road to Plat, le défi ultime entre tryhardeurs.</p>
        <p className="mt-3">
          Le principe est simple : le premier joueur à atteindre le rang Platine sur League of Legends remporte la victoire…
          et un skin aléatoire d’une valeur de 1350 RP !
        </p>
        <p className="mt-3">Pour les OTP, c’est encore plus intéressant : deux skins sont en jeu.</p>
        <p className="mt-3">
          Cependant, l’historique sera vérifié ! Si tu es, par exemple, OTP Soraka, mais qu’elle est bannie, tu as bien sûr la
          possibilité de jouer un autre champion — tant que ton historique reste à au moins 98 % sur ton champion OTP.
        </p>
        <p className="mt-3">En dessous de ce seuil, tu ne seras plus considéré comme OTP.</p>
      </Section>

      <Section title="Règles du défi">
        <ul className="list-disc pl-5 space-y-1">
          <li>Le but : être le premier à atteindre le rang Platine.</li>
          <li>Chacun part sur son compte personnel, en solo queue.</li>
          <li>Le premier qui atteint le rang Plat gagne un skin aléatoire (1350 RP) offert par le ZanK !</li>
          <li>
            Si tu atteins Plat sur un compte, tu peux relancer le défi avec un deuxième compte pour continuer la compétition.
            <span className="block text-gray-400">Plus tu grimpes, plus tu montres ta constance et ton skill.</span>
          </li>
        </ul>
      </Section>

      <Section title="Esprit du challenge">
        <p>
          C’est une course de performance, d’endurance et de mental. Pas besoin d’être pro, mais il faut tenir la pression,
          progresser et garder le focus. Chaque game compte. Chaque tilt coûte cher.
        </p>
        <p className="mt-3">
          Ici, l’objectif n’est pas juste de monter — c’est de prouver que t’as le mental d’un vrai compétiteur.
        </p>
      </Section>

      <Section title="Comment participer">
        <ul className="list-disc pl-5 space-y-1">
          <li>Inscris-toi sur le site.</li>
          <li>Joue tes games en tryhard, montre tes progrès.</li>
          <li>Le moment où tu passes Plat sera célébré en live (on forcera CraZy).</li>
          <li>
            Et si tu gagnes ? Tu repars avec ton skin mystère 1350 RP
            <span className="text-gray-400"> (nécessite d’être sub à la chaîne Twitch de CraZy)</span>.
          </li>
        </ul>
      </Section>

      <Section title="Ready to climb ?">
        <p>
          Le grind commence maintenant. Un seul arrivera Plat le premier. Mais tous deviendront meilleurs.
        </p>
      </Section>
    </div>
  )
}

export default Concept
