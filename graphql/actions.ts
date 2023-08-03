import { GraphQLClient } from 'graphql-request'
import { getQueueQuery, getUserQuery } from '~/graphql/queries'
import {
  createQueueMutation,
  createUserMutation,
  createVideoMutation,
  deleteVideoMutation,
  updateQueueMutation,
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
  username: string,
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
        id: userId,
        name: username,
      },
    },
  }

  return makeGraphQLRequest(
    createVideoMutation,
    variables,
  ) as Promise<VideoCreateResponse>
}

export async function getQueue(queueId: string) {
  try {
    const res = makeGraphQLRequest(getQueueQuery, {
      id: queueId,
    }) as Promise<QueueQueryResponse>

    return res
  } catch (error) {
    console.log('getQueue error', error)
  }
}

export async function joinRoomIfExists(roomId: string) {
  const { setQueueOwner } = useAppStore.getState()

  try {
    const { queue } = (await getQueue(roomId)) || {}
    if (queue?.id) {
      await useAppStore.getState().setJoinedRoom(roomId)
      setQueueOwner(queue.owner)
      return queue.id
    }
  } catch (error) {
    console.log('joinRoomIfExists error', error)
  }
}

export async function updateVideo(
  videoDBId: string,
  userId?: string,
  linkStatus?: 'link' | 'unlink',
  isPlaying?: boolean,
  isDone?: boolean,
) {
  const variables = {
    by: { id: videoDBId },
    input: {
      ...(linkStatus && { votes: { [linkStatus]: userId } }),
      ...(isPlaying && { isPlaying }),
      ...(isDone && { isDone }),
    },
  }

  try {
    return makeGraphQLRequest(
      updateVideoMutation,
      variables,
    ) as Promise<VideoUpdateResponse>
  } catch (error) {
    console.log('updateVideo error', error)
  }
}

export async function refreshQueue() {
  const { joinedRoom, setQueue, setQueueOwner, setNowPlaying, ownsQueue } =
    useAppStore.getState()
  if (!joinedRoom) return

  try {
    const { queue: dbQueue } = (await getQueue(joinedRoom)) || {}

    if (dbQueue) {
      const freshVideos = dbQueue.videos.edges.filter((vid) => {
        return !vid.node.isDone || !vid.node.isPlaying
      })
      setQueue(freshVideos)
      setQueueOwner(dbQueue.owner)

      if (!ownsQueue) {
        setNowPlaying(dbQueue.nowPlaying)
      }
    }

    return dbQueue
  } catch (error) {
    console.log('refreshQueue error', error)
  }
}

export async function getUser(userId: string) {
  try {
    const res = makeGraphQLRequest(getUserQuery, {
      id: userId,
    }) as Promise<UserQueryResponse>

    return res
  } catch (error) {
    console.log('getUser error', error)
  }
}

export async function deleteVideo(videoDBId: string) {
  try {
    const res = makeGraphQLRequest(deleteVideoMutation, {
      by: { id: videoDBId },
    }) as Promise<UserQueryResponse>

    return res
  } catch (error) {
    console.log('deleteVideo error', error)
  }
}

export async function updateQueue(queueId: string, nowPlaying: DBVideo) {
  try {
    const res = makeGraphQLRequest(updateQueueMutation, {
      by: { id: queueId },
      input: { nowPlaying },
    }) as Promise<QueueUpdateResponse>

    return res
  } catch (error) {
    console.log('updateQueue error', error)
  }
}
