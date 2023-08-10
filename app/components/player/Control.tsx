import {
  Box,
  Button,
  Flex,
  Loader,
  Progress,
  Skeleton,
  Text,
  Tooltip,
} from '@mantine/core'
import { formatSeconds } from '../search/utils'
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
} from '@tabler/icons-react'
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react'
import YouTubePlayer from 'react-player/youtube'
import { useAppStore } from '~/store/store'

type Props = {
  playing: boolean
  setPlaying: Dispatch<SetStateAction<boolean>>
  playNext: () => void
  playerRef: RefObject<YouTubePlayer>
  loading: boolean
}

export default function Control(props: Props) {
  const { playing, setPlaying, playNext, playerRef, loading } = props
  const ownsQueue = useAppStore((state) => state.ownsQueue)

  const [currentPlayTime, setCurrentPlayTime] = useState(0)

  const playDuration = playerRef.current?.getDuration()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayTime(playerRef.current?.getCurrentTime() || 0)
    }, 200)
    return () => clearInterval(interval)
  }, [playerRef])

  return (
    <Flex gap='xs' mt='xs'>
      <Tooltip label='only the room owner can play/pause' hidden={ownsQueue}>
        <Box>
          {playing ? (
            <Button
              color='gray'
              variant='outline'
              leftIcon={<IconPlayerPauseFilled size={16} />}
              onClick={() => setPlaying(false)}
              disabled={!ownsQueue}
            >
              pause
            </Button>
          ) : (
            <Button
              leftIcon={<IconPlayerPlayFilled size={16} />}
              onClick={() => setPlaying(true)}
              disabled={!ownsQueue}
              miw={96}
            >
              play
            </Button>
          )}
        </Box>
      </Tooltip>
      <Tooltip label='only the room owner can skip' hidden={ownsQueue}>
        <Box>
          {loading ? (
            <Button disabled w={84}>
              <Loader size={16} />
            </Button>
          ) : (
            <Button
              color='gray'
              variant='outline'
              leftIcon={<IconPlayerTrackNextFilled size={16} />}
              onClick={playNext}
              disabled={!ownsQueue}
              w={84}
            >
              skip
            </Button>
          )}
        </Box>
      </Tooltip>
      <Box w='100%'>
        {currentPlayTime && playDuration && playDuration > 0 ? (
          <Progress value={(currentPlayTime / playDuration) * 100} />
        ) : (
          <Skeleton height={8} radius='xl' />
        )}

        <Flex justify='space-between'>
          <Text color='dimmed' fz='xs' mt={6}>
            {formatSeconds(currentPlayTime)}
          </Text>
          <Text color='dimmed' fz='xs' mt={6}>
            {formatSeconds(playDuration)}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}
