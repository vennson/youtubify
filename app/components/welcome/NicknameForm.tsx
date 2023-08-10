import { Button, Loader, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import { useUserCreateMutation } from '~/gql/gql'
import { useAppStore } from '~/store/store'

const zSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'nickname is required' })
    .regex(/^[a-z0-9]+$/i, { message: 'invalid nickname' }),
})

export default function NicknameForm() {
  const user = useAppStore((state) => state.user)
  const setUser = useAppStore((state) => state.setUser)
  const pendingRoom = useAppStore((state) => state.pendingRoom)

  const [loading, setLoading] = useState(false)
  const [createUser] = useUserCreateMutation()

  const form = useForm({
    validate: zodResolver(zSchema),
    initialValues: { name: '' },
  })

  const router = useRouter()

  async function onSubmit(name: string) {
    setLoading(true)

    const res = await createUser({ variables: { input: { name } } })
    const newUser = res.data?.userCreate?.user
    if (newUser) {
      setUser(newUser)
    }

    if (pendingRoom) {
      router.push(`/room/${pendingRoom}/`)
    } else {
      setLoading(false)
    }
  }

  return (
    <>
      {!user?.id && (
        <form onSubmit={form.onSubmit((values) => onSubmit(values.name))}>
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
    </>
  )
}
