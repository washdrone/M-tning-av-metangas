import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Domain redirects are handled by Vercel domain settings
  // (ecodrone.se → www.ecodrone.se)
  // Do NOT add www/non-www redirects here to avoid redirect loops

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
