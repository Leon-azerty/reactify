'use client'

import { base64encode, generateRandomString, sha256 } from '@/lib/utils'
import { Button } from '@/ui/button'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const handleClick = async () => {
    // Générer le codeVerifier
    const codeVerifier = generateRandomString(64)

    // Calculer le codeChallenge
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed)

    // Stocker le codeVerifier dans les cookies ou localStorage
    // Ici, on utilise les cookies pour l'exemple
    localStorage.setItem('code_verifier', codeVerifier)

    // Construire l'URL d'autorisation Spotify
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || ''
    const redirectUri = 'http://localhost:3000/callback'
    const scope = 'user-read-private user-read-email'
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
    router.push(authUrl.toString())
  }
  return (
    <section>
      <Button onClick={handleClick}>Se connecter avec Spotify</Button>
    </section>
  )
}
