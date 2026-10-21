<script setup>
import { 
  Building2, 
  Globe, 
  Truck, 
  HardHat, 
  CheckCircle,
  Users
} from 'lucide-vue-next'
import { targetSectors } from '../data/content'

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
  <section id="secteurs" class="py-16 md:py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-black text-black">
            <Users class="w-3.5 h-3.5" />
            <span>SECTEURS D'ACTIVITÉ</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Des formules conçues pour chaque type de flotte
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-semibold max-w-md">
          Du véhicule personnel aux flottes de poids lourds, CTM adapte le matériel à votre besoin opérationnel.
        </p>
      </div>

      <!-- Grille simple des 4 secteurs (pas de tabs superflus) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <div 
          v-for="sector in targetSectors" 
          :key="sector.name"
          class="p-7 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between space-y-5"
        >
          <div>
            <div class="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
              <component :is="getSectorIcon(sector.icon)" class="w-6 h-6" />
            </div>

            <h3 class="text-lg font-black text-black mb-2">
              {{ sector.name }}
            </h3>

            <p class="text-neutral-700 text-xs sm:text-sm font-medium leading-relaxed mb-4">
              {{ sector.desc }}
            </p>

            <ul class="space-y-2 border-t border-neutral-200 pt-4">
              <li 
                v-for="(benefit, bIdx) in sector.benefits" 
                :key="bIdx"
                class="flex items-start gap-2 text-xs font-bold text-neutral-800"
              >
                <CheckCircle class="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <a 
            href="#contact" 
            class="pt-3 border-t border-neutral-200 text-xs font-black text-black hover:underline block"
          >
            Demander un devis adapté →
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
