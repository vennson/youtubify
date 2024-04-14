import {
  Avatar,
  Box,
  Card,
  Flex,
  Loader,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import Image from 'next/image'
import { YELLOW } from '~/constants/colors'
import { abbreviateNumber } from '../Search/utils'
import { useAppStore } from '~/store'
import { useState } from 'react'
import useRefreshQueue from '~/hooks/useRefreshQueue'
import { QueueVideo } from '~/prisma/types'
import { downVoteVideo, upVoteVideo } from '~/prisma/actions'

type Props = {
  queuedVideo: QueueVideo
}

export default function QueueItem({ queuedVideo }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const disabledAction = useAppStore((state) => state.disabledAction)
  const [loading, setLoading] = useState(false)
  const onRefreshQueue = useRefreshQueue()

  const userInVotes = !!queuedVideo?.votes.find((vote) => vote?.id === user?.id)
  const voteCount = queuedVideo?.votes?.length //! filter with correct queueId
  const hasVotes = voteCount && voteCount > 0
  const isPlaying = !!queuedVideo?.playingInQueues.find(
    (q) => q.id === joinedRoom,
  )
  // const isDone = queuedVideo?.isDone //! unlink to queue instead if done

  async function toggleVote() {
    if (!joinedRoom || !user?.id) return

    setLoading(true)
    if (userInVotes) {
      await downVoteVideo({ videoId: queuedVideo.id, userId: user.id })
    } else {
      await upVoteVideo({ videoId: queuedVideo.id, userId: user.id })
    }
    await onRefreshQueue()
    setLoading(false)
  }

  return (
    <UnstyledButton
      onClick={toggleVote}
      hidden={!hasVotes || isPlaying}
      disabled={disabledAction}
    >
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={queuedVideo.thumbnailUrl || ''}
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
                {abbreviateNumber(parseInt(queuedVideo.viewCount))} views ·{' '}
                {queuedVideo.lengthText}
              </Text>
              <Text size='xs' color='dimmed'>
                {queuedVideo.channelTitle}
              </Text>
            </Box>
          </Flex>

          <Flex align='end' direction='column'>
            {loading && <Loader size={24} />}
            {!loading && (
              <>
                <Flex align='center'>
                  {userInVotes ? (
                    <IconHeartFilled size={24} style={{ color: YELLOW }} />
                  ) : (
                    <IconHeart size={24} />
                  )}
                  {voteCount}
                </Flex>
                <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
                  {queuedVideo.addedBy.name}
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
