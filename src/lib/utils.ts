import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  const time =
    isNaN(minutes) || isNaN(secs)
      ? '0'
      : `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  return `${time}`
}

// Fonction pour générer une chaîne aléatoire
export const generateRandomString = (length: number) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const values = crypto.getRandomValues(new Uint8Array(length))
  return values.reduce((acc, x) => acc + possible[x % possible.length], '')
}

// Fonction pour calculer le hash SHA-256
export const sha256 = async (plain: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return crypto.subtle.digest('SHA-256', data)
}

// Fonction pour encoder en Base64URL
export const base64encode = (input: ArrayBuffer) => {
  const bytes = Array.from(new Uint8Array(input))
  return btoa(String.fromCharCode(...bytes))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
