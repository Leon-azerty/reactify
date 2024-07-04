'use client'

import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { CurrentSongContext } from '../../../common/context/current-song'
import { PlaylistItemType } from '../../../type'

export default function PlaylistItem({
  src,
  title,
  description,
  artist,
}: PlaylistItemType) {
  const currentSongContext = useContext(CurrentSongContext)
  const handleClick = () => {
    if (currentSongContext == null) return
    currentSongContext.setCurrentSong({
      imageUrl: src,
      artistName: artist,
      songName: title,
    })
  }

  return (
    <Card className="group h-80 w-56 cursor-pointer border-none">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-white">
          <div className="relative">
            <Image
              src={src}
              alt="image cover of the playlist"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="absolute bottom-2 right-4 h-12 w-12 rounded-full bg-spotify p-2 opacity-0 group-hover:opacity-100">
              <Play
                className="h-8 w-8 cursor-pointer fill-black-500 stroke-black-500 p-2"
                onClick={handleClick}
              />
            </div>
          </div>
          {title}
        </CardTitle>
        <CardDescription className=" text-subdued">
          {description}
          {artist}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
