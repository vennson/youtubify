import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from './utils'

type Props = {
  searchedVideo: Video
  queue: QueueVideo[]
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
}

export default function ResultItem(props: Props) {
  const { searchedVideo, setQueue, queue } = props
  const videoInQueue = queue.find(
    (queuedVideo) => queuedVideo.videoId === searchedVideo.videoId,
  )

  function changeVote(_queue: QueueVideo[]) {
    let votes = 1
    if (videoInQueue?.votes) {
      votes = videoInQueue.votes + 1
    }

    let newQueue = [..._queue]
    if (videoInQueue) {
      newQueue = _queue.map((queryVid) => {
        if (queryVid.videoId === searchedVideo.videoId) {
          return { ...queryVid, votes }
        }
        return queryVid
      })
    } else {
      newQueue.push({ ...searchedVideo, votes })
    }

    console.log('newQueue', newQueue)
    return newQueue
  }

  function onClick() {
    let votes = 1
    if (videoInQueue?.votes) {
      votes = videoInQueue.votes + 1
    }
    setQueue((prev) => changeVote(prev))
  }

  return (
    <UnstyledButton onClick={onClick}>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={
                  isProduction ? searchedVideo.thumbnails[0].url : '/avatar.jpg'
                }
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='searchedVideo'
              />
            </Avatar>

            <Box>
              <Text size='sm' lineClamp={1}>
                {searchedVideo.title}
              </Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(searchedVideo.stats.views)} views
              </Text>
              <Text size='xs' color='dimmed'>
                {searchedVideo.author.title}
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
