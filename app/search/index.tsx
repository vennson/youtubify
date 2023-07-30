'use client'

import {
  Box,
  Center,
  Divider,
  Kbd,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import { dummyVids } from '~/constants/dummy'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from '../queue/QueueItem'
import { useAppStore } from '~/store/store'
import Player from '../player'
import { GRAY } from '~/constants/colors'

const UPPER_BODY_HEIGHT = 435

export default function Search() {
  const initUserId = useAppStore((state) => state.initUserId)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>(dummyVids)
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
    <Box maw={600} mx='auto' mt={UPPER_BODY_HEIGHT} px='sm'>
      <Box
        pos='fixed'
        maw={600}
        mx='auto'
        left={0}
        right={0}
        top={0}
        bg='white'
        sx={{ zIndex: 100 }}
      >
        <Box mx='sm' mt='md'>
          <Player
            queue={queue}
            setQueue={setQueue}
            nowPlaying={nowPlaying}
            setNowPlaying={setNowPlaying}
          />
        </Box>
        <Box mt='md' mx='sm'>
          <SearchBar
            loading={loading}
            setLoading={setLoading}
            setResults={setResults}
            form={form}
          />
        </Box>
        <Divider mt='lg' />
      </Box>

      {hasQuery && (
        <>
          <Stack spacing='xs' mt='xs' mb='lg'>
            {results.map((searchedVideo, i) => (
              <ResultItem
                key={`${searchedVideo.videoId}-${i}`}
                searchedVideo={searchedVideo}
                setQueue={setQueue}
                queue={queue}
              />
            ))}
          </Stack>

          {results.length === 0 && hasQuery && !loading && (
            <Center>
              <Text color='dimmed' fs='italic' fz='sm'>
                press <Kbd>enter</Kbd> or <Kbd>return</Kbd> to search
              </Text>
            </Center>
          )}
        </>
      )}

      {!hasQuery && (
        <>
          <Stack spacing='xs' mt='xs' mb='lg'>
            {queue?.map((queuedVideo, i) => (
              <QueueItem
                key={`${queuedVideo.videoId}-${i}`}
                queuedVideo={queuedVideo}
                setQueue={setQueue}
              />
            ))}
          </Stack>

          {queue.length === 0 && nowPlaying && (
            <Center>
              <Text color='dimmed' fs='italic'>
                bruh... no queue?
              </Text>
            </Center>
          )}
        </>
      )}
    </Box>
  )
}
