import { NextResponse, type NextRequest } from 'next/server'
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathLocale = pathname.split('/')[1]
  const locale = isLocale(pathLocale) ? pathLocale : DEFAULT_LOCALE
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-site-locale', locale)

  if (locale === DEFAULT_LOCALE) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const url = request.nextUrl.clone()
  url.pathname = pathname.replace(`/${locale}`, '') || '/'
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
