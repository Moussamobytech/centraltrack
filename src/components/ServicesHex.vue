<script setup>
import { 
  CheckCircle, 
  ArrowUpRight, 
  Radio, 
  ShieldCheck 
} from 'lucide-vue-next'
import { keyPillars } from '../data/content'

defineProps({
  onSelectService: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <section id="solutions" class="py-16 md:py-20 relative bg-[#070D19] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header : Left-aligned modern 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-800/80 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Radio class="w-3.5 h-3.5 animate-pulse" />
            <span>NOS 3 PILIERS D'EXPERTISE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Des solutions adaptées aux réalités du transport au Mali
          </h2>
        </div>
        <p class="text-slate-400 text-sm max-w-md">
          Central Track Mali allie balises homologuées et accompagnement de terrain à Bamako pour sécuriser et rentabiliser votre flotte.
        </p>
      </div>

      <!-- Hexagonal / Pillar Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
        
        <div 
          v-for="pillar in keyPillars" 
          :key="pillar.id"
          class="relative group rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 to-[#0A1424]/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
        >
          <div>
            <!-- Top badge row -->
            <div class="flex items-center justify-between mb-5">
              <div class="relative w-12 h-12 flex items-center justify-center">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-emerald-400 hexagon-clip opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div class="absolute inset-[2px] bg-[#0A1628] hexagon-clip flex items-center justify-center">
                  <span class="text-base font-black font-['Space_Grotesk'] text-cyan-400">{{ pillar.number }}</span>
                </div>
              </div>

              <span class="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border" :class="pillar.badgeColor">
                {{ pillar.subtitle }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
              {{ pillar.title }}
            </h3>

            <!-- Description -->
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
              {{ pillar.description }}
            </p>

            <!-- Cibles & Spécificités (From flyer) -->
            <div class="space-y-2.5 pt-4 border-t border-slate-800/80 mb-5">
              <span class="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                Points clés & Secteurs cibles :
              </span>
              <ul class="space-y-1.5">
                <li 
                  v-for="(point, ptIndex) in pillar.bulletPoints" 
                  :key="ptIndex"
                  class="flex items-start gap-2 text-xs text-slate-300"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Detailed Features -->
            <div class="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 mb-5 space-y-1.5">
              <div 
                v-for="(feat, fIndex) in pillar.features" 
                :key="fIndex"
                class="flex items-center gap-2 text-xs text-slate-400"
              >
                <CheckCircle class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span class="truncate">{{ feat }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action link -->
          <a 
            href="#contact" 
            class="mt-auto inline-flex items-center justify-between w-full pt-3.5 border-t border-slate-800/60 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
          >
            <span>Demander une solution personnalisée</span>
            <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

      </div>

      <!-- Banner note : Left-aligned horizontal strip -->
      <div class="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0A1424] border border-cyan-500/30 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
        <div>
          <h4 class="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
            <ShieldCheck class="w-4 h-4 text-cyan-400" />
            <span>TRACKING • VIDÉOSURVEILLANCE • SÉCURITÉ & SERVICES</span>
          </h4>
          <p class="text-xs text-slate-400 mt-1">
            Matériel industriel certifié résistant aux températures et poussières sahéliennes.
          </p>
        </div>
        <a 
          href="#contact" 
          class="text-xs font-bold text-cyan-400 hover:text-cyan-300 px-4 py-2 rounded-lg bg-cyan-950/70 border border-cyan-500/30 whitespace-nowrap"
        >
          Contacter notre agence →
        </a>
      </div>

    </div>
  </section>
</template>
