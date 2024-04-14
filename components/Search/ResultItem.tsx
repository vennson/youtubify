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
import { YELLOW } from '~/constants/colors'
import { useAppStore } from '~/store'
import useRefreshQueue from '~/hooks/useRefreshQueue'
import { useState } from 'react'
import { abbreviateNumber } from './utils'
import { createVideo, downVoteVideo, upVoteVideo } from '~/prisma/actions'

type Props = {
  searchedVideo: SearchVideo
}

export default function ResultItem({ searchedVideo }: Props) {
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const queueVideos = useAppStore((state) => state.queueVideos)

  const [loading, setLoading] = useState(false)
  const onRefreshQueue = useRefreshQueue()

  const queuedVideo = queueVideos.find(
    (queueVideo) => queueVideo?.videoId === searchedVideo.videoId,
  )
  const isPlaying = !!queuedVideo?.playingInQueues.find(
    (q) => q.id === joinedRoom,
  )
  const voteCount = queuedVideo?.votes.length //! filter with correct queueId
  const hasVotes = voteCount && voteCount > 0

  let userInVotes = false
  if (hasVotes) {
    userInVotes = !!queuedVideo?.votes?.find((vote) => vote?.id === user?.id)
  }

  async function onClickResultItem() {
    if (!joinedRoom || !user?.id) return
    setLoading(true)

    if (queuedVideo) {
      if (userInVotes) {
        await downVoteVideo({ videoId: queuedVideo.id, userId: user.id })
      } else {
        await upVoteVideo({ videoId: queuedVideo.id, userId: user.id })
      }
    } else {
      await createVideo({
        userId: user.id,
        queueId: joinedRoom,
        channelTitle: searchedVideo.channelTitle || '',
        lengthText: searchedVideo.lengthText || '',
        viewCount: searchedVideo.viewCount || '',
        thumbnailUrl: searchedVideo.thumbnail?.[0].url || '',
        title: searchedVideo.title,
        videoId: searchedVideo.videoId || '',
      })
    }

    await onRefreshQueue()
    setLoading(false)
  }

  return (
    <UnstyledButton
      onClick={onClickResultItem}
      // disabled={videoCreateLoading}
    >
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={searchedVideo.thumbnail?.[0].url || ''}
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='searchedVideo'
              />
            </Avatar>
            <Box>
              <Text
                size='sm'
                lineClamp={1}
                color={isPlaying ? 'dimmed' : undefined}
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
