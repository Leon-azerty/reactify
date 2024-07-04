import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// ------------------------------------------------------

// Middleware pour gérer l'authentification
export async function middleware(request: NextRequest) {
  if (cookies().get('access_token')) {
    return NextResponse.json({
      cookies: request.cookies.getAll(),
      access_token: cookies().get('access_token'),
    })
    // L'utilisateur est déjà connecté
    return NextResponse.next(request)
  }

  return NextResponse.rewrite(new URL('/login', request.url))
}

export const config = {
  matcher: '/', // Matcher les routes qui nécessitent l'authentification
}
