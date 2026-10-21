<script setup>
import { ref } from 'vue'
import { 
  ChevronDown, 
  HelpCircle,
  ShieldCheck,
  Headphones,
  Wrench
} from 'lucide-vue-next'
import { faqs } from '../data/content'

const openFaqIndex = ref(0)

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}

const guarantees = [
  {
    icon: Wrench,
    title: "Installation en moins d'1 heure",
    desc: "Nos techniciens interviennent chez vous à Bamako sans immobiliser durablement vos véhicules."
  },
  {
    icon: ShieldCheck,
    title: "Garantie Matériel 12 Mois",
    desc: "Balises et capteurs industriels certifiés avec remplacement immédiat en cas de défaillance."
  },
  {
    icon: Headphones,
    title: "Assistance Téléphonique 7j/7",
    desc: "Ligne directe disponible pour toute urgence, localisation d'un véhicule ou commande de coupure moteur."
  }
]
</script>

<template>
  <section id="faq" class="py-16 md:py-20 bg-neutral-50 border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 3 Engagements de service -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
        <div 
          v-for="(g, gIdx) in guarantees" 
          :key="gIdx"
          class="p-6 rounded-2xl bg-white border-2 border-neutral-200 space-y-3 shadow-sm"
        >
          <div class="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
            <component :is="g.icon" class="w-5 h-5" />
          </div>
          <h3 class="text-base font-black text-black">{{ g.title }}</h3>
          <p class="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">{{ g.desc }}</p>
        </div>
      </div>

      <!-- FAQ Accordéon -->
      <div class="max-w-3xl mx-auto space-y-6 text-left">
        
        <div class="space-y-2 border-b border-neutral-300 pb-4">
          <div class="inline-flex items-center gap-2 text-xs font-black text-black uppercase tracking-wider">
            <HelpCircle class="w-4 h-4 text-black" />
            <span>QUESTIONS FRÉQUENTES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-black">Tout ce que vous devez savoir sur nos services</h2>
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
