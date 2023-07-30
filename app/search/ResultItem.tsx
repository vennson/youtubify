import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from './utils'

type Props = {
  video: Video
  queue: QueueVideo[]
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
}

export default function ResultItem({ video, setQueue, queue }: Props) {
  const videoInQueue = queue.find(
    (queueVid) => queueVid.videoId === video.videoId,
  )

  function onClick() {
    let votes = 1
    if (videoInQueue?.votes) {
      votes = videoInQueue.votes + 1
    }
    setQueue((prev) => [...prev, { ...video, votes }])
  }

  return (
    <UnstyledButton onClick={onClick}>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={isProduction ? video.thumbnails[0].url : '/avatar.jpg'}
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='video'
              />
            </Avatar>

            <Box>
              <Text size='sm' lineClamp={1}>
                {video.title}
              </Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(video.stats.views)} views
              </Text>
              <Text size='xs' color='dimmed'>
                {video.author.title}
              </Text>
            </Box>
          </Flex>

          {videoInQueue?.votes && videoInQueue.votes > 0 ? (
            <Flex align='center'>
              <IconHeartFilled size={24} style={{ color: RED }} />
              {videoInQueue.votes}
            </Flex>
          ) : (
            <IconPlus size={24} />
          )}
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
