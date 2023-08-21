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
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from '../search/utils'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import YouTubePlayer from 'react-player/youtube'
import Control from './Control'
import { useAppStore } from '~/store/store'
import {
  useQueueUpdateMutation,
  useVideoDeleteMutation,
  useVideoLogCreateMutation,
  useVideoUpdateMutation,
} from '~/gql/gql'
import useRefreshQueue from '~/app/hooks/useRefreshQueue'
import { sortQueue } from '~/lib/utils'
import { YELLOW } from '~/constants/colors'

export default function Player() {
  const queue = useAppStore((state) => state.queue)
  const queueOwner = useAppStore((state) => state.queueOwner)
  const ownsQueue = useAppStore((state) => state.ownsQueue)
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const nowPlaying = useAppStore((state) => state.nowPlaying)
  const setNowPlaying = useAppStore((state) => state.setNowPlaying)

  const onRefreshQueue = useRefreshQueue()

  const [updateVideo] = useVideoUpdateMutation()
  const [updateQueue] = useQueueUpdateMutation()
  const [deleteVideo] = useVideoDeleteMutation()
  const [createVideoLog] = useVideoLogCreateMutation()

  const [playing, setPlaying] = useState(true)
  const [loading, setLoading] = useState(false)
  const playerRef = useRef<YouTubePlayer>(null)

  const notYetPlayedVideos = queue.filter((v) => {
    const voteCount = v?.votes?.edges?.length
    return !v?.isPlaying && voteCount && voteCount > 0
  })
  const sortedQueue = sortQueue(notYetPlayedVideos)
  const pendingVideo = sortedQueue[0]

  let userInVotes = false
  if (nowPlaying?.votes) {
    userInVotes = !!nowPlaying?.votes?.edges?.find(
      (edge) => edge?.node.id === user?.id,
    )
  }
  const voteCount = nowPlaying?.votes?.edges?.length

  // *only queue owner can trigger this
  async function playNext() {
    if (!ownsQueue) return
    setLoading(true)

    const newQueue = await onRefreshQueue()
    const newVideos = newQueue?.videos?.edges

    if (!newVideos) return

    const _notYetPlayedVideos = newVideos.filter((v) => !v?.node.isPlaying)
    const _vidsOnly = _notYetPlayedVideos.map((v) => v?.node)
    // @ts-ignore
    const _sortedQueue = sortQueue(_vidsOnly)
    const _pendingVideo = _sortedQueue[0]

    if (nowPlaying?.videoId) {
      // *log the played video
      await createVideoLog({
        variables: {
          input: {
            video: nowPlaying,
          },
        },
      })

      // *delete played video (only works in prod)
      await deleteVideo({
        variables: {
          by: { id: nowPlaying.id },
        },
      })
    }

    if (_pendingVideo?.videoId && user?.id && joinedRoom) {
      // *set the nowPlaying of the Queue
      await updateQueue({
        variables: {
          by: { id: joinedRoom },
          input: { nowPlaying: _pendingVideo },
        },
      })

      // *mark the video as isPlaying true
      await updateVideo({
        variables: {
          by: { id: _pendingVideo.id },
          input: {
            isPlaying: true,
          },
        },
      })

      // *refresh the new queue that actually reflects what's in db
      const newerQueue = await onRefreshQueue()

      if (newerQueue?.id && newerQueue.nowPlaying) {
        setNowPlaying(newerQueue.nowPlaying)
      }
    } else {
      // *clear nowPlaying in db
      await updateQueue({
        variables: {
          by: { id: joinedRoom },
          input: { nowPlaying: null },
        },
      })
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
                      let&apos;s get rolin!
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
                <Avatar miw={60} mih={60}>
                  <Image
                    src={
                      isProduction
                        ? nowPlaying.thumbnail[0].url
                          ? nowPlaying.thumbnail[0].url
                          : '/avatar.jpg'
                        : '/avatar.jpg'
                    }
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
