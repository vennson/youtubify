'use client'

import { Box, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { dummyVids } from '~/constants/dummy'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from './QueueItem'
import shortUUID from 'short-uuid'

export default function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>(dummyVids)
  const [queue, setQueue] = useState<QueueVideo[]>([])
  const [session, setSession] = useState<string>()

  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const hasQuery = form.values.query.length > 0

  useEffect(() => {
    const session = localStorage.getItem('session')

    if (!session) {
      const newSession = shortUUID.generate()
      localStorage.setItem('session', newSession)
      setSession(newSession)
    } else {
      setSession(session)
    }
  }, [])

  return (
    <Box maw={600} mx='auto' my='sm'>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        setResults={setResults}
        form={form}
      />
      <Stack mt='md' spacing='xs'>
        {hasQuery &&
          results?.map((video) => (
            <ResultItem
              key={video.videoId}
              searchedVideo={video}
              setQueue={setQueue}
              queue={queue}
            />
          ))}
        {!hasQuery &&
          queue?.map((video) => (
            <QueueItem
              key={video.videoId}
              queuedVideo={video}
              setQueue={setQueue}
            />
          ))}
      </Stack>
    </Box>
  )
}
