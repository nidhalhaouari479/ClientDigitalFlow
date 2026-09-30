'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/data'
import { localizePath } from '@/lib/i18n'
import { Logo } from '@/components/logo'
import { ButtonLink } from '@/components/site-button'
import { LangSwitcher } from '@/components/lang-switcher'
import { useTranslation } from '@/hooks/useTranslation'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, locale } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => {
    const localizedHref = localizePath(href, locale)
    return pathname === localizedHref || (localizedHref !== '/' && pathname.startsWith(localizedHref))
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent bg-background',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={localizePath(link.href, locale)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:origin-center after:bg-primary after:transition-transform',
                isActive(link.href)
                  ? 'text-primary after:scale-x-100'
                  : 'text-muted-foreground after:scale-x-0 hover:text-foreground',
              )}
            >
              {t(`nav.${link.label.toLowerCase()}`, link.label)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <div className="flex items-center gap-4">
            <LangSwitcher />
            <ButtonLink href={localizePath('/contact', locale)} variant="primary" size="md">
              {t('startProject', 'Start a Project')}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-md text-foreground lg:hidden"
          aria-label={open ? t('nav.closeMenu', 'Close menu') : t('nav.openMenu', 'Open menu')}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={localizePath(link.href, locale)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  isActive(link.href) ? 'bg-accent text-primary' : 'text-foreground hover:bg-muted',
                )}
              >
                {t(`nav.${link.label.toLowerCase()}`, link.label)}
              </Link>
            ))}
            <ButtonLink href={localizePath('/contact', locale)} variant="primary" size="lg" className="mt-4 w-full">
              {t('startProject', 'Start a Project')}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
