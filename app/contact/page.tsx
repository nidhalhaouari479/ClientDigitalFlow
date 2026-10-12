"use client"

import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { ContactLocationsMap } from '@/components/contact-locations-map'
import { LocalTime } from '@/components/local-time'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { COMPANY, telHref } from '@/lib/data'
import { useTranslation } from '@/hooks/useTranslation'

export default function ContactPage() {
  const { t, locale } = useTranslation()

  const lines = [
    { name: t('contact.usa', 'USA'), phone: COMPANY.phoneUSA, timeZone: 'America/New_York' },
    { name: t('contact.phoneItaly', 'Italy'), phone: COMPANY.phoneItaly, timeZone: 'Europe/Rome' },
    { name: t('contact.phoneTunisia', 'Tunisia'), phone: COMPANY.phone, timeZone: 'Africa/Tunis' },
  ]

  const locations = [
    {
      name: t('contact.usa', 'USA'),
      href: 'https://www.google.com/maps/search/?api=1&query=United%20States',
      position: 'left-[22%] top-[38%]',
      labelPosition: 'left-1/2 top-full mt-1.5 -translate-x-1/2',
    },
    {
      name: t('contact.phoneItaly', 'Italy'),
      href: 'https://www.google.com/maps/search/?api=1&query=Milano%2C%20Italy',
      position: 'left-[53%] top-[35%]',
      labelPosition: 'bottom-full left-1/2 mb-1.5 -translate-x-1/2',
    },
    {
      name: t('contact.phoneTunisia', 'Tunisia'),
      href: 'https://www.google.com/maps/search/?api=1&query=Tunisia',
      position: 'left-[52%] top-[51%]',
      labelPosition: 'left-full top-1/2 ml-2 -translate-y-1/2',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow={t('contact.eyebrow', 'Contact')}
        title={t('contact.title', "Let's talk about your project.")}
        description={t(
          'contact.description',
          'Tell us what you want to build. We will help you clarify the scope, the roadmap and the best technical path.',
        )}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t('contact.direct', 'Direct contact')}</h2>
              <p className="mt-2 text-muted-foreground">
                {t('contact.hours', 'Monday-Friday, 09:00-18:00 CET')} · {t('contact.responseValue', 'Within one business day')}
              </p>
            </div>

            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {lines.map((line) => (
                <li key={line.phone}>
                  <a href={telHref(line.phone)} className="group flex items-center gap-4 p-5 transition-colors hover:bg-muted/50">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-primary">
                      <Phone className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted-foreground">{line.name}</span>
                      <span className="block font-semibold group-hover:text-primary">{line.phone}</span>
                    </span>
                    <LocalTime timeZone={line.timeZone} locale={locale} className="text-sm tabular-nums text-muted-foreground" />
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-4 p-5 transition-colors hover:bg-muted/50">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-primary">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted-foreground">{t('contact.email', 'Email')}</span>
                    <span className="block break-words font-semibold group-hover:text-primary">{COMPANY.email}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </a>
              </li>
            </ul>

            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center gap-2.5 rounded-lg bg-[#25D366] px-5 text-[0.95rem] font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" />
              {t('contact.whatsapp', 'Chat on WhatsApp')}
            </a>

            <ContactLocationsMap
              title={t('contact.mapTitle', 'Our presence')}
              description={t('contact.mapDescription', 'Connected across three markets')}
              locations={locations}
            />
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-24">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
