import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Bot,
  PenTool,
  Cloud,
  LifeBuoy,
  ShoppingCart,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Truck,
  Briefcase,
  Rocket,
  Workflow,
  Boxes,
  Sparkles,
  Settings2,
  Wrench,
} from 'lucide-react'

export const COMPANY = {
  name: 'Client Digital Flow',
  tagline: 'Software Solutions',
  email: 'exemple@gmail.com',
  phone: '+216 29897262',
  phoneItaly: '+39 351 941 0499',
  whatsapp: '+216 29897262',
  linkedin: 'https://linkedin.com',
  address: 'Milano, Italie',
}

export const STATS = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Clients Worldwide' },
  { value: '6', label: 'Core Disciplines' },
  { value: 'End-to-End', label: 'Product Development' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  short: string
  hero: string
  problem: string
  solution: string
  capabilities: string[]
  stack: string[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: Globe,
    short: 'Corporate websites, e-commerce, web platforms and custom applications.',
    hero: 'High-performance web platforms engineered for scale, speed and conversion.',
    problem:
      'Many businesses run on slow, fragmented or outdated web systems that fail to convert visitors and are painful to maintain or extend.',
    solution:
      'We build fast, accessible and maintainable web products on a modern stack — from marketing sites to complex, data-heavy applications — with a focus on measurable business outcomes.',
    capabilities: [
      'Corporate & marketing websites',
      'E-commerce storefronts',
      'Custom web applications',
      'Headless CMS integration',
      'Performance & Core Web Vitals optimization',
      'Accessibility (WCAG) compliance',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vercel'],
    faqs: [
      { q: 'How long does a typical web project take?', a: 'Marketing sites usually take 3–6 weeks; complex web applications typically run 8–16 weeks depending on scope.' },
      { q: 'Do you work with existing codebases?', a: 'Yes. We audit, refactor and extend existing applications as often as we build from scratch.' },
    ],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    icon: Smartphone,
    short: 'Cross-platform and native mobile applications for iOS and Android.',
    hero: 'Native-quality mobile apps that people actually enjoy using.',
    problem:
      'Mobile experiences are often bolted on late, resulting in clunky apps that feel disconnected from the core product and are expensive to maintain across platforms.',
    solution:
      'We design and build mobile apps with shared logic and platform-native feel, shipping to both stores from a single, well-architected codebase.',
    capabilities: [
      'Cross-platform apps (React Native)',
      'Native iOS & Android modules',
      'Offline-first architecture',
      'Push notifications & deep linking',
      'App Store & Play Store deployment',
      'Analytics & crash reporting',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Swift', 'Kotlin', 'Firebase'],
    faqs: [
      { q: 'Native or cross-platform?', a: 'For most products we recommend React Native for speed and cost, dropping to native modules where performance demands it.' },
      { q: 'Do you handle store submissions?', a: 'Yes — we manage the full release process for both the App Store and Google Play.' },
    ],
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    icon: Layers,
    short: 'Multi-tenant SaaS platforms and subscription-based products.',
    hero: 'Production-grade SaaS platforms built to onboard, bill and scale.',
    problem:
      'Turning an idea into a reliable, multi-tenant SaaS involves auth, billing, permissions and infrastructure that are easy to get wrong and costly to redo.',
    solution:
      'We build SaaS products end-to-end — tenancy, roles, subscriptions, dashboards and admin tooling — on architecture designed to grow with your customer base.',
    capabilities: [
      'Multi-tenant architecture',
      'Authentication & role-based access',
      'Subscription & usage billing',
      'Admin & analytics dashboards',
      'Feature flags & entitlements',
      'API & webhook platforms',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    faqs: [
      { q: 'Can you integrate Stripe billing?', a: 'Yes. We implement subscriptions, metered usage, trials and customer portals with secure server-side validation.' },
      { q: 'Do you build the admin side too?', a: 'Absolutely — internal admin and support tooling are part of a complete SaaS build.' },
    ],
  },
  {
    slug: 'erp-crm',
    title: 'ERP & CRM',
    icon: Database,
    short: 'Custom business management systems, CRM and ERP solutions.',
    hero: 'Business systems tailored to how your company actually operates.',
    problem:
      'Off-the-shelf ERP and CRM tools force teams into rigid workflows, leaving gaps that get filled with spreadsheets and manual work.',
    solution:
      'We design custom management systems around your real processes — inventory, sales, operations and reporting — integrated with the tools you already use.',
    capabilities: [
      'Custom CRM & sales pipelines',
      'Inventory & order management',
      'Finance & reporting modules',
      'Role-based workflows & approvals',
      'Third-party integrations',
      'Data migration from legacy systems',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    faqs: [
      { q: 'Can you migrate our existing data?', a: 'Yes. Structured data migration and validation from legacy systems is a standard part of our ERP/CRM projects.' },
      { q: 'Will it integrate with our accounting tools?', a: 'We integrate with common finance, payment and communication platforms via their APIs.' },
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    icon: Bot,
    short: 'AI assistants, agents, RAG systems, chatbots and workflow automation.',
    hero: 'Applied AI that removes busywork and unlocks new capabilities.',
    problem:
      'Teams spend hours on repetitive tasks and struggle to surface knowledge locked in documents, tickets and conversations.',
    solution:
      'We build practical AI systems — assistants, agents, RAG search and automations — grounded in your data and wired into your existing workflows.',
    capabilities: [
      'AI assistants & chatbots',
      'Autonomous AI agents',
      'RAG & semantic search',
      'Document & data extraction',
      'Workflow automation',
      'Evaluation & guardrails',
    ],
    stack: ['OpenAI', 'LangChain', 'Vercel AI SDK', 'Python', 'PostgreSQL', 'pgvector'],
    faqs: [
      { q: 'Is our data used to train models?', a: 'No. We design systems so your proprietary data stays private and is only used to ground responses at query time.' },
      { q: 'How do you keep AI outputs reliable?', a: 'We add retrieval grounding, evaluations and guardrails, and keep humans in the loop for critical actions.' },
    ],
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    icon: PenTool,
    short: 'Research, wireframes, prototypes, design systems and interfaces.',
    hero: 'Interfaces that are clear, confident and effortless to use.',
    problem:
      'Great engineering is wasted on confusing interfaces. Inconsistent design slows teams down and erodes user trust.',
    solution:
      'We run research-led design — from wireframes and prototypes to production-ready design systems — that keeps products consistent and easy to evolve.',
    capabilities: [
      'Product & UX research',
      'Wireframing & prototyping',
      'Interaction & visual design',
      'Design systems & component libraries',
      'Usability testing',
      'Design-to-development handoff',
    ],
    stack: ['Figma', 'Storybook', 'Tailwind CSS', 'Framer', 'React'],
    faqs: [
      { q: 'Do you deliver a design system?', a: 'Yes. For product work we deliver reusable design systems that map directly to code components.' },
      { q: 'Can you redesign an existing product?', a: 'We frequently run focused redesigns backed by usability research and analytics.' },
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    short: 'Deployment, Docker, CI/CD, cloud infrastructure and monitoring.',
    hero: 'Reliable infrastructure and delivery pipelines you can trust.',
    problem:
      'Manual deployments, fragile environments and missing observability turn every release into a risk and every incident into a scramble.',
    solution:
      'We set up infrastructure-as-code, automated pipelines and monitoring so you can ship confidently and recover quickly.',
    capabilities: [
      'CI/CD pipelines',
      'Containerization with Docker',
      'Infrastructure as code',
      'Cloud architecture (AWS)',
      'Monitoring & alerting',
      'Cost & performance optimization',
    ],
    stack: ['Docker', 'GitHub Actions', 'AWS', 'Terraform', 'Kubernetes', 'Grafana'],
    faqs: [
      { q: 'Which cloud providers do you support?', a: 'We work primarily with AWS and Vercel, and can adapt to your existing cloud environment.' },
      { q: 'Can you improve our current pipeline?', a: 'Yes — we audit existing setups and incrementally improve reliability and speed.' },
    ],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance & Support',
    icon: LifeBuoy,
    short: 'Monitoring, bug fixing, optimization and continuous development.',
    hero: 'Long-term partnership that keeps your product healthy and evolving.',
    problem:
      'Products decay without attention — dependencies age, bugs accumulate and small issues become outages.',
    solution:
      'We provide ongoing maintenance and continuous development, treating your product as a living system with proactive monitoring and steady improvement.',
    capabilities: [
      'Proactive monitoring',
      'Bug fixing & hotfixes',
      'Performance optimization',
      'Dependency & security updates',
      'Feature enhancements',
      'SLA-backed support',
    ],
    stack: ['Sentry', 'Grafana', 'GitHub', 'Vercel', 'AWS'],
    faqs: [
      { q: 'Do you offer SLAs?', a: 'Yes. We offer support tiers with defined response and resolution targets.' },
      { q: 'Can you maintain a product you did not build?', a: 'We onboard onto existing codebases after a short discovery and audit phase.' },
    ],
  },
]

export type Project = {
  slug: string
  name: string
  industry: string
  category: string
  categoryKey?: string
  categories?: string[]
  status?: 'live' | 'in-progress' | 'private'
  createdAt?: string
  services: string[]
  technologies: string[]
  short: string
  image: string
  images?: string[]
  client: string
  timeline: string
  challenge: string
  objectives: string[]
  solution: string
  features: string[]
  results: { value: string; label: string }[]
  projectUrl?: string
  githubUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'lumen-commerce',
    name: 'Lumen Commerce',
    industry: 'E-commerce',
    category: 'Web',
    status: 'live',
    createdAt: '2026',
    services: ['Web Development', 'UI/UX Design'],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    short: 'A headless commerce platform that lifted conversion and page speed for a fast-growing retail brand.',
    image: '/projects/lumen-commerce.png',
    client: 'Lumen Retail Group',
    timeline: '14 weeks',
    challenge:
      'Lumen was losing sales to a slow, monolithic storefront that took the team weeks to update and scored poorly on Core Web Vitals.',
    objectives: [
      'Cut page load times in half',
      'Enable non-technical content updates',
      'Increase checkout conversion',
    ],
    solution:
      'We rebuilt the storefront on a headless Next.js architecture with a composable content layer, edge caching and a streamlined checkout backed by Stripe.',
    features: ['Headless storefront', 'Composable content editing', 'Optimized checkout', 'Personalized recommendations'],
    results: [
      { value: '+38%', label: 'Checkout conversion' },
      { value: '2.1s→0.9s', label: 'Largest Contentful Paint' },
      { value: '+24%', label: 'Mobile revenue' },
    ],
    projectUrl: 'https://example.com',
  },
  {
    slug: 'harvest-pos',
    name: 'Harvest POS',
    industry: 'Restaurants & Food',
    category: 'Mobile',
    status: 'private',
    createdAt: '2025',
    services: ['Mobile Development', 'Cloud & DevOps'],
    technologies: ['React Native', 'Expo', 'NestJS', 'PostgreSQL'],
    short: 'An offline-first point-of-sale app for a multi-location restaurant group.',
    image: '/projects/harvest-pos.png',
    client: 'Harvest Hospitality',
    timeline: '11 weeks',
    challenge:
      'Staff needed to take orders reliably even when venue Wi-Fi dropped, while owners wanted real-time sales visibility across locations.',
    objectives: ['Work fully offline', 'Sync across locations', 'Give owners live reporting'],
    solution:
      'We built an offline-first React Native app with conflict-free sync and a live reporting dashboard for management.',
    features: ['Offline order capture', 'Automatic sync', 'Live multi-location reporting', 'Role-based staff access'],
    results: [
      { value: '99.9%', label: 'Order reliability' },
      { value: '-30%', label: 'Order entry time' },
      { value: '4', label: 'Locations rolled out' },
    ],
  },
  {
    slug: 'atlas-crm',
    name: 'Atlas CRM',
    industry: 'Professional Services',
    category: 'SaaS',
    status: 'live',
    createdAt: '2026',
    services: ['SaaS Development', 'UI/UX Design'],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe'],
    short: 'A multi-tenant CRM tailored to consultancies, with billing and granular permissions.',
    image: '/projects/atlas-crm.png',
    client: 'Atlas Advisory',
    timeline: '18 weeks',
    challenge:
      'Atlas outgrew generic CRMs and needed a platform that matched their engagement-based workflow and could be offered to partner firms.',
    objectives: ['Model engagement workflows', 'Support multiple firms', 'Add subscription billing'],
    solution:
      'We delivered a multi-tenant SaaS CRM with configurable pipelines, role-based access and Stripe-powered subscriptions.',
    features: ['Multi-tenant workspaces', 'Configurable pipelines', 'Subscription billing', 'Audit logging'],
    results: [
      { value: '3', label: 'Partner firms onboarded' },
      { value: '+45%', label: 'Pipeline visibility' },
      { value: '<1 day', label: 'New tenant setup' },
    ],
    projectUrl: 'https://example.com',
  },
  {
    slug: 'meridian-erp',
    name: 'Meridian ERP',
    industry: 'Logistics',
    category: 'ERP',
    status: 'in-progress',
    createdAt: '2026',
    services: ['ERP & CRM', 'Cloud & DevOps'],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    short: 'A custom ERP unifying inventory, orders and fleet operations for a logistics firm.',
    image: '/projects/meridian-erp.png',
    client: 'Meridian Freight',
    timeline: '22 weeks',
    challenge:
      'Operations were spread across spreadsheets and disconnected tools, causing stock errors and delayed dispatch.',
    objectives: ['Unify operations data', 'Reduce stock errors', 'Speed up dispatch'],
    solution:
      'We built a modular ERP covering inventory, orders and fleet dispatch with real-time dashboards and approvals.',
    features: ['Inventory management', 'Order orchestration', 'Fleet dispatch', 'Approval workflows'],
    results: [
      { value: '-62%', label: 'Stock discrepancies' },
      { value: '+28%', label: 'Dispatch throughput' },
      { value: '1', label: 'Source of truth' },
    ],
  },
  {
    slug: 'sage-assistant',
    name: 'Sage Assistant',
    industry: 'Healthcare',
    category: 'AI',
    status: 'private',
    createdAt: '2025',
    services: ['AI & Automation', 'Web Development'],
    technologies: ['OpenAI', 'LangChain', 'Next.js', 'pgvector'],
    short: 'A RAG-powered assistant that helps clinical staff find answers in policy documents instantly.',
    image: '/projects/sage-assistant.png',
    client: 'Sage Health Network',
    timeline: '9 weeks',
    challenge:
      'Staff wasted time searching lengthy policy and compliance documents, risking inconsistent answers.',
    objectives: ['Ground answers in policy docs', 'Cite sources', 'Keep data private'],
    solution:
      'We built a retrieval-augmented assistant over their document corpus with citations, access controls and evaluation.',
    features: ['RAG search', 'Source citations', 'Role-based access', 'Answer evaluation'],
    results: [
      { value: '-70%', label: 'Time to find answers' },
      { value: '100%', label: 'Cited responses' },
      { value: '5k+', label: 'Documents indexed' },
    ],
  },
  {
    slug: 'flowops-automation',
    name: 'FlowOps',
    industry: 'Finance',
    category: 'Automation',
    status: 'in-progress',
    createdAt: '2026',
    services: ['AI & Automation', 'Cloud & DevOps'],
    technologies: ['Python', 'LangChain', 'PostgreSQL', 'AWS'],
    short: 'An automation platform that reconciles transactions and flags anomalies for a fintech.',
    image: '/projects/flowops-automation.png',
    client: 'FlowOps Financial',
    timeline: '13 weeks',
    challenge:
      'Manual reconciliation was slow and error-prone, delaying month-end close and hiding anomalies.',
    objectives: ['Automate reconciliation', 'Flag anomalies', 'Accelerate close'],
    solution:
      'We built an automation pipeline that ingests transactions, reconciles across sources and surfaces anomalies for review.',
    features: ['Automated ingestion', 'Rules + ML anomaly detection', 'Review queue', 'Audit trail'],
    results: [
      { value: '-85%', label: 'Manual review time' },
      { value: '3 days→4h', label: 'Month-end close' },
      { value: '99.7%', label: 'Match accuracy' },
    ],
  },
]

export const PROJECT_FILTERS = ['All', 'Web', 'Mobile', 'SaaS', 'ERP', 'AI', 'Automation'] as const

export const WHY_US = [
  { title: 'End-to-End Expertise', desc: 'One team from discovery and design through development, launch and support.', icon: Boxes },
  { title: 'Fast Delivery', desc: 'Tight iterations and modern tooling get working software in front of users sooner.', icon: Rocket },
  { title: 'Scalable Architecture', desc: 'Systems designed to grow with your users, data and team without rewrites.', icon: Layers },
  { title: 'Modern Technology', desc: 'A proven, current stack chosen for reliability, speed and developer velocity.', icon: Sparkles },
  { title: 'Dedicated Team', desc: 'A multidisciplinary team that operates as an extension of your business.', icon: Briefcase },
  { title: 'Long-Term Support', desc: 'Proactive monitoring and continuous development keep products healthy.', icon: LifeBuoy },
]

export const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We align on goals, users and constraints, and define what success looks like.' },
  { step: '02', title: 'Requirements', desc: 'We turn goals into a clear, prioritized scope and technical direction.' },
  { step: '03', title: 'UX/UI Design', desc: 'We design flows, wireframes and interfaces backed by a reusable design system.' },
  { step: '04', title: 'Architecture', desc: 'We design data models, APIs and infrastructure built to scale.' },
  { step: '05', title: 'Development', desc: 'We build in tight iterations with continuous review and integration.' },
  { step: '06', title: 'QA & Testing', desc: 'We test functionality, performance, accessibility and security.' },
  { step: '07', title: 'Deployment', desc: 'We ship with automated pipelines, monitoring and rollback safety.' },
  { step: '08', title: 'Maintenance', desc: 'We monitor, optimize and continuously improve the live product.' },
]

export const HOME_PROCESS = PROCESS.slice(0, 6).map((p, i) => ({
  ...p,
  title: ['Discovery', 'Strategy', 'Design', 'Development', 'Testing', 'Launch & Support'][i],
}))

export type TechCategory = { category: string; items: string[] }

export const TECHNOLOGIES: TechCategory[] = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'NestJS', 'Python', 'Django'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'Swift', 'Kotlin'] },
  { category: 'Database', items: ['PostgreSQL', 'Supabase', 'Redis', 'Prisma'] },
  { category: 'AI / Machine Learning', items: ['OpenAI', 'LangChain', 'Vercel AI SDK', 'pgvector'] },
  { category: 'Cloud', items: ['AWS', 'Vercel', 'Cloudflare', 'Terraform'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'Kubernetes', 'Grafana'] },
  { category: 'Design', items: ['Figma', 'Storybook', 'Framer'] },
]

export const HOME_TECH = [
  'Next.js', 'React', 'Node.js', 'NestJS', 'Python', 'Django',
  'PostgreSQL', 'Supabase', 'Docker', 'AWS', 'OpenAI', 'LangChain',
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  project: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Client Digital Flow felt like part of our team from day one. They rebuilt our storefront and the conversion lift paid for the project within a quarter.',
    name: 'Elena Marsh',
    role: 'VP of Digital',
    company: 'Lumen Retail Group',
    project: 'Lumen Commerce',
  },
  {
    quote:
      'The offline-first POS just works, even on a bad night for our Wi-Fi. Rollout across four venues was smoother than anything we expected.',
    name: 'David Okafor',
    role: 'Operations Director',
    company: 'Harvest Hospitality',
    project: 'Harvest POS',
  },
  {
    quote:
      'They understood our engagement workflow better than the off-the-shelf tools ever did. The multi-tenant CRM is now core to how we run the firm.',
    name: 'Priya Nair',
    role: 'Managing Partner',
    company: 'Atlas Advisory',
    project: 'Atlas CRM',
  },
  {
    quote:
      'The AI assistant cut the time our staff spend searching policies dramatically, and every answer is cited. Adoption was immediate.',
    name: 'Dr. Marcus Feld',
    role: 'Chief Medical Officer',
    company: 'Sage Health Network',
    project: 'Sage Assistant',
  },
  {
    quote:
      'Month-end close went from days to hours. The automation platform is reliable, auditable and genuinely changed how the finance team works.',
    name: 'Rachel Kim',
    role: 'Head of Finance',
    company: 'FlowOps Financial',
    project: 'FlowOps',
  },
]

