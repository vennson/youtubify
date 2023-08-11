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
import { RED, YELLOW } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from '../search/utils'
import { useAppStore } from '~/store/store'
import {
  Video,
  useVideoDeleteMutation,
  useVideoUpdateMutation,
} from '~/gql/gql'
import { useState } from 'react'
import useRefreshQueue from '~/app/hooks/useRefreshQueue'

type Props = {
  queuedVideo: Video
}

export default function QueueItem({ queuedVideo }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const disabledAction = useAppStore((state) => state.disabledAction)

  const [deleteVideo] = useVideoDeleteMutation()
  const [updateVideo] = useVideoUpdateMutation()

  const [loading, setLoading] = useState(false)
  const onRefreshQueue = useRefreshQueue()

  let userInVotes = false
  if (queuedVideo?.votes) {
    userInVotes = !!queuedVideo?.votes?.edges?.find(
      (edge) => edge?.node.id === user?.id,
    )
  }
  const voteCount = queuedVideo?.votes?.edges?.length
  const hasVotes = voteCount && voteCount > 0
  const isPlaying = queuedVideo?.isPlaying
  const isDone = queuedVideo?.isDone

  async function toggleVote() {
    // if (hasVotes && !userInVotes) return
    if (!joinedRoom || !user?.id) return

    setLoading(true)
    const linkStatus = userInVotes ? 'unlink' : 'link'

    // *if video has only 1 vote and user is the one who voted, remove video.
    if (linkStatus === 'unlink' && voteCount === 1) {
      await deleteVideo({
        variables: {
          by: { id: queuedVideo.id },
        },
      })
    } else {
      await updateVideo({
        variables: {
          by: { id: queuedVideo.id },
          input: { votes: [{ [linkStatus]: user.id }] },
        },
      })
    }

    await onRefreshQueue()
    setLoading(false)
  }

  return (
    <UnstyledButton
      onClick={toggleVote}
      hidden={!hasVotes || isPlaying || isDone}
      disabled={disabledAction}
    >
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
                {abbreviateNumber(queuedVideo.stats.views)} views ·{' '}
                {formatSeconds(queuedVideo.lengthSeconds)}
              </Text>
              <Text size='xs' color='dimmed'>
                {queuedVideo.author.title}
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
                    // <IconHeartFilled size={24} style={{ color: YELLOW }} />
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
