import { useCallback } from 'react'
import { getQueue } from '~/prisma/actions'
import { useAppStore } from '~/store'
import { refreshQueue } from '~/utils'

export default function useRefreshQueue() {
  const joinedRoom = useAppStore((state) => state.joinedRoom)

  const onRefreshQueue = useCallback(async () => {
    if (!joinedRoom) return
    const newQueue = await getQueue(joinedRoom)
    if (newQueue) {
      refreshQueue(newQueue)
    }
    return newQueue
  }, [joinedRoom])

  return onRefreshQueue
}
