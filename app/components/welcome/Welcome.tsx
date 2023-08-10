'use client'

import { useEffect } from 'react'
import { Center, Loader, Modal } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useAppStore } from '~/store/store'
import JoinRoomForm from './JoinRoomForm'
import NicknameForm from './NicknameForm'

export default function WelcomeModal() {
  const user = useAppStore((state) => state.user)
  const initUser = useAppStore((state) => state.initUser)
  const loadingInitUser = useAppStore((state) => state.loadingInitUser)
  const joinedRoom = useAppStore((state) => state.joinedRoom)

  const router = useRouter()

  useEffect(() => {
    if (joinedRoom) {
      router.push(`/room/${joinedRoom}/`)
    }
  }, [joinedRoom, router])

  useEffect(() => {
    if (!user?.id) {
      initUser()
    }
  }, [initUser, user?.id])

  return (
    <Modal opened={true} onClose={() => {}} centered withCloseButton={false}>
      {loadingInitUser ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <>
          <NicknameForm />
          <JoinRoomForm />
        </>
      )}
    </Modal>
  )
}
