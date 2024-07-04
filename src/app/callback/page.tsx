'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const [access_token, setAccess_token] = useState('')
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  // Construire l'URL d'autorisation Spotify
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || ''
  const redirectUri = 'http://localhost:3000/callback'

  useEffect(() => {
    const getToken = async (code: string) => {
      // stored in the previous step
      let codeVerifier = localStorage.getItem('code_verifier') || ''

      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier,
        }),
      }

      const response = await fetch(
        'https://accounts.spotify.com/api/token',
        payload,
      )
      const body = await response.json()
      if (body.access_token) {
        localStorage.setItem('access_token', body.access_token)
        setAccess_token(body.access_token)
      }
    }
    if (code && !access_token) {
      getToken(code)
    }
  }, [code, access_token, clientId, redirectUri])

  return (
    <section>
      Loading
      {access_token && <p>Access token: {access_token}</p>}
    </section>
  )
}
