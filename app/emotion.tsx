'use client'

import { CacheProvider } from '@emotion/react'
import { useEmotionCache, MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export default function RootStyleRegistry({ children }: Props) {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Nunito, sans-serif',
          primaryColor: 'yellow',
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}
