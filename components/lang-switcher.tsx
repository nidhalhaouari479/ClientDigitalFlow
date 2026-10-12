"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { localeFromPath, localizePath, stripLocale, type Locale } from '@/lib/i18n'

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
]

export function LangSwitcher() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const currentLocale = localeFromPath(pathname)
  const base = stripLocale(pathname)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const onSelect = (code: Locale) => {
    router.push(localizePath(base, code))
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe className="size-4 text-muted-foreground" aria-hidden="true" />
        <span>{currentLocale.toUpperCase()}</span>
        <ChevronDown className={cn('size-3.5 text-muted-foreground transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-background/95 p-1 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.4)] backdrop-blur-xl animate-fade-in"
        >
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              type="button"
              role="menuitem"
              onClick={() => onSelect(locale.code)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted',
                locale.code === currentLocale && 'font-medium text-primary',
              )}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-6 font-mono text-xs text-muted-foreground">{locale.code.toUpperCase()}</span>
                {locale.label}
              </span>
              {locale.code === currentLocale ? <Check className="size-4" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
