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
  <section id="secteurs" class="py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Shield class="w-3.5 h-3.5" />
            <span>SECTEURS D'ACTIVITÉ</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Des configurations sur-mesure pour chaque métier
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Transport lourd, missions humanitaires, véhicules commerciaux ou engins de chantier : CTM adapte le matériel à vos exigences.
        </p>
      </div>

      <!-- Onglets des secteurs -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10">
        <button
          v-for="(sector, idx) in targetSectors"
          :key="sector.name"
          @click="activeSectorIndex = idx"
          class="p-5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col gap-3 group"
          :class="activeSectorIndex === idx 
            ? 'bg-black border-black text-white shadow-md' 
            : 'bg-white border-neutral-200 text-black hover:border-black'"
        >
          <div class="flex items-center justify-between">
            <component 
              :is="getSectorIcon(sector.icon)" 
              class="w-6 h-6 transition-colors"
              :class="activeSectorIndex === idx ? 'text-white' : 'text-black'"
            />
            <span 
              class="w-2.5 h-2.5 rounded-full"
              :class="activeSectorIndex === idx ? 'bg-white' : 'bg-neutral-300'"
            ></span>
          </div>
          <span class="font-black text-sm sm:text-base">
            {{ sector.name }}
          </span>
        </button>
      </div>

      <!-- Carte du secteur actif -->
      <div class="rounded-3xl border-2 border-black bg-neutral-50 p-8 md:p-12 relative overflow-hidden shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold">
              Solution Spécifique CTM
            </div>
            <h3 class="text-2xl sm:text-3xl font-black text-black">
              {{ targetSectors[activeSectorIndex].name }}
            </h3>
            <p class="text-neutral-700 text-base font-medium leading-relaxed">
              {{ targetSectors[activeSectorIndex].desc }}
            </p>

            <!-- Liste des bénéfices -->
            <div class="space-y-3 pt-2">
              <span class="text-xs uppercase font-black text-black tracking-wider block">Avantages constatés sur le terrain :</span>
              <div 
                v-for="(benefit, bIndex) in targetSectors[activeSectorIndex].benefits"
                :key="bIndex"
                class="flex items-start gap-3 text-neutral-900 text-sm sm:text-base font-semibold"
              >
                <CheckCircle class="w-5 h-5 text-black shrink-0 mt-0.5" />
                <span>{{ benefit }}</span>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-4">
              <button 
                @click="onOpenQuote"
                class="px-7 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm flex items-center gap-2 cursor-pointer shadow transition-all"
              >
                <span>Demander une étude pour {{ targetSectors[activeSectorIndex].name }}</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Encadré des équipements recommandés -->
          <div class="lg:col-span-5 bg-white rounded-2xl p-6 border-2 border-black space-y-4 shadow-sm text-left">
            <h4 class="text-xs font-black text-black uppercase tracking-wider">Équipements recommandés par CTM</h4>
            <div class="space-y-3 text-xs sm:text-sm">
              <div class="p-3.5 rounded-xl bg-neutral-100 border border-neutral-300">
                <span class="font-black text-black block mb-0.5">Balise GPS Industrielle IP67</span>
                <span class="text-neutral-700 font-medium">Étanche, anti-poussière, batterie interne de secours longue autonomie.</span>
              </div>
              <div class="p-3.5 rounded-xl bg-neutral-100 border border-neutral-300">
                <span class="font-black text-black block mb-0.5">Sonde Carburant Capacitive Haute Précision</span>
                <span class="text-neutral-700 font-medium">Mesure au litre près avec alertes siphonnage instantanées par SMS.</span>
              </div>
              <div class="p-3.5 rounded-xl bg-neutral-100 border border-neutral-300">
                <span class="font-black text-black block mb-0.5">Relais Coupe-Moteur Normalisé</span>
                <span class="text-neutral-700 font-medium">Installation propre respectant la garantie constructeur de vos véhicules.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
