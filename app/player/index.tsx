import { Box, Card } from '@mantine/core'
import ReactPlayer from 'react-player/youtube'

export default function Player({ videoId }: { videoId?: string }) {
  return (
    <Card p={0} mt='sm'>
      {true && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${'UT5F9AXjwhg'}`}
          width='100%'
          height={324}
        />
      )}
    </Card>
  )
}
