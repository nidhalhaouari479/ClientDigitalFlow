import type { Locale } from '@/lib/i18n'
import { DEFAULT_LOCALE } from '@/lib/i18n'
import { PROJECTS, type Project } from '@/lib/data'

export const REALIZED_PROJECTS_API_URL = 'https://gctcrm.vercel.app/api/realized-projects'

export type ProjectCategory =
  | 'E-commerce'
  | 'ERP / CRM'
  | 'AI Chatbots'
  | 'Mobile Apps / PWA'
  | 'Automation'
  | 'Dashboards / Data Visualization'
  | 'Business Platforms'
  | 'Computer Vision'
  | 'Websites / Landing Pages'

export const API_PROJECT_FILTERS = [
  'All',
  'E-commerce',
  'ERP / CRM',
  'AI Chatbots',
  'Mobile Apps / PWA',
  'Automation',
  'Dashboards / Data Visualization',
  'Business Platforms',
  'Computer Vision',
  'Websites / Landing Pages',
] as const

export type ApiProjectFilter = (typeof API_PROJECT_FILTERS)[number]

const CATEGORY_LABELS: Record<ProjectCategory, Record<Locale, string>> = {
  'E-commerce': {
    en: 'E-commerce',
    fr: 'E-commerce',
    it: 'E-commerce',
  },
  'ERP / CRM': {
    en: 'ERP / CRM',
    fr: 'ERP / CRM',
    it: 'ERP / CRM',
  },
  'AI Chatbots': {
    en: 'AI Chatbots',
    fr: 'Chatbots IA',
    it: 'Chatbot IA',
  },
  'Mobile Apps / PWA': {
    en: 'Mobile Apps / PWA',
    fr: 'Apps mobiles / PWA',
    it: 'App mobili / PWA',
  },
  Automation: {
    en: 'Automation',
    fr: 'Automatisation',
    it: 'Automazione',
  },
  'Dashboards / Data Visualization': {
    en: 'Dashboards / Data Visualization',
    fr: 'Tableaux de bord / Visualisation de donnees',
    it: 'Dashboard / Visualizzazione dati',
  },
  'Business Platforms': {
    en: 'Business Platforms',
    fr: 'Plateformes business',
    it: 'Piattaforme business',
  },
  'Computer Vision': {
    en: 'Computer Vision',
    fr: 'Vision par ordinateur',
    it: 'Visione artificiale',
  },
  'Websites / Landing Pages': {
    en: 'Websites / Landing Pages',
    fr: 'Sites web / Landing pages',
    it: 'Siti web / Landing page',
  },
}

type RealizedProjectApiItem = {
  id: string
  name?: string | null
  name_fr?: string | null
  name_en?: string | null
  name_it?: string | null
  categories?: string[] | null
  stacks?: string[] | null
  description?: string | null
  description_fr?: string | null
  description_en?: string | null
  description_it?: string | null
  project_year?: number | null
  client_name?: string | null
  project_url?: string | null
  github_url?: string | null
  image_urls?: string[] | null
}

type RealizedProjectsApiResponse = {
  data?: RealizedProjectApiItem[]
}

type StaticProjectCopy = Pick<Project, 'short' | 'challenge' | 'objectives' | 'solution' | 'features'> & {
  resultLabels: string[]
}

