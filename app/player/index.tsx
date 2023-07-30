import { Button, Card, Center, Text } from '@mantine/core'
import { IconBrandYoutube, IconBrandYoutubeFilled } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

type Props = {
  queue: QueueVideo[]
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
  nowPlaying?: string
  setNowPlaying: Dispatch<SetStateAction<string | undefined>>
}

const VIDEO_HEIGHT = 324

export default function Player(props: Props) {
  const { setQueue, queue, setNowPlaying, nowPlaying } = props
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
      newQueue.shift()
      return newQueue
    })
  }, [nowPlaying, setQueue])

  return (
    <Card p={0} h={VIDEO_HEIGHT}>
      {nowPlaying && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${nowPlaying}`}
          width='100%'
          height={VIDEO_HEIGHT}
          onEnded={playNext}
          playing={true}
        />
      )}
      <Center h='100%'>
        {nextVideo ? (
          <Button onClick={playNext} leftIcon={<IconBrandYoutubeFilled />}>
            let&apos;s get rolin!
          </Button>
        ) : (
          <Text fs='italic' color='dimmed'>
            plz add songs
          </Text>
        )}
      </Center>
    </Card>
  )
}
