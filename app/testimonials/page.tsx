"use client"

import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CTASection } from '@/components/cta-section'
import { TESTIMONIALS } from '@/lib/data'
import { localizeTestimonial } from '@/lib/content-localization'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

export default function TestimonialsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('pages.testimonials.eyebrow', 'Testimonials')}
        title={t('pages.testimonials.title', "In our clients' own words.")}
        description={t('pages.testimonials.description', 'We measure our success by the outcomes we create and the relationships we keep.')}
      />

      <div className="container-page flex flex-col py-16 md:py-24">
        {TESTIMONIALS.map((testimonial, i) => {
          const localizedTestimonial = localizeTestimonial(testimonial, i, t)
          return (
          <Reveal key={testimonial.name}>
            <figure
              className={cn(
                'grid gap-8 border-t border-border py-12 first:border-t-0 md:py-16 lg:grid-cols-[0.4fr_1.6fr] lg:gap-16',
                i % 2 === 1 && 'lg:[&>figcaption]:order-2',
              )}
            >
              <figcaption className="flex flex-col gap-1">
                <span className="text-lg font-semibold tracking-tight">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{localizedTestimonial.role}</span>
                <span className="text-sm text-muted-foreground">{testimonial.company}</span>
                <span className="mt-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                  {testimonial.project}
                </span>
              </figcaption>
              <blockquote className="text-pretty text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-3xl md:leading-snug">
                &ldquo;{localizedTestimonial.quote}&rdquo;
              </blockquote>
            </figure>
          </Reveal>
          )
        })}
      </div>

      <CTASection />
    </>
  )
}
