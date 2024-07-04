import { ThemeProvider } from '@/app/common/context/theme-provider'
import PlayerBar from '@/app/common/playerBar/player-bar'
import SideBar from '@/app/common/sidebar/sidebar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/ui/resizable'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CurrentSongProvider } from '../common/context/current-song-provider'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reactify',
  description: 'Clone of Spotify, built with NextJs, by @leon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
