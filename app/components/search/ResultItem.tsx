import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { RED } from '~/constants/colors'
import { createVideo, refreshQueue, updateVideo } from '~/graphql/actions'
import { isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from './utils'
import { useAppStore } from '~/store/store'
import { useState } from 'react'

type Props = {
  searchedVideo: Video
  queue: DBVideo[]
}

export default function ResultItem(props: Props) {
  const { searchedVideo } = props
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const queue = useAppStore((state) => state.queue)
  const disabledAction = useAppStore((state) => state.disabledAction)
  const setDisabledAction = useAppStore((state) => state.setDisabledAction)
  const [loading, setLoading] = useState(false)

  const queuedVideo = queue.find(
    (queuedVideo) => queuedVideo.node.videoId === searchedVideo.videoId,
  )
  const alreadyPlayed = queuedVideo?.node.isPlaying

  let userInVotes = false
  if (
    queuedVideo?.node.votes.edges.length &&
    queuedVideo?.node.votes.edges.length > 0
  ) {
    userInVotes = !!queuedVideo?.node.votes.edges.find(
      (edge) => edge.node.id === user?.id,
    )
  }

  async function onClickResultItem() {
    console.count('onClickResultItem')
    setLoading(true)
    setDisabledAction()
    if (!joinedRoom || !user?.id) return

    if (queuedVideo) {
      const linkStatus = userInVotes ? 'unlink' : 'link'
      console.log('updateVideo linkStatus:', linkStatus)
      const res = await updateVideo(queuedVideo.node.id, user.id, linkStatus)
      console.log('res', res)
    } else {
      console.log('createVideo:', createVideo)
      const res = await createVideo(
        searchedVideo,
        joinedRoom,
        user.id,
        user.name,
      )
      console.log('res', res)
    }

    const res = await refreshQueue()
    if (res) {
      console.log('res', res)
      setLoading(false)
    }
  }

  // console.log('disabledAction', disabledAction)

  return (
    <UnstyledButton onClick={onClickResultItem} disabled={loading}>
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
              <Text
                size='sm'
                lineClamp={1}
                color={alreadyPlayed ? 'dimmed' : undefined}
              >
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
            <Flex direction='column' align='end'>
              <Flex align='center'>
                <IconHeartFilled size={24} style={{ color: RED }} />
                {queuedVideo.node.votes.edges.length}
              </Flex>
              <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
                {queuedVideo.node.addedBy.name}
              </Text>
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
