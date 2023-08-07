import { useMutation } from '@apollo/client'
import { Button, Loader, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'
import { z } from 'zod'
import { joinRoomIfExists } from '~/graphql/actions'
import { CREATE_QUEUE } from '~/graphql/mutations'
import { useAppStore } from '~/store/store'

const validSchema = z.object({
  roomId: z.string().min(11, { message: 'invalid room id' }),
})

export default function JoinRoomForm() {
  const user = useAppStore((state) => state.user)
  const setJoinedRoom = useAppStore((state) => state.setJoinedRoom)
  const pendingRoom = useAppStore((state) => state.pendingRoom)
  const setQueueOwner = useAppStore((state) => state.setQueueOwner)

  const [createQueue] = useMutation<QueueCreateResponse>(CREATE_QUEUE)
  const [loading, setLoading] = useState({ creating: false, joining: false })

  const form = useForm({
    validate: zodResolver(validSchema),
    initialValues: {
      roomId: '',
    },
  })

  async function onJoinRoom(roomId: string) {
    setLoading((prev) => ({ ...prev, joining: true }))
    const queueId = await joinRoomIfExists(roomId)
    if (!queueId) {
      form.setFieldError('roomId', "room doesn't exist")
      setLoading((prev) => ({ ...prev, joining: false }))
    }
  }

  async function onCreateRoom() {
    setLoading((prev) => ({ ...prev, creating: true }))
    if (user?.id) {
      const res = await createQueue({
        variables: {
          input: {
            owner: {
              link: user.id,
            },
          },
        },
      })

      const newQueue = res.data?.queueCreate.queue
      if (newQueue) {
        setQueueOwner(newQueue.owner)
        await setJoinedRoom(newQueue.id)
      }
    }
  }

  return (
    user?.id &&
    !pendingRoom && (
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
  )
}
