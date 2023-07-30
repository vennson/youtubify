'use client'

import { Button, Card, Loader, Modal, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { z } from 'zod'
import { createQueue, createUser } from '~/lib/actions'
import { useAppStore } from '~/store/store'
import { useRouter } from 'next/navigation'
import NicknameForm from './NicknameForm'

type Props = {
  // opened: boolean
  // setWelcomeModalOpened: Dispatch<SetStateAction<boolean>>
}

const validSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'nickname is required' })
    .regex(/^[a-z0-9]+$/i, { message: 'invalid nickname' }),
  roomId: z
    .string()
    .min(26, { message: 'invalid room id' })
    .regex(/^[a-z0-9]+$/i, { message: 'invalid room id' }),
})

export default function WelcomeModal() {
  const setUser = useAppStore((state) => state.setUser)
  const initUser = useAppStore((state) => state.initUser)
  const user = useAppStore((state) => state.user)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const joinedRoom = useAppStore((state) => state.joinedRoom)

  const [opened, setOpened] = useState(true)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    validate: zodResolver(validSchema),
    initialValues: {
      roomId: '',
    },
  })
  const router = useRouter()

  function onClose() {
    console.log('close')
  }

  function onJoinRoom(roomId: string) {
    setJoinedRoom(roomId)
  }

  async function onCreateRoom() {
    setLoading(true)
    if (user?.id) {
      const { queueCreate } = await createQueue(user?.id)
      setJoinedRoom(queueCreate.queue.roomId)
    }
    setLoading(false)
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
      opened={opened && !joinedRoom}
      onClose={onClose}
      centered
      withCloseButton={false}
    >
      <NicknameForm />

      {user?.id && (
        <>
          <Text mt='md' ta='center' fz='sm'>
            hello <b>{user.name}</b>
          </Text>

          <form onSubmit={form.onSubmit((values) => onJoinRoom(values.roomId))}>
            <TextInput
              id='room-id'
              label='room id'
              placeholder='paste the room id'
              {...form.getInputProps('roomId')}
            />
            <Button type='submit' disabled={loading} fullWidth mt='md'>
              {loading ? <Loader size={16} /> : 'join room'}
            </Button>
          </form>

          <Text mt='md' ta='center' color='dimmed' fz='sm'>
            or
          </Text>

          <Button
            disabled={loading}
            fullWidth
            mt='md'
            onClick={onCreateRoom}
            variant='outline'
            color='gray'
          >
            {loading ? <Loader size={16} /> : 'create room'}
          </Button>
        </>
      )}
    </Modal>
  )
}
