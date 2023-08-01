'use client'

import { Box, Center, Divider, Kbd, Stack, Text } from '@mantine/core'
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

type Props = {
  roomId: string
}

const UPPER_BODY_HEIGHT = PLAYER_HEIGHT + 130

export default function SearchPage({ roomId }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const initUser = useAppStore((state) => state.initUser)
  const queue = useAppStore((state) => state.queue)
  const ownsQueue = useAppStore((state) => state.ownsQueue)
  const setPendingRoom = useAppStore((state) => state.setPendingRoom)

  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>([])
  const [nowPlaying, setNowPlaying] = useState<string>()
  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const hasQuery = form.values.query.length > 0
  const router = useRouter()

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

  useEffect(() => {
    if (!user?.id) {
      const hasSession = initUser()
      if (!hasSession) {
        setPendingRoom(roomId)
        router.push('/')
      }
    }
  }, [initUser, roomId, router, setPendingRoom, user?.id])

  useEffect(() => {
    if (!joinedRoom && user?.id) {
      joinRoomOrRedirect(roomId)
    }
  }, [joinRoomOrRedirect, joinedRoom, roomId, user?.id])

  useEffect(() => {
    const interval = setInterval(() => {
      refreshQueue()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log('ownsQueue', ownsQueue)

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
            <Player nowPlaying={nowPlaying} setNowPlaying={setNowPlaying} />
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
  )
}
