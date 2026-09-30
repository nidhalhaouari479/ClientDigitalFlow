"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
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

  const currentLocale = localeFromPath(pathname)
  const base = stripLocale(pathname)

  const onSelect = (code: Locale) => {
    router.push(localizePath(base, code))
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span aria-hidden="true" className="text-base">🌐</span>
        <span className="hidden sm:inline">{currentLocale.toUpperCase()}</span>
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-md border bg-background shadow-md">
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              type="button"
              onClick={() => onSelect(locale.code)}
              className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
            >
              {locale.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
