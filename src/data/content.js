export const companyInfo = {
  name: "Central Track Mali",
  shortName: "CTM GPS",
  tagline: "Optimisez vos opérations, sécurisez vos véhicules et réduisez vos coûts",
  subTagline: "Le partenaire télématique et sécurité GPS de référence pour les entreprises, ONG et flottes professionnelles au Mali et dans la sous-région.",
  address: "Banankabougou, près de la Cour Suprême, Bamako - Mali",
  phones: [
    { display: "+223 76 12 50 26", link: "tel:+22376125026", operator: "Orange" },
    { display: "+223 66 12 50 26", link: "tel:+22366125026", operator: "Malitel" }
  ],
  whatsappNumber: "22376125026",
  email: "infoctm@gmail.com",
  workingHours: "Lundi - Samedi : 08h00 - 18h30 | Support d'urgence Télématique : 24h/24 & 7j/7"
}

export const keyPillars = [
  {
    id: "suivi-gps",
    number: "01",
    title: "Suivi GPS ultra précis partout",
    subtitle: "Couverture totale Mali & Sous-région",
    description: "Localisez vos véhicules en temps réel avec une précision métrique, même dans les zones à faible connectivité réseau grâce à notre technologie hybride.",
    bulletPoints: [
      "Entreprises & Flottes commerciales",
      "ONG & Organisations Internationales",
      "Sociétés de transport inter-urbain",
      "BTP, Mines & Engins lourds"
    ],
    features: [
      "Localisation temps réel 5-10 secondes",
      "Coupure moteur à distance en cas de vol",
      "Historique des trajets rejouable à 365 jours",
      "Cartographie actualisée du Mali et corridors"
    ],
    color: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "gestion-chauffeurs",
    number: "02",
    title: "Gestion des Chauffeurs",
    subtitle: "Sécurité routière & conformité",
    description: "Encadrez le comportement de vos conducteurs, prévenez les accidents et assurez le respect scrupuleux des temps de repos et de mission.",
    bulletPoints: [
      "Comportement de conduite (Eco-driving)",
      "Heures de travail & pointage automatique",
      "Alertes fatigue & somnolence au volant",
      "Détection des freinages et accélérations brusques"
    ],
    features: [
      "Score de sécurité par chauffeur",
      "Détection des excès de vitesse instantanée",
      "Alertes d'utilisation nocturne non autorisée",
      "Rapport hebdomadaire de performance"
    ],
    color: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    id: "gestion-flotte",
    number: "03",
    title: "Gestion intelligente de flotte",
    subtitle: "Rentabilité & Maîtrise des coûts",
    description: "Automatisez la maintenance, surveillez vos consommations de carburant et générez des rapports décisionnels précis pour maximiser vos marges.",
    bulletPoints: [
      "Suivi en temps réel de tous vos actifs",
      "Historique complet des trajets et arrêts",
      "Rapports automatisés (Excel / PDF / Mail)",
      "Contrôle anti-siphonnage carburant"
    ],
    features: [
      "Capteurs de niveau de carburant ultra-précis",
      "Rappels automatiques de vidange et visite technique",
      "Calcul des coûts kilométriques réels",
      "Tableaux de bord d'aide à la décision"
    ],
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  }
]

export const advancedSolutions = [
  {
    title: "Vidéosurveillance Embarquée IA",
    desc: "Dashcam connectée 4G avec double caméra (vue route & vue cabine), streaming en direct et enregistrement automatique des incidents.",
    icon: "Video"
  },
  {
    title: "Capteur Carburant Haute Précision",
    desc: "Détection immédiate du siphonnage ou des remplissages anormaux avec alertes SMS/WhatsApp en direct.",
    icon: "Fuel"
  },
  {
    title: "Coupe-Circuit Anti-Vol à Distance",
    desc: "Arrêtez le moteur de votre véhicule à distance depuis votre smartphone ou notre centre de contrôle dès qu'une alerte est levée.",
    icon: "ShieldAlert"
  },
  {
    title: "Géorepérage (Geofencing)",
    desc: "Définissez des corridors et zones autorisées (villes, chantiers, frontières) avec alerte instantanée en cas de sortie de périmètre.",
    icon: "MapPin"
  },
  {
    title: "Bouton d'Urgence SOS Chauffeur",
    desc: "Bouton discret permettant au chauffeur d'envoyer un signal d'urgence silencieux à notre centre et à votre direction en cas d'agression.",
    icon: "BellRing"
  },
  {
    title: "Sondes de Température Frigorifique",
    desc: "Contrôle en continu de la chaîne du froid pour les camions de transport agroalimentaire et pharmaceutique.",
    icon: "Thermometer"
  }
]

