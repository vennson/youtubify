import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber } from '../search/utils'
import { useAppStore } from '~/store/store'

type Props = {
  queuedVideo: QueueVideo
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
}

export default function QueueItem({ queuedVideo, setQueue }: Props) {
  const userId = useAppStore((state) => state.userId)
  let userInVotes = false
  if (queuedVideo?.votes) {
    userInVotes = !!queuedVideo?.votes?.find((vote) => vote.userId === userId)
  }
  const hasVotes = queuedVideo?.votes?.length && queuedVideo.votes.length > 0

  /**
   * toggles vote by appending or removing the user from Votes array of a queued video
   */
  function toggleVote(_queue: QueueVideo[]) {
    let newVotes: Vote[] = [{ userId }]

    if (queuedVideo.votes) {
      if (userInVotes) {
        newVotes = queuedVideo.votes.filter((vote) => vote.userId !== userId)
      } else {
        newVotes = [...queuedVideo.votes, { userId }]
      }
    }

    const newQueue = _queue.map((queryVid) => {
      if (queryVid.videoId === queuedVideo.videoId) {
        return { ...queryVid, votes: newVotes }
      }
      return queryVid
    })

    return newQueue
  }

  function onClick() {
    setQueue((prev) => toggleVote(prev))
  }

  /**
   * if queuedVideo has no more votes, remove it from queue
   */
  useEffect(() => {
    if (queuedVideo.votes && queuedVideo.votes.length === 0) {
      setQueue((prev) => {
        return prev.filter((vid) => vid.videoId !== queuedVideo.videoId)
      })
    }
  }, [queuedVideo.votes, queuedVideo.videoId, setQueue])

  return (
    <UnstyledButton onClick={onClick} hidden={!hasVotes}>
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
                {queuedVideo.title}
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
            {userInVotes ? (
              <IconHeartFilled size={24} style={{ color: RED }} />
            ) : (
              <IconHeart size={24} />
            )}
            {queuedVideo.votes &&
              queuedVideo.votes.length > 0 &&
              queuedVideo.votes.length}
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
