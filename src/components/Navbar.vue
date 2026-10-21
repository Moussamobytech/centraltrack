<script setup>
import { ref } from 'vue'
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight,
  MessageSquare
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

defineProps({
  onOpenQuote: {
    type: Function,
    default: () => {}
  }
})

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Secteurs', href: '#secteurs' },
  { name: 'Simulateur GPS', href: '#simulateur' },
  { name: 'Calculateur ROI', href: '#calculateur' },
  { name: 'Services & Vidéo', href: '#services-avances' },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/10 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg bg-black text-white font-extrabold text-sm tracking-wider shadow-sm">
            <span>CTM</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="text-lg sm:text-xl font-black tracking-tight text-black">CENTRAL TRACK</span>
              <span class="px-1.5 py-0.5 text-[9px] font-bold bg-black text-white rounded uppercase">MALI</span>
            </div>
            <span class="text-[11px] text-neutral-600 font-medium hidden sm:inline">Tracking & Sécurité GPS Professionnelle</span>
          </div>
        </a>

        <!-- Liens Bureau -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="px-3.5 py-2 text-sm font-semibold text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Actions Droite -->
        <div class="hidden md:flex items-center gap-5">
          <a 
            :href="companyInfo.phones[0].link" 
            class="text-sm font-bold text-black hover:underline flex items-center gap-2 transition-all"
          >
            <Phone class="w-4 h-4 text-black" />
            <span>76 12 50 26</span>
          </a>

          <button 
            @click="onOpenQuote"
            class="px-5 py-2.5 rounded-lg bg-black hover:bg-neutral-800 text-white font-bold text-sm transition-all shadow cursor-pointer flex items-center gap-1.5"
          >
            <span>Demander un devis</span>
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Menu Mobile -->
        <div class="flex md:hidden items-center gap-2">
          <button 
            @click="onOpenQuote" 
            class="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-bold"
          >
            Devis
          </button>
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg text-black hover:bg-neutral-100 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6 text-black" />
          </button>
        </div>

      </div>
    </div>

    <!-- Tiroir Mobile -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden border-t border-neutral-200 bg-white px-5 py-5 space-y-3"
    >
      <div class="grid grid-cols-1 gap-1">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="isMobileMenuOpen = false"
          class="px-3 py-2.5 text-sm font-bold text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors"
        >
          {{ link.name }}
        </a>
      </div>

      <div class="pt-3 border-t border-neutral-200 flex flex-col gap-2">
        <a 
          :href="companyInfo.phones[0].link"
          class="py-2.5 px-3 rounded-lg bg-neutral-100 text-sm font-bold text-black flex items-center gap-2"
        >
          <Phone class="w-4 h-4 text-black" />
          <span>Appeler le {{ companyInfo.phones[0].display }}</span>
        </a>
        <a 
          :href="`https://wa.me/${companyInfo.whatsappNumber}`"
          target="_blank"
          class="py-2.5 px-3 rounded-lg bg-black text-white text-sm font-bold flex items-center gap-2"
        >
          <MessageSquare class="w-4 h-4" />
          <span>WhatsApp (+223 76 12 50 26)</span>
        </a>
      </div>
    </div>
  </header>
</template>
