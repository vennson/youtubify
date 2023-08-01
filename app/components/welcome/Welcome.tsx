'use client'

import { Modal } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAppStore } from '~/store/store'
import NicknameForm from './NicknameForm'
import JoinRoomForm from './JoinRoomForm'

export default function WelcomeModal() {
  const initUser = useAppStore((state) => state.initUser)
  const user = useAppStore((state) => state.user)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const router = useRouter()

  function onClose() {
    console.log('close')
  }

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
    <Modal
      opened={!joinedRoom}
      onClose={onClose}
      centered
      withCloseButton={false}
    >
      <NicknameForm />
      <JoinRoomForm />
    </Modal>
  )
}
