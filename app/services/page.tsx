"use client"

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CTASection } from '@/components/cta-section'
import { SERVICES } from '@/lib/data'
import { localizeService } from '@/lib/content-localization'
import { localizePath } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

export default function ServicesPage() {
  const { t, locale } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.services.eyebrow', 'Services')}
        title={t('pages.services.title', 'Technology services built around your business.')}
        description={t('pages.services.description', 'One multidisciplinary team covering the full lifecycle of a digital product: strategy, design, engineering, deployment and long-term support.')}
      />

      <div className="container-page flex flex-col gap-20 py-20 md:gap-28 md:py-28">
        {SERVICES.map((service, i) => {
          const localizedService = localizeService(service, t)

          return (
            <Reveal key={service.slug}>
              <div
                id={service.slug}
                className={cn(
                  'grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16',
                  i % 2 === 1 && 'lg:[&>div:first-child]:order-2',
                )}
              >
                <div className="flex flex-col gap-6">
                  <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary">
                    <service.icon className="size-6" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{localizedService.title}</h2>
                    <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{localizedService.hero}</p>
                  </div>
                  <Link
                    href={localizePath(`/services/${service.slug}`, locale)}
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {t('learnMore', 'Learn more')}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t('pages.services.capabilities', 'Capabilities')}
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {localizedService.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <CTASection />
    </>
  )
}
