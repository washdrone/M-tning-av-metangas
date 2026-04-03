import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect www → non-www
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '')
    const url = new URL(request.url)
    url.host = nonWwwHost
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
