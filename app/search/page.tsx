'use client'

import { Box, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { dummyVids } from '~/constants/dummy'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from './QueueItem'
import shortUUID from 'short-uuid'
import { useAppStore } from '~/store/store'

export default function SearchPage() {
  const initUserId = useAppStore((state) => state.initUserId)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>(dummyVids)
  const [queue, setQueue] = useState<QueueVideo[]>([])

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
    <Box maw={600} mx='auto' my='sm'>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        setResults={setResults}
        form={form}
      />
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
        {!hasQuery &&
          queue?.map((queuedVideo) => (
            <QueueItem
              key={queuedVideo.videoId}
              queuedVideo={queuedVideo}
              setQueue={setQueue}
            />
          ))}
      </Stack>
    </Box>
  )
}
