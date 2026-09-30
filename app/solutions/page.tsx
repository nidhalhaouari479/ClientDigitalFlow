"use client"

import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CTASection } from '@/components/cta-section'
import { SOLUTIONS } from '@/lib/data'
import { localizeSolution } from '@/lib/content-localization'
import { useTranslation } from '@/hooks/useTranslation'

export default function SolutionsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.solutions.eyebrow', 'Solutions')}
        title={t('pages.solutions.title', 'We solve problems, not just ship technology.')}
        description={t('pages.solutions.description', 'We start from the business outcome you need and work backward to the right solution: automation, custom software, or applied AI.')}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => {
            const localizedSolution = localizeSolution(solution, t)
            return (
              <Reveal key={solution.title} delay={i * 50}>
                <div className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_45px_-24px_rgba(37,99,235,0.45)]">
                  <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary">
                    <solution.icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">{localizedSolution.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{localizedSolution.desc}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-5">
                    {localizedSolution.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="size-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow={t('pages.solutions.approachEyebrow', 'Our Approach')}
              title={t('pages.solutions.approachTitle', 'Outcomes first, technology second')}
              description={t('pages.solutions.approachDescription', 'Technology is only valuable when it moves a metric that matters to your business.')}
            />
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t('pages.solutions.approachP1', 'Every engagement begins with understanding the outcome you are trying to reach: more revenue, lower operating cost, faster delivery, better data. We then design the smallest, most reliable solution that gets you there.')}</p>
              <p>{t('pages.solutions.approachP2', 'That discipline is why our clients keep coming back: we build systems that pay for themselves and keep paying off as they scale.')}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
