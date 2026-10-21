<script setup>
import { ref } from 'vue'
import { 
  ChevronDown, 
  HelpCircle, 
  Star, 
  Quote
} from 'lucide-vue-next'
import { faqs } from '../data/content'

const openFaqIndex = ref(0)

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}

const clientReviews = [
  {
    company: "Société de Logistique & Transit",
    location: "Bamako / Corridor Dakar",
    text: "Grâce aux balises CTM et aux sondes carburant, nous avons arrêté les siphonnages de gasoil sur nos camions semi-remorques. Le retour sur investissement a été atteint en moins de 2 mois.",
    author: "Directeur des Opérations",
    rating: 5
  },
  {
    company: "ONG Internationale Humanitaire",
    location: "Missions Régions Mopti & Tombouctou",
    text: "La fonction bouton SOS et le suivi en direct nous permettent de garantir la sécurité de nos personnels lors de leurs missions sur le terrain. L'assistance de l'équipe de Banankabougou est exemplaire.",
    author: "Responsable Sécurité Flotte",
    rating: 5
  },
  {
    company: "Entreprise BTP & Travaux Publics",
    location: "Chantiers Grand Bamako",
    text: "Nous contrôlons désormais les heures réelles de fonctionnement de nos pelleteuses. La coupure moteur à distance nous protège contre toute utilisation frauduleuse de nuit.",
    author: "Gestionnaire de Parc",
    rating: 5
  }
]
</script>

<template>
  <section class="py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Star class="w-3.5 h-3.5 fill-black text-black" />
            <span>RÉFÉRENCES & CONFIANCE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            La sérénité garantie pour les gestionnaires de parc
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Découvrez les retours d'expérience d'entreprises, d'ONG et de transporteurs opérant sur les axes maliens.
        </p>
      </div>

      <!-- Grille des Avis Clients N&B -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
        <div 
          v-for="(rev, idx) in clientReviews"
          :key="idx"
          class="p-7 rounded-2xl bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between space-y-5 relative shadow-sm"
        >
          <Quote class="w-8 h-8 text-neutral-300 absolute top-6 right-6" />
          
          <div class="space-y-3">
            <div class="flex items-center gap-1">
              <Star v-for="s in rev.rating" :key="s" class="w-4 h-4 fill-black text-black" />
            </div>
            <p class="text-neutral-800 text-sm leading-relaxed font-medium italic">
              "{{ rev.text }}"
            </p>
          </div>

          <div class="pt-4 border-t border-neutral-200">
            <span class="font-black text-black text-sm block">{{ rev.author }}</span>
            <span class="text-neutral-700 text-xs font-bold block">{{ rev.company }}</span>
            <span class="text-neutral-500 text-[11px] font-semibold block">{{ rev.location }}</span>
          </div>
        </div>
      </div>

      <!-- Foire Aux Questions (FAQ) -->
      <div class="max-w-4xl space-y-6 text-left">
        
        <div class="space-y-2 border-b border-black/10 pb-4">
          <div class="inline-flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
            <HelpCircle class="w-4 h-4 text-black" />
            <span>Foire aux questions</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-black text-black">Questions fréquentes sur nos services de tracking</h3>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIndex) in faqs" 
            :key="fIndex"
            class="rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden transition-all shadow-sm"
          >
            <button 
              @click="toggleFaq(fIndex)"
              class="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-black hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <span>{{ faq.q }}</span>
              <ChevronDown 
                class="w-5 h-5 shrink-0 text-black transition-transform duration-200"
                :class="{ 'rotate-180': openFaqIndex === fIndex }"
              />
            </button>
            <div 
              v-show="openFaqIndex === fIndex" 
              class="px-5 pb-5 text-sm text-neutral-700 font-medium leading-relaxed border-t border-neutral-200 pt-3"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
