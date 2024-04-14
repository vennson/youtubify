import { getQueue } from '~/prisma/actions'
import { QueueResponse, QueueVideo } from '~/prisma/types'
import { useAppStore } from '~/store'

export const isProduction = process.env.NODE_ENV === 'production'

export function sortQueueVideos(queueVideos: QueueVideo[]) {
  const sortedVideos = queueVideos.sort((a, b) => {
    const bVoteCount = b?.votes?.length
    const aVoteCount = a?.votes?.length

    if (bVoteCount && aVoteCount) {
      return bVoteCount - aVoteCount
    } else {
      return 0
    }
  })

  return sortedVideos
}

export async function joinRoomIfExists(roomId: number) {
  const { setQueueOwner } = useAppStore.getState()
  const queue = await getQueue(roomId)
  if (queue?.id) {
    useAppStore.getState().setJoinedRoom(queue.id)
    setQueueOwner(queue.owner)
    return queue.id
  }
}

export function refreshQueue(newQueue: QueueResponse) {
  const {
    joinedRoom,
    setQueueVideos,
    setQueueOwner,
    setNowPlaying,
    ownsQueue,
    setOwnsQueue,
    setQueueLoading,
    user,
  } = useAppStore.getState()

  if (!joinedRoom) return

  setQueueLoading(true)

  const freshVideos = newQueue?.videos.filter((v) => {
    const hasVotes = v.votes.length > 0
    const inSameQueue = !!v.queue.find((q) => q.id === joinedRoom)
    return hasVotes && inSameQueue
  })
  setQueueVideos(freshVideos)
  newQueue?.owner && setQueueOwner(newQueue.owner)

  if (newQueue?.owner?.id === user?.id) {
    setOwnsQueue(true)
  }

  if (!ownsQueue) {
    setNowPlaying(newQueue?.nowPlaying)
  }
  setQueueLoading(false)

  return newQueue
}
