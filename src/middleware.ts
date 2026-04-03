import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // www → non-www redirect is handled by vercel.json at the platform level.
  // Do NOT add a www redirect here – it causes ERR_TOO_MANY_REDIRECTS.

  return NextResponse.next()
}
