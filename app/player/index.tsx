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
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { dummyQueue } from '~/constants/dummy'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from '../search/utils'
import { PLAYER_HEIGHT } from '~/constants/numbers'

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

  return (
    <Box h={PLAYER_HEIGHT}>
      {nowPlaying && (
        <>
          <ReactPlayer
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

              <Flex gap='xs' mt='xs'>
                {playing ? (
                  <Button
                    color='gray'
                    variant='outline'
                    leftIcon={<IconPlayerPauseFilled size={16} />}
                    onClick={() => setPlaying(false)}
                  >
                    pause
                  </Button>
                ) : (
                  <Button
                    leftIcon={<IconPlayerPlayFilled size={16} />}
                    onClick={() => setPlaying(true)}
                    miw={96}
                  >
                    play
                  </Button>
                )}
                <Button
                  color='gray'
                  variant='outline'
                  leftIcon={<IconPlayerTrackNextFilled size={16} />}
                  onClick={playNext}
                >
                  skip
                </Button>
                <Box w='100%'>
                  <Progress value={50} />
                  <Text color='dimmed' fz='xs' mt={6}>
                    3:40
                  </Text>
                </Box>
              </Flex>
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
