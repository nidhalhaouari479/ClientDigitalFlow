"use client"

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { TechnologyGrid } from '@/components/technology-grid'
import { CTASection } from '@/components/cta-section'
import { TECHNOLOGIES } from '@/lib/data'
import { useTranslation } from '@/hooks/useTranslation'

export default function TechnologiesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.technologies.eyebrow', 'Technologies')}
        title={t('pages.technologies.title', 'A modern stack, chosen with intent.')}
        description={t('pages.technologies.description', 'We pick technologies for reliability, performance and long-term maintainability: never for hype.')}
      />

      <div className="container-page flex flex-col gap-14 py-20 md:py-28">
        {TECHNOLOGIES.map((group, i) => (
          <Reveal key={group.category} delay={i * 40}>
            <div className="grid gap-6 lg:grid-cols-[0.5fr_1.5fr] lg:gap-12">
              <div className="flex items-start">
                <h2 className="text-xl font-semibold tracking-tight">{t(`tech.${group.category.toLowerCase().replaceAll(' ', '').replaceAll('/', '')}.category`, group.category)}</h2>
              </div>
              <TechnologyGrid items={group.items} className="lg:grid-cols-4" />
            </div>
          </Reveal>
        ))}
      </div>

      <CTASection />
    </>
  )
}
