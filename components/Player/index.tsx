import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Loader,
  Text,
  Tooltip,
} from '@mantine/core'
import {
  IconBrandYoutubeFilled,
  IconHeart,
  IconHeartFilled,
} from '@tabler/icons-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { sortQueueVideos } from '~/utils'
import { abbreviateNumber } from '../Search/utils'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import YouTubePlayer from 'react-player/youtube'
import Control from './Control'
import { useAppStore } from '~/store'
import useRefreshQueue from '~/hooks/useRefreshQueue'
import { YELLOW } from '~/constants/colors'
import {
  clearQueueNowPlaying,
  setQueueNowPlaying,
  unlinkVideoFromQueue,
} from '~/prisma/actions'

export default function Player() {
  const queueVideos = useAppStore((state) => state.queueVideos)
  const queueOwner = useAppStore((state) => state.queueOwner)
  const ownsQueue = useAppStore((state) => state.ownsQueue)
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const nowPlaying = useAppStore((state) => state.nowPlaying)
  const setNowPlaying = useAppStore((state) => state.setNowPlaying)
  const onRefreshQueue = useRefreshQueue()

  const [playing, setPlaying] = useState(true)
  const [loading, setLoading] = useState(false)
  const playerRef = useRef<YouTubePlayer>(null)

  const sortedQueue = sortQueueVideos(queueVideos)
  const pendingVideo = sortedQueue[0]

  const userInVotes = !!nowPlaying?.votes.find((vote) => vote.id === user?.id)
  const voteCount = nowPlaying?.votes?.length //! filter with correct queueId

  // *only queue owner can trigger this
  async function playNext() {
    if (!ownsQueue || !joinedRoom) return
    setLoading(true)

    const newQueue = await onRefreshQueue()
    const newVideos = newQueue?.videos

    if (!newVideos) return

    const _notYetPlayedVideos = newVideos.filter(
      (v) => !v?.playingInQueues.find((q) => q.id === joinedRoom),
    )
    const _sortedQueueVideos = sortQueueVideos(_notYetPlayedVideos)
    const _pendingVideo = _sortedQueueVideos[0]

    if (nowPlaying?.videoId) {
      // *delete played video (only works in prod)
      await unlinkVideoFromQueue({
        videoId: nowPlaying.id,
        queueId: joinedRoom,
      })
    }

    if (_pendingVideo?.videoId && user?.id && joinedRoom) {
      // *set the nowPlaying of the Queue
      await setQueueNowPlaying({
        videoId: _pendingVideo.id,
        queueId: joinedRoom,
      })

      // *refresh the new queue that actually reflects what's in db
      const newerQueue = await onRefreshQueue()

      if (newerQueue?.id && newerQueue.nowPlaying) {
        setNowPlaying(newerQueue.nowPlaying)
      }
    } else {
      // *clear nowPlaying in db
      await clearQueueNowPlaying({ queueId: joinedRoom })
      setNowPlaying(undefined)
      await onRefreshQueue()
    }

    setLoading(false)
  }

  return (
    <Box h={PLAYER_HEIGHT}>
      {!nowPlaying?.videoId && (
        <Center h='100%'>
          <Flex direction='column' align='center' gap='sm'>
            <Text>
              <b>{queueOwner?.name}&apos;s</b> room
            </Text>
            {pendingVideo?.videoId ? (
              <Tooltip label='only the room owner can start' hidden={ownsQueue}>
                <Box>
                  {loading ? (
                    <Button leftIcon={<Loader size={16} />} disabled>
                      preparing song...
                    </Button>
                  ) : (
                    <Button
                      onClick={playNext}
                      leftIcon={<IconBrandYoutubeFilled />}
                      disabled={!ownsQueue}
                    >
                      let&apos;s play!
                    </Button>
                  )}
                </Box>
              </Tooltip>
            ) : (
              <Text fs='italic' fz='sm' color='dimmed'>
                plz add songs
              </Text>
            )}
          </Flex>
        </Center>
      )}
      {nowPlaying?.videoId && (
        <>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${nowPlaying.videoId}`}
            width='100%'
            height={0}
            onEnded={playNext}
            playing={playing}
            muted={!ownsQueue}
          />
          <Box>
            <Card withBorder p='xs' shadow='sm'>
              <Flex gap='sm' justify='space-between' align='center'>
                <Flex gap='sm'>
                  <Avatar miw={60} mih={60}>
                    <Image
                      src={nowPlaying.thumbnailUrl}
                      fill
                      style={{ objectFit: 'cover', flex: 1 }}
                      alt='now playing'
                    />
                  </Avatar>
                  <Box>
                    <Text size='sm' lineClamp={1}>
                      {nowPlaying.title}
                    </Text>
                    <Text size='xs' color='dimmed'>
                      {abbreviateNumber(parseInt(nowPlaying.viewCount))} views
                    </Text>
                    <Text size='xs' color='dimmed'>
                      {nowPlaying.channelTitle}
                    </Text>
                  </Box>
                </Flex>
                <Flex align='end' direction='column'>
                  <Flex align='center'>
                    {userInVotes ? (
                      <IconHeartFilled size={24} style={{ color: YELLOW }} />
                    ) : (
                      <IconHeart size={24} />
                    )}
                    {voteCount}
                  </Flex>
                  <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
                    {nowPlaying.addedBy.name}
                  </Text>
                </Flex>
              </Flex>
              <Control
                playing={playing}
                setPlaying={setPlaying}
                playNext={playNext}
                playerRef={playerRef}
                loading={loading}
              />
            </Card>
          </Box>
        </>
      )}
    </Box>
  )
}
