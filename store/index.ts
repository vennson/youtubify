import { User } from '@prisma/client'
import { create } from 'zustand'
import { getQueue, getUser } from '~/prisma/actions'
import { QueueVideo } from '~/prisma/types'

interface AppState {
  user?: User
  initUser: () => Promise<boolean>
  loadingInitUser: boolean
  setLoadingInitUser: (loading: boolean) => void
  setUser: (user: User) => void
  joinedRoom?: number
  setJoinedRoom: (queueId: number) => Promise<void>
  pendingRoom?: string
  setPendingRoom: (queueId: string) => Promise<void>
  queueVideos: QueueVideo[]
  setQueueVideos: (queue?: QueueVideo[]) => void
  queueLoading: boolean
  setQueueLoading: (loading: boolean) => void
  nowPlaying?: QueueVideo| null
  setNowPlaying: (video?: QueueVideo | null) => void
  ownsQueue: boolean
  setOwnsQueue: (ownsQueue: boolean) => void
  queueOwner?: { id: number; name: string }
  setQueueOwner: (queueOwner: { id: number; name: string }) => void
  disabledAction: boolean
  setDisabledAction: () => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: undefined,
  initUser: async () => {
    set({ loadingInitUser: true })
    const user = localStorage.getItem('user')
    let hasSession = false

    if (user) {
      const userId = parseInt(JSON.parse(user).id)
      const queriedUser = await getUser(userId)
      if (queriedUser?.id) {
        hasSession = true
        set({ user: queriedUser })
      }
    }

    set({ loadingInitUser: false })
    return hasSession
  },
  loadingInitUser: false,
  setLoadingInitUser: (loading) => set({ loadingInitUser: loading }),
  setUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    set({ user })
  },
  joinedRoom: undefined,
  setJoinedRoom: async (joinedRoom) => {
    set({ joinedRoom })
  },
  pendingRoom: '',
  setPendingRoom: async (pendingRoom) => {
    const queriedQueue = await getQueue(parseInt(pendingRoom))
    if (queriedQueue?.id) {
      set({ pendingRoom })
    }
  },

  queueVideos: [],
  setQueueVideos: (queue) => {
    if (queue) {
      const sortedQueue = queue.sort((a, b) => {
        const bVoteCount = b?.votes?.length
        const aVoteCount = a?.votes?.length
        if (bVoteCount && aVoteCount) {
          return bVoteCount - aVoteCount
        } else {
          return 0
        }
      })
      set({ queueVideos: sortedQueue })
    } else {
      set({ queueVideos: [] })
    }
  },
  queueLoading: false,
  setQueueLoading: (loading) => set({ queueLoading: loading }),
  nowPlaying: undefined,
  setNowPlaying: (nowPlaying) => set({ nowPlaying }),
  ownsQueue: false,
  setOwnsQueue: (ownsQueue) => set({ ownsQueue }),
  queueOwner: undefined,
  setQueueOwner: (queueOwner) => set({ queueOwner }),
  disabledAction: false,
  setDisabledAction: () => {},
}))
