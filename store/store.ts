import { create } from 'zustand'
import { Video } from '~/gql/gql'
import { getQueue, getUser } from '~/graphql/actions'

interface AppState {
  user?: User
  initUser: () => Promise<boolean>
  loadingInitUser: boolean
  setLoadingInitUser: (loading: boolean) => void
  setUser: (user: User) => void
  joinedRoom: string
  setJoinedRoom: (queueId: string) => Promise<void>
  pendingRoom?: string
  setPendingRoom: (queueId: string) => Promise<void>
  queue: (Video | undefined)[]
  setQueue: (queue?: (Video | undefined)[]) => void
  queueLoading: boolean
  setQueueLoading: (loading: boolean) => void
  nowPlaying?: Video
  setNowPlaying: (video?: Video) => void
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
    set({ loadingInitUser: true })

    const user = localStorage.getItem('user')
    let hasSession = false

    if (user) {
      const userId = JSON.parse(user).id
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
  joinedRoom: '',
  setJoinedRoom: async (joinedRoom) => {
    set({ joinedRoom })
  },
  pendingRoom: '',
  setPendingRoom: async (pendingRoom) => {
    const queriedQueue = await getQueue(pendingRoom)
    if (queriedQueue?.id) {
      set({ pendingRoom })
    }
  },

  queue: [],
  setQueue: (queue) => {
    if (queue) {
      const sortedQueue = queue.sort((a, b) => {
        const bVoteCount = b?.votes?.edges?.length
        const aVoteCount = a?.votes?.edges?.length

        if (bVoteCount && aVoteCount) {
          return bVoteCount - aVoteCount
        } else {
          return 0
        }
      })
      set({ queue: sortedQueue })
    } else {
      set({ queue: [] })
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
