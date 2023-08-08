import { GraphQLClient } from 'graphql-request'
// import { getQueueQuery, getUserQuery } from '~/graphql/queries'
import // createQueueMutation,
// createUserMutation,
// createVideoMutation,
// deleteVideoMutation,
// updateQueueMutation,
// updateVideoMutation,
'~/graphql/mutations'
import { isProduction } from '~/lib/actions'
import { useAppStore } from '~/store/store'
import { apolloClient } from './client'
import { GET_QUEUE, GET_USER, LIVE_GET_QUEUE } from './queries'

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

export async function getQueue(queueId: string) {
  const res = await apolloClient.query<QueueQueryResponse>({
    query: GET_QUEUE,
    variables: { id: queueId },
  })
  return res.data.queue
  // try {
  //   const res = makeGraphQLRequest(getQueueQuery, {
  //     id: queueId,
  //   }) as Promise<QueueQueryResponse>
  //   return res
  // } catch (error) {
  //   console.log('getQueue error', error)
  // }
}

export async function joinRoomIfExists(roomId: string) {
  const { setQueueOwner } = useAppStore.getState()

  const queue = await getQueue(roomId)

  if (queue.id) {
    useAppStore.getState().setJoinedRoom(queue.id)
    setQueueOwner(queue.owner)
    return queue.id
  }
}

export async function refreshQueue() {
  const { joinedRoom, setQueue, setQueueOwner, setNowPlaying, ownsQueue } =
    useAppStore.getState()
  if (!joinedRoom) return

  // try {
  //   const { queue: dbQueue } = (await getQueue(joinedRoom)) || {}

  //   if (dbQueue) {
  //     const freshVideos = dbQueue.videos.edges.filter((vid) => {
  //       return !vid.node.isDone || !vid.node.isPlaying
  //     })
  //     setQueue(freshVideos)
  //     setQueueOwner(dbQueue.owner)

  //     if (!ownsQueue) {
  //       setNowPlaying(dbQueue.nowPlaying)
  //     }
  //   }

  //   return dbQueue
  // } catch (error) {
  //   console.log('refreshQueue error', error)
  // }
}

export async function getUser(userId: string) {
  const res = await apolloClient.query<UserQueryResponse>({
    query: GET_USER,
    variables: { id: userId },
  })
  return res.data.user
}
