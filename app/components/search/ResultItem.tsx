import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'
import { useAppStore } from '~/store/store'
import {
  useQueueQuery,
  useVideoCreateMutation,
  useVideoUpdateMutation,
} from '~/gql/gql'
import { abbreviateNumber, formatSeconds } from './utils'
import { refreshQueue } from '~/graphql/actions'
import useRefreshQueue from '~/app/hooks/useRefreshQueue'

type Props = {
  searchedVideo: Video
  queue: DBVideo[]
}

export default function ResultItem(props: Props) {
  const { searchedVideo } = props
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const queue = useAppStore((state) => state.queue)
  // const setDisabledAction = useAppStore((state) => state.setDisabledAction)

  const [createVideo, { loading }] = useVideoCreateMutation()
  const [updateVideo] = useVideoUpdateMutation()
  // const { refetch: refetchQueue } = useQueueQuery({
  //   variables: { id: joinedRoom },
  // })

  const onRefreshQueue = useRefreshQueue()

  const queuedVideo = queue.find(
    (queueVid) => queueVid.node.videoId === searchedVideo.videoId,
  )
  const alreadyPlayed = queuedVideo?.node?.isPlaying
  const voteCount = queuedVideo?.node.votes?.edges.length
  const hasVotes = voteCount && voteCount > 0

  let userInVotes = false
  if (hasVotes) {
    userInVotes = !!queuedVideo?.node.votes?.edges.find(
      (edge) => edge.node.id === user?.id,
    )
  }

  async function onClickResultItem() {
    // if (hasVotes && !userInVotes) return

    if (!joinedRoom || !user?.id) return

    if (queuedVideo) {
      const linkStatus = userInVotes ? 'unlink' : 'link'
      const res = await updateVideo({
        variables: {
          by: { id: queuedVideo.node.id },
          input: { votes: [{ [linkStatus]: user.id }] },
        },
      })
    } else {
      const res = await createVideo({
        variables: {
          input: {
            author: searchedVideo.author,
            lengthSeconds: searchedVideo.lengthSeconds,
            stats: searchedVideo.stats,
            thumbnails: searchedVideo.thumbnails,
            title: searchedVideo.title,
            videoId: searchedVideo.videoId,
            queue: { link: joinedRoom },
            votes: [{ link: user.id }],
            addedBy: {
              id: user.id,
              name: user.name,
            },
          },
        },
      })
    }

    await onRefreshQueue()
  }

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
