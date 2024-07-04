import PlayerBar from '@/app/common/playerBar/player-bar'
import SideBar from '@/app/common/sidebar/sidebar'
import { ThemeProvider } from '@/app/theme-provider'
import { getTracks } from '@/lib/spotify'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/ui/resizable'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CurrentSongProvider } from './current-song-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reactify',
  description: 'Clone of Spotify, built with NextJs, by @leon',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const response = await getTracks()
  const data = await response.json()
  console.log('data = ', data)
  const items = data.items
  if (items) {
    console.log('items.length = ', items.length)
    const itemsSliced = items.slice(0, 10)
    for (const item of itemsSliced) {
      console.log('playlist name = ', item.name)
      console.log('playlist owner = ', item.owner.display_name)
    }
    // const tracks = items.slice(0, 10).map((track: any) => ({
    //   artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    //   songUrl: track.external_urls.spotify,
    //   title: track.name,
    // }))
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CurrentSongProvider>
            <div className="flex h-screen flex-col bg-background">
              <ResizablePanelGroup direction="horizontal" className="h-max">
                <SideBar />
                <ResizableHandle className="w-2 bg-background" />
                <ResizablePanel>{children}</ResizablePanel>
              </ResizablePanelGroup>
              <PlayerBar />
            </div>
          </CurrentSongProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
