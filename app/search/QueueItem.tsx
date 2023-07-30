import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeart, IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from './utils'

export default function QueueItem({ video }: { video: Video }) {
  const [votes, setVotes] = useState(0)
  const [voted, setVoted] = useState(false)

  function onClick() {
    setVotes((prev) => prev + 1)
    setVoted(true)
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
                {video.title} queue
              </Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(video.stats.views)} views
              </Text>
              <Text size='xs' color='dimmed'>
                {video.author.title}
              </Text>
            </Box>
          </Flex>

          <Flex align='center'>
            {voted ? (
              <IconHeartFilled size={24} style={{ color: RED }} />
            ) : (
              <IconHeart size={24} />
            )}
            {votes > 0 && votes}
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
