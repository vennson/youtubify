'use server'

import { useAppStore } from '~/store'
import { prisma } from './client'
import { QueueResponse } from './types'

// USER
export async function createUser(name: string) {
  const user = await prisma.user.create({
    data: { name },
  })
  return user
}

export async function getUser(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
  })
  return user
}

// QUEUE
export async function createQueue(ownerId: number) {
  const queue = await prisma.queue.create({
    data: { ownerId },
    include: { owner: true, videos: true },
  })
  return queue
}

export async function getQueue(id: number) {
  const queue = await prisma.queue.findUnique({
    where: { id },
    include: {
      owner: true,
      videos: {
        include: {
          votes: true,
          playingInQueues: true,
          addedBy: true,
          queue: true,
        },
      },
      nowPlaying: {
        include: {
          votes: true,
          playingInQueues: true,
          addedBy: true,
          queue: true,
        },
      },
    },
  })
  return queue
}

export async function setQueueNowPlaying({
  videoId,
  queueId,
}: {
  videoId: number
  queueId: number
}) {
  const queue = await prisma.queue.update({
    where: { id: queueId },
    data: { nowPlaying: { connect: { id: videoId } } },
  })
  return queue
}

export async function clearQueueNowPlaying({ queueId }: { queueId: number }) {
  const queue = await prisma.queue.update({
    where: { id: queueId },
    data: { nowPlaying: { disconnect: true } },
  })
  return queue
}

// VIDEO
type CreateVideoArgs = {
  userId: number
  queueId: number
  channelTitle: string
  lengthText: string
  viewCount: string
  thumbnailUrl: string
  title: string
  videoId: string
}
export async function createVideo({
  userId,
  queueId,
  channelTitle,
  lengthText,
  viewCount,
  thumbnailUrl,
  title,
  videoId,
}: CreateVideoArgs) {
  const video = await prisma.video.create({
    data: {
      channelTitle,
      lengthText,
      viewCount,
      thumbnailUrl,
      title,
      videoId,
      addedById: userId,
      queue: { connect: { id: queueId } },
      votes: { connect: { id: userId } },
    },
    include: { votes: true },
  })
  return video
}

export async function upVoteVideo(userId: number) {
  const video = await prisma.video.update({
    where: { id: userId },
    data: { votes: { connect: { id: userId } } },
  })
  return video
}

export async function downVoteVideo(userId: number) {
  const video = await prisma.video.update({
    where: { id: userId },
    data: { votes: { disconnect: { id: userId } } },
  })
  return video
}

type UnlinkVideoFromQueueArgs = {
  videoId: number
  queueId: number
}
export async function unlinkVideoFromQueue({
  videoId,
  queueId,
}: UnlinkVideoFromQueueArgs) {
  //! clear votes from the right queueId only
  const video = await prisma.video.update({
    where: { id: videoId },
    data: {
      votes: { set: [] },
      queue: { disconnect: { id: queueId } },
      playingInQueues: { disconnect: { id: queueId } },
    },
  })
  return video
}

// APP
export async function joinRoomIfExists(roomId: number) {
  const { setQueueOwner } = useAppStore.getState()
  const queue = await getQueue(roomId)
  if (queue?.id) {
    useAppStore.getState().setJoinedRoom(queue.id)
    setQueueOwner(queue.owner)
    return queue.id
  }
}

export async function refreshQueue(newQueue: QueueResponse) {
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