const STATIC_PROJECT_COPY: Record<Exclude<Locale, 'en'>, Record<string, StaticProjectCopy>> = {
  fr: {
    'lumen-commerce': {
      short: "Une plateforme e-commerce headless qui a amélioré la conversion et la vitesse d'une marque en forte croissance.",
      challenge: "Lumen perdait des ventes à cause d'une boutique monolithique lente, difficile à mettre à jour et peu performante sur les Core Web Vitals.",
      objectives: ['Diviser le temps de chargement par deux', 'Permettre la mise à jour des contenus sans expertise technique', 'Augmenter la conversion au paiement'],
      solution: "Nous avons reconstruit la boutique avec Next.js, une couche de contenu composable, du cache en périphérie et un paiement Stripe simplifié.",
      features: ['Boutique headless', 'Édition de contenu composable', 'Paiement optimisé', 'Recommandations personnalisées'],
      resultLabels: ['Conversion au paiement', 'Largest Contentful Paint', 'Revenus mobiles'],
    },
    'harvest-pos': {
      short: "Une application de caisse offline-first pour un groupe de restauration multi-sites.",
      challenge: "Le personnel devait prendre les commandes même sans Wi-Fi fiable, tandis que les propriétaires voulaient suivre les ventes de chaque site en temps réel.",
      objectives: ['Fonctionner entièrement hors ligne', 'Synchroniser tous les sites', 'Fournir un reporting en temps réel'],
      solution: "Nous avons créé une application React Native offline-first avec synchronisation sans conflit et un tableau de bord de gestion en temps réel.",
      features: ['Prise de commande hors ligne', 'Synchronisation automatique', 'Reporting multi-sites en direct', 'Accès selon les rôles'],
      resultLabels: ['Fiabilité des commandes', 'Temps de saisie des commandes', 'Sites déployés'],
    },
    'atlas-crm': {
      short: "Un CRM multi-tenant conçu pour les cabinets de conseil, avec facturation et permissions granulaires.",
      challenge: "Atlas avait dépassé les limites des CRM génériques et avait besoin d'une plateforme adaptée à ses missions, également proposée aux cabinets partenaires.",
      objectives: ['Modéliser les processus de mission', 'Prendre en charge plusieurs cabinets', 'Ajouter la facturation par abonnement'],
      solution: "Nous avons livré un CRM SaaS multi-tenant avec pipelines configurables, accès par rôles et abonnements Stripe.",
      features: ['Espaces multi-tenant', 'Pipelines configurables', 'Facturation par abonnement', "Journal d'audit"],
      resultLabels: ['Cabinets partenaires intégrés', 'Visibilité du pipeline', "Création d'un nouveau tenant"],
    },
    'meridian-erp': {
      short: "Un ERP sur mesure qui unifie les stocks, les commandes et la flotte d'une entreprise logistique.",
      challenge: "Les opérations étaient dispersées entre des tableurs et des outils déconnectés, provoquant des erreurs de stock et des retards d'expédition.",
      objectives: ['Unifier les données opérationnelles', 'Réduire les erreurs de stock', 'Accélérer les expéditions'],
      solution: "Nous avons créé un ERP modulaire pour les stocks, les commandes et la flotte, avec tableaux de bord en temps réel et validations.",
      features: ['Gestion des stocks', 'Orchestration des commandes', 'Gestion de la flotte', 'Processus de validation'],
      resultLabels: ['Écarts de stock', "Capacité d'expédition", 'Source unique de vérité'],
    },
    'sage-assistant': {
      short: "Un assistant RAG qui aide le personnel clinique à trouver instantanément des réponses dans les procédures.",
      challenge: "Le personnel perdait du temps dans de longs documents de conformité, avec un risque de réponses incohérentes.",
      objectives: ['Fonder les réponses sur les procédures', 'Citer les sources', 'Préserver la confidentialité des données'],
      solution: "Nous avons créé un assistant de recherche sur le corpus documentaire, avec citations, contrôles d'accès et évaluation des réponses.",
      features: ['Recherche RAG', 'Citation des sources', 'Accès selon les rôles', 'Évaluation des réponses'],
      resultLabels: ['Temps de recherche', 'Réponses avec sources', 'Documents indexés'],
    },
    'flowops-automation': {
      short: "Une plateforme d'automatisation qui rapproche les transactions et détecte les anomalies pour une fintech.",
      challenge: "Le rapprochement manuel était lent et sujet aux erreurs, retardant la clôture mensuelle et masquant les anomalies.",
      objectives: ['Automatiser le rapprochement', 'Détecter les anomalies', 'Accélérer la clôture'],
      solution: "Nous avons créé un pipeline qui ingère les transactions, rapproche les différentes sources et présente les anomalies à vérifier.",
      features: ['Ingestion automatisée', "Détection d'anomalies par règles et ML", 'File de vérification', "Piste d'audit"],
      resultLabels: ['Temps de vérification manuelle', 'Clôture mensuelle', 'Précision du rapprochement'],
    },
  },
  it: {
    'lumen-commerce': {
      short: "Una piattaforma e-commerce headless che ha migliorato conversioni e velocità per un marchio in rapida crescita.",
      challenge: "Lumen perdeva vendite a causa di un negozio monolitico lento, difficile da aggiornare e con scarsi risultati nei Core Web Vitals.",
      objectives: ['Dimezzare i tempi di caricamento', 'Consentire aggiornamenti dei contenuti senza competenze tecniche', 'Aumentare la conversione al checkout'],
      solution: "Abbiamo ricostruito il negozio con Next.js, contenuti componibili, cache edge e un checkout Stripe semplificato.",
      features: ['Negozio headless', 'Modifica componibile dei contenuti', 'Checkout ottimizzato', 'Consigli personalizzati'],
      resultLabels: ['Conversione al checkout', 'Largest Contentful Paint', 'Ricavi da mobile'],
    },
    'harvest-pos': {
      short: "Un'app POS offline-first per un gruppo di ristorazione con più sedi.",
      challenge: "Il personale doveva acquisire gli ordini anche senza un Wi-Fi affidabile, mentre i proprietari volevano vedere le vendite di ogni sede in tempo reale.",
      objectives: ['Funzionare completamente offline', 'Sincronizzare tutte le sedi', 'Offrire report in tempo reale'],
      solution: "Abbiamo creato un'app React Native offline-first con sincronizzazione senza conflitti e una dashboard gestionale in tempo reale.",
      features: ['Acquisizione ordini offline', 'Sincronizzazione automatica', 'Report multi-sede in tempo reale', 'Accesso basato sui ruoli'],
      resultLabels: ['Affidabilità degli ordini', 'Tempo di inserimento ordini', 'Sedi attivate'],
    },
    'atlas-crm': {
      short: "Un CRM multi-tenant per società di consulenza, con fatturazione e autorizzazioni granulari.",
      challenge: "Atlas aveva superato i limiti dei CRM generici e cercava una piattaforma adatta al proprio flusso di incarichi, utilizzabile anche dalle società partner.",
      objectives: ['Modellare i flussi degli incarichi', 'Supportare più società', 'Aggiungere la fatturazione in abbonamento'],
      solution: "Abbiamo realizzato un CRM SaaS multi-tenant con pipeline configurabili, accesso per ruoli e abbonamenti Stripe.",
      features: ['Spazi di lavoro multi-tenant', 'Pipeline configurabili', 'Fatturazione in abbonamento', 'Registro di audit'],
      resultLabels: ['Società partner attivate', 'Visibilità della pipeline', 'Configurazione di un nuovo tenant'],
    },
    'meridian-erp': {
      short: "Un ERP personalizzato che unifica inventario, ordini e flotta per un'azienda logistica.",
      challenge: "Le operazioni erano distribuite tra fogli di calcolo e strumenti scollegati, causando errori di inventario e ritardi nelle spedizioni.",
      objectives: ['Unificare i dati operativi', 'Ridurre gli errori di inventario', 'Velocizzare le spedizioni'],
      solution: "Abbiamo creato un ERP modulare per inventario, ordini e flotta, con dashboard in tempo reale e approvazioni.",
      features: ["Gestione dell'inventario", 'Orchestrazione degli ordini', 'Gestione della flotta', 'Flussi di approvazione'],
      resultLabels: ['Differenze di inventario', 'Capacità di spedizione', 'Unica fonte affidabile'],
    },
    'sage-assistant': {
      short: "Un assistente RAG che aiuta il personale clinico a trovare subito risposte nei documenti procedurali.",
      challenge: "Il personale perdeva tempo cercando in lunghi documenti normativi, con il rischio di fornire risposte incoerenti.",
      objectives: ['Basare le risposte sulle procedure', 'Citare le fonti', 'Mantenere privati i dati'],
      solution: "Abbiamo creato un assistente di ricerca sul corpus documentale, con citazioni, controlli di accesso e valutazione delle risposte.",
      features: ['Ricerca RAG', 'Citazioni delle fonti', 'Accesso basato sui ruoli', 'Valutazione delle risposte'],
      resultLabels: ['Tempo per trovare risposte', 'Risposte con fonti', 'Documenti indicizzati'],
    },
    'flowops-automation': {
      short: "Una piattaforma di automazione che riconcilia le transazioni e segnala le anomalie per una fintech.",
      challenge: "La riconciliazione manuale era lenta e soggetta a errori, ritardava la chiusura mensile e nascondeva le anomalie.",
      objectives: ['Automatizzare la riconciliazione', 'Segnalare le anomalie', 'Accelerare la chiusura'],
      solution: "Abbiamo creato una pipeline che acquisisce le transazioni, riconcilia le diverse fonti e presenta le anomalie da verificare.",
      features: ['Acquisizione automatizzata', 'Rilevamento anomalie con regole e ML', 'Coda di verifica', 'Registro di audit'],
      resultLabels: ['Tempo di verifica manuale', 'Chiusura mensile', 'Precisione della corrispondenza'],
    },
  },
}

