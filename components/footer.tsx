"use client"

import Link from 'next/link'
import { Users, Camera, Globe, GitBranch, Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { COMPANY, SERVICES, SOLUTIONS, telHref } from '@/lib/data'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

const columns = [
  {
    title: 'Services',
    links: SERVICES.slice(0, 6).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: 'Solutions',
    links: SOLUTIONS.slice(0, 6).map((s) => ({ label: s.title, href: '/solutions' })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Process', href: '/process' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Partners', href: '/partners' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
]

const phoneLines = [
  { code: 'US', phone: COMPANY.phoneUSA },
  { code: 'IT', phone: COMPANY.phoneItaly },
  { code: 'TN', phone: COMPANY.phone },
]

const socials = [
  { icon: Users, href: COMPANY.linkedin, label: 'LinkedIn' },
  { icon: Camera, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Globe, href: 'https://facebook.com', label: 'Facebook' },
  { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
]

export function Footer() {
  const { t, locale } = useTranslation()
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('footerDescription', 'We design, develop and scale digital products, software platforms and AI-powered solutions for ambitious teams.')}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {phoneLines.map((line) => (
                <li key={line.code}>
                  <a href={telHref(line.phone)} className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground">
                    <Phone className="size-3.5 text-primary" aria-hidden="true" />
                    <span className="w-6 font-mono text-xs font-semibold text-foreground">{line.code}</span>
                    {line.phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="size-3.5 text-primary" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(s.label.toLowerCase(), s.label)}
                  className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-foreground">{t(`footer.${col.title.toLowerCase()}`, col.title)}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={localizePath(link.href, locale)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(`footer.link.${link.label.toLowerCase().replaceAll(' ', '')}`, link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
            &copy; 2026 {COMPANY.name}. {t('allRightsReserved', 'All rights reserved.')}
          </p>
                <div className="flex items-center gap-6">
            <Link href={localizePath('/privacy', locale)} className="transition-colors hover:text-foreground">
              {t('privacy', 'Privacy Policy')}
            </Link>
            <Link href={localizePath('/terms', locale)} className="transition-colors hover:text-foreground">
              {t('terms', 'Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
