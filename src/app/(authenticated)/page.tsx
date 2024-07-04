'use client'

import { ScrollArea } from '@/ui/scroll-area'
import Footer from '../common/footer/footer'
import Navbar from '../common/navbar'
import Filter from './components/filter'
import GoodMorning from './components/good-morning'
import Recommendations from './components/recommendations/recommendations'
import usePreventSpaceScroll from './page.logic'

export default function Home() {
  usePreventSpaceScroll()

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