export type Industry = { name: string; icon: LucideIcon; desc: string }

export const INDUSTRIES: Industry[] = [
  { name: 'E-commerce', icon: ShoppingCart, desc: 'Headless storefronts, checkout optimization and inventory systems that scale with demand.' },
  { name: 'Restaurants & Food', icon: UtensilsCrossed, desc: 'POS, ordering, reservations and multi-location operations tooling.' },
  { name: 'Education', icon: GraduationCap, desc: 'Learning platforms, student portals and content management for institutions.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Compliant portals, scheduling and AI assistants grounded in your policies.' },
  { name: 'Finance', icon: Landmark, desc: 'Dashboards, reconciliation automation and secure data platforms.' },
  { name: 'Real Estate', icon: Building2, desc: 'Listing platforms, CRM and transaction management systems.' },
  { name: 'Logistics', icon: Truck, desc: 'ERP, fleet dispatch and inventory systems for complex operations.' },
  { name: 'Professional Services', icon: Briefcase, desc: 'CRM, client portals and internal tools tailored to your workflow.' },
  { name: 'Startups', icon: Rocket, desc: 'MVPs, SaaS platforms and rapid iteration from idea to launch.' },
]

export type Solution = { title: string; icon: LucideIcon; desc: string; points: string[] }

export const SOLUTIONS: Solution[] = [
  {
    title: 'Business Automation',
    icon: Workflow,
    desc: 'Eliminate repetitive manual work by automating workflows across your tools and teams.',
    points: ['Workflow automation', 'Data pipelines', 'Document processing', 'Integrations'],
  },
  {
    title: 'Custom Software',
    icon: Settings2,
    desc: 'Software shaped to your exact processes instead of forcing your team into rigid tools.',
    points: ['Bespoke applications', 'Legacy modernization', 'API platforms', 'Internal systems'],
  },
  {
    title: 'Digital Transformation',
    icon: Sparkles,
    desc: 'Modernize systems, data and experiences to move faster and serve customers better.',
    points: ['Platform modernization', 'Cloud migration', 'Process redesign', 'Data strategy'],
  },
  {
    title: 'AI Solutions',
    icon: Bot,
    desc: 'Apply AI where it creates real leverage — assistants, agents and intelligent automation.',
    points: ['AI assistants', 'RAG & search', 'Autonomous agents', 'Predictive insights'],
  },
  {
    title: 'Business Management Systems',
    icon: Database,
    desc: 'Unify operations, sales and finance in systems built around how you actually work.',
    points: ['Custom ERP', 'Custom CRM', 'Reporting & BI', 'Approvals & workflows'],
  },
  {
    title: 'Internal Tools',
    icon: Wrench,
    desc: 'Give teams fast, focused tools that replace fragile spreadsheets and manual steps.',
    points: ['Admin dashboards', 'Ops tooling', 'Data entry apps', 'Automation panels'],
  },
]

