<script setup>
import { 
  Video, 
  Fuel, 
  ShieldAlert, 
  MapPin, 
  BellRing, 
  Thermometer, 
  Camera, 
  Cpu 
} from 'lucide-vue-next'
import { advancedSolutions } from '../data/content'

const getIcon = (name) => {
  switch (name) {
    case 'Video': return Video
    case 'Fuel': return Fuel
    case 'ShieldAlert': return ShieldAlert
    case 'MapPin': return MapPin
    case 'BellRing': return BellRing
    case 'Thermometer': return Thermometer
    default: return ShieldAlert
  }
}
</script>

<template>
  <section id="services-avances" class="py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Cpu class="w-3.5 h-3.5" />
            <span>TECHNOLOGIES EMBARQUÉES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Tracking, Vidéosurveillance & Sécurité
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Capteurs capacitifs, intelligence artificielle embarquée et relais coupe-moteur pour sécuriser l'intégralité de votre parc.
        </p>
      </div>

      <!-- Grille des solutions -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <div 
          v-for="(sol, sIdx) in advancedSolutions" 
          :key="sol.title"
          class="p-7 rounded-2xl bg-white border-2 border-neutral-200 hover:border-black transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
        >
          <div>
            <!-- Boîte icône -->
            <div class="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black mb-6">
              <component :is="getIcon(sol.icon)" class="w-7 h-7" />
            </div>

            <h3 class="text-lg sm:text-xl font-black text-black mb-2.5">
              {{ sol.title }}
            </h3>

            <p class="text-neutral-700 text-sm font-medium leading-relaxed">
              {{ sol.desc }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-black">
            <span>Module disponible à l'installation</span>
            <span class="w-2 h-2 rounded-full bg-black"></span>
          </div>
        </div>
      </div>

      <!-- Bandeau Dashcam en Noir & Blanc -->
      <div class="mt-16 rounded-3xl bg-black text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-300">
            <Camera class="w-4 h-4 text-white" />
            <span>NOUVEAUTÉ EXCLUSIVE CENTRAL TRACK MALI</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-black text-white">
            Vidéosurveillance embarquée en direct avec IA
          </h3>
          <p class="text-neutral-300 text-sm sm:text-base font-medium">
            Gardez un œil visuel permanent sur vos cargaisons et la conduite de vos chauffeurs. Enregistrement automatique en cas de choc, de freinage violent ou d'intrusion.
          </p>
        </div>
        <a 
          href="#contact"
          class="px-7 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-black text-sm whitespace-nowrap shadow transition-all hover:scale-105 cursor-pointer"
        >
          Demander une démonstration vidéo
        </a>
      </div>

    </div>
  </section>
</template>
