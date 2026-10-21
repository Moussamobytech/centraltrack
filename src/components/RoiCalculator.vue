<script setup>
import { ref, computed } from 'vue'
import { 
  Calculator, 
  ArrowRight, 
  Car, 
  Fuel
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const vehicleCount = ref(8)
const monthlyFuelPerVehicle = ref(350000) // FCFA

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

const formatMoney = (val) => {
  return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA'
}

const whatsappRoiLink = computed(() => {
  const msg = encodeURIComponent(
    `Bonjour Central Track Mali, j'ai calculé mes économies potentielles sur le site pour une flotte de ${vehicleCount.value} véhicule(s) (dépense estimée: ${formatMoney(totalMonthlyFuelExpense.value)}/mois). Je souhaite un devis personnalisé.`
  )
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${msg}`
})
</script>

<template>
  <section id="calculateur" class="py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Calculator class="w-3.5 h-3.5" />
            <span>RENTABILITÉ & ÉCONOMIES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Estimez vos gains de carburant et de maintenance
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          En éliminant les trajets non autorisés, le siphonnage et les excès de vitesse, nos clients réduisent leurs dépenses de flotte de plus de 20%.
        </p>
      </div>

      <!-- Carte du Calculateur Noir & Blanc -->
      <div class="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-black p-6 sm:p-10 shadow-lg">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <!-- Colonne des contrôles -->
          <div class="space-y-8 text-left">
            
            <!-- Curseur Nombre de Véhicules -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-black font-bold flex items-center gap-2">
                  <Car class="w-4 h-4 text-black" />
                  Nombre de véhicules ou engins :
                </span>
                <span class="text-xl font-black text-black font-mono bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-300">
                  {{ vehicleCount }}
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="80" 
                v-model.number="vehicleCount" 
                class="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div class="flex justify-between text-xs text-neutral-600 font-bold font-mono">
                <span>1 véhicule</span>
                <span>40</span>
                <span>80+ véhicules</span>
              </div>
            </div>

            <!-- Curseur Carburant mensuel -->
            <div class="space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-black font-bold flex items-center gap-2">
                  <Fuel class="w-4 h-4 text-black" />
                  Carburant estimé / véhicule / mois :
                </span>
                <span class="text-sm font-black text-black font-mono bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-300">
                  {{ formatMoney(monthlyFuelPerVehicle) }}
                </span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="1000000" 
                step="50000"
                v-model.number="monthlyFuelPerVehicle" 
                class="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div class="flex justify-between text-xs text-neutral-600 font-bold font-mono">
                <span>100 000 FCFA</span>
                <span>500 000 FCFA</span>
                <span>1 000 000 FCFA</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-xs space-y-1">
              <span class="font-bold text-neutral-700 block">Dépense carburant actuelle totale :</span>
              <span class="text-lg font-black font-mono text-black">{{ formatMoney(totalMonthlyFuelExpense) }} / mois</span>
            </div>

          </div>

          <!-- Colonne des résultats (Panneau Noir contrasté) -->
          <div class="bg-black text-white rounded-2xl p-7 sm:p-8 border border-neutral-800 text-left space-y-6 shadow-xl">
            
            <span class="text-xs font-black uppercase tracking-wider block text-neutral-400">
              ÉCONOMIES NETTES ESTIMÉES AVEC CTM
            </span>

            <!-- Économie mensuelle -->
            <div class="space-y-1">
              <span class="text-xs text-neutral-400 block font-medium">Économie mensuelle estimée :</span>
              <div class="text-3xl font-black text-white font-mono">
                +{{ formatMoney(monthlySavings) }}
              </div>
              <span class="text-xs text-neutral-300 font-semibold block">soit environ 22% de gaspillage éliminé</span>
            </div>

            <!-- Économie annuelle -->
            <div class="pt-5 border-t border-neutral-800 space-y-1">
              <span class="text-xs text-neutral-400 block font-medium">Gain annuel total estimé :</span>
              <div class="text-2xl font-black text-white font-mono">
                +{{ formatMoney(yearlySavings) }}
              </div>
            </div>

            <!-- CTA -->
            <a 
              :href="whatsappRoiLink"
              target="_blank"
              class="w-full py-4 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
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
