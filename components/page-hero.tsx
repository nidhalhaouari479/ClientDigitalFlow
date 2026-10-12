'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { HeroBackdrop } from '@/components/hero-backdrop'
import { Reveal } from '@/components/reveal'
import SplitText from '@/components/react-bits/SplitText'
import { localizePath } from '@/lib/i18n'
import { useTranslation } from '@/hooks/useTranslation'

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description?: React.ReactNode
  children?: React.ReactNode
}) {
  const { t, locale } = useTranslation()

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <HeroBackdrop />

      <div className="container-page flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href={localizePath('/', locale)} className="transition-colors hover:text-foreground">
              {t('nav.home', 'Home')}
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="font-medium text-primary">{eyebrow}</span>
          </nav>
        </Reveal>

        <SplitText
          tag="h1"
          text={title}
          splitType="words"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 24 }}
          to={{ opacity: 1, y: 0 }}
          className="headline-accent max-w-4xl pb-[0.08em] text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]"
        />

        {description ? (
          <Reveal delay={150}>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={250}>{children}</Reveal> : null}
      </div>
    </section>
  )
}
