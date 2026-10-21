<script setup>
import { ref, computed } from 'vue'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  Building 
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  sector: 'Entreprise & PME',
  vehicleCount: 5,
  services: ['Suivi GPS temps réel', 'Coupure moteur à distance'],
  message: ''
})

const availableServices = [
  'Suivi GPS temps réel',
  'Coupure moteur à distance',
  'Gestion des chauffeurs & éco-conduite',
  'Sonde carburant & anti-siphonnage',
  'Vidéosurveillance embarquée (Dashcam IA)',
  'Bouton SOS d\'urgence'
]

const toggleService = (srv) => {
  if (form.value.services.includes(srv)) {
    form.value.services = form.value.services.filter(s => s !== s)
  } else {
    form.value.services.push(srv)
  }
}

const isSubmitted = ref(false)

const sendViaWhatsApp = () => {
  const text = `*NOUVELLE DEMANDE DE DEVIS CTM*%0A` +
    `👤 *Nom* : ${form.value.name || 'Non précisé'}%0A` +
    `🏢 *Entreprise/Organisme* : ${form.value.company || 'Particulier'}%0A` +
    `📞 *Téléphone* : ${form.value.phone || 'Non précisé'}%0A` +
    `🏷️ *Secteur* : ${form.value.sector}%0A` +
    `🚗 *Nombre de véhicules* : ${form.value.vehicleCount}%0A` +
    `⚙️ *Modules souhaités* : ${form.value.services.join(', ')}%0A` +
    `📝 *Message* : ${form.value.message || 'Demande de devis'}`

  window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${text}`, '_blank')
  isSubmitted.value = true
}

const sendViaEmail = () => {
  const subject = encodeURIComponent(`Demande de devis CTM - ${form.value.company || form.value.name}`)
  const body = encodeURIComponent(
    `Nom: ${form.value.name}\n` +
    `Société: ${form.value.company}\n` +
    `Téléphone: ${form.value.phone}\n` +
    `Secteur: ${form.value.sector}\n` +
    `Nombre de véhicules: ${form.value.vehicleCount}\n` +
    `Services demandés: ${form.value.services.join(', ')}\n\n` +
    `Message additionnel:\n${form.value.message}`
  )
  window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="py-20 bg-[#070D19] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header : Left-aligned 2-column layout -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <MessageSquare class="w-3.5 h-3.5" />
            <span>CONTACT & DEVIS EXPRESS</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Équipez vos véhicules avec Central Track Mali
          </h2>
        </div>
        <p class="text-slate-400 text-xs sm:text-sm max-w-md">
          Nos techniciens vous accueillent à notre agence de Banankabougou ou interviennent directement dans vos locaux à Bamako.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Coordonnées & Adresse du Flyer -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="p-8 rounded-3xl bg-[#0A1424] border border-cyan-500/30 space-y-6 shadow-xl relative overflow-hidden">
            <!-- Subtle glow -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <div class="border-b border-slate-800 pb-5">
              <span class="text-xs uppercase font-bold text-cyan-400 tracking-wider">SIÈGE SOCIAL</span>
              <h3 class="text-2xl font-extrabold text-white mt-1">CENTRAL TRACK MALI</h3>
              <p class="text-xs text-slate-400 mt-1">Tracking • Vidéosurveillance • Sécurité & Services</p>
            </div>

            <!-- Address (from flyer) -->
            <div class="flex items-start gap-3.5 text-slate-300">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-semibold text-slate-400 block">Adresse Agence</span>
                <p class="text-white font-bold text-sm sm:text-base mt-0.5">
                  BANANKABOUGOU PRÈS COUR SUPRÊME
                </p>
                <p class="text-xs text-slate-400">Bamako, Mali</p>
              </div>
            </div>

            <!-- Phone numbers (from flyer: 76125026 / 66125026) -->
            <div class="flex items-start gap-3.5 text-slate-300">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-semibold text-slate-400 block">Lignes directes</span>
                <div class="flex flex-wrap items-center gap-3 mt-1">
                  <a :href="companyInfo.phones[0].link" class="text-white hover:text-emerald-400 font-bold text-base font-mono underline underline-offset-4">
                    76 12 50 26
                  </a>
                  <span class="text-slate-600">/</span>
                  <a :href="companyInfo.phones[1].link" class="text-white hover:text-emerald-400 font-bold text-base font-mono underline underline-offset-4">
                    66 12 50 26
                  </a>
                </div>
                <p class="text-[11px] text-emerald-400 font-medium mt-1">Disponibles pour appel direct & WhatsApp</p>
              </div>
            </div>

            <!-- Email (from flyer: infoctm@gmail.com) -->
            <div class="flex items-start gap-3.5 text-slate-300">
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Mail class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-semibold text-slate-400 block">Email Professionnel</span>
                <a :href="`mailto:${companyInfo.email}`" class="text-white hover:text-blue-400 font-bold text-base block mt-0.5 underline underline-offset-4 font-mono">
                  infoctm@gmail.com
                </a>
              </div>
            </div>

            <!-- Horaires -->
            <div class="flex items-start gap-3.5 text-slate-300 pt-2 border-t border-slate-800">
              <Clock class="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div class="text-xs text-slate-400">
                <strong class="text-slate-300">Horaires d'accueil :</strong> Lun - Sam : 08h00 - 18h30 <br />
                <span class="text-cyan-400 font-medium">Permanence d'assistance d'urgence 24/7 pour nos abonnés</span>
              </div>
            </div>

          </div>

          <!-- Quick WhatsApp CTA Banner -->
          <a 
            :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20CTM,%20je%20souhaite%20des%20renseignements%20sur%20vos%20tarifs`"
            target="_blank"
            class="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-between gap-4 font-bold transition-all shadow-xl shadow-emerald-950/40 cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <MessageSquare class="w-6 h-6" />
              <div>
                <span class="text-sm block">Échange instantané sur WhatsApp</span>
                <span class="text-xs font-normal opacity-90">Réponse de nos conseillers en moins de 15 min</span>
              </div>
            </div>
            <span class="px-3 py-1 rounded-lg bg-black/20 text-xs">Ouvrir</span>
          </a>

        </div>

        <!-- Right: Instant Interactive Quote Form -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl bg-[#0A1424] border border-slate-800 shadow-2xl relative">
            
            <h3 class="text-2xl font-extrabold text-white mb-2">Configurateur de Devis Personnalisé</h3>
            <p class="text-xs sm:text-sm text-slate-400 mb-6">
              Sélectionnez vos besoins et transmettez votre demande en 1 clic à notre équipe commerciale.
            </p>

            <form @submit.prevent="sendViaWhatsApp" class="space-y-5">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="Ex: Amadou Diallo"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Numéro de Téléphone *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    v-model="form.phone"
                    placeholder="Ex: 76 12 50 26"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Entreprise / Organisation
                  </label>
                  <input 
                    type="text" 
                    v-model="form.company"
                    placeholder="Ex: Société de Transport CTM"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Secteur d'activité
                  </label>
                  <select 
                    v-model="form.sector"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option>Entreprise & PME</option>
                    <option>ONG & Bailleurs</option>
                    <option>Transport & Logistique</option>
                    <option>BTP, Mines & Carrières</option>
                    <option>Particulier (Véhicule personnel)</option>
                  </select>
                </div>
              </div>

              <!-- Number of vehicles -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nombre de véhicules / engins à équiper : <span class="text-cyan-400 font-bold font-mono">{{ form.vehicleCount }}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  v-model.number="form.vehicleCount"
                  class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <!-- Services selection checkboxes -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Fonctionnalités souhaitées :
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button 
                    type="button"
                    v-for="srv in availableServices"
                    :key="srv"
                    @click="toggleService(srv)"
                    class="px-3 py-2 rounded-lg text-xs font-medium text-left border flex items-center justify-between transition-all cursor-pointer"
                    :class="form.services.includes(srv)
                      ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'"
                  >
                    <span class="truncate">{{ srv }}</span>
                    <CheckCircle v-if="form.services.includes(srv)" class="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
                  </button>
                </div>
              </div>

              <!-- Optional message -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Précisions complémentaires (Optionnel)
                </label>
                <textarea 
                  rows="2"
                  v-model="form.message"
                  placeholder="Ex: Véhicules situés à Bamako et Sikasso, besoin d'une installation urgente..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                ></textarea>
              </div>

              <!-- Submit Buttons -->
              <div class="pt-2 flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit"
                  class="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
                >
                  <MessageSquare class="w-4 h-4" />
                  <span>Envoyer ma demande par WhatsApp</span>
                </button>

                <button 
                  type="button"
                  @click="sendViaEmail"
                  class="py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Mail class="w-4 h-4 text-cyan-400" />
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
