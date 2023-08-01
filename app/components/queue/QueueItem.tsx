import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import Image from 'next/image'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from '../search/utils'
import { useAppStore } from '~/store/store'
import { refreshQueue, updateVideo } from '~/graphql/actions'

type Props = {
  queuedVideo: DBVideo
}

export default function QueueItem({ queuedVideo }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const disabledAction = useAppStore((state) => state.disabledAction)
  const setDisabledAction = useAppStore((state) => state.setDisabledAction)

  let userInVotes = false
  if (queuedVideo?.node.votes) {
    userInVotes = !!queuedVideo?.node.votes?.edges.find(
      (edge) => edge.node.id === user?.id,
    )
  }
  const hasVotes =
    queuedVideo?.node.votes?.edges.length &&
    queuedVideo.node.votes.edges.length > 0

  async function toggleVote() {
    setDisabledAction()
    if (!joinedRoom || !user?.id) return
    const linkStatus = userInVotes ? 'unlink' : 'link'
    await updateVideo(queuedVideo.node.id, user.id, linkStatus)
    await refreshQueue()
  }

  // console.log('disabledAction', disabledAction)

  return (
    <UnstyledButton
      onClick={toggleVote}
      hidden={!hasVotes}
      disabled={disabledAction}
    >
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={
                  isProduction
                    ? queuedVideo.node.thumbnails[0].url
                    : '/avatar.jpg'
                }
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='queuedVideo'
              />
            </Avatar>

            <Box>
              <Text size='sm' lineClamp={1}>
                {queuedVideo.node.title}
              </Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(queuedVideo.node.stats.views)} views ·{' '}
                {formatSeconds(queuedVideo.node.lengthSeconds)}
              </Text>
              <Text size='xs' color='dimmed'>
                {queuedVideo.node.author.title}
              </Text>
            </Box>
          </Flex>

          <Flex align='end' direction='column'>
            <Flex align='center'>
              {userInVotes ? (
                <IconHeartFilled size={24} style={{ color: RED }} />
              ) : (
                <IconHeart size={24} />
              )}
              {queuedVideo.node.votes &&
                queuedVideo.node.votes.edges.length > 0 &&
                queuedVideo.node.votes.edges.length}
            </Flex>
            <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
              {queuedVideo.node.addedBy.name}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