export type TeamMember = {
  name: string
  role: string
  category: string
  desc: string
  image: string
}

export const TEAM: TeamMember[] = [
  { name: 'Marcoopaga', role: 'Founder & Product Lead', category: 'Project Managers', desc: 'Leads the studio vision, client strategy and product direction from Milano.', image: '/founder-marcoopaga.jpg' },
  { name: 'Maya Chen', role: 'Full-Stack Developer', category: 'Developers', desc: 'Builds resilient backends and APIs that scale under real-world load.', image: '/team/maya-chen.png' },
  { name: 'Jordan Blake', role: 'AI Engineer', category: 'AI Engineers', desc: 'Designs RAG systems and AI agents grounded in reliable, evaluated data.', image: '/team/jordan-blake.png' },
  { name: 'Sofia Duarte', role: 'AI Engineer', category: 'AI Engineers', desc: 'Focuses on applied machine learning and automation pipelines.', image: '/team/sofia-duarte.png' },
  { name: 'Liam Novak', role: 'Mobile Developer', category: 'Developers', desc: 'Ships polished cross-platform mobile apps with native performance.', image: '/team/liam-novak.png' },
  { name: 'Nora Haddad', role: 'UI/UX Designer', category: 'Designers', desc: 'Turns complex problems into clear, confident product interfaces.', image: '/team/nora-haddad.png' },
  { name: 'Theo Park', role: 'Product Designer', category: 'Designers', desc: 'Owns design systems and research-led interaction design.', image: '/team/theo-park.png' },
  { name: 'Ines Moreau', role: 'QA Engineer', category: 'QA Engineers', desc: 'Guards quality across functionality, performance and accessibility.', image: '/team/ines-moreau.png' },
  { name: 'Omar Farouk', role: 'Project Manager', category: 'Project Managers', desc: 'Keeps delivery on track and communication clear from kickoff to launch.', image: '/team/omar-farouk.png' },
]

