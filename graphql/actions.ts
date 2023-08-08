import { useAppStore } from '~/store/store'
import { apolloClient } from './client'
import { GET_QUEUE, GET_USER } from './queries'

export async function getQueue(queueId: string) {
  const res = await apolloClient.query<QueueQueryResponse>({
    query: GET_QUEUE,
    variables: { id: queueId },
  })
  return res.data.queue
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

export async function getUser(userId: string) {
  const res = await apolloClient.query<UserQueryResponse>({
    query: GET_USER,
    variables: { id: userId },
  })
  return res.data.user
}
