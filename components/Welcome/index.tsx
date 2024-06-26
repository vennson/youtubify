'use client'

import { useEffect } from 'react'
import { Center, Loader, Modal } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useAppStore } from '~/store'
import JoinRoomForm from './JoinRoomForm'
import NicknameForm from './NicknameForm'
import { noop } from 'lodash'

export default function WelcomeModal() {
  const user = useAppStore((state) => state.user)
  const initUser = useAppStore((state) => state.initUser)
  const loadingInitUser = useAppStore((state) => state.loadingInitUser)
  const joinedRoom = useAppStore((state) => state.joinedRoom)
  const pendingRoom = useAppStore((state) => state.pendingRoom)
  const router = useRouter()

  function renderBody() {
    if (loadingInitUser) {
      return (
        <Center>
          <Loader size={24} />
        </Center>
      )
    }
    if (user?.id && !pendingRoom) {
      return <JoinRoomForm />
    }
    return <NicknameForm />
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
    <Modal opened centered onClose={noop} withCloseButton={false}>
      {renderBody()}
    </Modal>
  )
}
