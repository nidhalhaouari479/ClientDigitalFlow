"use client"

import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/site-button'
import { Reveal } from '@/components/reveal'
import { StarButtonLink } from '@/components/star-button-link'
import Aurora from '@/components/react-bits/Aurora'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref = '/contact',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  const { t, locale } = useTranslation()
  const resolvedTitle = title ?? t('ctaTitle', "Have an idea? Let's build it.")
  const resolvedDescription = description ?? t('ctaDescription', 'Tell us about your project and we will get back to you within one business day with next steps.')
  const resolvedPrimaryLabel = primaryLabel ?? t('startProject', 'Start a Project')
  return (
    <section className="container-page py-20 md:py-24">
      <Reveal className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-16 text-background md:px-16 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
          <Aurora colorStops={['#1d4ed8', '#3b82f6', '#6366f1']} amplitude={0.9} blend={0.55} speed={0.5} />
        </div>
        <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            {resolvedTitle}
          </h2>
          <p className="text-pretty text-base leading-relaxed text-background/70 md:text-lg">{resolvedDescription}</p>
          <div className="flex flex-wrap gap-3">
            <StarButtonLink href={localizePath(primaryHref, locale)}>
              {resolvedPrimaryLabel}
              <ArrowRight className="size-4" />
            </StarButtonLink>
            <ButtonLink
              href={localizePath('/projects', locale)}
              size="lg"
              className="border border-background/20 bg-transparent text-background hover:bg-background/10"
            >
              {t('exploreWork', 'Explore Our Work')}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
