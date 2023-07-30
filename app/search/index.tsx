'use client'

import {
  Box,
  Button,
  Center,
  Divider,
  Kbd,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from '../queue/QueueItem'
import { useAppStore } from '~/store/store'
import Player from '../player'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import { createQueue, createUser, getQueueByOwner } from '~/lib/actions'
import WelcomeModal from '../welcome'

type Props = {
  roomId: string
}

const UPPER_BODY_HEIGHT = PLAYER_HEIGHT + 130

export default function SearchPage({ roomId }: Props) {
  console.log('roomId', roomId)
  // const initUserId = useAppStore((state) => state.initUserId)
  const user = useAppStore((state) => state.user)
  const initUser = useAppStore((state) => state.initUser)
  const userId = useAppStore((state) => state.userId)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>([])
  const [queue, setQueue] = useState<QueueVideo[]>([])
  // const [welcomeModalOpened, setWelcomeModalOpened] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<string>()
  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const hasQuery = form.values.query.length > 0

  async function test() {
    // await createQueue(userId)
    // const res = await getQueueByOwner(userId)
    const res = await createUser('meme')
    console.log('res', res)
  }

  useEffect(() => {
    if (!user?.id) {
      initUser()
    }
  }, [initUser, user?.id])

  useEffect(() => {
    // get queue from db using roomId
  })

  return (
    <Box maw={600} mx='auto' mt={UPPER_BODY_HEIGHT} px='sm'>
      {/* <Button onClick={test}>test</Button> */}

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
              <Text color='dimmed' fs='italic' fz='sm'>
                bruh... no queue?
              </Text>
            </Center>
          )}
        </>
      )}
    </Box>
  )
}
