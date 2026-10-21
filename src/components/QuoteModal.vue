<script setup>
import { ref } from 'vue'
import { X, MessageSquare } from 'lucide-vue-next'
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
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all"
    @click="$emit('close')"
  >
    <div 
      class="relative w-full max-w-lg rounded-3xl bg-white border-2 border-black p-6 sm:p-8 shadow-2xl overflow-hidden text-left"
      @click.stop
    >
      <!-- Bouton Fermer -->
      <button 
        @click="$emit('close')"
        class="absolute top-5 right-5 p-2 rounded-full text-black hover:bg-neutral-100 transition-colors cursor-pointer"
        aria-label="Fermer"
      >
        <X class="w-6 h-6" />
      </button>

      <!-- En-tête Modale -->
      <div class="mb-6">
        <span class="text-xs font-black text-black uppercase tracking-wider">CENTRAL TRACK MALI</span>
        <h3 class="text-2xl font-black text-black mt-1">Demande de Devis Express</h3>
        <p class="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
          Obtenez une proposition tarifaire sous 30 minutes de la part de nos conseillers à Bamako.
        </p>
      </div>

      <form @submit.prevent="sendModalWhatsApp" class="space-y-4">
        <div>
          <label class="block text-xs font-black text-black uppercase mb-1">Nom complet *</label>
          <input 
            type="text" 
            required 
            v-model="modalForm.name"
            placeholder="Votre nom" 
            class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-semibold focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-black text-black uppercase mb-1">Numéro de téléphone *</label>
          <input 
            type="tel" 
            required 
            v-model="modalForm.phone"
            placeholder="Ex: 76 12 50 26" 
            class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-semibold focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-black text-black uppercase mb-1">Société ou Organisation</label>
          <input 
            type="text" 
            v-model="modalForm.company"
            placeholder="Nom de l'entreprise ou ONG" 
            class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-semibold focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-xs font-black text-black uppercase mb-1">Taille du parc à équiper</label>
          <select 
            v-model="modalForm.vehicles"
            class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-bold focus:border-black focus:outline-none"
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
            class="w-full py-4 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm flex items-center justify-center gap-2 shadow cursor-pointer transition-colors"
          >
            <MessageSquare class="w-4 h-4" />
            <span>Valider et échanger sur WhatsApp</span>
          </button>
        </div>

        <div class="pt-2 text-center">
          <span class="text-xs text-neutral-600 font-medium">
            Ou par appel direct : 
            <a :href="companyInfo.phones[0].link" class="text-black font-black underline font-mono">76 12 50 26</a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
