import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Hosting platform (Vercel) handles HTTP→HTTPS and www→non-www redirects
  // automatically. Custom middleware redirects for these caused
  // ERR_TOO_MANY_REDIRECTS because x-forwarded-proto is always 'http'
  // behind the load balancer.

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
