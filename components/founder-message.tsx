"use client"

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { useState } from 'react'
import { AnimatedCounter } from '@/components/animated-counter'
import { Reveal } from '@/components/reveal'
import { useTranslation } from '@/hooks/useTranslation'

const metrics = [
  { valueKey: 'home.founder.metric1.value', labelKey: 'home.founder.metric1.label', value: '20+', label: 'Products delivered' },
  { valueKey: 'home.founder.metric2.value', labelKey: 'home.founder.metric2.label', value: '10+', label: 'Global clients' },
  { valueKey: 'home.founder.metric3.value', labelKey: 'home.founder.metric3.label', value: '6', label: 'Core disciplines' },
]

export function FounderMessage() {
  const { t } = useTranslation()
  const [imageSrc, setImageSrc] = useState('/founder-marcoopaga.jpg')

  return (
    <section className="overflow-hidden border-y border-border bg-secondary/40">
      <div className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="founder-motion absolute -inset-6 rounded-[2rem] border border-primary/10" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={imageSrc}
                alt={t('home.founder.imageAlt', 'Portrait of Marcoopaga, founder of Client Digital Flow')}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
                onError={() => setImageSrc('/team/alex-rivera.png')}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-6 pt-24 text-background">
                <p className="text-lg font-semibold">{t('home.founder.name', 'Marcoopaga')}</p>
                <p className="text-sm text-background/75">{t('home.founder.role', 'Founder & Product Lead')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-6 bg-primary" aria-hidden="true" />
                {t('home.founder.eyebrow', 'Founder Message')}
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {t('home.founder.title', 'Our strength is the collective intelligence behind every build.')}
              </h2>
            </div>

            <blockquote className="relative border-l-2 border-primary pl-6">
              <Quote className="mb-5 size-9 text-primary" aria-hidden="true" />
              <p className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl">
                {t(
                  'home.founder.quote',
                  'We bring strategy, design, engineering and AI together around one goal: helping ambitious teams turn complex ideas into reliable products people can actually use.',
                )}
              </p>
            </blockquote>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t(
                'home.founder.description',
                'Inspired by consulting studios with a strong founder voice, this section gives Client Digital Flow a more human, confident presence while keeping the product-focused tone of the site.',
              )}
            </p>

            <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <div key={metric.labelKey} className="bg-background p-5">
                  <dt className="text-sm text-muted-foreground">{t(metric.labelKey, metric.label)}</dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight">
                    <span className="founder-count" style={{ animationDelay: `${index * 140}ms` }}>
                      <AnimatedCounter value={t(metric.valueKey, metric.value)} />
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
