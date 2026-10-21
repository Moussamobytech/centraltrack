<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  Play, 
  Pause, 
  Power, 
  ShieldAlert, 
  MapPin, 
  Gauge, 
  Fuel, 
  Compass, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Satellite, 
  Car, 
  Truck, 
  HardHat, 
  Wifi, 
  Activity 
} from 'lucide-vue-next'
import { mockVehicles } from '../data/content'

const vehicles = ref(JSON.parse(JSON.stringify(mockVehicles)))
const selectedVehicleId = ref(vehicles.value[0].id)
const isLiveStreamActive = ref(true)
const actionToast = ref(null)

const currentVehicle = computed(() => {
  return vehicles.value.find(v => v.id === selectedVehicleId.value) || vehicles.value[0]
})

// Trigger remote engine cut
const triggerEngineCut = () => {
  const v = currentVehicle.value
  if (v.engine === 'OFF' || v.engine === 'CUT') {
    v.engine = 'ON'
    v.speed = 48
    v.status = 'En circulation'
    v.statusColor = 'emerald'
    showToast(`Autorisation redémarrage envoyée pour ${v.plate}. Moteur opérationnel.`, 'success')
  } else {
    v.engine = 'CUT'
    v.speed = 0
    v.status = 'MOTEUR COUPÉ À DISTANCE'
    v.statusColor = 'red'
    showToast(`COMMANDE DE COUPURE MOTEUR ENVOYÉE : Le véhicule ${v.plate} est désormais immobilisé !`, 'danger')
  }
}

// Trigger simulated SOS
const triggerSosAlert = () => {
  const v = currentVehicle.value
  showToast(`ALERTE SOS REÇUE pour ${v.plate} à ${v.location}. Centre CTM Banankabougou alerté !`, 'warning')
}

const showToast = (message, type) => {
  actionToast.value = { message, type }
  setTimeout(() => {
    actionToast.value = null
  }, 5000)
}

// Dynamic telemetry tick
let intervalTimer = null
onMounted(() => {
  intervalTimer = setInterval(() => {
    if (!isLiveStreamActive.value) return
    vehicles.value.forEach(v => {
      if (v.engine === 'ON') {
        // slightly fluctuate speed
        const jitter = (Math.random() - 0.5) * 4
        v.speed = Math.max(20, Math.min(85, Math.round(v.speed + jitter)))
      }
    })
  }, 2500)
})

onUnmounted(() => {
  if (intervalTimer) clearInterval(intervalTimer)
})
</script>

