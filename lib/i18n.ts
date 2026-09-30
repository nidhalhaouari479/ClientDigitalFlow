export const SUPPORTED_LOCALES = ['en', 'fr', 'it'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return !!value && SUPPORTED_LOCALES.includes(value as Locale)
}

export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1]
  return isLocale(segment) ? segment : DEFAULT_LOCALE
}

export function stripLocale(pathname: string) {
  const parts = pathname.split('/')
  if (isLocale(parts[1])) {
    parts.splice(1, 1)
  }
  const stripped = parts.join('/')
  return stripped || '/'
}

export function localizePath(href: string, locale: Locale) {
  if (!href.startsWith('/')) return href

  const base = stripLocale(href)
  if (locale === DEFAULT_LOCALE) return base
  return base === '/' ? `/${locale}` : `/${locale}${base}`
}