const STATIC_LABELS: Record<Exclude<Locale, 'en'>, { industries: Record<string, string>; services: Record<string, string>; categories: Record<string, string>; weeks: string }> = {
  fr: {
    industries: { 'Restaurants & Food': 'Restauration et alimentation', 'Professional Services': 'Services professionnels', Logistics: 'Logistique', Healthcare: 'Santé', Finance: 'Finance' },
    services: { 'Web Development': 'Développement web', 'UI/UX Design': 'Design UI/UX', 'Mobile Development': 'Développement mobile', 'Cloud & DevOps': 'Cloud et DevOps', 'SaaS Development': 'Développement SaaS', 'ERP & CRM': 'ERP et CRM', 'AI & Automation': 'IA et automatisation' },
    categories: { Mobile: 'Mobile', Automation: 'Automatisation' },
    weeks: 'semaines',
  },
  it: {
    industries: { 'Restaurants & Food': 'Ristorazione e alimentazione', 'Professional Services': 'Servizi professionali', Logistics: 'Logistica', Healthcare: 'Sanità', Finance: 'Finanza' },
    services: { 'Web Development': 'Sviluppo web', 'UI/UX Design': 'Design UI/UX', 'Mobile Development': 'Sviluppo mobile', 'Cloud & DevOps': 'Cloud e DevOps', 'SaaS Development': 'Sviluppo SaaS', 'ERP & CRM': 'ERP e CRM', 'AI & Automation': 'IA e automazione' },
    categories: { Mobile: 'Mobile', Automation: 'Automazione' },
    weeks: 'settimane',
  },
}

