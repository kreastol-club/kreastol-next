import type { NextRequest } from 'next/server'
import { NextFetchEvent, NextResponse } from 'next/server'

import { i18n } from './i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { withAuth } from "next-auth/middleware";

function combinePath(request: NextRequest, path: string): boolean {
  return request.nextUrl.pathname.startsWith(`/${getLocale(request)}/${path}`)
}

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  return matchLocale(languages, locales, i18n.defaultLocale)
}

type Environment = "production" | "development" | "other";

const auth = withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (combinePath(req, 'admin')) {
          return token?.role === "admin";
        }

        return !!token;
      },
    },
  }
)

export function middleware(request: NextRequest, ev: NextFetchEvent) {
  const pathname = request.nextUrl.pathname

  const currentEnv = process.env.NODE_ENV as Environment;
  // const baseUrl = process.env.BASE_URL as string;

  if (currentEnv === 'production' &&
    request.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    );
  }

  if (pathname.startsWith(''))

    if (
      [
        '/manifest.json',
        '/favicon.ico',
        '/toc.html',
        '/privacy.html'
      ].includes(pathname)
    ) {
      return;
    }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {

    // const locale = getLocale(request)

    const locale = 'hu';

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
