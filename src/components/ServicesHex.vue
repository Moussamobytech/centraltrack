<script setup>
import { 
  CheckCircle, 
  ArrowRight, 
  Radio, 
  ShieldCheck 
} from 'lucide-vue-next'
import { keyPillars } from '../data/content'
</script>

<template>
  <section id="solutions" class="py-16 md:py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête de section -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-black text-black">
            <Radio class="w-3.5 h-3.5" />
            <span>NOS 3 PILIERS D'EXPERTISE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Des solutions fiables et adaptées au Mali
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-semibold max-w-md">
          Chaque équipement est configuré pour répondre précisément aux contraintes de sécurité et de rentabilité de votre parc automobile.
        </p>
      </div>

      <!-- Grille des 3 piliers -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
        
        <div 
          v-for="pillar in keyPillars" 
          :key="pillar.id"
          class="rounded-3xl p-8 bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between shadow-sm"
        >
          <div>
            <!-- Numéro et sous-titre -->
            <div class="flex items-center justify-between mb-6">
              <span class="w-12 h-12 rounded-xl bg-black text-white font-black text-lg flex items-center justify-center">
                {{ pillar.number }}
              </span>
              <span class="text-xs font-bold uppercase px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-black">
                {{ pillar.subtitle }}
              </span>
            </div>

            <!-- Titre -->
            <h3 class="text-xl font-black text-black mb-3">
              {{ pillar.title }}
            </h3>

            <!-- Description -->
            <p class="text-neutral-700 text-sm font-medium leading-relaxed mb-6">
              {{ pillar.description }}
            </p>

            <!-- Fonctionnalités clés -->
            <div class="space-y-2.5 pt-4 border-t border-neutral-200 mb-6">
              <span class="text-xs font-black text-black uppercase tracking-wider block">
                Fonctionnalités incluses :
              </span>
              <ul class="space-y-2">
                <li 
                  v-for="(feat, fIndex) in pillar.features" 
                  :key="fIndex"
                  class="flex items-center gap-2.5 text-xs font-bold text-neutral-800"
                >
                  <CheckCircle class="w-4 h-4 text-black shrink-0" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Lien contact -->
          <a 
            href="#contact" 
            class="mt-auto inline-flex items-center justify-between w-full pt-4 border-t border-neutral-200 text-xs font-black text-black hover:underline"
          >
            <span>Obtenir un devis pour cette solution</span>
            <ArrowRight class="w-4 h-4" />
          </a>

        </div>

      </div>

    </div>
  </section>
</template>
