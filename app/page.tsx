'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HomeHero } from '@/components/home-hero'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ServiceCard } from '@/components/service-card'
import { ProjectCard, ProjectCardSkeleton } from '@/components/project-card'
import { HomeTrustBar } from '@/components/home-trust-bar'
import { ProcessTimeline } from '@/components/process-timeline'
import { TechnologyGrid } from '@/components/technology-grid'
import { TestimonialCard } from '@/components/testimonial-card'
import { FounderMessage } from '@/components/founder-message'
import { BeforeAfter } from '@/components/before-after'
import { HomeFAQ } from '@/components/home-faq'
import { IndustriesPreview } from '@/components/industries-preview'
import { ProjectChoiceCTA } from '@/components/project-choice-cta'
import { TechMarquee } from '@/components/tech-marquee'
import { ButtonLink } from '@/components/site-button'
import { SERVICES, WHY_US, HOME_PROCESS, HOME_TECH, TESTIMONIALS } from '@/lib/data'
import { localizeProcess, localizeService, localizeTestimonial } from '@/lib/content-localization'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'
import { useProjects } from '@/hooks/useProjects'

export default function HomePage() {
  const { t, locale } = useTranslation()
  const { projects, loading } = useProjects(locale)

  return (
    <>
      <HomeHero />
      <HomeTrustBar />

      {/* Services preview */}
      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('home.services.eyebrow', 'What We Do')}
            title={t('home.services.title', 'Technology services built around your business')}
            description={t('home.services.description', 'Six core disciplines, delivered end-to-end by one multidisciplinary team.')}
          />
          <ButtonLink href={localizePath('/services', locale)} variant="outline" size="md" className="w-fit shrink-0">
            {t('home.services.all', 'All Services')}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service, i) => {
            const localizedService = localizeService(service, t)
            return (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard
                  title={localizedService.title}
                  description={localizedService.short}
                  icon={service.icon}
                  href={localizePath(`/services/${service.slug}`, locale)}
                  actionLabel={t('learnMore', 'Learn more')}
                />
              </Reveal>
            )
          })}
        </div>
      </section>

      <TechMarquee />

      {/* Featured projects */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t('home.projects.eyebrow', 'Selected Work')}
              title={t('home.projects.title', 'Featured projects')}
              description={t('home.projects.description', 'A selection of products we have designed, built and scaled with our clients.')}
            />
            <ButtonLink href={localizePath('/projects', locale)} variant="outline" size="md" className="w-fit shrink-0">
              {t('home.projects.all', 'View All Projects')}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {loading
              ? Array.from({ length: 4 }, (_, index) => <ProjectCardSkeleton key={index} />)
              : projects.slice(0, 6).map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 2) * 80} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* Why choose us */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow={t('home.why.eyebrow', 'Why Client Digital Flow')}
          title={t('home.why.title', 'A partner built for the long term')}
          description={t('home.why.description', 'We combine senior expertise, modern technology and a genuine sense of ownership.')}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-7">
                <span className="grid size-11 place-items-center rounded-lg bg-accent text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{t(`why.${i + 1}.title`, item.title)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`why.${i + 1}.desc`, item.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FounderMessage />

      <IndustriesPreview />

      {/* Development process */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t('home.process.eyebrow', 'How We Work')}
            title={t('home.process.title', 'A clear, proven process')}
            description={t('home.process.description', 'From first conversation to launch and beyond, every project follows the same disciplined path.')}
          />
          <div className="mt-14">
            <ProcessTimeline
              steps={localizeProcess(HOME_PROCESS, t).map((step) => ({
                ...step,
                title: t(`homeProcess.${step.step}.title`, step.title),
              }))}
            />
          </div>
          <div className="mt-12">
            <ButtonLink href={localizePath('/process', locale)} variant="primary" size="md">
              {t('home.process.full', 'See Our Full Process')}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow={t('home.tech.eyebrow', 'Our Stack')}
          title={t('home.tech.title', 'Modern, proven technologies')}
          description={t('home.tech.description', 'We choose tools for reliability, performance and long-term maintainability.')}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <TechnologyGrid items={HOME_TECH} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href={localizePath('/technologies', locale)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {t('home.tech.full', 'Explore our full technology stack')}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t('home.testimonials.eyebrow', 'Client Stories')}
            title={t('home.testimonials.title', 'Trusted by teams that ship')}
            description={t('home.testimonials.description', 'What our clients say about working with us.')}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 80}>
                <TestimonialCard testimonial={localizeTestimonial(testimonial, i, t)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeFAQ />

      <ProjectChoiceCTA />
    </>
  )
}
