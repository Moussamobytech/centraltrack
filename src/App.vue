<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesHex from './components/ServicesHex.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import SectorsSection from './components/SectorsSection.vue'
import Testimonials from './components/Testimonials.vue'
import ContactQuote from './components/ContactQuote.vue'
import Footer from './components/Footer.vue'
import QuoteModal from './components/QuoteModal.vue'
import { MessageSquare, Phone } from 'lucide-vue-next'
import { companyInfo } from './data/content'

const isQuoteModalOpen = ref(false)

const openQuote = () => {
  isQuoteModalOpen.value = true
}

const closeQuote = () => {
  isQuoteModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
    
    <!-- Navigation épurée -->
    <Navbar :onOpenQuote="openQuote" />

    <!-- Contenu Principal Essentiel -->
    <main class="flex-grow">
      <!-- 1. En-tête / Accroche et coordonnées -->
      <HeroSection :onOpenQuote="openQuote" />

      <!-- 2. Les 3 Solutions Phares du flyer CTM -->
      <ServicesHex />

      <!-- 3. Pourquoi choisir CTM (Techniciens locaux, coupure moteur, anti-siphonnage) -->
      <WhyChooseUs />

      <!-- 4. Secteurs d'activité (Entreprises, Transporteurs, ONG, Particuliers) -->
      <SectorsSection />

      <!-- 5. FAQ et Engagements de service -->
      <Testimonials />

      <!-- 6. Formulaire de contact & Devis express -->
      <ContactQuote />
    </main>

    <!-- Pied de page -->
    <Footer />

    <!-- Modale de devis express -->
    <QuoteModal :isOpen="isQuoteModalOpen" @close="closeQuote" />

    <!-- Boutons d'action flottants (Discrets & Efficaces) -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <!-- Appel -->
      <a 
        :href="companyInfo.phones[0].link"
        class="w-12 h-12 rounded-full bg-white border-2 border-black text-black hover:bg-black hover:text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all group"
        title="Appeler Central Track Mali : 76 12 50 26"
      >
        <Phone class="w-5 h-5" />
        <span class="absolute right-14 bg-black text-white text-xs px-3 py-1.5 rounded border border-black opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap font-bold shadow-md">
          Appeler 76 12 50 26
        </span>
      </a>

      <!-- WhatsApp -->
      <a 
        :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20Central%20Track%20Mali,%20je%20souhaite%20un%20devis`"
        target="_blank"
        class="w-14 h-14 rounded-full bg-black text-white hover:bg-neutral-800 flex items-center justify-center shadow-2xl hover:scale-105 transition-all group border-2 border-white"
        title="Discuter sur WhatsApp"
      >
        <MessageSquare class="w-6 h-6" />
        <span class="absolute right-16 bg-black text-white border border-neutral-700 text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap font-bold shadow-xl">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>

  </div>
</template>
