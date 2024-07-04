'use client'

import { Input } from '@/ui/input'
import { ScrollArea } from '@/ui/scroll-area'
import { Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Footer from '../../common/footer/footer'
import Navbar from '../../common/navbar'
import Browse from './components/browse/browse'
import RecentsSearches from './components/recents-searches'

export default function Home() {
  const [inputText, setinputText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <main className="w-fbg-pink-500 mt-2 h-full bg-card p-4">
      <Navbar>
        <Input
          ref={inputRef}
          className="w-96"
          placeholder="What do you want to play?"
          icon={<Search className="stroke-[#b3b3b3]" size={20} />}
          onChange={(e) => setinputText(e.target.value)}
          value={inputText}
          setValue={setinputText}
        />
      </Navbar>
      <ScrollArea className="flex h-full w-full flex-col items-center ">
        <RecentsSearches />
        <Browse />
        <Footer />
      </ScrollArea>
    </main>
  )
}
