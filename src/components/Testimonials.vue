<script setup>
import { ref } from 'vue'
import { 
  ChevronDown, 
  HelpCircle, 
  Star, 
  Quote, 
  Building, 
  CheckCircle2 
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
    text: "Nous contrôlons désormais les heures réelles de fonctionnement de nos pelleteuses et groupes électrogènes. La coupure moteur à distance nous protège contre toute utilisation frauduleuse de nuit.",
    author: "Gestionnaire de Parc",
    rating: 5
  }
]
</script>

<template>
  <section class="py-20 bg-[#060B14] relative border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Testimonials Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Star class="w-3.5 h-3.5 fill-cyan-400" />
            <span>RÉFÉRENCES & CONFIANCE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            La sérénité garantie pour les gestionnaires de parc
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          Découvrez les retours d'expérience d'entreprises, d'ONG et de transporteurs opérant quotidiennement sur les axes maliens.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
        <div 
          v-for="(rev, idx) in clientReviews"
          :key="idx"
          class="p-7 rounded-2xl bg-[#0A1424] border border-slate-800 flex flex-col justify-between space-y-4 relative"
        >
          <Quote class="w-8 h-8 text-cyan-500/30 absolute top-6 right-6" />
          
          <div class="space-y-3">
            <div class="flex items-center gap-1 text-amber-400">
              <Star v-for="s in rev.rating" :key="s" class="w-4 h-4 fill-amber-400" />
            </div>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "{{ rev.text }}"
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800">
            <span class="font-bold text-white text-sm block">{{ rev.author }}</span>
            <span class="text-cyan-400 text-xs font-medium block">{{ rev.company }}</span>
            <span class="text-slate-400 text-[11px] block">{{ rev.location }}</span>
          </div>
        </div>
      </div>

      <!-- FAQ Section : Left-aligned -->
      <div class="max-w-4xl space-y-6 text-left">
        
        <div class="space-y-2 border-b border-slate-800/80 pb-4">
          <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <HelpCircle class="w-4 h-4" />
            <span>Foire aux questions</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white">Questions fréquentes sur nos services de tracking</h3>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, fIndex) in faqs" 
            :key="fIndex"
            class="rounded-2xl border border-slate-800 bg-[#0A1424] overflow-hidden transition-all"
          >
            <button 
              @click="toggleFaq(fIndex)"
              class="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>{{ faq.q }}</span>
              <ChevronDown 
                class="w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-cyan-400': openFaqIndex === fIndex }"
              />
            </button>
            <div 
              v-show="openFaqIndex === fIndex" 
              class="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
