import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import { IconBrandYoutubeFilled } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from '../search/utils'
import { PLAYER_HEIGHT } from '~/constants/numbers'
import YouTubePlayer from 'react-player/youtube'
import Control from './Control'
import { useAppStore } from '~/store/store'

type Props = {
  nowPlaying?: string
  setNowPlaying: Dispatch<SetStateAction<string | undefined>>
}

export default function Player(props: Props) {
  const { setNowPlaying, nowPlaying } = props
  const queue = useAppStore((state) => state.queue)
  const queueOwner = useAppStore((state) => state.queueOwner)
  const ownsQueue = useAppStore((state) => state.ownsQueue)

  const [playing, setPlaying] = useState(true)
  const [currentVidInfo, setCurrentVidInfo] = useState<DBVideo>()
  const playerRef = useRef<YouTubePlayer>(null)

  const nextVideo = queue[0]

  function playNext() {
    if (nextVideo?.node.videoId) {
      setNowPlaying(nextVideo.node.videoId)
    } else {
      setNowPlaying('')
    }
  }

  // !do for grafbase
  // useEffect(() => {
  //   setQueue((prev) => {
  //     const newQueue = [...prev]
  //     const shiftedVideo = newQueue.shift()

  //     if (shiftedVideo) {
  //       setCurrentVidInfo(shiftedVideo)
  //     }
  //     return newQueue
  //   })
  // }, [nowPlaying, setQueue])

  return (
    <Box h={PLAYER_HEIGHT}>
      {!nowPlaying && (
        <Center h='100%'>
          <Flex direction='column' align='center' gap='sm'>
            <Text>
              <b>{queueOwner?.name}&apos;s</b> room
            </Text>
            {nextVideo ? (
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
                        ? currentVidInfo?.node.thumbnails[0].url
                          ? currentVidInfo?.node.thumbnails[0].url
                          : '/avatar.jpg'
                        : '/avatar.jpg'
                    }
                    fill
                    style={{ objectFit: 'cover', flex: 1 }}
                    alt='currentVidInfo?.node'
                  />
                </Avatar>

                <Box>
                  <Text size='sm' lineClamp={1}>
                    {currentVidInfo?.node.title}
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {abbreviateNumber(currentVidInfo?.node.stats.views)} views
                  </Text>
                  <Text size='xs' color='dimmed'>
                    {currentVidInfo?.node.author.title}
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