export const targetSectors = [
  {
    name: "Entreprises & PME",
    desc: "Suivez vos véhicules commerciaux, réduisez les kilomètres superflus et maîtrisez vos coûts d'exploitation.",
    icon: "Building2",
    benefits: ["Réduction de 20% des dépenses carburant", "Suppression des usages personnels non autorisés", "Amélioration de la ponctualité client"]
  },
  {
    name: "ONG & Organisations Internationales",
    desc: "Sécurisez vos équipes et vos convois dans les régions difficiles grâce aux boutons SOS et au suivi satellite.",
    icon: "Globe",
    benefits: ["Conformité avec les protocoles de sécurité humanitaire", "Localisation instantanée en zone blanche", "Historique certifié pour les bailleurs de fonds"]
  },
  {
    name: "Transport & Logistique",
    desc: "Gérez vos camions bennes, semi-remorques et autocars sur les corridors Mali-Sénégal, Côte d'Ivoire, etc.",
    icon: "Truck",
    benefits: ["Suivi des temps d'arrêt aux frontières", "Surveillance du fret et des cargaisons", "Alertes vitesse sur les axes nationaux"]
  },
  {
    name: "BTP, Mines & Carrières",
    desc: "Supervisez vos engins lourds (pelleteuses, chargeuses, groupes électrogènes) et leurs heures effectives de travail.",
    icon: "HardHat",
    benefits: ["Mesure précise des heures moteur (horamètre)", "Prévention du vol de carburant sur site isolé", "Planification des interventions mécaniques"]
  }
]

export const keyStats = [
  { value: "3 500+", label: "Véhicules & Engins équipés au Mali", icon: "Car" },
  { value: "99.8%", label: "Taux de récupération après vol", icon: "ShieldCheck" },
  { value: "-25%", label: "Économie moyenne sur le carburant", icon: "TrendingDown" },
  { value: "24/7", label: "Centre de veille & support à Bamako", icon: "Clock" }
]

export const mockVehicles = [
  {
    id: "CTM-01",
    plate: "CH-8492-MD",
    driver: "Moussa Diarra",
    type: "Camion Plateau 30T",
    location: "Bamako - Pont des Martyrs",
    speed: 54,
    speedLimit: 60,
    fuel: 78,
    engine: "ON",
    status: "En mouvement",
    statusColor: "emerald",
    lat: 12.6392,
    lng: -7.9982,
    temp: "24°C"
  },
  {
    id: "CTM-02",
    plate: "AF-1204-MD",
    driver: "Amadou Traoré",
    type: "Toyota Hilux 4x4 (ONG)",
    location: "Route de Koulikoro",
    speed: 68,
    speedLimit: 70,
    fuel: 92,
    engine: "ON",
    status: "En mission",
    statusColor: "cyan",
    lat: 12.6845,
    lng: -7.9231,
    temp: "Normal"
  },
  {
    id: "CTM-03",
    plate: "BE-5510-MD",
    driver: "Bakary Coulibaly",
    type: "Engin BTP Chenille",
    location: "Chantier Banankabougou",
    speed: 0,
    speedLimit: 20,
    fuel: 43,
    engine: "IDLE",
    status: "À l'arrêt (Moteur allumé)",
    statusColor: "amber",
    lat: 12.5934,
    lng: -7.9456,
    temp: "45°C moteur"
  }
]

export const faqs = [
  {
    q: "Où se situe l'agence Central Track Mali ?",
    a: "Notre agence est située à Banankabougou, tout près de la Cour Suprême à Bamako (Mali). Nos équipes techniques interviennent également directement dans vos locaux ou sur vos chantiers."
  },
  {
    q: "Comment fonctionne la coupure moteur à distance en cas de vol ?",
    a: "En cas de vol ou d'alerte critique, vous (ou notre centre d'assistance 24/7) pouvez envoyer une commande cryptée via l'application. Le relais de sécurité coupe l'alimentation électrique ou d'injection du moteur de manière sécurisée dès que la vitesse le permet, immobilisant le véhicule."
  },
  {
    q: "Le suivi fonctionne-t-il hors de Bamako et dans les zones éloignées ?",
    a: "Oui ! Nos balises GPS disposent de mémoires tampons intégrées et d'une technologie multi-opérateurs (Orange / Malitel). Même en zone sans réseau temporaire, toutes les données sont enregistrées et retransmises automatiquement dès retour du signal, sans perte d'historique."
  },
  {
    q: "Combien de temps prend l'installation sur un véhicule ?",
    a: "Une installation professionnelle et discrète prend généralement entre 45 minutes et 1 heure par véhicule, réalisée par nos techniciens qualifiés sans altérer le faisceau d'origine de votre voiture."
  }
]
