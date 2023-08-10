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
import { IconBrandYoutubeFilled } from '@tabler/icons-react'
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
  useVideoUpdateMutation,
} from '~/gql/gql'
import useRefreshQueue from '~/app/hooks/useRefreshQueue'

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

  const [playing, setPlaying] = useState(true)
  const [loading, setLoading] = useState(false)
  const playerRef = useRef<YouTubePlayer>(null)

  const notYetPlayedVideos = queue.filter((v) => {
    const voteCount = v.node.votes?.edges.length
    return !v.node.isPlaying && voteCount && voteCount > 0
  })
  const pendingVideo = notYetPlayedVideos[0]

  // *only queue owner can trigger this
  async function playNext() {
    if (!ownsQueue) return
    setLoading(true)

    const newQueue = await onRefreshQueue()
    const newVideos = newQueue?.videos?.edges

    if (!newVideos) return

    const _notYetPlayedVideos = newVideos.filter((v) => !v?.node.isPlaying)
    const _pendingVideo = _notYetPlayedVideos[0]
    console.log('_pendingVideo', _pendingVideo)

    if (nowPlaying?.node.videoId) {
      // *delete old video
      const resVid = await deleteVideo({
        variables: {
          by: { id: nowPlaying.node.id },
        },
      })
    }

    if (_pendingVideo?.node.videoId && user?.id && joinedRoom) {
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
          by: { id: _pendingVideo.node.id },
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
      onRefreshQueue()
    }

    setLoading(false)
  }

  return (
    <Box h={PLAYER_HEIGHT}>
      {!nowPlaying?.node.videoId && (
        <Center h='100%'>
          <Flex direction='column' align='center' gap='sm'>
            <Text>
              <b>{queueOwner?.name}&apos;s</b> room
            </Text>
            {pendingVideo?.node.videoId ? (
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

      {nowPlaying?.node.videoId && (
        <>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${nowPlaying.node.videoId}`}
            width='100%'
            height={0}
            onEnded={playNext}
            playing={playing}
            muted={!ownsQueue}
          />
          <Box>
            <Card withBorder p='xs' shadow='sm'>
              <Flex gap='sm' align='center'>
                <Avatar miw={60} mih={60}>
                  <Image
                    src={
                      isProduction
                        ? nowPlaying.node.thumbnails[0].url
                          ? nowPlaying.node.thumbnails[0].url
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
                    {nowPlaying.node.title}
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {abbreviateNumber(nowPlaying.node.stats.views)} views
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {nowPlaying.node.author.title}
                  </Text>
                </Box>
              </Flex>

              <Control
                playing={playing}
                setPlaying={setPlaying}
                playNext={playNext}
                playerRef={playerRef}
              />
            </Card>
          </Box>
        </>
      )}
    </Box>
  )
}
