import shortUUID from 'short-uuid'
import { create } from 'zustand'

interface AppState {
  userId: string
  setUserId: (userId: string) => void
  initUserId: () => void

  user?: User
  initUser: () => void
  setUser: (user: User) => void
  joinedRoom?: string
  setJoinedRoom: (queueId: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  userId: '',
  setUserId: (userId: string) => set({ userId }),
  initUserId: async () => {
    const userId = localStorage.getItem('userId')

    if (userId) {
      set({ userId })
    } else {
      const newUserId = shortUUID.generate()
      localStorage.setItem('userId', newUserId)
      set({ userId: newUserId })
    }
  },

  user: undefined,
  initUser: () => {
    const user = localStorage.getItem('user')
    if (user) {
      set({ user: JSON.parse(user) })
    }
  },
  setUser: (user: User) => {
    set({ user })
    localStorage.setItem('user', JSON.stringify(user))
  },
  joinedRoom: undefined,
  setJoinedRoom: (joinedRoom) => set({ joinedRoom }),
}))
