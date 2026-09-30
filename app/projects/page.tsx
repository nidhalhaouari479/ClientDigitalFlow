"use client"

import { PageHero } from '@/components/page-hero'
import { ProjectsGrid } from '@/components/projects-grid'
import { CTASection } from '@/components/cta-section'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.projects.eyebrow', 'Projects')}
        title={t('pages.projects.title', 'Work we are proud of.')}
        description={t('pages.projects.description', 'A selection of digital products we have designed, engineered and scaled across industries.')}
      />
      <section className="container-page py-16 md:py-24">
        <ProjectsGrid />
      </section>
      <CTASection title={t('pages.projects.ctaTitle', 'Have a project in mind?')} />
    </>
  )
}
