<script setup>
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-black border-t border-neutral-800 text-white text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <!-- Colonne 1: Marque -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-white text-black font-black flex items-center justify-center text-sm">
              CTM
            </div>
            <div>
              <span class="font-black text-white tracking-wider block">CENTRAL TRACK MALI</span>
              <span class="text-[10px] text-neutral-400 font-bold uppercase">Tracking & Sécurité GPS</span>
            </div>
          </div>
          <p class="text-xs text-neutral-400 leading-relaxed font-medium">
            Optimisez vos opérations, sécurisez vos véhicules et réduisez vos coûts grâce à nos solutions GPS haute précision au Mali.
          </p>
          <div class="pt-2 flex items-center gap-2 text-xs text-white font-bold">
            <ShieldCheck class="w-4 h-4 shrink-0" />
            <span>Technologie homologuée & Support local</span>
          </div>
        </div>

        <!-- Colonne 2: Solutions -->
        <div class="space-y-3">
          <h4 class="text-xs font-black text-white uppercase tracking-wider">Solutions & Services</h4>
          <ul class="space-y-2 text-xs font-semibold text-neutral-300">
            <li><a href="#solutions" class="hover:text-white hover:underline transition-colors">Suivi GPS Ultra Précis</a></li>
            <li><a href="#solutions" class="hover:text-white hover:underline transition-colors">Gestion des Chauffeurs & Eco-conduite</a></li>
            <li><a href="#solutions" class="hover:text-white hover:underline transition-colors">Gestion Intelligente de Flotte</a></li>
            <li><a href="#services-avances" class="hover:text-white hover:underline transition-colors">Vidéosurveillance Embarquée</a></li>
            <li><a href="#services-avances" class="hover:text-white hover:underline transition-colors">Contrôle Carburant Anti-Siphonnage</a></li>
            <li><a href="#services-avances" class="hover:text-white hover:underline transition-colors">Coupe-Moteur Sécurisé à Distance</a></li>
          </ul>
        </div>

        <!-- Colonne 3: Secteurs -->
        <div class="space-y-3">
          <h4 class="text-xs font-black text-white uppercase tracking-wider">Secteurs au Mali</h4>
          <ul class="space-y-2 text-xs font-semibold text-neutral-300">
            <li><a href="#secteurs" class="hover:text-white hover:underline transition-colors">Entreprises & Sociétés Commerciales</a></li>
            <li><a href="#secteurs" class="hover:text-white hover:underline transition-colors">ONG & Organisations Internationales</a></li>
            <li><a href="#secteurs" class="hover:text-white hover:underline transition-colors">Sociétés de Transport & Transitaires</a></li>
            <li><a href="#secteurs" class="hover:text-white hover:underline transition-colors">BTP, Mines & Carrières</a></li>
            <li><a href="#contact" class="hover:text-white hover:underline transition-colors">Particuliers & Véhicules Personnels</a></li>
          </ul>
        </div>

        <!-- Colonne 4: Contact -->
        <div class="space-y-3">
          <h4 class="text-xs font-black text-white uppercase tracking-wider">Agence Bamako</h4>
          <div class="space-y-3 text-xs font-medium text-neutral-300">
            <div class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Banankabougou, près de la Cour Suprême, Bamako - Mali</span>
            </div>
            <div class="flex items-center gap-2.5">
              <Phone class="w-4 h-4 text-white shrink-0" />
              <div class="flex items-center gap-2 font-mono font-bold text-white">
                <a :href="companyInfo.phones[0].link" class="hover:underline">76 12 50 26</a>
                <span>/</span>
                <a :href="companyInfo.phones[1].link" class="hover:underline">66 12 50 26</a>
              </div>
            </div>
            <div class="flex items-center gap-2.5">
              <Mail class="w-4 h-4 text-white shrink-0" />
              <a :href="`mailto:${companyInfo.email}`" class="hover:underline font-mono font-bold text-white">infoctm@gmail.com</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Ligne inférieure -->
      <div class="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p class="text-neutral-400 font-medium">
          © {{ new Date().getFullYear() }} Central Track Mali (CTM). Tous droits réservés.
        </p>

        <button 
          @click="scrollToTop"
          class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-white text-white transition-all cursor-pointer font-bold"
        >
          <span>Remonter</span>
          <ArrowUp class="w-4 h-4" />
        </button>
      </div>

    </div>
  </footer>
</template>