export function localizeStaticProjects(locale: Locale): Project[] {
  if (locale === 'en') return PROJECTS

  const labels = STATIC_LABELS[locale]
  return PROJECTS.map((project) => {
    const copy = STATIC_PROJECT_COPY[locale][project.slug]
    if (!copy) return project

    return {
      ...project,
      industry: labels.industries[project.industry] || project.industry,
      category: labels.categories[project.category] || project.category,
      services: project.services.map((service) => labels.services[service] || service),
      timeline: project.timeline.replace('weeks', labels.weeks),
      ...copy,
      results: project.results.map((result, index) => ({ ...result, label: copy.resultLabels[index] || result.label })),
    }
  })
}

function localizedValue(
  item: RealizedProjectApiItem,
  field: 'name' | 'description',
  locale: Locale,
) {
  const localized = item[`${field}_${locale}` as keyof RealizedProjectApiItem]
  const fallback = item[`${field}_${DEFAULT_LOCALE}` as keyof RealizedProjectApiItem] || item[field]
  return String(localized || fallback || '')
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function isPublicUrl(value: string | null | undefined) {
  return !!value && /^https?:\/\//i.test(value)
}

function isInProgressValue(value: string | null | undefined) {
  return value?.trim().toLowerCase().replace(/[\s_-]+/g, ' ') === 'in progress'
}

function isKnownCategory(category: string): category is ProjectCategory {
  return category in CATEGORY_LABELS
}

function hasDisplayableProjectData(item: RealizedProjectApiItem, locale: Locale) {
  const categories = (item.categories || []).filter(Boolean)
  const technologies = (item.stacks || []).filter(Boolean)

  // Images are optional: projects without one ("In Progress", "Private") show a branded tile instead.
  return Boolean(
    localizedValue(item, 'name', locale).trim()
      && localizedValue(item, 'description', locale).trim()
      && categories.length
      && technologies.length,
  )
}

export function projectCategoryLabel(category: string, locale: Locale) {
  return isKnownCategory(category) ? CATEGORY_LABELS[category][locale] : category
}

export function projectFilterLabel(filter: ApiProjectFilter, locale: Locale) {
  if (filter === 'All') {
    return locale === 'fr' ? 'Tous' : locale === 'it' ? 'Tutti' : 'All'
  }

  return projectCategoryLabel(filter, locale)
}

export function toRealizedProject(item: RealizedProjectApiItem, locale: Locale = DEFAULT_LOCALE): Project {
  const name = localizedValue(item, 'name', locale) || (locale === 'fr' ? 'Projet sans titre' : locale === 'it' ? 'Progetto senza titolo' : 'Untitled project')
  const description = localizedValue(item, 'description', locale)
  const categories = (item.categories || []).filter(Boolean)
  const category = categories[0] || 'Business Platforms'
  const technologies = (item.stacks || []).filter(Boolean)
  const projectUrl = isPublicUrl(item.project_url) ? String(item.project_url) : undefined
  const githubUrl = isPublicUrl(item.github_url) ? String(item.github_url) : undefined
  const images = (item.image_urls || []).filter(isPublicUrl)
  const status: Project['status'] = projectUrl || githubUrl
    ? 'live'
    : [item.project_url, item.github_url, ...(item.image_urls || [])].some(isInProgressValue)
      ? 'in-progress'
      : 'private'
  const availability = status === 'live'
    ? locale === 'fr' ? 'En ligne' : 'Online'
    : status === 'in-progress'
      ? locale === 'fr' ? 'En cours' : locale === 'it' ? 'In corso' : 'In progress'
      : locale === 'fr' ? 'Privé' : locale === 'it' ? 'Privato' : 'Private'

  return {
    slug: `${slugify(item.name_en || item.name || name) || 'project'}-${item.id.slice(0, 8)}`,
    name,
    industry: item.client_name || projectCategoryLabel(category, locale),
    category: projectCategoryLabel(category, locale),
    categoryKey: category,
    categories: categories.map((itemCategory) => projectCategoryLabel(itemCategory, locale)),
    status,
    createdAt: item.project_year ? String(item.project_year) : undefined,
    services: categories.length ? categories.map((itemCategory) => projectCategoryLabel(itemCategory, locale)) : [projectCategoryLabel(category, locale)],
    technologies,
    short: description,
    image: images[0] || '/placeholder.svg',
    images,
    client: item.client_name || (locale === 'fr' ? 'Confidentiel' : locale === 'it' ? 'Riservato' : 'Confidential'),
    timeline: item.project_year ? String(item.project_year) : (locale === 'fr' ? 'Récent' : locale === 'it' ? 'Recente' : 'Recent'),
    challenge: description,
    objectives: [
      locale === 'fr' ? 'Concevoir une expérience claire et performante' : locale === 'it' ? "Progettare un'esperienza chiara e performante" : 'Design a clear, high-performing experience',
      locale === 'fr' ? 'Livrer une solution stable et évolutive' : locale === 'it' ? 'Consegnare una soluzione stabile e scalabile' : 'Deliver a stable, scalable solution',
      locale === 'fr' ? 'Soutenir les objectifs business du client' : locale === 'it' ? 'Supportare gli obiettivi business del cliente' : 'Support the client business goals',
    ],
    solution: description,
    features: technologies.length ? technologies.slice(0, 4) : categories.map((itemCategory) => projectCategoryLabel(itemCategory, locale)),
    results: [
      { value: item.project_year ? String(item.project_year) : (locale === 'fr' ? 'En ligne' : 'Live'), label: locale === 'fr' ? 'Année du projet' : locale === 'it' ? 'Anno del progetto' : 'Project year' },
      { value: technologies.length ? `${technologies.length}+` : (locale === 'fr' ? 'Sur mesure' : locale === 'it' ? 'Personalizzato' : 'Custom'), label: locale === 'fr' ? 'Technologies' : locale === 'it' ? 'Tecnologie' : 'Technologies' },
      { value: availability, label: locale === 'fr' ? 'Disponibilité' : locale === 'it' ? 'Disponibilità' : 'Availability' },
    ],
    projectUrl,
    githubUrl,
  }
}

export function toRealizedProjects(items: RealizedProjectApiItem[], locale: Locale = DEFAULT_LOCALE): Project[] {
  return items
    .filter((item) => hasDisplayableProjectData(item, locale))
    .map((item) => toRealizedProject(item, locale))
}

export async function fetchRealizedProjects(locale: Locale = DEFAULT_LOCALE): Promise<Project[]> {
  try {
    const response = await fetch(REALIZED_PROJECTS_API_URL, { next: { revalidate: 300 } })

    if (!response.ok) {
      throw new Error(`Projects API responded with ${response.status}`)
    }

    const payload = (await response.json()) as RealizedProjectsApiResponse
    const items = Array.isArray(payload.data) ? payload.data : []

    return toRealizedProjects(items, locale)
  } catch {
    return localizeStaticProjects(locale)
  }
}
