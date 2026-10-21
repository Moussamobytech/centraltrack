<script setup>
import { ref, computed } from 'vue'
import { 
  Calculator, 
  TrendingDown, 
  PiggyBank, 
  ArrowRight, 
  Car, 
  Fuel, 
  ShieldCheck, 
  Coins 
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const vehicleCount = ref(8)
const monthlyFuelPerVehicle = ref(350000) // FCFA

// Estimated average savings with CTM (around 22% fuel + anti-theft)
const estimatedSavingsPercent = 0.22

const totalMonthlyFuelExpense = computed(() => {
  return vehicleCount.value * monthlyFuelPerVehicle.value
})

const monthlySavings = computed(() => {
  return Math.round(totalMonthlyFuelExpense.value * estimatedSavingsPercent)
})

const yearlySavings = computed(() => {
  return monthlySavings.value * 12
})

// Format in FCFA
const formatMoney = (val) => {
  return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA'
}

const whatsappRoiLink = computed(() => {
  const msg = encodeURIComponent(
    `Bonjour Central Track Mali, j'ai calculé mes économies potentielles sur le site pour une flotte de ${vehicleCount.value} véhicule(s) (dépense estimée: ${formatMoney(totalMonthlyFuelExpense.value)}/mois). Je souhaite un devis personnalisé pour optimiser mes coûts.`
  )
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${msg}`
})
</script>

<template>
  <section id="calculateur" class="py-20 bg-[#070D19] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Calculator class="w-3.5 h-3.5" />
            <span>RENTABILITÉ & ÉCONOMIES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Estimez vos gains de carburant et de maintenance
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          En éliminant les trajets personnels non autorisés, le siphonnage et les excès de vitesse, nos clients réduisent leurs dépenses de flotte de plus de 20%.
        </p>
      </div>

      <!-- Calculator Card -->
      <div class="max-w-4xl mx-auto rounded-3xl bg-[#0A1424] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        <!-- Ambient decorative glow -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <!-- Inputs Column -->
          <div class="space-y-8">
            
            <!-- Input 1: Vehicle Count Slider -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300 font-semibold flex items-center gap-2">
                  <Car class="w-4 h-4 text-cyan-400" />
                  Nombre de véhicules ou engins :
                </span>
                <span class="text-xl font-extrabold text-cyan-400 font-mono bg-cyan-950/70 px-3 py-1 rounded-lg border border-cyan-500/30">
                  {{ vehicleCount }}
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="80" 
                v-model.number="vehicleCount" 
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div class="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1 véhicule</span>
                <span>40</span>
                <span>80+ véhicules</span>
              </div>
            </div>

            <!-- Input 2: Monthly fuel expense per vehicle -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300 font-semibold flex items-center gap-2">
                  <Fuel class="w-4 h-4 text-emerald-400" />
                  Carburant estimé / véhicule / mois :
                </span>
                <span class="text-sm font-extrabold text-emerald-400 font-mono bg-emerald-950/70 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {{ formatMoney(monthlyFuelPerVehicle) }}
                </span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="1000000" 
                step="50000"
                v-model.number="monthlyFuelPerVehicle" 
                class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div class="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>100 000 FCFA</span>
                <span>500 000 FCFA</span>
                <span>1 000 000 FCFA</span>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span class="font-bold text-slate-200 block">Dépense carburant actuelle totale :</span>
              <span class="text-base font-extrabold font-mono text-white">{{ formatMoney(totalMonthlyFuelExpense) }} / mois</span>
            </div>

          </div>

          <!-- Output Column -->
          <div class="bg-gradient-to-br from-slate-900 to-[#070D19] rounded-2xl p-6 sm:p-8 border border-emerald-500/30 text-left space-y-5 relative">
            
            <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Économies nettes estimées avec CTM
            </span>

            <!-- Monthly Savings -->
            <div class="space-y-1">
              <span class="text-xs text-slate-400 block">Économie mensuelle estimée :</span>
              <div class="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                +{{ formatMoney(monthlySavings) }}
              </div>
              <span class="text-[11px] text-slate-400 block">soit environ 22% de gaspillage éliminé</span>
            </div>

            <!-- Yearly Savings -->
            <div class="pt-4 border-t border-slate-800 space-y-1">
              <span class="text-xs text-slate-400 block">Gain annuel total pour votre entreprise :</span>
              <div class="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                +{{ formatMoney(yearlySavings) }}
              </div>
            </div>

            <!-- CTA button WhatsApp -->
            <a 
              :href="whatsappRoiLink"
              target="_blank"
              class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.01]"
            >
              <span>Recevoir l'audit de mes {{ vehicleCount }} véhicules</span>
              <ArrowRight class="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
