import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import RootStyleRegistry from './emotion'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'YouTubify by ben',
  description: 'A playlist for voting YouTube music videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>youtubify</title>
      </head>
      <body>
        <RootStyleRegistry>
          <main>{children}</main>
        </RootStyleRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
