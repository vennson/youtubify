'use client'

import { useEffect } from 'react'
import { Modal } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'

import { GET_USER } from '~/graphql/queries'
import { useAppStore } from '~/store/store'
import JoinRoomForm from './JoinRoomForm'
import NicknameForm from './NicknameForm'

export default function WelcomeModal() {
  const user = useAppStore((state) => state.user)
  const initUser = useAppStore((state) => state.initUser)
  const joinedRoom = useAppStore((state) => state.joinedRoom)

  const router = useRouter()

  // const userLocal = localStorage.getItem('user') || '{}'
  // const userLocalId = JSON.parse(userLocal).id
  // const { data } = useQuery<UserQueryResponse>(GET_USER, {
  //   variables: { id: userLocalId },
  // })

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
      <NicknameForm />
      <JoinRoomForm />
    </Modal>
  )
}
