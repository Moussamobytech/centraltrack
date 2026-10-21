<script setup>
import { 
  CheckCircle, 
  ArrowUpRight, 
  Radio, 
  ShieldCheck 
} from 'lucide-vue-next'
import { keyPillars } from '../data/content'
</script>

<template>
  <section id="solutions" class="py-16 md:py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête de section -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-black/10 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Radio class="w-3.5 h-3.5" />
            <span>NOS 3 PILIERS D'EXPERTISE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Des solutions adaptées aux réalités du transport au Mali
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Central Track Mali allie balises homologuées et accompagnement de terrain à Bamako pour sécuriser et rentabiliser votre flotte.
        </p>
      </div>

      <!-- Grille des piliers en Noir & Blanc -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
        
        <div 
          v-for="pillar in keyPillars" 
          :key="pillar.id"
          class="relative group rounded-2xl p-7 bg-white border-2 border-neutral-200 hover:border-black transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
        >
          <div>
            <!-- Ligne badge du haut -->
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white font-black text-lg">
                {{ pillar.number }}
              </div>

              <span class="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-black">
                {{ pillar.subtitle }}
              </span>
            </div>

            <!-- Titre -->
            <h3 class="text-xl font-black text-black mb-3">
              {{ pillar.title }}
            </h3>

            <!-- Description -->
            <p class="text-neutral-700 text-sm leading-relaxed mb-6 font-medium">
              {{ pillar.description }}
            </p>

            <!-- Points clés -->
            <div class="space-y-2.5 pt-4 border-t border-neutral-200 mb-6">
              <span class="text-xs font-bold text-black uppercase tracking-wider block">
                Points clés & Secteurs cibles :
              </span>
              <ul class="space-y-2">
                <li 
                  v-for="(point, ptIndex) in pillar.bulletPoints" 
                  :key="ptIndex"
                  class="flex items-start gap-2.5 text-xs font-semibold text-neutral-800"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Fonctionnalités détaillées -->
            <div class="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200 mb-6 space-y-2">
              <div 
                v-for="(feat, fIndex) in pillar.features" 
                :key="fIndex"
                class="flex items-center gap-2 text-xs font-semibold text-neutral-800"
              >
                <CheckCircle class="w-4 h-4 text-black shrink-0" />
                <span class="truncate">{{ feat }}</span>
              </div>
            </div>
          </div>

          <!-- Lien action bas -->
          <a 
            href="#contact" 
            class="mt-auto inline-flex items-center justify-between w-full pt-4 border-t border-neutral-200 text-xs font-bold text-black hover:underline"
          >
            <span>Demander une solution personnalisée</span>
            <ArrowUpRight class="w-4 h-4" />
          </a>

        </div>

      </div>

      <!-- Bandeau récapitulatif Noir & Blanc -->
      <div class="mt-12 rounded-2xl bg-black text-white p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
        <div>
          <h4 class="text-sm font-black text-white tracking-widest uppercase flex items-center gap-2">
            <ShieldCheck class="w-5 h-5 text-white" />
            <span>TRACKING • VIDÉOSURVEILLANCE • SÉCURITÉ & SERVICES</span>
          </h4>
          <p class="text-xs text-neutral-300 mt-1 font-medium">
            Matériel industriel certifié résistant aux températures et poussières sahéliennes.
          </p>
        </div>
        <a 
          href="#contact" 
          class="text-xs font-bold text-black bg-white hover:bg-neutral-200 px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors"
        >
          Contacter notre agence →
        </a>
      </div>

    </div>
  </section>
</template>
