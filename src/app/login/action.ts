'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function authorize(codeVerifier: string, codeChallenge: string) {
  cookies().set('codeVerifier', codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })

  // Construire l'URL d'autorisation Spotify
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || ''
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || ''
  const scope =
    'ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read user-read-email user-read-private'
  const authUrl = new URL('https://accounts.spotify.com/authorize')

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString()
  redirect(authUrl.toString())
}
