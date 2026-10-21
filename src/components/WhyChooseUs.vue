<script setup>
import { 
  ShieldCheck, 
  MapPin, 
  Fuel, 
  Video, 
  Smartphone, 
  Wrench,
  CheckCircle2
} from 'lucide-vue-next'

const advantages = [
  {
    icon: Wrench,
    title: "Installation & Techniciens Locaux",
    desc: "Nos techniciens basés à Bamako (Banankabougou) installent le matériel directement dans vos locaux avec un câblage propre et sécurisé."
  },
  {
    icon: ShieldCheck,
    title: "Coupure Moteur Anti-Vol à Distance",
    desc: "En cas de vol, immobilisez immédiatement votre véhicule depuis votre téléphone portable ou via notre assistance 24/7."
  },
  {
    icon: Fuel,
    title: "Contrôle Anti-Siphonnage Carburant",
    desc: "Sondes électroniques de haute précision pour mesurer le niveau au litre près et détecter toute baisse anormale de gasoil."
  },
  {
    icon: Video,
    title: "Vidéosurveillance Embarquée 4G",
    desc: "Dashcams connectées pour filmer la route et l'habitacle en temps réel avec enregistrement automatique en cas d'accident ou de choc."
  },
  {
    icon: MapPin,
    title: "Couverture Grand Bamako & Régions",
    desc: "Balises industrielles fonctionnant sur l'ensemble du territoire malien et sur les corridors sous-régionaux (Dakar, Abidjan, etc.)."
  },
  {
    icon: Smartphone,
    title: "Application Simple sur Téléphone & PC",
    desc: "Suivez votre flotte en temps réel sur une interface claire avec rapports d'activité automatiques et alertes instantanées."
  }
]
</script>

<template>
  <section id="pourquoi-ctm" class="py-16 md:py-20 bg-neutral-50 border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-300 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-black">
            <span>POURQUOI CHOISIR CTM</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            La garantie d'une sécurité totale pour vos véhicules
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-semibold max-w-md">
          Un accompagnement sérieux, du matériel robuste et une proximité immédiate à Bamako pour protéger vos investissements.
        </p>
      </div>

      <!-- Grille 6 Atouts -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <div 
          v-for="(adv, idx) in advantages" 
          :key="idx"
          class="p-7 rounded-2xl bg-white border-2 border-neutral-200 hover:border-black transition-all space-y-4 shadow-sm"
        >
          <div class="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
            <component :is="adv.icon" class="w-6 h-6" />
          </div>

          <h3 class="text-lg font-black text-black">
            {{ adv.title }}
          </h3>

          <p class="text-neutral-700 text-sm font-medium leading-relaxed">
            {{ adv.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