<template>
  <section id="simulateur" class="py-20 relative bg-[#060B14] border-y border-slate-800">
    <!-- Ambient glow -->
    <div class="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Activity class="w-3.5 h-3.5 animate-pulse" />
            <span>CONSOLE EN DIRECT</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Simulateur de Plateforme Télématique CTM
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          Testez vous-même les fonctionnalités de notre interface : télémétrie en direct, alertes et commande de coupure moteur à distance.
        </p>
      </div>

      <!-- Action Toast Notification Banner -->
      <div 
        v-if="actionToast" 
        class="mb-6 p-4 rounded-xl flex items-center justify-between gap-3 text-sm font-semibold transition-all shadow-xl"
        :class="{
          'bg-emerald-950/90 border border-emerald-500 text-emerald-200': actionToast.type === 'success',
          'bg-rose-950/90 border border-rose-500 text-rose-200': actionToast.type === 'danger',
          'bg-amber-950/90 border border-amber-500 text-amber-200': actionToast.type === 'warning'
        }"
      >
        <div class="flex items-center gap-2.5">
          <AlertTriangle v-if="actionToast.type !== 'success'" class="w-5 h-5 shrink-0" />
          <CheckCircle2 v-else class="w-5 h-5 shrink-0" />
          <span>{{ actionToast.message }}</span>
        </div>
        <button @click="actionToast = null" class="text-xs opacity-75 hover:opacity-100 uppercase tracking-wider">Fermer</button>
      </div>

      <!-- Main Simulator Wrapper -->
      <div class="rounded-3xl border border-slate-800 bg-[#0A1424] overflow-hidden shadow-2xl">
        
        <!-- Simulator Top Bar -->
        <div class="bg-[#070D19] border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <!-- Vehicle Selector Tabs -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-slate-400 font-semibold mr-2 uppercase tracking-wider">Sélectionner véhicule :</span>
            <button
              v-for="v in vehicles"
              :key="v.id"
              @click="selectedVehicleId = v.id"
              class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border"
              :class="selectedVehicleId === v.id 
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-glow-cyan/20' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'"
            >
              <Truck v-if="v.type.includes('Camion')" class="w-3.5 h-3.5" />
              <Car v-else-if="v.type.includes('Toyota')" class="w-3.5 h-3.5" />
              <HardHat v-else class="w-3.5 h-3.5" />
              <span>{{ v.plate }}</span>
            </button>
          </div>

          <!-- Connection Status -->
          <div class="flex items-center gap-4 text-xs">
            <span class="flex items-center gap-1.5 text-emerald-400 font-mono">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Flux GPRS Actif (Mali)
            </span>
            <button 
              @click="isLiveStreamActive = !isLiveStreamActive"
              class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 border border-slate-700"
            >
              <Pause v-if="isLiveStreamActive" class="w-3 h-3 text-amber-400" />
              <Play v-else class="w-3 h-3 text-emerald-400" />
              <span>{{ isLiveStreamActive ? 'Pause' : 'Reprendre' }}</span>
            </button>
          </div>

        </div>

        <!-- Simulator Body: 2 Columns (Map on Left/Center, Telemetry controls on Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          
          <!-- Left/Center: Interactive Stylized Map of Bamako -->
          <div class="lg:col-span-7 bg-[#050B14] p-4 sm:p-6 relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
            
            <!-- Map Overlay Controls -->
            <div class="flex items-center justify-between z-10">
              <div class="bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <MapPin class="w-3.5 h-3.5 text-cyan-400" />
                <span>Zone : <strong>Grand Bamako & Périphérie</strong></span>
              </div>
              <div class="bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-cyan-400">
                GPS: {{ currentVehicle.lat }}°N, {{ currentVehicle.lng }}°W
              </div>
            </div>

            <!-- Stylized SVG Map of Bamako -->
            <div class="relative w-full h-80 my-4 rounded-2xl bg-[#091120] border border-cyan-500/20 overflow-hidden">
              
              <!-- Subtle GPS grid -->
              <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

              <!-- Stylized Fleuve Niger (River) in Bamako -->
              <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 350">
                <!-- Fleuve Niger water path -->
                <path 
                  d="M 0,220 C 150,210 240,240 320,190 C 400,140 480,170 600,150 L 600,210 C 480,230 400,200 320,250 C 240,300 150,270 0,280 Z" 
                  fill="#0c233c" 
                  opacity="0.8"
                />
                <text x="180" y="245" fill="#1e3a5f" font-size="14" font-weight="bold" letter-spacing="4">FLEUVE NIGER</text>
                
                <!-- Main road axes (Route de Koulikoro, Pont des Martyrs, Boulevard du Peuple) -->
                <path d="M 50,50 L 320,190 L 520,320" stroke="#1E293B" stroke-width="4" stroke-dasharray="2 2" />
                <path d="M 550,50 L 320,190 L 100,310" stroke="#1E293B" stroke-width="3" />
                <path d="M 220,100 L 450,260" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3" />

                <!-- Pont des Martyrs bridge -->
                <line x1="300" y1="180" x2="330" y2="230" stroke="#00D2FF" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
                <text x="280" y="170" fill="#64748b" font-size="9" font-family="sans-serif">Pont des Martyrs</text>

                <!-- Pont du Roi Fahd bridge -->
                <line x1="250" y1="190" x2="270" y2="245" stroke="#00D2FF" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
              </svg>

              <!-- Central Track Mali HQ Pin (Banankabougou) -->
              <div class="absolute top-[68%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group cursor-pointer">
                <div class="relative flex items-center justify-center">
                  <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-60"></span>
                  <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <span class="text-[9px] font-black text-slate-950">CTM</span>
                  </div>
                </div>
                <div class="mt-1 bg-slate-950/95 border border-cyan-400/80 px-2 py-0.5 rounded text-[10px] text-cyan-300 font-bold whitespace-nowrap shadow-xl">
                  ★ Siège CTM : Banankabougou (Cour Suprême)
                </div>
              </div>

              <!-- Other Landmarks in Bamako for context -->
              <div class="absolute top-[28%] left-[25%] text-[9px] text-slate-400 font-mono bg-slate-900/60 px-1 rounded">
                ACI 2000
              </div>
              <div class="absolute top-[20%] left-[65%] text-[9px] text-slate-400 font-mono bg-slate-900/60 px-1 rounded">
                Koulouba
              </div>
              <div class="absolute bottom-[22%] left-[30%] text-[9px] text-slate-400 font-mono bg-slate-900/60 px-1 rounded">
                Badalabougou
              </div>

              <!-- Dynamic Vehicle Marker on Map -->
              <div 
                class="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-30"
                :style="{
                  top: selectedVehicleId === 'CTM-01' ? '46%' : selectedVehicleId === 'CTM-02' ? '25%' : '75%',
                  left: selectedVehicleId === 'CTM-01' ? '48%' : selectedVehicleId === 'CTM-02' ? '70%' : '55%'
                }"
              >
                <div class="flex flex-col items-center">
                  <!-- Pulsing ring -->
                  <div class="relative flex items-center justify-center">
                    <span 
                      class="animate-ping absolute inline-flex h-10 w-10 rounded-full opacity-75"
                      :class="currentVehicle.engine === 'CUT' ? 'bg-rose-500' : 'bg-emerald-400'"
                    ></span>
                    <div 
                      class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-slate-950 shadow-xl"
                      :class="currentVehicle.engine === 'CUT' ? 'bg-rose-500 border-rose-300' : 'bg-emerald-400 border-emerald-200'"
                    >
                      <Truck v-if="currentVehicle.type.includes('Camion')" class="w-4 h-4 text-slate-950" />
                      <Car v-else-if="currentVehicle.type.includes('Toyota')" class="w-4 h-4 text-slate-950" />
                      <HardHat v-else class="w-4 h-4 text-slate-950" />
                    </div>
                  </div>

                  <!-- Badge tooltip -->
                  <div 
                    class="mt-1 px-2 py-0.5 rounded text-[10px] font-bold shadow-2xl border flex items-center gap-1.5 whitespace-nowrap"
                    :class="currentVehicle.engine === 'CUT' 
                      ? 'bg-rose-950 text-rose-300 border-rose-600' 
                      : 'bg-slate-900 text-slate-100 border-cyan-500/60'"
                  >
                    <span>{{ currentVehicle.plate }}</span>
                    <span class="text-cyan-400 font-mono">{{ currentVehicle.speed }} km/h</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Map Bottom Bar -->
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span class="flex items-center gap-1 text-slate-300">
                <MapPin class="w-3.5 h-3.5 text-cyan-400" />
                Position actuelle : <strong class="text-white">{{ currentVehicle.location }}</strong>
              </span>
              <span class="text-[11px] font-mono text-emerald-400">Précision balise : ± 1.5 mètre</span>
            </div>

          </div>

          <!-- Right: Telemetry Cockpit & Remote Commands -->
          <div class="lg:col-span-5 bg-[#0A1424] p-6 flex flex-col justify-between space-y-6">
            
            <!-- Vehicle Info Header -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="text-xs uppercase font-mono text-cyan-400 tracking-wider">Identifiant Flotte : {{ currentVehicle.id }}</span>
                  <h3 class="text-xl font-extrabold text-white">{{ currentVehicle.type }}</h3>
                </div>
                <div 
                  class="px-2.5 py-1 rounded-full text-xs font-bold border"
                  :class="{
                    'bg-emerald-500/10 text-emerald-400 border-emerald-500/30': currentVehicle.engine === 'ON',
                    'bg-amber-500/10 text-amber-400 border-amber-500/30': currentVehicle.engine === 'IDLE',
                    'bg-rose-500/10 text-rose-400 border-rose-500/30': currentVehicle.engine === 'CUT'
                  }"
                >
                  {{ currentVehicle.status }}
                </div>
              </div>
              <p class="text-xs text-slate-400">
                Chauffeur attitré : <strong class="text-slate-200">{{ currentVehicle.driver }}</strong>
              </p>
            </div>

            <!-- Telemetry Gauges Grid -->
            <div class="grid grid-cols-2 gap-3.5">
              
              <!-- Speedometer Card -->
              <div class="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 relative overflow-hidden">
                <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Vitesse Réelle</span>
                  <Gauge class="w-4 h-4 text-cyan-400" />
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-extrabold text-white font-mono">{{ currentVehicle.speed }}</span>
                  <span class="text-xs text-cyan-400 font-bold">km/h</span>
                </div>
                <!-- Mini speed progress bar -->
                <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-500"
                    :class="currentVehicle.speed > currentVehicle.speedLimit ? 'bg-rose-500' : 'bg-cyan-400'"
                    :style="{ width: `${Math.min(100, (currentVehicle.speed / 120) * 100)}%` }"
                  ></div>
                </div>
                <span class="text-[10px] text-slate-400 mt-1 block">Limite autorisée : {{ currentVehicle.speedLimit }} km/h</span>
              </div>

              <!-- Fuel Gauge Card -->
              <div class="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 relative overflow-hidden">
                <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Réservoir</span>
                  <Fuel class="w-4 h-4 text-emerald-400" />
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-extrabold text-emerald-400 font-mono">{{ currentVehicle.fuel }}</span>
                  <span class="text-xs text-slate-300 font-bold">%</span>
                </div>
                <!-- Fuel bar -->
                <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    :style="{ width: `${currentVehicle.fuel}%` }"
                  ></div>
                </div>
                <span class="text-[10px] text-emerald-300 mt-1 block flex items-center gap-1">
                  <CheckCircle2 class="w-3 h-3 text-emerald-400" />
                  Anti-siphonnage actif
                </span>
              </div>

              <!-- Engine Telemetry Card -->
              <div class="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span class="text-xs text-slate-400 block mb-1">État Moteur</span>
                <span 
                  class="text-lg font-bold font-mono block"
                  :class="currentVehicle.engine === 'CUT' ? 'text-rose-400' : 'text-cyan-300'"
                >
                  {{ currentVehicle.engine === 'CUT' ? 'COUPÉ (SÉCURITÉ)' : currentVehicle.engine === 'ON' ? 'ALLUMÉ (EN MARCHE)' : 'RALENTI (IDLE)' }}
                </span>
                <span class="text-[10px] text-slate-400 mt-1 block">Relais : Câblage homologué</span>
              </div>

              <!-- Driver Performance Score -->
              <div class="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <span class="text-xs text-slate-400 block mb-1">Score Conduite</span>
                <span class="text-lg font-bold text-emerald-400 font-mono block">94 / 100</span>
                <span class="text-[10px] text-slate-400 mt-1 block">0 freinage brusque aujourd'hui</span>
              </div>

            </div>

            <!-- Remote Emergency Control Box -->
            <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-white flex items-center gap-2">
                  <Power class="w-4 h-4 text-cyan-400" />
                  ACTIONS TÉLÉMÉTRIQUES À DISTANCE
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Sécurité 256-bit
                </span>
              </div>

              <p class="text-xs text-slate-400">
                Testez la commande d'immobilisation en temps réel :
              </p>

              <!-- Main Command Buttons -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  @click="triggerEngineCut"
                  class="w-full py-3 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  :class="currentVehicle.engine === 'CUT'
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40'
                    : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/40'"
                >
                  <Power class="w-4 h-4" />
                  <span>{{ currentVehicle.engine === 'CUT' ? 'Débloquer le Moteur' : 'Couper le Moteur à Distance' }}</span>
                </button>

                <button
                  @click="triggerSosAlert"
                  class="w-full py-3 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShieldAlert class="w-4 h-4 text-amber-400" />
                  <span>Simuler Alerte SOS</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
