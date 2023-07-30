import { Button, Loader, Modal, Text, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { Dispatch, SetStateAction, useState } from 'react'
import { z } from 'zod'
import { createUser } from '~/lib/actions'
import { useAppStore } from '~/store/store'

type Props = {
  opened: boolean
  setWelcomeModalOpened: Dispatch<SetStateAction<boolean>>
}

const validSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'nickname is required' })
    .regex(/^[a-z0-9]+$/i, { message: 'invalid nickname' }),
})

export default function WelcomeModal({ opened, setWelcomeModalOpened }: Props) {
  const setUser = useAppStore((state) => state.setUser)
  const user = useAppStore((state) => state.user)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    validate: zodResolver(validSchema),
    initialValues: {
      name: '',
      roomId: '',
    },
  })

  function onClose() {
    console.log('close')
    // setWelcomeModalOpened(false)
  }

  async function onCreateUser(name: string) {
    setLoading(true)
    const { userCreate } = await createUser(name)
    setUser(userCreate.user)
    setLoading(false)
  }

  function onJoinRoom(roomId: string) {
    console.log('roomId', roomId)
  }

  function onCreateRoom() {
    console.log('onCreateRoom')
  }

  return (
    <Modal opened={opened} onClose={onClose} centered withCloseButton={false}>
      {!user?.id && (
        <form onSubmit={form.onSubmit((values) => onCreateUser(values.name))}>
          <TextInput
            id='name'
            placeholder='type your nickname'
            label='nickname'
            {...form.getInputProps('name')}
          />
          <Button type='submit' disabled={loading} fullWidth mt='md'>
            {loading ? <Loader size={16} /> : 'submit'}
          </Button>
        </form>
      )}

      {user?.id && (
        <>
          <Text mt='md' ta='center' fz='sm'>
            hello <b>{user.name}</b>
          </Text>

          <form onSubmit={form.onSubmit((values) => onJoinRoom(values.roomId))}>
            <TextInput
              id='room-id'
              label='room id'
              placeholder='type the room id'
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
