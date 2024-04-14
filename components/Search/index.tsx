'use client'

import { Box, Center, Divider, Kbd, Skeleton, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '~/store'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import QueueItem from '../Queue/QueueItem'
import Player from '../Player'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import useRefreshQueue from '~/hooks/useRefreshQueue'
import { sortQueueVideos } from '~/utils'
import { joinRoomIfExists } from '~/prisma/actions'

type Props = {
  roomId: string
}

const UPPER_BODY_HEIGHT = PLAYER_HEIGHT + 130

export default function Search({ roomId }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const initUser = useAppStore((state) => state.initUser)
  const setPendingRoom = useAppStore((state) => state.setPendingRoom)
  const queueVideos = useAppStore((state) => state.queueVideos)
  // const queueLoading = useAppStore((state) => state.queueLoading)

  const onRefreshQueue = useRefreshQueue()
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<SearchVideo[]>([])
  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const router = useRouter()
  const { push } = router

  const hasQuery = form.values.query.length > 0
  // const notYetPlayedVideos = queueVideos.filter((video) => {
  //   const voteCount = video?.votes?.length
  //   const isPlaying = video?.playingInQueues.find((q) => q.id === joinedRoom)
  //   return !isPlaying && voteCount > 0
  // })
  const sortedQueue = sortQueueVideos(queueVideos)

  const joinRoomOrRedirect = useCallback(
    async (roomId: number) => {
      const queueId = await joinRoomIfExists(roomId)
      if (queueId) {
        await setJoinedRoom(roomId)
      } else {
        push(`/`)
      }
    },
    [push, setJoinedRoom],
  )

  const _initUser = useCallback(async () => {
    const hasSession = await initUser()
    if (!hasSession) {
      setPendingRoom(roomId)
      push('/')
    }
  }, [initUser, roomId, push, setPendingRoom])

  useEffect(() => {
    if (!user?.id) {
      _initUser()
    }
  }, [_initUser, initUser, roomId, router, setPendingRoom, user?.id])

  useEffect(() => {
    if (!joinedRoom && user?.id) {
      joinRoomOrRedirect(parseInt(roomId))
    }
  }, [joinRoomOrRedirect, joinedRoom, roomId, user?.id])

  useEffect(() => {
    onRefreshQueue()
  }, [onRefreshQueue, joinedRoom])

  if (!joinedRoom) return null

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
            {sortedQueue?.map(
              (queuedVideo, i) =>
                queuedVideo && (
                  <QueueItem
                    key={`${queuedVideo.videoId}-${i}`}
                    queuedVideo={queuedVideo}
                  />
                ),
            )}
          </Stack>
          {queueVideos.length === 0 && (
            <Skeleton mt='md' height={82} radius='sm' />
          )}
          {sortedQueue.length === 0 && (
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
