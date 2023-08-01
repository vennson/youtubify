import { create } from 'zustand'
import { getQueue, getUser } from '~/graphql/actions'

interface AppState {
  user?: User
  initUser: () => Promise<boolean>
  setUser: (user: User) => void
  joinedRoom?: string
  setJoinedRoom: (queueId: string) => Promise<void>
  pendingRoom?: string
  setPendingRoom: (queueId: string) => Promise<void>
  queue: DBVideo[]
  setQueue: (queue: DBVideo[]) => void
  ownsQueue: boolean
  setOwnsQueue: (ownsQueue: boolean) => void
  queueOwner?: { id: string; name: string }
  setQueueOwner: (queueOwner: { id: string; name: string }) => void
  disabledAction: boolean
  setDisabledAction: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: undefined,
  initUser: async () => {
    const user = localStorage.getItem('user')
    let hasSession = false

    if (user) {
      const userId = JSON.parse(user).id
      const res = await getUser(userId)
      console.log('res', res)

      if (res?.user?.id) {
        hasSession = true
        set({ user: JSON.parse(user) })
      }
    }
    return hasSession
  },
  setUser: (user: User) => {
    set({ user })
    localStorage.setItem('user', JSON.stringify(user))
  },
  joinedRoom: undefined,
  setJoinedRoom: async (joinedRoom) => {
    set({ joinedRoom })
    const res = await getQueue(joinedRoom)
    if (res) {
      const isOwner = res.queue.owner.id === get().user?.id
      set({ ownsQueue: isOwner })
    }
  },
  pendingRoom: undefined,
  setPendingRoom: async (pendingRoom) => {
    try {
      const { queue } = (await getQueue(pendingRoom)) || {}
      if (queue?.id) {
        set({ pendingRoom })
      }
    } catch (error) {
      console.log('setPendingRoom error', error)
    }
  },

  queue: [],
  setQueue: (queue) => {
    const sortedQueue = queue.sort(
      (a, b) => b.node.votes.edges.length - a.node.votes.edges.length,
    )
    set({ queue: sortedQueue })
  },
  ownsQueue: false,
  setOwnsQueue: (ownsQueue) => set({ ownsQueue }),
  queueOwner: undefined,
  setQueueOwner: (queueOwner) => set({ queueOwner }),
  disabledAction: false,
  setDisabledAction: () => {
    // set({ disabledAction: true })
    // setTimeout(() => {
    //   set({ disabledAction: false })
    // }, 3000)
  },
}))
