"use client"

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CTASection } from '@/components/cta-section'
import { PROCESS } from '@/lib/data'
import { localizeProcess } from '@/lib/content-localization'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProcessPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.process.eyebrow', 'Process')}
        title={t('pages.process.title', 'How we take products from idea to impact.')}
        description={t('pages.process.description', 'A disciplined, transparent process that keeps every project on track: from the first conversation to long-term support.')}
      />

      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col">
          {localizeProcess(PROCESS, t).map((step, i) => (
            <Reveal key={step.step} delay={i * 40}>
              <div className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 lg:grid-cols-[0.3fr_0.4fr_1fr] lg:gap-12">
                <span className="text-5xl font-semibold tracking-tight text-primary/20 md:text-6xl">{step.step}</span>
                <h2 className="text-2xl font-semibold tracking-tight">{step.title}</h2>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  )
}
