'use client'

import { getPlaylists, getProfile } from '@/lib/spotify'
import { ScrollArea } from '@/ui/scroll-area'
import { useEffect } from 'react'
import Footer from '../common/footer/footer'
import Navbar from '../common/navbar'
import Filter from './components/filter'
import GoodMorning from './components/good-morning'
import Recommendations from './components/recommendations/recommendations'
import usePreventSpaceScroll from './page.logic'

export default function Home() {
  usePreventSpaceScroll()

  useEffect(() => {
    const show_profile = async () => {
      const res = await getProfile()
      const profile = await res.json()
      console.log(profile)
    }
    const show_playlists = async () => {
      const res = await getPlaylists()
      const playlists = await res.json()
      console.log(playlists)
    }
    show_profile()
    show_playlists()
  })
  return (
    <main className="mr-2 mt-2 flex h-full w-full flex-col space-y-4 rounded-lg bg-base p-5 pb-0">
      <Navbar />
      <Filter />
      <ScrollArea className="@container">
        <GoodMorning />
        <Recommendations />
        <Footer />
      </ScrollArea>
    </main>
  )
}
