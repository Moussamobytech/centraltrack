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
  <header class="sticky top-0 z-50 backdrop-blur-md bg-[#070D19]/90 border-b border-slate-800/80 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Brand Logo - Left -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 transition-all">
            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="50" rx="40" ry="22" stroke="#00D2FF" stroke-width="4" stroke-dasharray="5 3" transform="rotate(-25 50 50)"/>
              <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#10B981" stroke-width="3" transform="rotate(35 50 50)"/>
              <circle cx="50" cy="50" r="28" fill="#0A1628" stroke="#00D2FF" stroke-width="3"/>
              <text x="50" y="55" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">CTM</text>
            </svg>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-lg sm:text-xl font-extrabold tracking-tight text-white font-['Space_Grotesk']">CENTRAL TRACK</span>
              <span class="px-1.5 py-0.5 text-[9px] font-bold bg-cyan-500 text-slate-950 rounded uppercase">MALI</span>
            </div>
            <span class="text-[10px] text-slate-400 font-medium hidden sm:inline">Tracking & Sécurité GPS</span>
          </div>
        </a>

        <!-- Desktop Navigation Links - Centered/Spread cleanly -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Right Quick Actions -->
        <div class="hidden md:flex items-center gap-4">
          <a 
            :href="companyInfo.phones[0].link" 
            class="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <Phone class="w-3.5 h-3.5 text-cyan-400" />
            <span>76 12 50 26</span>
          </a>

          <button 
            @click="onOpenQuote"
            class="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer flex items-center gap-1.5"
          >
            <span>Demander un devis</span>
            <ChevronRight class="w-3.5 h-3.5" />
          </button>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex md:hidden items-center gap-2">
          <button 
            @click="onOpenQuote" 
            class="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold"
          >
            Devis
          </button>
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5 text-cyan-400" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden border-t border-slate-800 bg-[#070D19]/98 px-5 py-5 space-y-3"
    >
      <div class="grid grid-cols-1 gap-1">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="isMobileMenuOpen = false"
          class="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
        >
          {{ link.name }}
        </a>
      </div>

      <div class="pt-3 border-t border-slate-800 flex flex-col gap-2">
        <a 
          :href="companyInfo.phones[0].link"
          class="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
        >
          <Phone class="w-4 h-4 text-cyan-400" />
          <span>Appeler le {{ companyInfo.phones[0].display }}</span>
        </a>
        <a 
          :href="`https://wa.me/${companyInfo.whatsappNumber}`"
          target="_blank"
          class="py-2.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-semibold flex items-center gap-2"
        >
          <MessageSquare class="w-4 h-4" />
          <span>WhatsApp (+223 76 12 50 26)</span>
        </a>
      </div>
    </div>
  </header>
</template>
