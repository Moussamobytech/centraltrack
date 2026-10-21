<script setup>
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  Radio 
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-[#050A14] border-t border-slate-800 text-slate-400 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <!-- Col 1: Brand & Presentation -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center">
              <span class="font-extrabold text-cyan-400 font-['Space_Grotesk'] text-sm">CTM</span>
            </div>
            <div>
              <span class="font-bold text-white tracking-wider block font-['Space_Grotesk']">CENTRAL TRACK MALI</span>
              <span class="text-[10px] text-cyan-400 font-semibold uppercase">Tracking & Sécurité Télématique</span>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            Optimisez vos opérations, sécurisez vos véhicules et réduisez vos coûts grâce à nos solutions de télématique et géolocalisation haute précision au Mali.
          </p>
          <div class="pt-2 flex items-center gap-2 text-xs text-emerald-400">
            <ShieldCheck class="w-4 h-4 shrink-0" />
            <span>Technologie homologuée & Support technique local</span>
          </div>
        </div>

        <!-- Col 2: Services Clés -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Solutions & Services</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#solutions" class="hover:text-cyan-400 transition-colors">Suivi GPS Ultra Précis</a></li>
            <li><a href="#solutions" class="hover:text-cyan-400 transition-colors">Gestion des Chauffeurs & Eco-conduite</a></li>
            <li><a href="#solutions" class="hover:text-cyan-400 transition-colors">Gestion Intelligente de Flotte</a></li>
            <li><a href="#services-avances" class="hover:text-cyan-400 transition-colors">Vidéosurveillance Embarquée (Dashcam IA)</a></li>
            <li><a href="#services-avances" class="hover:text-cyan-400 transition-colors">Contrôle Carburant Anti-Siphonnage</a></li>
            <li><a href="#services-avances" class="hover:text-cyan-400 transition-colors">Coupe-Moteur Sécurisé à Distance</a></li>
          </ul>
        </div>

        <!-- Col 3: Secteurs Cibles -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Secteurs au Mali</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#secteurs" class="hover:text-cyan-400 transition-colors">Entreprises & Sociétés Commerciales</a></li>
            <li><a href="#secteurs" class="hover:text-cyan-400 transition-colors">ONG & Organisations Internationales</a></li>
            <li><a href="#secteurs" class="hover:text-cyan-400 transition-colors">Sociétés de Transport & Transitaires</a></li>
            <li><a href="#secteurs" class="hover:text-cyan-400 transition-colors">BTP, Mines & Carrières</a></li>
            <li><a href="#contact" class="hover:text-cyan-400 transition-colors">Particuliers & Véhicules Personnels</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact Direct Agence -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Agence Bamako</h4>
          <div class="space-y-2.5 text-xs">
            <div class="flex items-start gap-2">
              <MapPin class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Banankabougou, près de la Cour Suprême, Bamako - Mali</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-emerald-400 shrink-0" />
              <div class="flex items-center gap-2 font-mono">
                <a :href="companyInfo.phones[0].link" class="hover:text-emerald-400">76 12 50 26</a>
                <span>/</span>
                <a :href="companyInfo.phones[1].link" class="hover:text-emerald-400">66 12 50 26</a>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <Mail class="w-4 h-4 text-blue-400 shrink-0" />
              <a :href="`mailto:${companyInfo.email}`" class="hover:text-white font-mono">infoctm@gmail.com</a>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p class="text-slate-400">
          © {{ new Date().getFullYear() }} Central Track Mali (CTM). Tous droits réservés.
        </p>

        <button 
          @click="scrollToTop"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition-all cursor-pointer"
        >
          <span>Remonter</span>
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  </footer>
</template>
