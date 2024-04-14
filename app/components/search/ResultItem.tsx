import {
  Avatar,
  Box,
  Card,
  Flex,
  Loader,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { RED, YELLOW } from '~/constants/colors'
import { isProduction } from '~/utils'
import { useAppStore } from '~/store/store'
import {
  Video,
  useVideoCreateMutation,
  useVideoDeleteMutation,
  useVideoUpdateMutation,
} from '~/gql/gql'
import { abbreviateNumber } from './utils'
import useRefreshQueue from '~/app/hooks/useRefreshQueue'
import { useState } from 'react'

type Props = {
  searchedVideo: SearchVideo
  queue: (Video | undefined)[]
}

export default function ResultItem(props: Props) {
  const { searchedVideo } = props
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const queue = useAppStore((state) => state.queue)

  const [createVideo, { loading: videoCreateLoading }] =
    useVideoCreateMutation()
  const [updateVideo] = useVideoUpdateMutation()
  const [deleteVideo] = useVideoDeleteMutation()

  const [loading, setLoading] = useState(false)
  const onRefreshQueue = useRefreshQueue()

  const queuedVideo = queue.find(
    (queueVid) => queueVid?.videoId === searchedVideo.videoId,
  )
  const alreadyPlayed = queuedVideo?.isPlaying
  const voteCount = queuedVideo?.votes?.edges?.length
  const hasVotes = voteCount && voteCount > 0

  let userInVotes = false
  if (hasVotes) {
    userInVotes = !!queuedVideo?.votes?.edges?.find(
      (edge) => edge?.node.id === user?.id,
    )
  }

  async function onClickResultItem() {
    if (!joinedRoom || !user?.id) return
    setLoading(true)

    if (queuedVideo) {
      const linkStatus = userInVotes ? 'unlink' : 'link'

      // *if video has only 1 vote and user is the one who voted, remove video
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
    } else {
      await createVideo({
        variables: {
          input: {
            channelTitle: searchedVideo.channelTitle || '',
            lengthText: searchedVideo.lengthText || '',
            viewCount: searchedVideo.viewCount || '',
            thumbnail: searchedVideo.thumbnail || [],
            title: searchedVideo.title,
            videoId: searchedVideo.videoId || '',
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
    setLoading(false)
  }

  return (
    <UnstyledButton onClick={onClickResultItem} disabled={videoCreateLoading}>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={
                  isProduction
                    ? searchedVideo.thumbnail?.[0].url || ''
                    : '/avatar.jpg'
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
                {abbreviateNumber(parseInt(searchedVideo.viewCount || '0'))}{' '}
                views · {searchedVideo.lengthText}
              </Text>
              <Text size='xs' color='dimmed'>
                {searchedVideo.channelTitle}
              </Text>
            </Box>
          </Flex>

          {hasVotes ? (
            <Flex direction='column' align='end'>
              {loading && <Loader size={24} />}
              {!loading && (
                <>
                  <Flex align='center'>
                    <IconHeartFilled size={24} style={{ color: YELLOW }} />
                    {voteCount}
                  </Flex>
                  <Text size='xs' color='dimmed' ta='right' tw='no-wrap'>
                    {queuedVideo.addedBy.name}
                  </Text>
                </>
              )}
            </Flex>
          ) : (
            <>
              {loading && <Loader size={24} />}
              {!loading && (
                <Box miw={24}>
                  <IconPlus size={24} />
                </Box>
              )}
            </>
          )}
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
