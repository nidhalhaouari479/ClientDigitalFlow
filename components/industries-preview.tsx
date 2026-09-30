"use client"

import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '@/lib/data'
import { localizeIndustry } from '@/lib/content-localization'
import { localizePath } from '@/lib/i18n'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { ButtonLink } from '@/components/site-button'
import { useTranslation } from '@/hooks/useTranslation'

export function IndustriesPreview() {
  const { t, locale } = useTranslation()

  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('home.industries.eyebrow', 'Industries')}
            title={t('home.industries.title', 'Digital products for teams with real operational pressure')}
            description={t(
              'home.industries.description',
              'We adapt the same product discipline to commerce, finance, healthcare, logistics and service businesses.',
            )}
          />
          <ButtonLink href={localizePath('/industries', locale)} variant="outline" size="md" className="w-fit shrink-0">
            {t('home.industries.all', 'All Industries')}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.slice(0, 6).map((industry, index) => {
            const localizedIndustry = localizeIndustry(industry, t)
            return (
            <Reveal key={industry.name} delay={index * 50}>
              <div className="group flex h-full gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_45px_-22px_rgba(37,99,235,0.45)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-primary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <industry.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{localizedIndustry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{localizedIndustry.desc}</p>
                </div>
              </div>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
