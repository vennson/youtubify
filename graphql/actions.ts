import { GraphQLClient } from 'graphql-request'
import { getQueueQuery } from '~/graphql/queries'
import {
  createQueueMutation,
  createUserMutation,
  createVideoMutation,
  updateVideoMutation,
} from '~/graphql/mutations'
import { isProduction } from '~/lib/actions'
import { useAppStore } from '~/store/store'

const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
  : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ''
  : 'letmein'

const client = new GraphQLClient(apiUrl)

const makeGraphQLRequest = async (query: string, variables = {}) => {
  return await client.request(query, variables)
}

export async function createUser(name: string) {
  const variables = { input: { name } }
  return makeGraphQLRequest(
    createUserMutation,
    variables,
  ) as Promise<UserCreateResponse>
}

export async function createQueue(userId: string) {
  const variables = {
    input: {
      owner: {
        link: userId,
      },
    },
  }
  return makeGraphQLRequest(
    createQueueMutation,
    variables,
  ) as Promise<QueueCreateResponse>
}

export async function createVideo(
  video: Video,
  queueId: string,
  userId: string,
) {
  const { author, lengthSeconds, stats, thumbnails, title, videoId } = video

  const variables = {
    input: {
      author,
      lengthSeconds,
      stats,
      thumbnails,
      title,
      videoId,
      queue: {
        link: queueId,
      },
      votes: {
        link: userId,
      },
      addedBy: {
        link: userId,
      },
    },
  }

  return makeGraphQLRequest(
    createVideoMutation,
    variables,
  ) as Promise<VideoCreateResponse>
}

export async function getQueue(queueId: string) {
  return makeGraphQLRequest(getQueueQuery, {
    id: queueId,
  }) as Promise<QueueQueryResponse>
}

export async function joinRoomIfExists(roomId: string) {
  const { setQueueOwner } = useAppStore.getState()

  const { queue } = await getQueue(roomId)
  if (queue?.id) {
    await useAppStore.getState().setJoinedRoom(roomId)
    setQueueOwner(queue.owner)
    return queue.id
  }
}

export async function updateVideo(
  videoDBId: string,
  userId: string,
  linkStatus: 'link' | 'unlink',
) {
  const variables = {
    by: { id: videoDBId },
    input: {
      votes: {
        [linkStatus]: userId,
      },
    },
  }

  return makeGraphQLRequest(
    updateVideoMutation,
    variables,
  ) as Promise<VideoUpdateResponse>
}

export async function refreshQueue() {
  const { joinedRoom, setQueue, setQueueOwner } = useAppStore.getState()
  if (!joinedRoom) return
  const { queue: dbQueue } = await getQueue(joinedRoom)
  setQueue(dbQueue.videos.edges)
  setQueueOwner(dbQueue.owner)
}
