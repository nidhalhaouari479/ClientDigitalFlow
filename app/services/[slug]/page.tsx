import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ProcessTimeline } from '@/components/process-timeline'
import { TechnologyGrid } from '@/components/technology-grid'
import { ProjectCard } from '@/components/project-card'
import { FAQAccordion } from '@/components/faq-accordion'
import { CTASection } from '@/components/cta-section'
import { ButtonLink } from '@/components/site-button'
import { SERVICES, PROCESS } from '@/lib/data'
import { localizeProcess, localizeService } from '@/lib/content-localization'
import { localizePath } from '@/lib/i18n'
import { fetchRealizedProjects } from '@/lib/projects'
import { getServerTranslations } from '@/lib/server-i18n'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const sourceService = SERVICES.find((s) => s.slug === slug)
  if (!sourceService) return {}
  const { t } = await getServerTranslations()
  const service = localizeService(sourceService, t)
  return { title: service.title, description: service.hero }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const sourceService = SERVICES.find((s) => s.slug === slug)
  if (!sourceService) notFound()
  const { locale, t } = await getServerTranslations()
  const service = localizeService(sourceService, t)
  const process = localizeProcess(PROCESS.slice(0, 6), t)

  const projects = await fetchRealizedProjects(locale)
  const related = projects.filter((p) => p.services.includes(sourceService.title)).slice(0, 2)
  const fallback = projects.slice(0, 2)
  const relatedProjects = related.length ? related : fallback

  return (
    <>
      <PageHero eyebrow={t('pages.services.eyebrow', 'Services')} title={service.title} description={service.hero}>
        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href={localizePath('/contact', locale)} variant="primary" size="lg">
            {t('startProject', 'Start a Project')}
            <ArrowRight className="size-4" />
          </ButtonLink>
          <Link
            href={localizePath('/services', locale)}
            className="inline-flex items-center gap-1.5 self-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t('serviceDetail.allServices', 'All Services')}
          </Link>
        </div>
      </PageHero>

      {/* Problem & Solution */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-secondary/50 p-8 md:p-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{t('serviceDetail.problem', 'The Problem')}</span>
            <p className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl">{service.problem}</p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-accent/50 p-8 md:p-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">{t('serviceDetail.solution', 'Our Solution')}</span>
            <p className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl">{service.solution}</p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow={t('pages.services.capabilities', 'Capabilities')} title={t('serviceDetail.capabilitiesTitle', 'What we deliver')} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 40}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-base font-medium text-foreground">{cap}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow={t('serviceDetail.stackEyebrow', 'Technology Stack')} title={t('serviceDetail.stackTitle', 'Tools we build with')} />
        <div className="mt-12">
          <TechnologyGrid items={service.stack} />
        </div>
      </section>

      {/* Development process */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t('pages.process.eyebrow', 'Process')}
            title={t('serviceDetail.processTitle', 'How we deliver')}
            description={t('serviceDetail.processDescription', 'A disciplined path from discovery to long-term support.')}
          />
          <div className="mt-14">
            <ProcessTimeline steps={process} />
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow={t('serviceDetail.relatedEyebrow', 'Related Work')} title={t('serviceDetail.relatedTitle', 'Projects in this space')} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {relatedProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="FAQ" title={t('serviceDetail.faqTitle', 'Common questions')} />
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <CTASection title={t('serviceDetail.ctaTitle', 'Ready to get started?')} primaryLabel={t('startProject', 'Start a Project')} />
    </>
  )
}
