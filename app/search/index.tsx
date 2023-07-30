'use client'

import { Box, Center, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { dummyVids } from '~/constants/dummy'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from '../queue/QueueItem'
import { useAppStore } from '~/store/store'
import Player from '../player'

export default function Search() {
  const initUserId = useAppStore((state) => state.initUserId)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>()
  const [queue, setQueue] = useState<QueueVideo[]>([])
  const [nowPlaying, setNowPlaying] = useState<string>()

  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const hasQuery = form.values.query.length > 0

  useEffect(() => {
    initUserId()
  }, [initUserId])

  return (
    <Box maw={600} mx='auto' my='sm' px='sm'>
      <Player
        queue={queue}
        setQueue={setQueue}
        nowPlaying={nowPlaying}
        setNowPlaying={setNowPlaying}
      />
      <Box mt='md'>
        <SearchBar
          loading={loading}
          setLoading={setLoading}
          setResults={setResults}
          form={form}
        />
      </Box>
      <Stack mt='md' spacing='xs'>
        {hasQuery &&
          results?.map((searchedVideo) => (
            <ResultItem
              key={searchedVideo.videoId}
              searchedVideo={searchedVideo}
              setQueue={setQueue}
              queue={queue}
            />
          ))}
        {!hasQuery && (
          <>
            {queue?.map((queuedVideo) => (
              <QueueItem
                key={queuedVideo.videoId}
                queuedVideo={queuedVideo}
                setQueue={setQueue}
              />
            ))}
            {queue.length === 0 && nowPlaying && (
              <Center>
                <Text color='dimmed' fs='italic'>
                  bruh... no queue?
                </Text>
              </Center>
            )}
          </>
        )}
      </Stack>
    </Box>
  )
}
