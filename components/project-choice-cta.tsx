"use client"

import { Bot, Globe, Workflow, ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/site-button'
import Aurora from '@/components/react-bits/Aurora'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

const choices = [
  { icon: Globe, labelKey: 'home.cta.choice.website', fallback: 'Create a website', href: '/services/web-development' },
  { icon: Workflow, labelKey: 'home.cta.choice.app', fallback: 'Build an app', href: '/services/saas-development' },
  { icon: Bot, labelKey: 'home.cta.choice.ai', fallback: 'Automate with AI', href: '/services/ai-automation' },
]

export function ProjectChoiceCTA() {
  const { t, locale } = useTranslation()

  return (
    <section className="container-page py-20 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-14 text-background md:px-12 md:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <Aurora colorStops={['#1d4ed8', '#3b82f6', '#6366f1']} amplitude={0.9} blend={0.55} speed={0.5} />
        </div>
        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/60">
              {t('home.cta.eyebrow', 'Start with the right path')}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('home.cta.title', 'What do you want to build next?')}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-background/70">
              {t('home.cta.description', 'Choose a starting point and we will shape the scope, roadmap and technical plan with you.')}
            </p>
          </div>

          <div className="grid gap-3">
            {choices.map((choice) => (
              <ButtonLink
                key={choice.labelKey}
                href={localizePath(choice.href, locale)}
                size="lg"
                className="group h-auto justify-between border border-background/15 bg-background/5 px-5 py-4 text-background hover:bg-background/10"
              >
                <span className="flex items-center gap-3">
                  <choice.icon className="size-5" />
                  {t(choice.labelKey, choice.fallback)}
                </span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
