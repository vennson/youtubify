import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled } from '@tabler/icons-react'
import Image from 'next/image'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from '../search/utils'
import { useAppStore } from '~/store/store'
import { Video, useVideoUpdateMutation } from '~/gql/gql'

type Props = {
  queuedVideo: Video
}

export default function QueueItem({ queuedVideo }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const disabledAction = useAppStore((state) => state.disabledAction)
  const setDisabledAction = useAppStore((state) => state.setDisabledAction)

  const [updateVideo] = useVideoUpdateMutation()

  let userInVotes = false
  if (queuedVideo?.votes) {
    userInVotes = !!queuedVideo?.votes?.edges?.find(
      (edge) => edge?.node.id === user?.id,
    )
  }
  const hasVotes =
    queuedVideo?.votes?.edges?.length && queuedVideo.votes.edges.length > 0
  const isPlaying = queuedVideo?.isPlaying
  const isDone = queuedVideo?.isDone

  async function toggleVote() {
    if (hasVotes && !userInVotes) return

    setDisabledAction()
    if (!joinedRoom || !user?.id) return
    const linkStatus = userInVotes ? 'unlink' : 'link'
    // await updateVideo(queuedVideo.id, user.id, linkStatus)
    await updateVideo({
      variables: {
        by: { id: queuedVideo.id },
        input: {
          votes: [{ [linkStatus]: user.id }],
        },
      },
    })
    // await refreshQueue()
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
            <Flex align='center'>
              {userInVotes ? (
                <IconHeartFilled size={24} style={{ color: RED }} />
              ) : (
                // <IconHeart size={24} />
                <IconHeartFilled size={24} style={{ color: RED }} />
              )}
              {/* {queuedVideo.votes &&
                queuedVideo.votes.edges.length > 0 &&
                queuedVideo.votes.edges.length} */}
            </Flex>
            <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
              {queuedVideo.addedBy.name}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
