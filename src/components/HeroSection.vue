<script setup>
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  MapPin,
  Clock,
  MessageSquare
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
  <section class="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Contenu Gauche -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-black text-black">
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
          <p class="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed font-semibold">
            Le partenaire télématique et sécurité GPS de référence au Mali pour les entreprises, transporteurs, ONG et particuliers.
          </p>

          <!-- 4 Atouts essentiels -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-bold text-black">
            <div class="flex items-center gap-2.5">
              <CheckCircle2 class="w-5 h-5 text-black shrink-0" />
              <span>Suivi GPS en direct (Bamako & Régions)</span>
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
              class="px-8 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm sm:text-base shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight class="w-4 h-4" />
            </button>

            <a 
              :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20Central%20Track%20Mali,%20je%20souhaite%20un%20devis`"
              target="_blank"
              class="px-6 py-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 border-2 border-black text-black font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare class="w-4 h-4 text-black" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>

          <!-- Ligne de contact direct -->
          <div class="pt-2 text-xs font-bold text-neutral-600 flex items-center gap-2">
            <PhoneCall class="w-4 h-4 text-black shrink-0" />
            <span>Assistance téléphonique directe :</span>
            <a :href="companyInfo.phones[0].link" class="text-black font-black underline">
              {{ companyInfo.phones[0].display }}
            </a>
            <span>/</span>
            <a :href="companyInfo.phones[1].link" class="text-black font-black underline">
              {{ companyInfo.phones[1].display }}
            </a>
          </div>

        </div>

        <!-- Carte de Présentation Officielle Droite -->
        <div class="lg:col-span-5 relative text-left">
          <div class="rounded-3xl border-2 border-black bg-neutral-50 p-7 sm:p-8 space-y-6 shadow-sm">
            
            <div class="border-b border-neutral-300 pb-5">
              <span class="text-xs font-black uppercase text-neutral-500 tracking-wider">AGENCE PRINCIPALE BAMAKO</span>
              <h2 class="text-2xl font-black text-black mt-1">CENTRAL TRACK MALI</h2>
              <p class="text-xs text-neutral-700 font-bold mt-1">
                Installation, Télématique & Assistance Sécurité 24/7
              </p>
            </div>

            <!-- Coordonnées rapides -->
            <div class="space-y-4 text-sm font-semibold text-neutral-900">
              <div class="flex items-start gap-3.5">
                <MapPin class="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <span class="text-xs uppercase text-neutral-500 font-bold block">Localisation :</span>
                  <span class="text-black font-bold">Banankabougou, près de la Cour Suprême, Bamako</span>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <Clock class="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <span class="text-xs uppercase text-neutral-500 font-bold block">Horaires d'ouverture :</span>
                  <span class="text-black font-bold">Lundi - Samedi : 08h00 à 18h30 (Support 24/7)</span>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <ShieldCheck class="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <span class="text-xs uppercase text-neutral-500 font-bold block">Garantie & Homologation :</span>
                  <span class="text-black font-bold">Balises certifiées résistantes aux fortes chaleurs et poussières</span>
                </div>
              </div>
            </div>

            <!-- Encadré Noir d'action rapide -->
            <div class="p-5 rounded-2xl bg-black text-white space-y-2">
              <span class="text-xs font-black uppercase tracking-wider block text-neutral-300">
                Besoin d'équiper un ou plusieurs véhicules ?
              </span>
              <p class="text-xs text-neutral-300 font-medium">
                Nos techniciens interviennent dans vos locaux ou à notre agence à Bamako sous 24h.
              </p>
              <button 
                @click="onOpenQuote"
                class="w-full mt-2 py-3 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-black text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Faire une demande de tarif
              </button>
            </div>

          </div>
        </div>

      </div>

      <!-- Bandeau des 4 Chiffres Clés -->
      <div class="mt-14 pt-8 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in keyStats" :key="stat.label" class="text-left border-l-2 border-black pl-4">
          <span class="text-2xl sm:text-3xl font-black text-black font-mono block">
            {{ stat.value }}
          </span>
          <span class="text-xs text-neutral-700 font-bold mt-1 block">
            {{ stat.label }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
