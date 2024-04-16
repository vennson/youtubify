'use server'

import { db } from './client'

// USER
export async function createUser(name: string) {
  const user = await db.user.create({
    data: { name },
  })
  return user
}

export async function getUser(id: number) {
  const user = await db.user.findUnique({
    where: { id },
  })
  return user
}

// QUEUE
export async function createQueue(ownerId: number) {
  const queue = await db.queue.create({
    data: { ownerId },
    include: { owner: true, videos: true },
  })
  return queue
}

export async function getQueue(id: number) {
  const queue = await db.queue.findUnique({
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
  const queue = await db.queue.update({
    where: { id: queueId },
    data: { nowPlaying: { connect: { id: videoId } } },
  })
  return queue
}

export async function clearQueueNowPlaying({ queueId }: { queueId: number }) {
  const queue = await db.queue.update({
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
  const video = await db.video.create({
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

export async function upVoteVideo({
  videoId,
  userId,
}: {
  videoId: number
  userId: number
}) {
  const video = await db.video.update({
    where: { id: videoId },
    data: { votes: { connect: { id: userId } } },
  })
  return video
}

export async function downVoteVideo({
  videoId,
  userId,
}: {
  videoId: number
  userId: number
}) {
  const video = await db.video.update({
    where: { id: videoId },
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
  const video = await db.video.update({
    where: { id: videoId },
    data: {
      votes: { set: [] },
      queue: { disconnect: { id: queueId } },
      playingInQueues: { disconnect: { id: queueId } },
    },
  })
  return video
}
