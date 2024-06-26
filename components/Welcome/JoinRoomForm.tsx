import { Button, Loader, NumberInput, Text } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'
import { z } from 'zod'
import { createQueue } from '~/prisma/actions'
import { useAppStore } from '~/store'
import { joinRoomIfExists } from '~/utils'

const validSchema = z.object({
  roomId: z.number({ invalid_type_error: 'enter a number' }),
})

export default function JoinRoomForm() {
  const user = useAppStore((state) => state.user)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const setQueueOwner = useAppStore((state) => state.setQueueOwner)
  const [loading, setLoading] = useState({ creating: false, joining: false })

  const form = useForm({
    validate: zodResolver(validSchema),
    initialValues: {
      roomId: '',
    },
  })

  async function onJoinRoom(roomId: string) {
    setLoading((prev) => ({ ...prev, joining: true }))
    const queueId = await joinRoomIfExists(parseInt(roomId))
    if (!queueId) {
      form.setFieldError('roomId', "room doesn't exist")
      setLoading((prev) => ({ ...prev, joining: false }))
    }
  }

  async function onCreateRoom() {
    setLoading((prev) => ({ ...prev, creating: true }))
    if (user?.id) {
      const newQueue = await createQueue(user.id)
      if (newQueue.owner) {
        setQueueOwner(newQueue.owner)
        await setJoinedRoom(newQueue.id)
      }
    }
  }

  return (
    <>
      <Text mt='md' ta='center' fz='sm'>
        hello <b>{user?.name}</b>
      </Text>
      <form onSubmit={form.onSubmit((values) => onJoinRoom(values.roomId))}>
        <NumberInput
          id='room-id'
          label='room id'
          placeholder='enter the room id'
          hideControls
          {...form.getInputProps('roomId')}
        />
        <Button type='submit' disabled={loading.joining} fullWidth mt='md'>
          {loading.joining ? <Loader size={16} /> : 'join room'}
        </Button>
      </form>
      <Text mt='md' ta='center' color='dimmed' fz='sm'>
        or
      </Text>
      <Button
        disabled={loading.creating}
        fullWidth
        mt='md'
        onClick={onCreateRoom}
        variant='outline'
        color='gray'
      >
        {loading.creating ? <Loader size={16} /> : 'create room'}
      </Button>
    </>
  )
}
