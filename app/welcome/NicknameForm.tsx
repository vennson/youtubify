import { Button, Loader, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { createUser } from '~/lib/actions'
import { useAppStore } from '~/store/store'

export default function NicknameForm() {
  const user = useAppStore((state) => state.user)
  const setUser = useAppStore((state) => state.setUser)
  const [loading, setLoading] = useState(false)
  const form = useForm({
    initialValues: {
      name: '',
    },
  })

  async function onCreateUser(name: string) {
    console.log('onCreateUser')
    setLoading(true)
    const { userCreate } = await createUser(name)
    setUser(userCreate.user)
    setLoading(false)
  }

  return (
    <>
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
    </>
  )
}