export const TEAM_CATEGORIES = ['Developers', 'AI Engineers', 'Designers', 'QA Engineers', 'Project Managers']

export const VALUES = [
  { title: 'Craft', desc: 'We care about the details others skip — the difference between working and premium.' },
  { title: 'Ownership', desc: 'We treat your product as our own, from the first commit to long-term support.' },
  { title: 'Clarity', desc: 'We communicate simply and honestly, without jargon or surprises.' },
  { title: 'Momentum', desc: 'We ship steadily, learning from real usage rather than chasing perfection.' },
]

export type Job = {
  slug: string
  title: string
  location: string
  type: string
  team: string
  skills: string[]
}

export const JOBS: Job[] = [
  { slug: 'senior-fullstack', title: 'Senior Full-Stack Developer', location: 'Remote', type: 'Full-time', team: 'Engineering', skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'] },
  { slug: 'ai-engineer', title: 'AI Engineer', location: 'Remote', type: 'Full-time', team: 'AI', skills: ['Python', 'LangChain', 'RAG', 'LLMs'] },
  { slug: 'mobile-developer', title: 'Mobile Developer', location: 'Hybrid - Milano', type: 'Full-time', team: 'Engineering', skills: ['React Native', 'Expo', 'TypeScript'] },
  { slug: 'product-designer', title: 'Product Designer', location: 'Remote', type: 'Full-time', team: 'Design', skills: ['Figma', 'Design Systems', 'Prototyping'] },
  { slug: 'qa-engineer', title: 'QA Engineer', location: 'Remote', type: 'Contract', team: 'Quality', skills: ['Automation', 'Playwright', 'Accessibility'] },
]

export const BENEFITS = [
  'Remote-first with flexible hours',
  'Competitive salary & equity',
  'Learning & conference budget',
  'Top-tier hardware',
  'Health & wellness support',
  'Meaningful, varied projects',
]

export type BlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  author: string
  image: string
  featured?: boolean
}

