import { useCallback } from 'react'
import { getQueue, refreshQueue } from '~/prisma/actions'
import { useAppStore } from '~/store'

export default function useRefreshQueue() {
  const joinedRoom = useAppStore((state) => state.joinedRoom)

  const onRefreshQueue = useCallback(async () => {
    if (!joinedRoom) return
    const newQueue = await getQueue(joinedRoom)
    if (newQueue) {
      await refreshQueue(newQueue)
    }
    return newQueue
  }, [joinedRoom])

  return onRefreshQueue
}
