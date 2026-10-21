<script setup>
import { 
  ShieldCheck, 
  MapPin, 
  Activity, 
  ArrowRight, 
  Satellite, 
  PhoneCall, 
  Zap, 
  CheckCircle2 
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
  <section class="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-grid-pattern">
    <!-- Ambient glowing light gradients -->
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        <!-- Left Content - Left aligned -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Top Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs text-cyan-300">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span class="font-semibold tracking-wide uppercase">CENTRAL TRACK MALI</span>
            <span class="text-slate-500">•</span>
            <span class="text-slate-300">Bamako, Mali</span>
          </div>

          <!-- Main Headline (From flyer) -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Optimisez vos opérations, <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              sécurisez vos véhicules
            </span> <br />
            et réduisez vos coûts.
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            La solution de télématique professionnelle haute précision pour le Mali :
            <strong>suivi GPS en temps réel</strong>, <strong>gestion intelligente de flotte</strong>, 
            <strong>vidéosurveillance embarquée</strong> et <strong>contrôle anti-vol de carburant</strong>.
          </p>

          <!-- Core Value checkmarks -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-300">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Couverture totale Bamako & Régions</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Coupure moteur à distance anti-vol</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Contrôle anti-siphonnage carburant</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Installation rapide par nos techniciens</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
            <button 
              @click="onOpenQuote"
              class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Obtenir un devis gratuit</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#simulateur"
              class="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <Activity class="w-4 h-4 text-cyan-400" />
              <span>Tester la démo GPS en direct</span>
            </a>
          </div>

          <!-- Fast Contact Note -->
          <div class="pt-1 text-xs text-slate-400 flex items-center gap-2">
            <PhoneCall class="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Appel direct agence :</span>
            <a :href="companyInfo.phones[0].link" class="text-slate-200 hover:text-cyan-400 font-semibold underline underline-offset-2">
              {{ companyInfo.phones[0].display }}
            </a>
            <span>/</span>
            <a :href="companyInfo.phones[1].link" class="text-slate-200 hover:text-cyan-400 font-semibold underline underline-offset-2">
              {{ companyInfo.phones[1].display }}
            </a>
          </div>

        </div>

        <!-- Right Visual Card : Live Telematics HUD -->
        <div class="lg:col-span-5 relative">
          
          <div class="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-500/30 via-slate-800 to-emerald-500/30 shadow-xl">
            <div class="bg-[#0A1424] rounded-[14px] p-5 sm:p-6 border border-cyan-500/20 relative overflow-hidden">
              
              <!-- Top HUD Header -->
              <div class="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div class="flex items-center gap-2.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <div>
                    <h3 class="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <span>CONSOLE CTM EN DIRECT</span>
                      <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">EN LIGNE</span>
                    </h3>
                    <p class="text-[10px] text-slate-400">Supervision de Flotte • Bamako</p>
                  </div>
                </div>
                <div class="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  <Satellite class="w-3 h-3" />
                  <span>18 SAT • 4G LTE</span>
                </div>
              </div>

              <!-- Animated Mini Radar & Map Frame -->
              <div class="my-4 relative h-44 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
                <!-- Map Background pattern -->
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#00d2ff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <!-- Radar Circles -->
                <div class="absolute w-36 h-36 rounded-full border border-cyan-500/20"></div>
                <div class="absolute w-20 h-20 rounded-full border border-cyan-500/30"></div>
                
                <!-- Radar sweep line -->
                <div class="absolute w-36 h-36 rounded-full overflow-hidden">
                  <div class="w-full h-full animate-radar origin-center bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,210,255,0.4)_360deg)]"></div>
                </div>

                <!-- Vehicle Blip 1 -->
                <div class="absolute top-12 left-16 flex flex-col items-center">
                  <div class="relative flex h-3.5 w-3.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </div>
                  <span class="text-[9px] bg-slate-900/95 text-slate-200 px-1 rounded border border-emerald-500/40 mt-1 font-mono">Camion CH-8492 (54 km/h)</span>
                </div>

                <!-- Vehicle Blip 2 -->
                <div class="absolute bottom-8 right-20 flex flex-col items-center">
                  <div class="relative flex h-3.5 w-3.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
                  </div>
                  <span class="text-[9px] bg-slate-900/95 text-slate-200 px-1 rounded border border-cyan-500/40 mt-1 font-mono">Hilux AF-1204 (68 km/h)</span>
                </div>

                <!-- Center Point : Agence CTM Banankabougou -->
                <div class="absolute flex flex-col items-center z-10">
                  <div class="w-4 h-4 rounded-full bg-cyan-500/30 border-2 border-cyan-400 flex items-center justify-center">
                    <div class="w-1.5 h-1.5 rounded-full bg-cyan-300"></div>
                  </div>
                  <span class="text-[9px] font-semibold text-cyan-300 bg-slate-950/90 px-1.5 py-0.5 rounded border border-cyan-500/50 mt-1">
                    Agence CTM Banankabougou
                  </span>
                </div>
              </div>

              <!-- Live Telemetry Badges -->
              <div class="grid grid-cols-3 gap-2 text-left">
                <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Vitesse</span>
                  <span class="text-sm sm:text-base font-extrabold text-cyan-400 font-mono">54 km/h</span>
                </div>
                <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Carburant</span>
                  <span class="text-sm sm:text-base font-extrabold text-emerald-400 font-mono">78%</span>
                </div>
                <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Sécurité</span>
                  <span class="text-sm sm:text-base font-extrabold text-white font-mono flex items-center gap-1">
                    <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
                    <span>OK</span>
                  </span>
                </div>
              </div>

              <div class="mt-3 py-1.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-300">
                <Zap class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span class="truncate">Relais coupe-circuit actif et opérationnel.</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      <!-- Bottom Key Stats Strip - Left-aligned with subtle borders -->
      <div class="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in keyStats" :key="stat.label" class="text-left border-l-2 border-cyan-500/30 pl-4">
          <span class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono block">
            {{ stat.value }}
          </span>
          <span class="text-xs text-slate-400 mt-1 block">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