export const BLOG_CATEGORIES = ['AI', 'Software Development', 'Automation', 'SaaS', 'Business', 'Digital Transformation']

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'rag-that-actually-works', title: 'Building RAG Systems That Actually Work in Production', category: 'AI', excerpt: 'Retrieval-augmented generation is easy to demo and hard to productionize. Here is how we make it reliable.', date: 'Sep 2, 2026', readTime: '8 min', author: 'Jordan Blake', image: '/blog/rag-production.png', featured: true },
  { slug: 'saas-architecture-checklist', title: 'The Multi-Tenant SaaS Architecture Checklist', category: 'SaaS', excerpt: 'The decisions that are cheap to make early and expensive to change later.', date: 'Aug 21, 2026', readTime: '6 min', author: 'Maya Chen', image: '/blog/saas-architecture.png' },
  { slug: 'automation-roi', title: 'How to Measure the ROI of Business Automation', category: 'Automation', excerpt: 'A practical framework for deciding what to automate first.', date: 'Aug 9, 2026', readTime: '5 min', author: 'Omar Farouk', image: '/blog/automation-roi.png' },
  { slug: 'core-web-vitals', title: 'Core Web Vitals: A Field Guide for Product Teams', category: 'Software Development', excerpt: 'What the metrics mean and the changes that actually move them.', date: 'Jul 28, 2026', readTime: '7 min', author: 'Marcoopaga', image: '/blog/web-vitals.png' },
  { slug: 'design-systems-that-scale', title: 'Design Systems That Scale With Your Team', category: 'Digital Transformation', excerpt: 'Bridging the gap between design intent and shipped code.', date: 'Jul 14, 2026', readTime: '6 min', author: 'Theo Park', image: '/blog/design-systems.png' },
  { slug: 'ai-agents-vs-chatbots', title: 'AI Agents vs. Chatbots: Choosing the Right Tool', category: 'AI', excerpt: 'When autonomy helps, when it hurts, and how to keep humans in the loop.', date: 'Jun 30, 2026', readTime: '9 min', author: 'Sofia Duarte', image: '/blog/agents-chatbots.png' },
]

