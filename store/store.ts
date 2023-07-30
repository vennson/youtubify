import shortUUID from 'short-uuid'
import { create } from 'zustand'

interface AppState {
  userId: string
  initUserId: () => void
}

export const useAppStore = create<AppState>((set) => ({
  userId: '',
  initUserId: () => {
    const userId = localStorage.getItem('userId')

    if (userId) {
      set({ userId })
    } else {
      const newUserId = shortUUID.generate()
      localStorage.setItem('userId', newUserId)
      set({ userId: newUserId })
    }
  },
}))
