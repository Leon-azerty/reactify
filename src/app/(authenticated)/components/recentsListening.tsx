'use client'

import { CurrentSongContext } from '@/app/common/context/current-song'
import { Play } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useContext } from 'react'

export default function RecentsListening({
  title,
  imageUrl,
}: {
  title: string
  imageUrl: string | StaticImageData
}) {
  const currentSongContext = useContext(CurrentSongContext)
  const handleClick = () => {
    if (currentSongContext == null) return
    currentSongContext.setCurrentSong({
      imageUrl: imageUrl,
      artistName: '',
      songName: title!,
    })
  }
  return (
    <div className="group relative flex h-12 w-full cursor-pointer items-center space-x-2 rounded-sm bg-[#FFFFFF12] hover:bg-[#FFFFFF33] lg:h-16 xl:h-20">
      <Image
        src={imageUrl}
        alt="cover image"
        className="h-full rounded-l-sm"
        width={80}
        height={80}
      />
      <p className="flex w-5/6 flex-grow">{title}</p>
      <div className="absolute right-4 h-12 w-12 rounded-full bg-spotify p-2 opacity-0 group-hover:opacity-100">
        <Play
          className="h-8 w-8 fill-black-500 stroke-black-500 p-2"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
