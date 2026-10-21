<script setup>
import { ref } from 'vue'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const form = ref({
  name: '',
  phone: '',
  company: '',
  vehicleCount: '1 à 5 véhicules',
  message: ''
})

const sendViaWhatsApp = () => {
  const text = `*DEMANDE DE DEVIS CENTRAL TRACK MALI*%0A` +
    `👤 *Nom* : ${form.value.name || 'Non précisé'}%0A` +
    `📞 *Téléphone* : ${form.value.phone || 'Non précisé'}%0A` +
    `🏢 *Société / Particulier* : ${form.value.company || 'Particulier'}%0A` +
    `🚗 *Parc de véhicules* : ${form.value.vehicleCount}%0A` +
    `📝 *Précisions* : ${form.value.message || 'Demande d\'information et tarif'}`

  window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${text}`, '_blank')
}

const sendViaEmail = () => {
  const subject = encodeURIComponent(`Demande de devis CTM - ${form.value.company || form.value.name}`)
  const body = encodeURIComponent(
    `Nom: ${form.value.name}\n` +
    `Téléphone: ${form.value.phone}\n` +
    `Société/Particulier: ${form.value.company}\n` +
    `Nombre de véhicules: ${form.value.vehicleCount}\n\n` +
    `Message:\n${form.value.message}`
  )
  window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="py-16 md:py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-8 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-black text-black">
            <MessageSquare class="w-3.5 h-3.5" />
            <span>CONTACT & DEVIS RAPIDE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Contactez notre équipe commerciale
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-semibold max-w-md">
          Nos techniciens vous accueillent à notre agence de Banankabougou ou interviennent directement dans vos locaux à Bamako sous 24h.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Coordonnées Agence (Gauche) -->
        <div class="lg:col-span-5 space-y-6 text-left">
          
          <div class="p-8 rounded-3xl bg-neutral-50 border-2 border-black space-y-6 shadow-sm">
            <div class="border-b border-neutral-300 pb-5">
              <span class="text-xs uppercase font-black text-neutral-500 tracking-wider">SIÈGE SOCIAL</span>
              <h3 class="text-2xl font-black text-black mt-1">CENTRAL TRACK MALI</h3>
              <p class="text-xs text-neutral-700 font-bold mt-1">Tracking • Vidéosurveillance • Sécurité & Services</p>
            </div>

            <!-- Adresse -->
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-bold text-neutral-500 block">Adresse de l'Agence</span>
                <p class="text-black font-black text-sm sm:text-base mt-0.5">
                  BANANKABOUGOU PRÈS COUR SUPRÊME
                </p>
                <p class="text-xs text-neutral-600 font-medium">Bamako, Mali</p>
              </div>
            </div>

            <!-- Téléphones -->
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-bold text-neutral-500 block">Lignes directes</span>
                <div class="flex flex-wrap items-center gap-3 mt-1">
                  <a :href="companyInfo.phones[0].link" class="text-black hover:underline font-black text-base font-mono">
                    76 12 50 26
                  </a>
                  <span class="text-neutral-400 font-bold">/</span>
                  <a :href="companyInfo.phones[1].link" class="text-black hover:underline font-black text-base font-mono">
                    66 12 50 26
                  </a>
                </div>
                <p class="text-xs text-neutral-600 font-semibold mt-1">Disponibles pour appel direct & WhatsApp</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-bold text-neutral-500 block">Email Professionnel</span>
                <a :href="`mailto:${companyInfo.email}`" class="text-black hover:underline font-black text-base block mt-0.5 font-mono">
                  infoctm@gmail.com
                </a>
              </div>
            </div>

            <!-- Horaires -->
            <div class="flex items-start gap-4 pt-2 border-t border-neutral-300">
              <Clock class="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div class="text-xs text-neutral-700 font-medium">
                <strong class="text-black font-bold">Horaires :</strong> Lun - Sam : 08h00 - 18h30 <br />
                <span class="text-black font-bold">Permanence d'assistance d'urgence 24/7 pour nos clients</span>
              </div>
            </div>
          </div>

          <!-- Bouton WhatsApp rapide -->
          <a 
            :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20CTM,%20je%20souhaite%20des%20renseignements%20sur%20vos%20tarifs`"
            target="_blank"
            class="p-5 rounded-2xl bg-black hover:bg-neutral-800 text-white flex items-center justify-between gap-4 font-bold transition-all shadow cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <MessageSquare class="w-6 h-6 text-white" />
              <div>
                <span class="text-sm font-black block">Échange instantané sur WhatsApp</span>
                <span class="text-xs text-neutral-300 font-medium">Réponse en moins de 15 minutes</span>
              </div>
            </div>
            <span class="px-3.5 py-1.5 rounded-lg bg-white text-black font-black text-xs">Ouvrir</span>
          </a>

        </div>

        <!-- Formulaire de Devis (Droite) -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl bg-white border-2 border-black shadow-sm text-left">
            
            <h3 class="text-2xl font-black text-black mb-2">Demande de Devis Express</h3>
            <p class="text-xs sm:text-sm text-neutral-600 font-medium mb-6">
              Remplissez ce formulaire pour recevoir une proposition adaptée à votre besoin sous 30 minutes.
            </p>

            <form @submit.prevent="sendViaWhatsApp" class="space-y-4">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Téléphone (Orange / Malitel) *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    v-model="form.phone"
                    placeholder="Ex: 76 12 50 26"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Société ou Statut
                  </label>
                  <input 
                    type="text" 
                    v-model="form.company"
                    placeholder="Nom de l'entreprise ou Particulier"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Nombre de véhicules
                  </label>
                  <select 
                    v-model="form.vehicleCount"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-bold focus:border-black focus:outline-none transition-colors"
                  >
                    <option>1 véhicule (Particulier / VIP)</option>
                    <option>2 à 5 véhicules</option>
                    <option>6 à 15 véhicules</option>
                    <option>16 à 50 véhicules</option>
                    <option>Plus de 50 véhicules / Engins</option>
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                  Votre besoin (Optionnel)
                </label>
                <textarea 
                  rows="3"
                  v-model="form.message"
                  placeholder="Ex: Suivi GPS, coupure moteur, sonde carburant, installation à Bamako..."
                  class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                ></textarea>
              </div>

              <!-- Boutons d'envoi -->
              <div class="pt-2 flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit"
                  class="flex-1 py-4 px-6 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow cursor-pointer"
                >
                  <MessageSquare class="w-4 h-4" />
                  <span>Envoyer ma demande par WhatsApp</span>
                </button>

                <button 
                  type="button"
                  @click="sendViaEmail"
                  class="py-4 px-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-sm flex items-center justify-center gap-2 border-2 border-black transition-colors cursor-pointer"
                >
                  <Mail class="w-4 h-4 text-black" />
                  <span>Par Email</span>
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
