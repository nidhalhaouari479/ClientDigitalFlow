"use client"

import Image from 'next/image'
import { Eye, Target } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'
import { STATS, VALUES } from '@/lib/data'
import { useTranslation } from '@/hooks/useTranslation'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.about.eyebrow', 'About Us')}
        title={t('pages.about.title', 'We build technology with purpose.')}
        description={t('pages.about.description', 'Client Digital Flow is a software solutions studio. We partner with ambitious teams to design, build and scale digital products that create real business value.')}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={t('pages.about.whoEyebrow', 'Who We Are')}
              title={t('pages.about.whoTitle', 'A senior, multidisciplinary studio')}
              description={t('pages.about.whoDescription', 'We are engineers, designers and strategists who have shipped products across e-commerce, healthcare, finance and logistics.')}
            />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('pages.about.whoBody', 'We deliberately stay focused and senior. That means the people who scope your project are close to the people who build it, with the ownership and craft that comes from caring about the outcome.')}
            </p>
          </Reveal>
          <Reveal delay={80} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/about-team.png"
              alt={t('pages.about.imageAlt', 'The Client Digital Flow team collaborating in the office')}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 md:p-10">
              <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary">
                <Target className="size-6" />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">{t('pages.about.missionTitle', 'Our Mission')}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('pages.about.missionDescription', 'To help businesses move faster and serve their customers better through thoughtfully engineered software and applied AI.')}
              </p>
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 md:p-10">
              <span className="grid size-12 place-items-center rounded-lg bg-accent text-primary">
                <Eye className="size-6" />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">{t('pages.about.visionTitle', 'Our Vision')}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('pages.about.visionDescription', 'A world where every ambitious team has access to strong product engineering, practical AI and clear technical guidance.')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow={t('pages.about.valuesEyebrow', 'Our Values')} title={t('pages.about.valuesTitle', 'What we stand for')} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 50}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-7">
                <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-tight">{t(`value.${i + 1}.title`, value.title)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`value.${i + 1}.desc`, value.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            eyebrow={t('pages.about.expertiseEyebrow', 'Our Expertise')}
            title={t('pages.about.expertiseTitle', 'Proven across projects and clients')}
            description={t('pages.about.expertiseDescription', 'Numbers that reflect the work and the trust our clients place in us.')}
          />
          <div className="mt-12">
            <StatsSection stats={STATS} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
