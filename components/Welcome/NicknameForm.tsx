import { Button, Loader, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import { createUser } from '~/prisma/actions'
import { useAppStore } from '~/store'

const zSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'nickname is required' })
    .regex(/^[a-z0-9]+$/i, { message: 'invalid nickname' }),
})

export default function NicknameForm() {
  const setUser = useAppStore((state) => state.setUser)
  const pendingRoom = useAppStore((state) => state.pendingRoom)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm({
    validate: zodResolver(zSchema),
    initialValues: { name: '' },
  })

  async function onSubmit(name: string) {
    setLoading(true)
    const newUser = await createUser(name)
    setUser(newUser)
    if (pendingRoom) {
      router.push(`/room/${pendingRoom}/`)
    } else {
      setLoading(false)
    }
  }

  return (
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
  )
}
