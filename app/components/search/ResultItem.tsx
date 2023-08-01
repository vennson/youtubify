import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { RED } from '~/constants/colors'
import { createVideo, getQueue, updateVideo } from '~/graphql/actions'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from './utils'
import { useAppStore } from '~/store/store'

type Props = {
  searchedVideo: Video
  queue: QueueVideo[]
}

export default function ResultItem(props: Props) {
  const { searchedVideo } = props
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const queue = useAppStore((state) => state.queue)
  const setQueue = useAppStore((state) => state.setQueue)

  const queuedVideo = queue.find(
    (queuedVideo) => queuedVideo.node.videoId === searchedVideo.videoId,
  )

  let userInVotes = false
  if (
    queuedVideo?.node.votes.edges.length &&
    queuedVideo?.node.votes.edges.length > 0
  ) {
    userInVotes = !!queuedVideo?.node.votes.edges.find(
      (edge) => edge.node.id === user?.id,
    )
  }

  //! move somewhere
  async function refreshQueue() {
    if (!joinedRoom) return

    const { queue: dbQueue } = await getQueue(joinedRoom)
    console.log('dbQueue.owner', dbQueue.owner)
    setQueue(dbQueue.videos.edges)
  }

  async function onClickResultItem() {
    if (!joinedRoom || !user?.id) return

    if (queuedVideo) {
      const linkStatus = userInVotes ? 'unlink' : 'link'
      await updateVideo(queuedVideo.node.id, user.id, linkStatus)
    } else {
      await createVideo(searchedVideo, joinedRoom, user.id)
    }

    await refreshQueue()
  }

  return (
    <UnstyledButton onClick={onClickResultItem}>
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
                {abbreviateNumber(searchedVideo.stats.views)} views ·{' '}
                {formatSeconds(searchedVideo.lengthSeconds)}
              </Text>
              <Text size='xs' color='dimmed'>
                {searchedVideo.author.title}
              </Text>
            </Box>
          </Flex>

          {queuedVideo?.node.votes &&
          queuedVideo.node.votes.edges.length > 0 ? (
            <Flex align='center'>
              <IconHeartFilled size={24} style={{ color: RED }} />
              {queuedVideo.node.votes.edges.length}
            </Flex>
          ) : (
            <Box miw={24}>
              <IconPlus size={24} />
            </Box>
          )}
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
