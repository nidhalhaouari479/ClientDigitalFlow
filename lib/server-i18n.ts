import 'server-only'

import { headers } from 'next/headers'
import en from '@/public/locales/en.json'
import fr from '@/public/locales/fr.json'
import it from '@/public/locales/it.json'
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n'

type Messages = Record<string, string>

const dictionaries: Record<Locale, Messages> = { en, fr, it }

export async function getServerTranslations() {
  const requestedLocale = (await headers()).get('x-site-locale') || DEFAULT_LOCALE
  const locale = isLocale(requestedLocale) ? requestedLocale : DEFAULT_LOCALE
  const messages = dictionaries[locale]

  return {
    locale,
    t: (key: string, fallback?: string) => messages[key] ?? fallback ?? key,
  }
}
