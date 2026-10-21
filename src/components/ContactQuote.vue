<script setup>
import { ref } from 'vue'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle
} from 'lucide-vue-next'
import { companyInfo } from '../data/content'

const form = ref({
  name: '',
  phone: '',
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
    form.value.services = form.value.services.filter(s => s !== srv)
  } else {
    form.value.services.push(srv)
  }
}

const sendViaWhatsApp = () => {
  const text = `*NOUVELLE DEMANDE DE DEVIS CTM*%0A` +
    `👤 *Nom* : ${form.value.name || 'Non précisé'}%0A` +
    `🏢 *Entreprise* : ${form.value.company || 'Particulier'}%0A` +
    `📞 *Téléphone* : ${form.value.phone || 'Non précisé'}%0A` +
    `🏷️ *Secteur* : ${form.value.sector}%0A` +
    `🚗 *Véhicules* : ${form.value.vehicleCount}%0A` +
    `⚙️ *Modules* : ${form.value.services.join(', ')}%0A` +
    `📝 *Message* : ${form.value.message || 'Demande de devis'}`

  window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${text}`, '_blank')
}

const sendViaEmail = () => {
  const subject = encodeURIComponent(`Demande de devis CTM - ${form.value.company || form.value.name}`)
  const body = encodeURIComponent(
    `Nom: ${form.value.name}\nSociété: ${form.value.company}\nTéléphone: ${form.value.phone}\nSecteur: ${form.value.sector}\nNombre de véhicules: ${form.value.vehicleCount}\nServices: ${form.value.services.join(', ')}\n\nMessage:\n${form.value.message}`
  )
  window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="py-20 bg-white border-b border-black/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 pb-6 text-left">
        <div class="space-y-3 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-xs font-bold text-black">
            <MessageSquare class="w-3.5 h-3.5" />
            <span>CONTACT & DEVIS EXPRESS</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
            Équipez vos véhicules avec Central Track Mali
          </h2>
        </div>
        <p class="text-neutral-700 text-sm font-medium max-w-md">
          Nos techniciens vous accueillent à notre agence de Banankabougou ou interviennent directement dans vos locaux à Bamako.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Coordonnées Agence (Gauche) -->
        <div class="lg:col-span-5 space-y-6 text-left">
          
          <div class="p-8 rounded-3xl bg-white border-2 border-black space-y-6 shadow-sm">
            <div class="border-b border-neutral-200 pb-5">
              <span class="text-xs uppercase font-black text-black tracking-wider">SIÈGE SOCIAL</span>
              <h3 class="text-2xl font-black text-black mt-1">CENTRAL TRACK MALI</h3>
              <p class="text-xs text-neutral-600 font-semibold mt-1">Tracking • Vidéosurveillance • Sécurité & Services</p>
            </div>

            <!-- Adresse -->
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <span class="text-xs uppercase font-bold text-neutral-500 block">Adresse Agence</span>
                <p class="text-black font-black text-sm sm:text-base mt-0.5">
                  BANANKABOUGOU PRÈS COUR SUPRÊME
                </p>
                <p class="text-xs text-neutral-600 font-medium">Bamako, Mali</p>
              </div>
            </div>

            <!-- Téléphones -->
            <div class="flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
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
              <div class="w-11 h-11 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black shrink-0">
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
            <div class="flex items-start gap-4 pt-2 border-t border-neutral-200">
              <Clock class="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div class="text-xs text-neutral-700 font-medium">
                <strong class="text-black font-bold">Horaires :</strong> Lun - Sam : 08h00 - 18h30 <br />
                <span class="text-black font-bold">Permanence d'assistance d'urgence 24/7 pour nos abonnés</span>
              </div>
            </div>
          </div>

          <!-- Bouton WhatsApp rapide -->
          <a 
            :href="`https://wa.me/${companyInfo.whatsappNumber}?text=Bonjour%20CTM,%20je%20souhaite%20des%20renseignements%20sur%20vos%20tarifs`"
            target="_blank"
            class="p-5 rounded-2xl bg-black hover:bg-neutral-800 text-white flex items-center justify-between gap-4 font-bold transition-all shadow-md cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <MessageSquare class="w-6 h-6 text-white" />
              <div>
                <span class="text-sm font-black block">Échange instantané sur WhatsApp</span>
                <span class="text-xs text-neutral-300 font-medium">Réponse de nos conseillers en moins de 15 min</span>
              </div>
            </div>
            <span class="px-3 py-1.5 rounded-lg bg-white text-black font-black text-xs">Ouvrir</span>
          </a>

        </div>

        <!-- Formulaire de Devis (Droite) -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl bg-white border-2 border-black shadow-sm text-left">
            
            <h3 class="text-2xl font-black text-black mb-2">Configurateur de Devis Personnalisé</h3>
            <p class="text-xs sm:text-sm text-neutral-600 font-medium mb-6">
              Sélectionnez vos besoins et transmettez votre demande en 1 clic à notre équipe commerciale.
            </p>

            <form @submit.prevent="sendViaWhatsApp" class="space-y-5">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="Ex: Amadou Diallo"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Numéro de Téléphone *
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
                    Entreprise / Organisation
                  </label>
                  <input 
                    type="text" 
                    v-model="form.company"
                    placeholder="Ex: Société de Transport"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                    Secteur d'activité
                  </label>
                  <select 
                    v-model="form.sector"
                    class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black text-sm font-bold focus:border-black focus:outline-none transition-colors"
                  >
                    <option>Entreprise & PME</option>
                    <option>ONG & Bailleurs</option>
                    <option>Transport & Logistique</option>
                    <option>BTP, Mines & Carrières</option>
                    <option>Particulier (Véhicule personnel)</option>
                  </select>
                </div>
              </div>

              <!-- Nombre de véhicules -->
              <div>
                <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                  Nombre de véhicules à équiper : <span class="font-mono underline">{{ form.vehicleCount }}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  v-model.number="form.vehicleCount"
                  class="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <!-- Choix des services -->
              <div>
                <label class="block text-xs font-black text-black uppercase tracking-wider mb-2">
                  Fonctionnalités souhaitées :
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button 
                    type="button"
                    v-for="srv in availableServices"
                    :key="srv"
                    @click="toggleService(srv)"
                    class="px-3.5 py-2.5 rounded-lg text-xs font-bold text-left border-2 flex items-center justify-between transition-all cursor-pointer"
                    :class="form.services.includes(srv)
                      ? 'bg-black text-white border-black'
                      : 'bg-white border-neutral-200 text-neutral-800 hover:border-black'"
                  >
                    <span class="truncate">{{ srv }}</span>
                    <CheckCircle v-if="form.services.includes(srv)" class="w-4 h-4 text-white shrink-0 ml-1" />
                  </button>
                </div>
              </div>

              <!-- Précisions -->
              <div>
                <label class="block text-xs font-black text-black uppercase tracking-wider mb-1.5">
                  Précisions complémentaires (Optionnel)
                </label>
                <textarea 
                  rows="2"
                  v-model="form.message"
                  placeholder="Ex: Véhicules situés à Bamako et Sikasso, besoin d'une installation urgente..."
                  class="w-full px-4 py-3 rounded-xl bg-neutral-50 border-2 border-neutral-300 text-black placeholder-neutral-400 text-sm font-semibold focus:border-black focus:outline-none transition-colors"
                ></textarea>
              </div>

              <!-- Boutons de soumission -->
              <div class="pt-2 flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit"
                  class="flex-1 py-4 px-6 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
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
