import { useCallback } from 'react'
import { useQueueQuery } from '~/gql/gql'
import { refreshQueue } from '~/graphql/actions'
import { useAppStore } from '~/store/store'

export default function useRefreshQueue() {
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const { refetch: refetchQueue } = useQueueQuery({
    variables: { id: joinedRoom },
  })

  const onRefreshQueue = useCallback(async () => {
    const res = await refetchQueue()
    const newQueue = res.data.queue
    if (newQueue) {
      // @ts-ignore
      await refreshQueue(newQueue)
    }

    return newQueue
  }, [refetchQueue])

  return onRefreshQueue
}