export const FAQ_CATEGORIES = [
  {
    category: 'General',
    items: [
      { q: 'What kind of companies do you work with?', a: 'We work with startups and established businesses across e-commerce, healthcare, finance, logistics and professional services.' },
      { q: 'Where is your team based?', a: 'We are based in Milano, Italy, and collaborate with clients internationally.' },
    ],
  },
  {
    category: 'Services',
    items: [
      { q: 'Do you offer end-to-end development?', a: 'Yes. We cover discovery, design, development, testing, deployment and long-term support under one roof.' },
      { q: 'Can you join an existing project?', a: 'We regularly onboard onto existing codebases after a short discovery and audit phase.' },
    ],
  },
  {
    category: 'Development',
    items: [
      { q: 'What technologies do you use?', a: 'Our core stack includes Next.js, React, Node.js, NestJS, Python, PostgreSQL, Docker and AWS.' },
      { q: 'How do you ensure code quality?', a: 'We use code review, automated testing, CI/CD and continuous QA across functionality, performance and security.' },
    ],
  },
  {
    category: 'Pricing',
    items: [
      { q: 'How do you price projects?', a: 'Most projects are fixed-scope with milestone-based billing; ongoing work can be retainer-based.' },
      { q: 'Do you offer support retainers?', a: 'Yes, we offer maintenance and support tiers with defined SLAs.' },
    ],
  },
  {
    category: 'Timeline',
    items: [
      { q: 'How long does a project take?', a: 'Marketing sites take 3–6 weeks; complex platforms typically run 3–5 months depending on scope.' },
      { q: 'How quickly can you start?', a: 'We can usually begin discovery within one to two weeks of signing.' },
    ],
  },
  {
    category: 'Maintenance',
    items: [
      { q: 'What does maintenance include?', a: 'Proactive monitoring, bug fixes, dependency and security updates, performance work and continuous development.' },
      { q: 'Can you maintain apps you did not build?', a: 'Yes, after an initial audit and onboarding period.' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { q: 'Is my data used to train AI models?', a: 'No. We design AI systems so your data stays private and is only used to ground responses at query time.' },
      { q: 'How do you keep AI reliable?', a: 'We combine retrieval grounding, evaluations, guardrails and human-in-the-loop review for critical actions.' },
    ],
  },
]

export const PARTNERS = [
  'Vercel', 'AWS', 'OpenAI', 'Supabase', 'Stripe', 'Docker',
  'GitHub', 'PostgreSQL', 'Cloudflare', 'Figma', 'LangChain', 'NestJS',
]
