import { Avatar, Box, Card, Flex, Text, UnstyledButton } from '@mantine/core'
import { IconHeartFilled, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { RED } from '~/constants/colors'
import { createVideo, isProduction } from '~/lib/actions'
import { abbreviateNumber, formatSeconds } from './utils'
import { useAppStore } from '~/store/store'

type Props = {
  searchedVideo: Video
  queue: QueueVideo[]
  setQueue: Dispatch<SetStateAction<QueueVideo[]>>
}

export default function ResultItem(props: Props) {
  const { searchedVideo, setQueue, queue } = props
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const userId = useAppStore((state) => state.userId) //! to be removed

  const queuedVideo = queue.find(
    (queuedVideo) => queuedVideo.videoId === searchedVideo.videoId,
  )

  let userInVotes = false
  if (queuedVideo?.votes) {
    userInVotes = !!queuedVideo?.votes?.find((vote) => vote.userId === userId)
  }

  /**
   * toggles vote by appending or removing the user from Votes array of a queued video
   */
  function toggleVote(_queue: QueueVideo[]) {
    let newVotes: Vote[] = [{ userId }]
    if (queuedVideo?.votes) {
      if (userInVotes) {
        newVotes = queuedVideo.votes.filter((vote) => {
          return vote.userId !== userId
        })
      } else {
        newVotes = [...queuedVideo.votes, { userId }]
      }
    }

    let newQueue = [..._queue]
    if (queuedVideo) {
      newQueue = _queue.map((queryVid) => {
        if (queryVid.videoId === searchedVideo.videoId) {
          return { ...queryVid, votes: newVotes }
        }
        return queryVid
      })
    } else {
      newQueue.push({ ...searchedVideo, votes: newVotes })
    }

    return newQueue
  }

  async function onClickResultItem() {
    console.log('joinedRoom', joinedRoom)
    console.log('user?.id', user?.id)
    // if (joinedRoom && user?.id) { //!
    //   const res = await createVideo(searchedVideo, joinedRoom, user?.id)
    //   console.log('res', res)
    // }
    setQueue((prev) => toggleVote(prev))
  }

  /**
   * if queuedVideo has no more votes, remove it from queue
   */
  useEffect(() => {
    if (queuedVideo?.votes && queuedVideo.votes.length === 0) {
      setQueue((prev) => {
        const newQueue = [...prev]
        const index = newQueue.findIndex(
          (queueVid) => queueVid.videoId === queuedVideo.videoId,
        )
        newQueue.splice(index, 1)

        return newQueue
      })
    }
  }, [queuedVideo, setQueue])

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

          {queuedVideo?.votes && queuedVideo.votes.length > 0 ? (
            <Flex align='center'>
              <IconHeartFilled size={24} style={{ color: RED }} />
              {queuedVideo.votes.length}
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
