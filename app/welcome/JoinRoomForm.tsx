import { Button, Loader, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'
import { z } from 'zod'
import { createQueue } from '~/lib/actions'
import { useAppStore } from '~/store/store'

const validSchema = z.object({
  roomId: z.string().min(11, { message: 'invalid room id' }),
})

export default function JoinRoomForm() {
  const user = useAppStore((state) => state.user)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    validate: zodResolver(validSchema),
    initialValues: {
      roomId: '',
    },
  })

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

  return (
    <>
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
    </>
  )
}
