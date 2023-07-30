import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from './utils'

type Props = {
  video: Video
  setQueue: Dispatch<SetStateAction<Video[]>>
}

export default function ResultItem({ video, setQueue }: Props) {
  const [votes, setVotes] = useState(0)

  function onClick() {
    setVotes((prev) => prev + 1)
    setQueue((prev) => [...prev, video])
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

          {votes > 0 ? (
            <Flex align='center'>
              <IconHeartFilled size={24} style={{ color: RED }} />
              {votes}
            </Flex>
          ) : (
            <IconPlus size={24} />
          )}
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
