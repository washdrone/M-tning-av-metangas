import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Redirect www → non-www (fixes "Alternativ sida med korrekt kanonisk tagg")
  if (hostname.startsWith('www.')) {
    const newHost = hostname.replace('www.', '')
    url.host = newHost
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // Redirect HTTP → HTTPS (fixes "Sida med omdirigering")
  const proto = request.headers.get('x-forwarded-proto')
  if (proto === 'http') {
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
