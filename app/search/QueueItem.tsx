import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeart, IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from './utils'

type Props = {
  queuedVideo: QueueVideo
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
}

export default function QueueItem({ queuedVideo, setQueue }: Props) {
  const [voted, setVoted] = useState(false)

  function changeVote(_queue: QueueVideo[]) {
    let votes = 1
    if (queuedVideo.votes) {
      votes = queuedVideo.votes + 1
    }

    const newQueue = _queue.map((queryVid) => {
      if (queryVid.videoId === queuedVideo.videoId) {
        return { ...queryVid, votes }
      }
      return queryVid
    })

    return newQueue
  }

  function onClick() {
    let votes = 1
    if (queuedVideo.votes) {
      votes = queuedVideo.votes + 1
    }
    setQueue((prev) => changeVote(prev))
    setVoted(true)
  }

  return (
    <UnstyledButton onClick={onClick}>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={
                  isProduction ? queuedVideo.thumbnails[0].url : '/avatar.jpg'
                }
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='queuedVideo'
              />
            </Avatar>

            <Box>
              <Text size='sm' lineClamp={1}>
                {queuedVideo.title} queue
              </Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(queuedVideo.stats.views)} views
              </Text>
              <Text size='xs' color='dimmed'>
                {queuedVideo.author.title}
              </Text>
            </Box>
          </Flex>

          <Flex align='center'>
            {voted ? (
              <IconHeartFilled size={24} style={{ color: RED }} />
            ) : (
              <IconHeart size={24} />
            )}
            {queuedVideo.votes && queuedVideo.votes > 0 && queuedVideo.votes}
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
