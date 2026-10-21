<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesHex from './components/ServicesHex.vue'
import LiveGpsSimulator from './components/LiveGpsSimulator.vue'
import SectorsSection from './components/SectorsSection.vue'
import AdvancedFeatures from './components/AdvancedFeatures.vue'
import RoiCalculator from './components/RoiCalculator.vue'
import Testimonials from './components/Testimonials.vue'
import ContactQuote from './components/ContactQuote.vue'
import Footer from './components/Footer.vue'
import QuoteModal from './components/QuoteModal.vue'
import { MessageSquare, Phone, MapPin } from 'lucide-vue-next'
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
  <div class="min-h-screen bg-[#070D19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
    
    <!-- Navigation Bar -->
    <Navbar :onOpenQuote="openQuote" />

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <HeroSection :onOpenQuote="openQuote" />

      <!-- 3 Pillars from Flyer (ServicesHex) -->
      <ServicesHex />

      <!-- Live GPS Telematics Simulator -->
      <LiveGpsSimulator />

      <!-- Target Sectors in Mali -->
      <SectorsSection :onOpenQuote="openQuote" />

      <!-- Advanced Features (Video surveillance, fuel sensor, SOS) -->
      <AdvancedFeatures />

      <!-- ROI & Fuel Savings Calculator -->
      <RoiCalculator />

      <!-- Testimonials & FAQs -->
      <Testimonials />

      <!-- Contact & Quote Section with Flyer Coordinates -->
      <ContactQuote />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Modal Quote -->
    <QuoteModal :isOpen="isQuoteModalOpen" @close="closeQuote" />

    <!-- Floating Contact Actions (Bottom Right) -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <!-- Call Button -->
      <a 
        :href="companyInfo.phones[0].link"
        class="w-12 h-12 rounded-full bg-slate-900/90 border border-cyan-500/50 text-cyan-400 hover:text-white flex items-center justify-center shadow-xl shadow-cyan-950/60 hover:scale-110 transition-all group"
        title="Appeler Central Track Mali (76 12 50 26)"
      >
        <Phone class="w-5 h-5" />
        <span class="absolute right-14 bg-slate-900 border border-slate-700 text-xs text-white px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl">
          Appeler 76 12 50 26
        </span>
      </a>

      <!-- WhatsApp Button -->
      <a 
        :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20Central%20Track%20Mali,%20je%20souhaite%20un%20devis`"
        target="_blank"
        class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-950/50 hover:scale-110 transition-all group"
        title="Échanger sur WhatsApp"
      >
        <span class="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-emerald-400 opacity-40"></span>
        <MessageSquare class="w-6 h-6 text-slate-950" />
        <span class="absolute right-16 bg-slate-900 border border-emerald-500/40 text-xs text-emerald-400 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl font-bold">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>

  </div>
</template>
