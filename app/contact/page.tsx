"use client"

import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { ContactLocationsMap } from '@/components/contact-locations-map'
import { Reveal } from '@/components/reveal'
import { COMPANY } from '@/lib/data'
import { useTranslation } from '@/hooks/useTranslation'

const contactItems = [
  {
    icon: Mail,
    labelKey: 'contact.email',
    fallbackLabel: 'Email',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    actionKey: 'contact.writeToUs',
    fallbackAction: 'Write to us',
  },
  {
    icon: Phone,
    labelKey: 'contact.phoneTunisia',
    fallbackLabel: 'Tunisia',
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replaceAll(' ', '')}`,
    actionKey: 'contact.callUs',
    fallbackAction: 'Call us',
  },
  {
    icon: Phone,
    labelKey: 'contact.phoneItaly',
    fallbackLabel: 'Italy',
    value: COMPANY.phoneItaly,
    href: `tel:${COMPANY.phoneItaly.replaceAll(' ', '')}`,
    actionKey: 'contact.callUs',
    fallbackAction: 'Call us',
  },
  {
    icon: MapPin,
    labelKey: 'contact.location',
    fallbackLabel: 'Location',
    value: COMPANY.address,
    href: 'https://www.google.com/maps/search/?api=1&query=Milano%2C%20Italy',
    actionKey: 'contact.openMap',
    fallbackAction: 'Open map',
  },
]

const nextSteps = [
  {
    titleKey: 'contact.nextStep1Title',
    title: 'We review your request',
    descriptionKey: 'contact.nextStep1Description',
    description: 'A senior team member reviews your goals, constraints and timing.',
  },
  {
    titleKey: 'contact.nextStep2Title',
    title: 'We schedule a focused call',
    descriptionKey: 'contact.nextStep2Description',
    description: 'A short conversation helps us clarify scope and priorities.',
  },
  {
    titleKey: 'contact.nextStep3Title',
    title: 'You receive a clear direction',
    descriptionKey: 'contact.nextStep3Description',
    description: 'We recommend the right approach, timeline and next step.',
  },
]

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-foreground text-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="container-page relative py-16 md:py-24">
          <Reveal className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/60">
                {t('contact.eyebrow', 'Contact')}
              </p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.02]">
                {t('contact.title', "Let's talk about your project.")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
                {t(
                  'contact.description',
                  'Tell us what you want to build. We will help you clarify the scope, the roadmap and the best technical path.',
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/75">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {t('contact.noCommitment', 'No commitment required')}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-4 text-primary" aria-hidden="true" />
                  {t('contact.responseValue', 'Within one business day')}
                </span>
              </div>
            </div>

            <ContactLocationsMap
              title={t('contact.mapTitle', 'Our presence')}
              description={t('contact.mapDescription', 'Connected across three markets')}
              usaLabel={t('contact.usa', 'USA')}
              italyLabel={t('contact.phoneItaly', 'Italy')}
              tunisiaLabel={t('contact.phoneTunisia', 'Tunisia')}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t('contact.direct', 'Direct contact')}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {t('contact.directTitle', 'Reach us from Tunisia, Italy or anywhere.')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t(
                  'contact.directDescription',
                  'The company is based in Milano, Italy, with direct phone contacts available for Tunisia and Italy.',
                )}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex items-center gap-3 bg-background p-4">
                <Clock3 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('contact.availability', 'Availability')}</p>
                  <p className="mt-0.5 text-sm font-medium">{t('contact.hours', 'Monday-Friday, 09:00-18:00 CET')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background p-4">
                <MessageCircle className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('contact.response', 'Response time')}</p>
                  <p className="mt-0.5 text-sm font-medium">{t('contact.responseValue', 'Within one business day')}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-32 flex-col items-start justify-between gap-5 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_14px_45px_-24px_rgba(37,99,235,0.45)]"
                >
                  <span className="flex w-full items-start justify-between gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{t(item.labelKey, item.fallbackLabel)}</span>
                    <span className="mt-1 block break-words text-sm font-semibold text-foreground">{item.value}</span>
                    <span className="mt-2 block text-xs font-medium text-primary">{t(item.actionKey, item.fallbackAction)}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-5 rounded-lg bg-foreground p-5 text-background transition-colors hover:bg-foreground/90"
            >
              <span className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-background/10 text-background">
                  <MessageCircle className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t('contact.whatsapp', 'Chat on WhatsApp')}</span>
                  <span className="mt-1 block text-xs text-background/60">
                    {t('contact.whatsappDescription', 'Best for a quick first conversation')}
                  </span>
                </span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold tracking-tight">{t('contact.nextTitle', 'What happens next')}</h3>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, index) => (
                  <li key={step.titleKey} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-xs font-semibold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t(step.titleKey, step.title)}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t(step.descriptionKey, step.description)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
