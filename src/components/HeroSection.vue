<script setup>
import { 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  Satellite
} from 'lucide-vue-next'
import { companyInfo, keyStats } from '../data/content'

defineProps({
  onOpenQuote: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <section class="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white bg-grid-subtle border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Contenu Gauche -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <span class="w-2 h-2 rounded-full bg-black"></span>
            <span class="tracking-wide uppercase">CENTRAL TRACK MALI</span>
            <span class="text-neutral-400">•</span>
            <span>Bamako, Mali</span>
          </div>

          <!-- Titre Principal -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.12]">
            Optimisez vos opérations, <br />
            <span class="underline decoration-4 underline-offset-8">sécurisez vos véhicules</span> <br />
            et réduisez vos coûts.
          </h1>

          <!-- Sous-titre -->
          <p class="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed font-medium">
            La référence en télématique professionnelle au Mali :
            <strong class="text-black font-bold">suivi GPS en direct</strong>, 
            <strong class="text-black font-bold">gestion de flotte</strong>, 
            <strong class="text-black font-bold">vidéosurveillance embarquée</strong> et 
            <strong class="text-black font-bold">contrôle carburant anti-vol</strong>.
          </p>

          <!-- Liste à puces -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-semibold text-neutral-900">
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-5 h-5 text-black shrink-0" />
              <span>Couverture Bamako & toutes régions</span>
            </div>
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-5 h-5 text-black shrink-0" />
              <span>Coupure moteur à distance anti-vol</span>
            </div>
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-5 h-5 text-black shrink-0" />
              <span>Contrôle anti-siphonnage carburant</span>
            </div>
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-5 h-5 text-black shrink-0" />
              <span>Installation rapide par nos experts</span>
            </div>
          </div>

          <!-- Boutons d'appel à l'action -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button 
              @click="onOpenQuote"
              class="px-7 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Obtenir un devis gratuit</span>
              <ArrowRight class="w-4 h-4" />
            </button>

            <a 
              href="#simulateur"
              class="px-6 py-4 rounded-xl bg-white hover:bg-neutral-50 border-2 border-black text-black font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Activity class="w-4 h-4 text-black" />
              <span>Tester la démo GPS</span>
            </a>
          </div>

          <!-- Ligne de contact rapide -->
          <div class="pt-2 text-xs font-semibold text-neutral-600 flex items-center gap-2">
            <PhoneCall class="w-4 h-4 text-black shrink-0" />
            <span>Appel direct agence :</span>
            <a :href="companyInfo.phones[0].link" class="text-black font-bold underline">
              {{ companyInfo.phones[0].display }}
            </a>
            <span>/</span>
            <a :href="companyInfo.phones[1].link" class="text-black font-bold underline">
              {{ companyInfo.phones[1].display }}
            </a>
          </div>

        </div>

        <!-- Panneau Droite (Console télématique noir et blanc) -->
        <div class="lg:col-span-5 relative">
          <div class="rounded-2xl bg-black text-white p-6 sm:p-7 shadow-2xl border border-neutral-800">
            
            <!-- Entête HUD -->
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-white animate-pulse"></span>
                <div>
                  <h3 class="text-sm font-black text-white flex items-center gap-2">
                    <span>CONSOLE CTM EN DIRECT</span>
                    <span class="text-[9px] px-1.5 py-0.5 rounded bg-white text-black font-bold font-mono">ACTIF</span>
                  </h3>
                  <p class="text-xs text-neutral-400">Supervision de Flotte • Bamako</p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-700">
                <Satellite class="w-3.5 h-3.5" />
                <span>18 SAT • 4G</span>
              </div>
            </div>

            <!-- Radar / Carte N&B -->
            <div class="my-5 relative h-48 rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center">
              <!-- Cercles radar -->
              <div class="absolute w-40 h-40 rounded-full border border-neutral-800"></div>
              <div class="absolute w-24 h-24 rounded-full border border-neutral-800"></div>
              
              <!-- Balayage radar -->
              <div class="absolute w-40 h-40 rounded-full overflow-hidden">
                <div class="w-full h-full animate-radar origin-center bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.25)_360deg)]"></div>
              </div>

              <!-- Véhicule 1 -->
              <div class="absolute top-10 left-12 flex flex-col items-center">
                <span class="w-3 h-3 rounded-full bg-white shadow-md"></span>
                <span class="text-[9px] bg-white text-black px-1.5 py-0.5 rounded font-mono font-bold mt-1">Camion CH-8492 (54 km/h)</span>
              </div>

              <!-- Véhicule 2 -->
              <div class="absolute bottom-8 right-12 flex flex-col items-center">
                <span class="w-3 h-3 rounded-full bg-white shadow-md"></span>
                <span class="text-[9px] bg-white text-black px-1.5 py-0.5 rounded font-mono font-bold mt-1">Hilux AF-1204 (68 km/h)</span>
              </div>

              <!-- Siège CTM -->
              <div class="absolute flex flex-col items-center z-10">
                <div class="w-5 h-5 rounded-full bg-white border-2 border-black flex items-center justify-center">
                  <span class="w-2 h-2 rounded-full bg-black"></span>
                </div>
                <span class="text-[9px] font-bold text-black bg-white px-2 py-0.5 rounded border border-black mt-1">
                  Agence CTM Banankabougou
                </span>
              </div>
            </div>

            <!-- Télémétrie en 3 blocs -->
            <div class="grid grid-cols-3 gap-2.5">
              <div class="bg-neutral-900 p-3 rounded-xl border border-neutral-800 text-left">
                <span class="text-[10px] text-neutral-400 uppercase tracking-wider block font-bold">Vitesse</span>
                <span class="text-base font-black text-white font-mono">54 km/h</span>
              </div>
              <div class="bg-neutral-900 p-3 rounded-xl border border-neutral-800 text-left">
                <span class="text-[10px] text-neutral-400 uppercase tracking-wider block font-bold">Carburant</span>
                <span class="text-base font-black text-white font-mono">78%</span>
              </div>
              <div class="bg-neutral-900 p-3 rounded-xl border border-neutral-800 text-left">
                <span class="text-[10px] text-neutral-400 uppercase tracking-wider block font-bold">Sécurité</span>
                <span class="text-base font-black text-white font-mono flex items-center gap-1">
                  <ShieldCheck class="w-4 h-4 text-white" />
                  <span>OK</span>
                </span>
              </div>
            </div>

            <!-- Statut relais -->
            <div class="mt-4 py-2 px-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <span class="w-2 h-2 rounded-full bg-white"></span>
              <span>Relais coupe-circuit actif et opérationnel.</span>
            </div>

          </div>
        </div>

      </div>

      <!-- Bandeau de Statistiques N&B -->
      <div class="mt-14 pt-8 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in keyStats" :key="stat.label" class="text-left border-l-2 border-black pl-4">
          <span class="text-2xl sm:text-3xl font-black text-black font-mono block">
            {{ stat.value }}
          </span>
          <span class="text-xs text-neutral-600 font-bold mt-1 block">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
