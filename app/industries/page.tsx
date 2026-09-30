"use client"

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CTASection } from '@/components/cta-section'
import { INDUSTRIES } from '@/lib/data'
import { localizeIndustry } from '@/lib/content-localization'
import { useTranslation } from '@/hooks/useTranslation'

export default function IndustriesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.industries.eyebrow', 'Industries')}
        title={t('pages.industries.title', 'Depth across the industries we serve.')}
        description={t('pages.industries.description', 'We bring domain understanding to every engagement, so the software we build fits the way your industry actually works.')}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const localizedIndustry = localizeIndustry(industry, t)
            return (
            <Reveal key={industry.name} delay={i * 40}>
              <div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_45px_-24px_rgba(37,99,235,0.45)]">
                <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <industry.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{localizedIndustry.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{localizedIndustry.desc}</p>
              </div>
            </Reveal>
            )
          })}
        </div>
      </section>

      <CTASection
        title={t('pages.industries.ctaTitle', 'Not sure where your industry fits?')}
        description={t('pages.industries.ctaDescription', 'Tell us about your business and we will map the right solution.')}
      />
    </>
  )
}
