'use client'

import { base64encode, generateRandomString, sha256 } from '@/lib/utils'
import { Button } from '@/ui/button'
import { authorize } from './action'

export default function Page() {
  const handleClick = async () => {
    const codeVerifier = generateRandomString(64)

    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed)

    localStorage.setItem('code_verifier', codeVerifier)
    await authorize(codeVerifier, codeChallenge)
  }
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Button onClick={handleClick}>Se connecter avec Spotify</Button>
    </main>
  )
}
