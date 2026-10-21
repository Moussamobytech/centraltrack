<script setup>
import { ref } from 'vue'
import { 
  Building2, 
  Globe, 
  Truck, 
  HardHat, 
  CheckCircle, 
  ArrowRight, 
  Shield 
} from 'lucide-vue-next'
import { targetSectors } from '../data/content'

defineProps({
  onOpenQuote: {
    type: Function,
    default: () => {}
  }
})

const activeSectorIndex = ref(0)

const getSectorIcon = (iconName) => {
  switch (iconName) {
    case 'Building2': return Building2
    case 'Globe': return Globe
    case 'Truck': return Truck
    case 'HardHat': return HardHat
    default: return Building2
  }
}
</script>

<template>
  <section id="secteurs" class="py-20 bg-[#070D19] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Shield class="w-3.5 h-3.5" />
            <span>SECTEURS D'ACTIVITÉ</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Des configurations sur-mesure pour chaque métier
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          Transport lourd, missions humanitaires, véhicules commerciaux ou engins de chantier : CTM adapte le matériel à vos exigences opérationnelles.
        </p>
      </div>

      <!-- Sector Selector Tabs (Mobile & Desktop) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <button
          v-for="(sector, idx) in targetSectors"
          :key="sector.name"
          @click="activeSectorIndex = idx"
          class="p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col gap-2 group"
          :class="activeSectorIndex === idx 
            ? 'bg-gradient-to-br from-cyan-950/80 to-slate-900 border-cyan-400 shadow-glow-cyan/20' 
            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'"
        >
          <div class="flex items-center justify-between">
            <component 
              :is="getSectorIcon(sector.icon)" 
              class="w-6 h-6 transition-colors"
              :class="activeSectorIndex === idx ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-300'"
            />
            <span 
              class="w-2 h-2 rounded-full"
              :class="activeSectorIndex === idx ? 'bg-cyan-400' : 'bg-transparent'"
            ></span>
          </div>
          <span 
            class="font-bold text-sm sm:text-base transition-colors"
            :class="activeSectorIndex === idx ? 'text-white' : 'text-slate-300'"
          >
            {{ sector.name }}
          </span>
        </button>
      </div>

      <!-- Active Sector Showcase Card -->
      <div class="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0B1526] to-[#080E1C] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              Solution Spécifique CTM
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
              {{ targetSectors[activeSectorIndex].name }}
            </h3>
            <p class="text-slate-300 text-base leading-relaxed">
              {{ targetSectors[activeSectorIndex].desc }}
            </p>

            <!-- Key Benefits Checklist -->
            <div class="space-y-3 pt-2">
              <span class="text-xs uppercase font-semibold text-slate-400 tracking-wider">Avantages concrets constatés sur le terrain :</span>
              <div 
                v-for="(benefit, bIndex) in targetSectors[activeSectorIndex].benefits"
                :key="bIndex"
                class="flex items-start gap-3 text-slate-200 text-sm sm:text-base"
              >
                <div class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle class="w-4 h-4" />
                </div>
                <span>{{ benefit }}</span>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-4 flex flex-wrap gap-4">
              <button 
                @click="onOpenQuote"
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
              >
                <span>Demander une étude pour {{ targetSectors[activeSectorIndex].name }}</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Right Showcase Feature Box -->
          <div class="lg:col-span-5 bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-4">
            <h4 class="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <span>Équipements recommandés par CTM</span>
            </h4>
            <div class="space-y-3 text-xs sm:text-sm text-slate-300">
              <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span class="font-bold text-white block">Balise GPS Industrielle IP67</span>
                <span class="text-slate-400 text-xs">Étanche, anti-poussière, batterie interne de secours longue autonomie.</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span class="font-bold text-white block">Sonde Carburant Capacitive Haute Précision</span>
                <span class="text-slate-400 text-xs">Mesure au litre près avec alertes siphonnage instantanées par SMS.</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span class="font-bold text-white block">Relais Coupe-Moteur Normalisé</span>
                <span class="text-slate-400 text-xs">Installation propre respectant la garantie constructeur de vos véhicules.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
