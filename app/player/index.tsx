import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Progress,
  Text,
} from '@mantine/core'
import {
  IconBrandYoutubeFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
} from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { dummyQueue } from '~/constants/dummy'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from '../search/utils'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import YouTubePlayer from 'react-player/youtube'
import Control from './Control'

type Props = {
  queue: QueueVideo[]
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
  nowPlaying?: string
  setNowPlaying: Dispatch<SetStateAction<string | undefined>>
}

export default function Player(props: Props) {
  const { setQueue, queue, setNowPlaying, nowPlaying } = props
  const [playing, setPlaying] = useState(true)
  const [currentVidInfo, setCurrentVidInfo] = useState<QueueVideo>(
    dummyQueue[0],
  )
  const playerRef = useRef<YouTubePlayer>(null)
  const currentPlayTime = playerRef.current?.getCurrentTime()
  const playDuration = playerRef.current?.getDuration()
  // const playProgress = currentPlayTime / playDuration
  const nextVideo = queue[0]

  function playNext() {
    if (nextVideo?.videoId) {
      setNowPlaying(nextVideo.videoId)
    } else {
      setNowPlaying('')
    }
  }

  useEffect(() => {
    setQueue((prev) => {
      const newQueue = [...prev]
      const shiftedVideo = newQueue.shift()

      if (shiftedVideo) {
        setCurrentVidInfo(shiftedVideo)
      }
      return newQueue
    })
  }, [nowPlaying, setQueue])

  // const duration = playerRef.current?.getDuration()

  // console.log('orig duration', duration)
  // console.log('format', formatSeconds(duration))

  return (
    <Box h={PLAYER_HEIGHT}>
      {nowPlaying && (
        <>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${nowPlaying}`}
            width='100%'
            height={0}
            onEnded={playNext}
            playing={playing}
          />
          <Box>
            <Card withBorder p='xs' shadow='sm'>
              <Flex gap='sm' align='center'>
                <Avatar miw={60} mih={60}>
                  <Image
                    src={
                      isProduction
                        ? currentVidInfo.thumbnails[0].url
                        : '/avatar.jpg'
                    }
                    fill
                    style={{ objectFit: 'cover', flex: 1 }}
                    alt='currentVidInfo'
                  />
                </Avatar>

                <Box>
                  <Text size='sm' lineClamp={1}>
                    {currentVidInfo.title}
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {abbreviateNumber(currentVidInfo.stats.views)} views
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {currentVidInfo.author.title}
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

      {!nowPlaying && (
        <Center h='100%'>
          {nextVideo ? (
            <Button onClick={playNext} leftIcon={<IconBrandYoutubeFilled />}>
              let&apos;s get rolin!
            </Button>
          ) : (
            <Text fs='italic' fz='sm' color='dimmed'>
              plz add songs
            </Text>
          )}
        </Center>
      )}
    </Box>
  )
}
