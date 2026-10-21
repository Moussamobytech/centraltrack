<script setup>
import { ref } from 'vue'
import { X, MessageSquare, Phone, CheckCircle, ShieldCheck } from 'lucide-vue-next'
import { companyInfo } from '../data/content'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const modalForm = ref({
  name: '',
  phone: '',
  company: '',
  vehicles: '1 à 5 véhicules',
  whatsappMessage: ''
})

const sendModalWhatsApp = () => {
  const text = `*DEMANDE DE DEVIS EXPRESS CTM*%0A` +
    `👤 Nom: ${modalForm.value.name || 'Client'}%0A` +
    `📞 Tél: ${modalForm.value.phone || 'Non précisé'}%0A` +
    `🏢 Entreprise: ${modalForm.value.company || 'Particulier'}%0A` +
    `🚗 Flotte: ${modalForm.value.vehicles}%0A` +
    `📍 Ville: Bamako / Mali`

  window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${text}`, '_blank')
  emit('close')
}
</script>

<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all"
  >
    <div 
      class="relative w-full max-w-lg rounded-3xl bg-[#0A1424] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 overflow-hidden"
      @click.stop
    >
      <!-- Close button -->
      <button 
        @click="$emit('close')"
        class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Modal Header -->
      <div class="mb-6">
        <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">CENTRAL TRACK MALI</span>
        <h3 class="text-2xl font-extrabold text-white mt-1">Demande de Devis Express</h3>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">
          Obtenez une proposition tarifaire détaillée sous 30 minutes de la part de nos conseillers à Bamako.
        </p>
      </div>

      <form @submit.prevent="sendModalWhatsApp" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 uppercase mb-1">Nom complet *</label>
          <input 
            type="text" 
            required 
            v-model="modalForm.name"
            placeholder="Votre nom" 
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 uppercase mb-1">Téléphone (Orange / Malitel) *</label>
          <input 
            type="tel" 
            required 
            v-model="modalForm.phone"
            placeholder="Ex: 76 12 50 26" 
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 uppercase mb-1">Société ou Organisation</label>
          <input 
            type="text" 
            v-model="modalForm.company"
            placeholder="Nom de l'entreprise ou ONG" 
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 uppercase mb-1">Taille du parc à équiper</label>
          <select 
            v-model="modalForm.vehicles"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
          >
            <option>1 véhicule (Particulier ou VIP)</option>
            <option>2 à 5 véhicules</option>
            <option>6 à 15 véhicules</option>
            <option>16 à 50 véhicules</option>
            <option>Plus de 50 véhicules / Engins miniers</option>
          </select>
        </div>

        <div class="pt-2">
          <button 
            type="submit"
            class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
          >
            <MessageSquare class="w-4 h-4" />
            <span>Valider et échanger sur WhatsApp</span>
          </button>
        </div>

        <div class="pt-2 text-center">
          <span class="text-xs text-slate-400">
            Ou contactez directement par téléphone : 
            <a :href="companyInfo.phones[0].link" class="text-cyan-400 font-bold font-mono">76 12 50 26</a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
