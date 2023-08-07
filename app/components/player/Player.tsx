import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
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
import { UPDATE_QUEUE, UPDATE_VIDEO } from '~/graphql/mutations'
import { useMutation } from '@apollo/client'

export default function Player() {
  const queue = useAppStore((state) => state.queue)
  const queueOwner = useAppStore((state) => state.queueOwner)
  const ownsQueue = useAppStore((state) => state.ownsQueue)
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const nowPlaying = useAppStore((state) => state.nowPlaying)
  const setNowPlaying = useAppStore((state) => state.setNowPlaying)

  const [updateVideo] = useMutation<VideoUpdateResponse>(UPDATE_VIDEO)
  const [updateQueue] = useMutation<QueueUpdateResponse>(UPDATE_QUEUE)

  const [playing, setPlaying] = useState(true)
  const playerRef = useRef<YouTubePlayer>(null)

  const notYetPlayedVideos = queue.filter((v) => !v.node.isPlaying)
  const pendingVideo = notYetPlayedVideos[0]

  // *only queue owner can trigger this
  async function playNext() {
    if (!ownsQueue) return
    console.log('playNext')
    console.log('queue', queue)
    console.log('pendingVideo', pendingVideo)

    // *delete old video
    if (nowPlaying?.node.videoId) {
      // console.log('🚀marking prev vid as done or deleting it, if theres any')
      // const resUpdate = await updateVideo(
      //   nowPlaying.node.id,
      //   undefined,
      //   undefined,
      //   undefined,
      //   true,
      // )
      // console.log('updateVideo isDone', resUpdate)
      // const resDelete = await deleteVideo(nowPlaying.node.id)
      // console.log('deleteVideo resDelete', resDelete)
    }

    if (pendingVideo?.node.videoId && user?.id && joinedRoom) {
      console.log('🚀playing the next video')

      // *set the nowPlaying of the Queue
      // const resNewQueue = await updateQueue(joinedRoom, pendingVideo)
      const resNewQueue = await updateQueue({
        variables: {
          by: { id: joinedRoom },
          input: { nowPlaying: pendingVideo },
        },
      })
      console.log('updateQueue', resNewQueue)

      // *mark the video as isPlaying true
      // const resVid = await updateVideo(
      //   pendingVideo.node.id,
      //   undefined,
      //   undefined,
      //   true,
      // )
      const resVid = await updateVideo({
        variables: {
          by: { id: pendingVideo.node.id },
          input: {
            isPlaying: true,
          },
        },
      })
      console.log('updateVideo isPlaying', resVid)

      // *refresh the queue that actually reflects the db
      // !put in useEffect cause live update
      // const refreshedQueue = await refreshQueue()
      // console.log('refreshQueue', refreshedQueue)

      // if (refreshedQueue?.id) {
      //   if (refreshedQueue.nowPlaying) {
      //     setNowPlaying(refreshedQueue.nowPlaying)
      //   }
      // }
    } else {
      // console.log('🚀clearing the nowPlaying')
      // setNowPlaying(undefined)
    }
  }

  // // *double check to make sure now playing is marked as isPlaying true
  // const makeSureNowPlayingIsPlayingTrue = useCallback(async () => {
  //   if (nowPlaying?.node.videoId && user?.id && joinedRoom) {
  //     console.log('🚀marking nowPlaying as isPlaying true')
  //     const res = await updateVideo(
  //       nowPlaying.node.id,
  //       undefined,
  //       undefined,
  //       true,
  //     )
  //     console.log('updateVideo 2', res)
  //   }
  // }, [joinedRoom, nowPlaying?.node.id, nowPlaying?.node.videoId, user?.id])

  // useEffect(() => {
  //   if (!ownsQueue || !nowPlaying) return
  //   makeSureNowPlayingIsPlayingTrue()
  // }, [makeSureNowPlayingIsPlayingTrue, nowPlaying, ownsQueue])

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
                  <Button
                    onClick={playNext}
                    leftIcon={<IconBrandYoutubeFilled />}
                    disabled={!ownsQueue}
                  >
                    let&apos;s get rolin!
                  </Button>
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
