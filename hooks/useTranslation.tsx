"use client"

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { localeFromPath } from '@/lib/i18n'

export function useTranslation() {
  const pathname = usePathname() || '/'
  const locale = useMemo(() => localeFromPath(pathname), [pathname])

  const [messages, setMessages] = useState<Record<string, string> | null>(null)

  useEffect(() => {
    let mounted = true
    fetch(`/locales/${locale}.json`).then((r) => r.json()).then((data) => {
      if (mounted) setMessages(data)
    }).catch(() => {
      if (mounted) setMessages({})
    })
    return () => {
      mounted = false
    }
  }, [locale])

  const t = useMemo(() => {
    return (key: string, fallback?: string) => {
      if (!messages) return fallback || key
      return messages[key] ?? fallback ?? key
    }
  }, [messages])

  return { t, locale, ready: !!messages }
}
