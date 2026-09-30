"use client"

import { ArrowRight, CheckCircle2, CircuitBoard, Sparkles, Zap } from 'lucide-react'
import { ButtonLink } from '@/components/site-button'
import { AnimatedCounter } from '@/components/animated-counter'
import { STATS } from '@/lib/data'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

const proofKeys = [
  { key: 'heroProof.discovery', fallback: 'Strategy-first delivery' },
  { key: 'heroProof.ai', fallback: 'AI-ready architecture' },
  { key: 'heroProof.launch', fallback: 'Launch and support' },
]

const pipeline = [
  { key: 'heroVisual.step1', fallback: 'Discovery', value: '94%' },
  { key: 'heroVisual.step2', fallback: 'Design system', value: '82%' },
  { key: 'heroVisual.step3', fallback: 'Build sprint', value: '71%' },
]

export function HomeHero() {
  const { t, locale } = useTranslation()

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="container-page relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="flex flex-col gap-7 animate-slide-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="grid size-5 place-items-center rounded-full bg-accent text-primary" aria-hidden="true">
                <Sparkles className="size-3" />
              </span>
              {t('heroBadge', 'Software Solutions')}
            </span>

            <div className="flex flex-col gap-5">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[0.98]">
                {t('heroTitle', 'Build smarter software. Launch faster with AI.')}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t(
                  'heroDescription',
                  'Client Digital Flow designs and engineers web platforms, SaaS products and AI automations that replace scattered workflows with systems your team can trust.',
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizePath('/contact', locale)} variant="primary" size="lg">
                {t('startProject', 'Start a Project')}
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={localizePath('/projects', locale)} variant="outline" size="lg">
                {t('exploreWork', 'Explore Our Work')}
              </ButtonLink>
            </div>

            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {proofKeys.map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span>{t(item.key, item.fallback)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="hero-panel-motion absolute -inset-4 rounded-3xl border border-primary/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)]">
              <div className="flex items-center justify-between border-b border-border bg-secondary/70 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ef4444]" />
                  <span className="size-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="size-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{t('heroVisual.label', 'Product command center')}</span>
              </div>

              <div className="grid gap-5 p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          {t('heroVisual.pipeline', 'Delivery pipeline')}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold tracking-tight">{t('heroVisual.title', 'AI SaaS rollout')}</h2>
                      </div>
                      <span className="grid size-10 place-items-center rounded-lg bg-accent text-primary">
                        <CircuitBoard className="size-5" />
                      </span>
                    </div>

                    <div className="space-y-4">
                      {pipeline.map((item, index) => (
                        <div key={item.key}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-medium">{t(item.key, item.fallback)}</span>
                            <span className="text-muted-foreground">{item.value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-secondary">
                            <span
                              className="hero-progress block h-full rounded-full bg-primary"
                              style={{ width: item.value, animationDelay: `${index * 140}ms` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-xl border border-border bg-foreground p-5 text-background">
                      <Zap className="mb-5 size-5 text-background/70" />
                      <p className="text-3xl font-semibold tracking-tight">42%</p>
                      <p className="mt-2 text-sm leading-relaxed text-background/70">
                        {t('heroVisual.metric', 'less manual work after automation')}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-5">
                      <p className="text-sm font-medium text-muted-foreground">{t('heroVisual.status', 'Current focus')}</p>
                      <p className="mt-2 text-lg font-semibold tracking-tight">{t('heroVisual.focus', 'Workflow automation')}</p>
                    </div>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex min-h-24 flex-col justify-center gap-1 bg-background p-4">
                      <dt className="order-2 text-xs text-muted-foreground">
                        {t(`stats.${stat.label.toLowerCase().replaceAll(' ', '')}`, stat.label)}
                      </dt>
                      <dd className="order-1 text-xl font-semibold tracking-tight md:text-2xl">
                        <AnimatedCounter value={stat.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
