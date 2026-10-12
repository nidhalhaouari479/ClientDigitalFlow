'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Mail, Menu, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY, NAV_LINKS } from '@/lib/data'
import { localizePath } from '@/lib/i18n'
import { Logo } from '@/components/logo'
import { LangSwitcher } from '@/components/lang-switcher'
import { StarButtonLink } from '@/components/star-button-link'
import { gsap, useGSAP } from '@/lib/gsap'
import { useTranslation } from '@/hooks/useTranslation'

type Indicator = { left: number; width: number } | null

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [indicator, setIndicator] = useState<Indicator>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { t, locale } = useTranslation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`
      }
    }
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

  // The highlight pill slides to the hovered link and rests on the active one.
  const moveIndicator = useCallback((el: HTMLElement | null | undefined) => {
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
  }, [])

  const resetIndicator = useCallback(() => {
    moveIndicator(linksRef.current?.querySelector<HTMLElement>('[aria-current="page"]'))
  }, [moveIndicator])

  useLayoutEffect(() => {
    resetIndicator()
    window.addEventListener('resize', resetIndicator)
    return () => window.removeEventListener('resize', resetIndicator)
  }, [pathname, t, resetIndicator])

  useGSAP(
    () => {
      if (!open) return
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-menu-item]', { y: 28, autoAlpha: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' })
      })
    },
    { dependencies: [open], scope: menuRef },
  )

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-colors duration-500',
          scrolled && !open ? 'border-transparent bg-transparent' : 'border-border bg-background',
        )}
      >
        <div className="container-page">
          <nav
            className={cn(
              'relative flex h-16 items-center justify-between gap-4 rounded-2xl border transition-[transform,background-color,box-shadow,border-color,padding] duration-500 ease-out',
              scrolled && !open
                ? 'translate-y-3 border-border/70 bg-background/75 px-3 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-4'
                : 'border-transparent px-0',
            )}
          >
            <Logo />

            <div ref={linksRef} className="relative hidden items-center lg:flex" onMouseLeave={resetIndicator}>
              <span
                aria-hidden="true"
                className="absolute top-1/2 h-9 -translate-y-1/2 rounded-lg bg-accent transition-[left,width,opacity] duration-300 ease-out"
                style={{ left: indicator?.left ?? 0, width: indicator?.width ?? 0, opacity: indicator ? 1 : 0 }}
              />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={localizePath(link.href, locale)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onMouseEnter={(event) => moveIndicator(event.currentTarget)}
                  onFocus={(event) => moveIndicator(event.currentTarget)}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/40',
                    isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(`nav.${link.label.toLowerCase()}`, link.label)}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <LangSwitcher />
              <StarButtonLink href={localizePath('/contact', locale)} size="md">
                {t('startProject', 'Start a Project')}
                <ArrowRight className="size-4" />
              </StarButtonLink>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <LangSwitcher />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid size-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted"
                aria-label={open ? t('nav.closeMenu', 'Close menu') : t('nav.openMenu', 'Open menu')}
                aria-expanded={open}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>

            <span
              ref={progressRef}
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute inset-x-4 -bottom-px h-px origin-left bg-gradient-to-r from-primary via-violet-500 to-sky-400 transition-opacity duration-500',
                scrolled && !open ? 'opacity-100' : 'opacity-0',
              )}
              style={{ transform: 'scaleX(0)' }}
            />
          </nav>
        </div>
      </header>

      {open ? (
        <div
          ref={menuRef}
          data-lenis-prevent
          className="fixed inset-0 z-40 overflow-y-auto bg-background pt-16 lg:hidden"
        >
          <div className="container-page relative flex min-h-full flex-col gap-10 py-8">
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  data-menu-item
                  href={localizePath(link.href, locale)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'group flex items-baseline gap-4 border-b border-border py-4 text-3xl font-semibold tracking-tight transition-colors',
                    isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary',
                  )}
                >
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {t(`nav.${link.label.toLowerCase()}`, link.label)}
                  <ArrowUpRight className="ml-auto size-5 self-center text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </nav>

            <div data-menu-item className="mt-auto grid gap-3">
              <div className="grid gap-2 rounded-2xl border border-border bg-card p-4">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 rounded-lg p-2 text-sm font-medium hover:bg-muted">
                  <span className="grid size-9 place-items-center rounded-lg bg-accent text-primary">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{t('contact.email', 'Email')}</span>
                    {COMPANY.email}
                  </span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg p-2 text-sm font-medium hover:bg-muted"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-accent text-primary">
                    <MessageCircle className="size-4" />
                  </span>
                  {t('contact.whatsapp', 'Chat on WhatsApp')}
                </a>
              </div>
              <StarButtonLink href={localizePath('/contact', locale)} className="w-full">
                {t('startProject', 'Start a Project')}
                <ArrowRight className="size-4" />
              </StarButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
