"use client"

import { CheckCircle2, XCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { useTranslation } from '@/hooks/useTranslation'

const beforeFallbacks = [
  'Disconnected tools and duplicated data',
  'Manual tasks that slow every team down',
  'Slow websites and fragile user journeys',
]

const afterFallbacks = [
  'One clear platform for operations and reporting',
  'Automations that remove repetitive work',
  'Fast, measurable experiences built to scale',
]

export function BeforeAfter() {
  const { t } = useTranslation()

  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow={t('home.beforeAfter.eyebrow', 'Before / After')}
        title={t('home.beforeAfter.title', 'From scattered operations to one reliable product system')}
        description={t(
          'home.beforeAfter.description',
          'We turn slow workflows, fragmented tools and fragile code into connected platforms that teams can trust every day.',
        )}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-xl border border-border bg-card p-7">
          <div className="mb-6 flex items-center gap-3">
            <XCircle className="size-6 text-muted-foreground" />
            <h3 className="text-xl font-semibold tracking-tight">{t('home.beforeAfter.before.title', 'Before')}</h3>
          </div>
          <ul className="space-y-4">
            {beforeFallbacks.map((fallback, index) => (
              <li key={fallback} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 rounded-full bg-muted-foreground/50" aria-hidden="true" />
                {t(`home.beforeAfter.before.item${index + 1}`, fallback)}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-xl border border-primary/30 bg-accent p-7">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle2 className="size-6 text-primary" />
            <h3 className="text-xl font-semibold tracking-tight">{t('home.beforeAfter.after.title', 'After')}</h3>
          </div>
          <ul className="space-y-4">
            {afterFallbacks.map((fallback, index) => (
              <li key={fallback} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {t(`home.beforeAfter.after.item${index + 1}`, fallback)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
