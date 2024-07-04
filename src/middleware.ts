import { NextRequest, NextResponse } from 'next/server'

// ------------------------------------------------------

// Middleware pour gérer l'authentification
export async function middleware(request: NextRequest) {
  const access_token = request.nextUrl.searchParams.get('access_token')

  if (!access_token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    // Valider le token si nécessaire...

    // Ajouter le token aux headers pour les futures requêtes API si nécessaire
    request.headers.set('Authorization', `Bearer ${access_token}`)

    // Continuer le traitement de la requête
    return NextResponse.next()
  } catch (error) {
    // Traiter les erreurs, par exemple, un problème de validation du token
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/', // Matcher les routes qui nécessitent l'authentification
}
