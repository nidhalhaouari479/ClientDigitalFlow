import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { ProjectImageGallery } from '@/components/project-image-gallery'
import { SectionHeading, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ProcessTimeline } from '@/components/process-timeline'
import { CTASection } from '@/components/cta-section'
import { ButtonLink } from '@/components/site-button'
import { PROCESS } from '@/lib/data'
import { localizeProcess } from '@/lib/content-localization'
import { DEFAULT_LOCALE, localizePath } from '@/lib/i18n'
import { fetchRealizedProjects } from '@/lib/projects'
import { getServerTranslations } from '@/lib/server-i18n'

export async function generateStaticParams() {
  const projects = await fetchRealizedProjects(DEFAULT_LOCALE)
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { locale, t } = await getServerTranslations()
  const projects = await fetchRealizedProjects(locale)
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.name} - ${t('project.detail.caseStudy', 'Case Study')}`, description: project.short }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { locale, t } = await getServerTranslations()
  const projects = await fetchRealizedProjects(locale)
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  const process = localizeProcess(PROCESS.slice(0, 6), t)

  const meta = [
    { label: t('project.detail.client', 'Client'), value: project.client },
    { label: t('project.detail.industry', 'Industry'), value: project.industry },
    { label: t('project.detail.services', 'Services'), value: project.services.join(', ') },
    { label: t('project.detail.timeline', 'Timeline'), value: project.timeline },
  ]

  const caseTeam = [
    { label: 'PO', role: t('project.detail.role.productOwner', 'Product Owner') },
    { label: 'UX', role: t('project.detail.role.designer', 'Designer') },
    { label: 'DEV', role: t('project.detail.role.developer', 'Developer') },
    { label: 'QA', role: t('project.detail.role.tester', 'Tester') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-16 md:py-20">
          <Link
            href={localizePath('/projects', locale)}
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t('project.detail.back', 'Back to Projects')}
          </Link>
          <div className="flex flex-col gap-6">
            <Eyebrow>
              {project.category} · {project.industry}
            </Eyebrow>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
              {project.name}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.short}</p>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container-page -mt-px py-10 md:py-14">
        <Reveal>
          <ProjectImageGallery
            images={project.images}
            fallbackImage={project.image || '/placeholder.svg'}
            projectName={project.name}
          />
        </Reveal>
      </div>

      {/* Meta bar */}
      <section className="container-page pb-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1 bg-card p-6">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{m.label}</dt>
              <dd className="text-sm font-medium text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Challenge & objectives */}
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>{t('project.detail.challenge', 'The Challenge')}</Eyebrow>
            <p className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl">{project.challenge}</p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4 rounded-2xl border border-border bg-secondary/50 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{t('project.detail.objectives', 'Objectives')}</h3>
            <ul className="flex flex-col gap-3">
              {project.objectives.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-base text-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <SectionHeading eyebrow={t('project.detail.solution', 'Our Solution')} title={t('project.detail.solutionTitle', 'How we approached it')} />
            <div className="flex flex-col gap-8">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">{t('project.detail.features', 'Key Features')}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">{t('pages.technologies.eyebrow', 'Technologies')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-page py-16 md:py-20">
        <SectionHeading eyebrow={t('project.detail.results', 'Results & Impact')} title={t('project.detail.resultsTitle', 'Outcomes that mattered')} />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="flex flex-col gap-2 bg-card p-8">
              <span className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">{r.value}</span>
              <span className="text-sm text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Development process */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-16 md:py-20">
          <SectionHeading eyebrow={t('project.detail.process', 'Development Process')} title={t('project.detail.processTitle', 'From discovery to launch')} />
          <div className="mt-12">
            <ProcessTimeline steps={process} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-16 md:py-20">
        <SectionHeading eyebrow={t('project.detail.team', 'The Team')} title={t('project.detail.teamTitle', 'Who worked on it')} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {caseTeam.map((m) => (
            <div key={m.role} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
              >
                {m.label}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{m.role}</p>
                <p className="truncate text-xs text-muted-foreground">{t('project.detail.projectRole', 'Project role')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="container-page pb-10">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{t('project.detail.similarTitle', 'Have a similar project?')}</h3>
            <p className="mt-1 text-muted-foreground">{t('project.detail.similarDescription', "Let's talk about what we can build together.")}</p>
          </div>
          <ButtonLink href={localizePath('/contact', locale)} variant="primary" size="lg" className="shrink-0">
            {t('startProject', 'Start a Project')}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </section>

      <CTASection />
    </>
  )
}
