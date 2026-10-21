<script setup>
import { 
  Video, 
  Fuel, 
  ShieldAlert, 
  MapPin, 
  BellRing, 
  Thermometer, 
  Radio, 
  Camera, 
  Lock, 
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
  <section id="services-avances" class="py-20 bg-[#060B14] relative border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Cpu class="w-3.5 h-3.5" />
            <span>TECHNOLOGIES EMBARQUÉES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tracking, Vidéosurveillance & Sécurité
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          Capteurs capacitifs, intelligence artificielle embarquée et relais coupe-moteur pour sécuriser l'intégralité de votre parc.
        </p>
      </div>

      <!-- Advanced Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(sol, sIdx) in advancedSolutions" 
          :key="sol.title"
          class="group p-7 rounded-3xl bg-gradient-to-b from-[#0A1424] to-[#070D19] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/30"
        >
          <!-- Icon box with glow -->
          <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all">
            <component :is="getIcon(sol.icon)" class="w-7 h-7" />
          </div>

          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {{ sol.title }}
          </h3>

          <p class="text-slate-400 text-sm leading-relaxed">
            {{ sol.desc }}
          </p>

          <div class="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400 opacity-90">
            <span>Module disponible à l'installation</span>
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
        </div>
      </div>

      <!-- Dashcam Highlight Showcase Banner -->
      <div class="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Camera class="w-4 h-4" />
            <span>NOUVEAUTÉ EXCLUSIVE CENTRAL TRACK MALI</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            Vidéosurveillance embarquée en direct avec IA
          </h3>
          <p class="text-slate-300 text-sm sm:text-base">
            Gardez un œil visuel permanent sur vos cargaisons et la conduite de vos chauffeurs. Enregistrement automatique en cas de choc, de freinage violent ou d'intrusion.
          </p>
        </div>
        <a 
          href="#contact"
          class="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm whitespace-nowrap shadow-lg shadow-cyan-400/20 transition-all hover:scale-105"
        >
          Demander une démonstration vidéo
        </a>
      </div>

    </div>
  </section>
</template>
