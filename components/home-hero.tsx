"use client"

import { useRef } from 'react'
import { ArrowRight, CheckCircle2, CircuitBoard, Zap } from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { HeroBackdrop } from '@/components/hero-backdrop'
import { ButtonLink } from '@/components/site-button'
import { StarButtonLink } from '@/components/star-button-link'
import SplitText from '@/components/react-bits/SplitText'
import { STATS } from '@/lib/data'
import { gsap, useGSAP } from '@/lib/gsap'
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
  const panelRef = useRef<HTMLDivElement>(null)

  // The product panel starts slightly tilted back and straightens as it scrolls into view.
  useGSAP(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        panelRef.current,
        { rotationX: 14, scale: 0.96, transformPerspective: 1400, transformOrigin: 'center top' },
        {
          rotationX: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: panelRef.current, start: 'top bottom', end: 'top 35%', scrub: true },
        },
      )
    })
  })

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <HeroBackdrop />

      <div className="container-page flex flex-col items-center pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-primary">
          {t('heroBadge', 'Software Solutions')}
        </span>

        <SplitText
          tag="h1"
          text={t('heroTitle', 'Build smarter software. Launch faster with AI.')}
          splitType="words"
          delay={55}
          duration={0.8}
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
          className="headline-accent-3 mt-6 max-w-4xl pb-[0.08em] text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl md:leading-[1.02]"
        />

        <p className="animate-slide-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:350ms] md:text-xl">
          {t(
            'heroDescription',
            'Client Digital Flow designs and engineers web platforms, SaaS products and AI automations that replace scattered workflows with systems your team can trust.',
          )}
        </p>

        <div className="animate-slide-up mt-9 flex w-full flex-col justify-center gap-3 [animation-delay:500ms] sm:w-auto sm:flex-row">
          <StarButtonLink href={localizePath('/contact', locale)}>
            {t('startProject', 'Start a Project')}
            <ArrowRight className="size-4" />
          </StarButtonLink>
          <ButtonLink href={localizePath('/projects', locale)} variant="outline" size="lg">
            {t('exploreWork', 'Explore Our Work')}
          </ButtonLink>
        </div>

        <ul className="animate-slide-up mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground [animation-delay:650ms]">
          {proofKeys.map((item) => (
            <li key={item.key} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              {t(item.key, item.fallback)}
            </li>
          ))}
        </ul>

        <div
          ref={panelRef}
          className="mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_40px_100px_-50px_rgba(15,23,42,0.45)] md:mt-20"
        >
          <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#ef4444]" />
              <span className="size-2.5 rounded-full bg-[#f59e0b]" />
              <span className="size-2.5 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{t('heroVisual.label', 'Product command center')}</span>
          </div>

          <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {t('heroVisual.pipeline', 'Delivery pipeline')}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">{t('heroVisual.title', 'AI SaaS rollout')}</h2>
                </div>
                <span className="grid size-10 place-items-center rounded-lg bg-accent text-primary">
                  <CircuitBoard className="size-5" />
                </span>
              </div>
              <div className="space-y-5">
                {pipeline.map((item, index) => (
                  <div key={item.key}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium">{t(item.key, item.fallback)}</span>
                      <span className="text-muted-foreground">{item.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="hero-progress block h-full rounded-full bg-primary"
                        style={{ width: item.value, animationDelay: `${600 + index * 140}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                <Zap className="mb-5 size-5 text-primary-foreground/80" />
                <p className="text-4xl font-semibold tracking-tight">42%</p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  {t('heroVisual.metric', 'less manual work after automation')}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-sm text-muted-foreground">{t('heroVisual.status', 'Current focus')}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight">{t('heroVisual.focus', 'Workflow automation')}</p>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:col-span-2 md:grid-cols-4">
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
    </section>
  )
}
