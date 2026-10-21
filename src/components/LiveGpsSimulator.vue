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
  AlertTriangle, 
  CheckCircle2, 
  Satellite, 
  Car, 
  Truck, 
  HardHat, 
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

// Déclencher coupure moteur à distance
const triggerEngineCut = () => {
  const v = currentVehicle.value
  if (v.engine === 'OFF' || v.engine === 'CUT') {
    v.engine = 'ON'
    v.speed = 48
    v.status = 'En circulation'
    showToast(`Autorisation redémarrage envoyée pour ${v.plate}. Moteur opérationnel.`, 'success')
  } else {
    v.engine = 'CUT'
    v.speed = 0
    v.status = 'MOTEUR COUPÉ À DISTANCE'
    showToast(`COMMANDE DE COUPURE ENVOYÉE : Le véhicule ${v.plate} est immobilisé !`, 'danger')
  }
}

// Alerte SOS
const triggerSosAlert = () => {
  const v = currentVehicle.value
  showToast(`ALERTE SOS REÇUE pour ${v.plate} à ${v.location}. Centre CTM alerté !`, 'warning')
}

const showToast = (message, type) => {
  actionToast.value = { message, type }
  setTimeout(() => {
    actionToast.value = null
  }, 5000)
}

let intervalTimer = null
onMounted(() => {
  intervalTimer = setInterval(() => {
    if (!isLiveStreamActive.value) return
    vehicles.value.forEach(v => {
      if (v.engine === 'ON') {
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
  <section id="simulateur" class="py-20 relative bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- En-tête de section -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <Activity class="w-3.5 h-3.5" />
            <span>CONSOLE EN DIRECT</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Simulateur de Plateforme Télématique CTM
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Testez vous-même les fonctionnalités de notre interface : télémétrie en direct, alertes et commande de coupure moteur à distance.
        </p>
      </div>

      <!-- Notification Toast Noir et Blanc -->
      <div 
        v-if="actionToast" 
        class="mb-6 p-4 rounded-xl flex items-center justify-between gap-3 text-sm font-bold shadow-lg bg-black text-white border-2 border-white"
      >
        <div class="flex items-center gap-2.5">
          <AlertTriangle v-if="actionToast.type !== 'success'" class="w-5 h-5 shrink-0 text-white" />
          <CheckCircle2 v-else class="w-5 h-5 shrink-0 text-white" />
          <span>{{ actionToast.message }}</span>
        </div>
        <button @click="actionToast = null" class="text-xs uppercase tracking-wider underline cursor-pointer">Fermer</button>
      </div>

      <!-- Boîte de simulation principale (Noir & Blanc) -->
      <div class="rounded-3xl border-2 border-black bg-neutral-950 text-white overflow-hidden shadow-2xl">
        
        <!-- Barre supérieure du simulateur -->
        <div class="bg-black border-b border-neutral-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          
          <!-- Sélecteur de véhicule -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-neutral-400 font-bold mr-2 uppercase tracking-wider">Sélectionner véhicule :</span>
            <button
              v-for="v in vehicles"
              :key="v.id"
              @click="selectedVehicleId = v.id"
              class="px-4 py-2 rounded-lg text-xs font-black transition-all flex items-center gap-2 cursor-pointer border"
              :class="selectedVehicleId === v.id 
                ? 'bg-white text-black border-white shadow' 
                : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:text-white hover:border-white'"
            >
              <Truck v-if="v.type.includes('Camion')" class="w-4 h-4" />
              <Car v-else-if="v.type.includes('Toyota')" class="w-4 h-4" />
              <HardHat v-else class="w-4 h-4" />
              <span>{{ v.plate }}</span>
            </button>
          </div>

          <!-- Statut de connexion -->
          <div class="flex items-center gap-4 text-xs">
            <span class="flex items-center gap-2 text-white font-mono font-bold">
              <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              Flux GPRS Connecté (Mali)
            </span>
            <button 
              @click="isLiveStreamActive = !isLiveStreamActive"
              class="px-3 py-1.5 rounded bg-neutral-900 text-white hover:bg-neutral-800 flex items-center gap-1.5 border border-neutral-700 font-bold cursor-pointer"
            >
              <Pause v-if="isLiveStreamActive" class="w-3.5 h-3.5" />
              <Play v-else class="w-3.5 h-3.5" />
              <span>{{ isLiveStreamActive ? 'Pause' : 'Reprendre' }}</span>
            </button>
          </div>

        </div>

        <!-- Corps du simulateur : Carte à gauche, Contrôles à droite -->
        <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          <!-- Carte stylisée de Bamako (N&B épuré) -->
          <div class="lg:col-span-7 bg-black p-5 sm:p-6 relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-800">
            
            <!-- Contrôles au-dessus de la carte -->
            <div class="flex items-center justify-between z-10">
              <div class="bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-700 text-xs text-white flex items-center gap-2 font-bold">
                <MapPin class="w-4 h-4 text-white" />
                <span>Zone : Grand Bamako & Périphérie</span>
              </div>
              <div class="bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-700 text-xs font-mono text-white font-bold">
                {{ currentVehicle.lat }}°N, {{ currentVehicle.lng }}°W
              </div>
            </div>

            <!-- Carte SVG -->
            <div class="relative w-full h-80 my-4 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
              <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 350">
                <!-- Fleuve Niger -->
                <path 
                  d="M 0,220 C 150,210 240,240 320,190 C 400,140 480,170 600,150 L 600,210 C 480,230 400,200 320,250 C 240,300 150,270 0,280 Z" 
                  fill="#171717" 
                />
                <text x="180" y="245" fill="#525252" font-size="13" font-weight="900" letter-spacing="4">FLEUVE NIGER</text>
                
                <!-- Routes principales -->
                <path d="M 50,50 L 320,190 L 520,320" stroke="#404040" stroke-width="4" stroke-dasharray="3 3" />
                <path d="M 550,50 L 320,190 L 100,310" stroke="#404040" stroke-width="3" />
                <path d="M 220,100 L 450,260" stroke="#737373" stroke-width="2" />

                <!-- Ponts -->
                <line x1="300" y1="180" x2="330" y2="230" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
                <text x="280" y="170" fill="#a3a3a3" font-size="9" font-weight="bold">Pont des Martyrs</text>

                <line x1="250" y1="190" x2="270" y2="245" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
              </svg>

              <!-- Siège CTM -->
              <div class="absolute top-[68%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                <div class="w-8 h-8 rounded-full bg-white text-black font-black flex items-center justify-center border-2 border-black shadow-xl">
                  <span class="text-[10px]">CTM</span>
                </div>
                <div class="mt-1 bg-black border border-white px-2 py-0.5 rounded text-[10px] text-white font-black whitespace-nowrap shadow-xl">
                  ★ Siège CTM : Banankabougou
                </div>
              </div>

              <!-- Repères Bamako -->
              <div class="absolute top-[28%] left-[25%] text-[9px] text-neutral-300 font-mono bg-black px-1.5 py-0.5 rounded border border-neutral-700">
                ACI 2000
              </div>
              <div class="absolute top-[20%] left-[65%] text-[9px] text-neutral-300 font-mono bg-black px-1.5 py-0.5 rounded border border-neutral-700">
                Koulouba
              </div>
              <div class="absolute bottom-[22%] left-[30%] text-[9px] text-neutral-300 font-mono bg-black px-1.5 py-0.5 rounded border border-neutral-700">
                Badalabougou
              </div>

              <!-- Véhicule actif sur la carte -->
              <div 
                class="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-30"
                :style="{
                  top: selectedVehicleId === 'CTM-01' ? '46%' : selectedVehicleId === 'CTM-02' ? '25%' : '75%',
                  left: selectedVehicleId === 'CTM-01' ? '48%' : selectedVehicleId === 'CTM-02' ? '70%' : '55%'
                }"
              >
                <div class="flex flex-col items-center">
                  <div class="w-9 h-9 rounded-full bg-white text-black border-2 border-black flex items-center justify-center shadow-2xl">
                    <Truck v-if="currentVehicle.type.includes('Camion')" class="w-5 h-5 text-black" />
                    <Car v-else-if="currentVehicle.type.includes('Toyota')" class="w-5 h-5 text-black" />
                    <HardHat v-else class="w-5 h-5 text-black" />
                  </div>
                  <div class="mt-1 px-2.5 py-1 rounded text-[10px] font-black shadow-xl bg-black text-white border border-white flex items-center gap-1.5 whitespace-nowrap">
                    <span>{{ currentVehicle.plate }}</span>
                    <span class="font-mono">{{ currentVehicle.speed }} km/h</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Pied de carte -->
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              <span class="flex items-center gap-1.5 text-white font-bold">
                <MapPin class="w-4 h-4 text-white" />
                Position : {{ currentVehicle.location }}
              </span>
              <span class="font-mono text-white font-bold">Précision : ± 1.5 mètre</span>
            </div>

          </div>

          <!-- Cockpit de télémétrie à droite -->
          <div class="lg:col-span-5 bg-neutral-950 p-6 flex flex-col justify-between space-y-6">
            
            <!-- Informations du véhicule -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="text-xs uppercase font-mono text-neutral-400 font-bold tracking-wider">Identifiant : {{ currentVehicle.id }}</span>
                  <h3 class="text-xl font-black text-white">{{ currentVehicle.type }}</h3>
                </div>
                <div class="px-3 py-1 rounded-full text-xs font-black border border-white bg-white text-black">
                  {{ currentVehicle.status }}
                </div>
              </div>
              <p class="text-xs text-neutral-400 font-medium">
                Chauffeur attitré : <strong class="text-white">{{ currentVehicle.driver }}</strong>
              </p>
            </div>

            <!-- Blocs de jauges (N&B) -->
            <div class="grid grid-cols-2 gap-3.5">
              
              <!-- Compteur de Vitesse -->
              <div class="bg-neutral-900 rounded-2xl p-4 border border-neutral-800">
                <div class="flex items-center justify-between text-xs text-neutral-400 mb-1 font-bold">
                  <span>Vitesse Réelle</span>
                  <Gauge class="w-4 h-4 text-white" />
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-black text-white font-mono">{{ currentVehicle.speed }}</span>
                  <span class="text-xs text-neutral-300 font-bold">km/h</span>
                </div>
                <div class="w-full bg-neutral-800 rounded-full h-2 mt-3 overflow-hidden">
                  <div 
                    class="h-full bg-white rounded-full transition-all duration-500"
                    :style="{ width: `${Math.min(100, (currentVehicle.speed / 120) * 100)}%` }"
                  ></div>
                </div>
                <span class="text-[10px] text-neutral-400 mt-1 block font-medium">Limite : {{ currentVehicle.speedLimit }} km/h</span>
              </div>

              <!-- Jauge de Carburant -->
              <div class="bg-neutral-900 rounded-2xl p-4 border border-neutral-800">
                <div class="flex items-center justify-between text-xs text-neutral-400 mb-1 font-bold">
                  <span>Réservoir</span>
                  <Fuel class="w-4 h-4 text-white" />
                </div>
                <div class="flex items-baseline gap-1">
                  <span class="text-3xl font-black text-white font-mono">{{ currentVehicle.fuel }}</span>
                  <span class="text-xs text-neutral-300 font-bold">%</span>
                </div>
                <div class="w-full bg-neutral-800 rounded-full h-2 mt-3 overflow-hidden">
                  <div 
                    class="h-full bg-white rounded-full"
                    :style="{ width: `${currentVehicle.fuel}%` }"
                  ></div>
                </div>
                <span class="text-[10px] text-neutral-300 mt-1 block font-bold flex items-center gap-1">
                  <CheckCircle2 class="w-3.5 h-3.5 text-white" />
                  Anti-siphonnage actif
                </span>
              </div>

              <!-- État Moteur -->
              <div class="bg-neutral-900 rounded-2xl p-4 border border-neutral-800">
                <span class="text-xs text-neutral-400 block mb-1 font-bold">État Moteur</span>
                <span class="text-base font-black font-mono block text-white">
                  {{ currentVehicle.engine === 'CUT' ? 'COUPÉ (SÉCURITÉ)' : currentVehicle.engine === 'ON' ? 'ALLUMÉ (MARCHE)' : 'RALENTI' }}
                </span>
                <span class="text-[10px] text-neutral-400 mt-1 block font-medium">Câblage normalisé</span>
              </div>

              <!-- Score Conduite -->
              <div class="bg-neutral-900 rounded-2xl p-4 border border-neutral-800">
                <span class="text-xs text-neutral-400 block mb-1 font-bold">Score Conduite</span>
                <span class="text-base font-black text-white font-mono block">94 / 100</span>
                <span class="text-[10px] text-neutral-400 mt-1 block font-medium">0 freinage brusque</span>
              </div>

            </div>

            <!-- Bloc de commande à distance -->
            <div class="p-4 rounded-2xl bg-black border border-neutral-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-white flex items-center gap-2">
                  <Power class="w-4 h-4 text-white" />
                  COMMANDES À DISTANCE
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-700 font-bold">
                  Sécurisé 256-bit
                </span>
              </div>

              <p class="text-xs text-neutral-300 font-medium">
                Testez la coupure ou la réactivation du moteur en temps réel :
              </p>

              <!-- Boutons de commande Noir & Blanc -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  @click="triggerEngineCut"
                  class="w-full py-3 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border-2"
                  :class="currentVehicle.engine === 'CUT'
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-white hover:bg-neutral-900'"
                >
                  <Power class="w-4 h-4" />
                  <span>{{ currentVehicle.engine === 'CUT' ? 'Débloquer le Moteur' : 'Couper le Moteur' }}</span>
                </button>

                <button
                  @click="triggerSosAlert"
                  class="w-full py-3 px-3 rounded-xl font-black text-xs bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShieldAlert class="w-4 h-4 text-white" />
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
