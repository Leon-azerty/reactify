'use client'

import { Song } from '@/app/type'
import { ReactNode, useState } from 'react'
import { CurrentSongContext } from './current-song'

export function CurrentSongProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song>({
    imageUrl: '',
    artistName: '',
    songName: '',
  })
  return (
    <CurrentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </CurrentSongContext.Provider>
  )
}
