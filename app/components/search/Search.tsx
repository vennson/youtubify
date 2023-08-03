'use client'

import { Box, Center, Divider, Kbd, Skeleton, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useCallback, useEffect, useState } from 'react'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import QueueItem from '../queue/QueueItem'
import { useAppStore } from '~/store/store'
import Player from '../player/Player'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import { joinRoomIfExists, refreshQueue } from '~/graphql/actions'
import { useRouter } from 'next/navigation'
import usePollQueue from '~/app/hooks/usePollQueue'

type Props = {
  roomId: string
}

const UPPER_BODY_HEIGHT = PLAYER_HEIGHT + 130
const POLL_QUEUE_INTERVAL = 1000

export default function SearchPage({ roomId }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const initUser = useAppStore((state) => state.initUser)
  const queue = useAppStore((state) => state.queue)
  const ownsQueue = useAppStore((state) => state.ownsQueue)
  const setPendingRoom = useAppStore((state) => state.setPendingRoom)
  const disabledAction = useAppStore((state) => state.disabledAction)
  const setDisabledAction = useAppStore((state) => state.setDisabledAction)

  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>([])
  const [firstQueueRefreshed, setFirstQueueRefreshed] = useState(false)
  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const router = useRouter()
  const hasQuery = form.values.query.length > 0

  const joinRoomOrRedirect = useCallback(
    async (roomId: string) => {
      const queueId = await joinRoomIfExists(roomId)
      if (queueId) {
        await setJoinedRoom(roomId)
      } else {
        router.push(`/`)
      }
    },
    [router, setJoinedRoom],
  )

  const _initUser = useCallback(async () => {
    const hasSession = await initUser()
    console.log('hasSession', hasSession)
    if (!hasSession) {
      setPendingRoom(roomId)
      router.push('/')
    }
  }, [initUser, roomId, router, setPendingRoom])

  useEffect(() => {
    if (!user?.id) {
      _initUser()
    }
  }, [_initUser, initUser, roomId, router, setPendingRoom, user?.id])

  useEffect(() => {
    if (!joinedRoom && user?.id) {
      joinRoomOrRedirect(roomId)
    }
  }, [joinRoomOrRedirect, joinedRoom, roomId, user?.id])

  useEffect(() => {
    // const pollQueue = setInterval(() => {
    //   console.log('refreshing queue...')
    //   refreshQueue()
    // }, POLL_QUEUE_INTERVAL)

    const firstPollLoading = setTimeout(
      () => setFirstQueueRefreshed(true),
      POLL_QUEUE_INTERVAL + 5000,
    )

    return () => {
      // clearInterval(pollQueue)
      clearTimeout(firstPollLoading)
    }
  }, [])

  const refreshPaused = usePollQueue()
  // console.log('refreshPaused', refreshPaused)

  useEffect(() => {
    refreshQueue()
  }, [])

  return (
    joinedRoom && (
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
            <Player />
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
                  key={`${queuedVideo.node.videoId}-${i}`}
                  queuedVideo={queuedVideo}
                />
              ))}
            </Stack>

            {!firstQueueRefreshed && queue.length === 0 && (
              <Skeleton mt='md' height={82} radius='sm' />
            )}

            {queue.length === 0 && firstQueueRefreshed && (
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
  )
}
