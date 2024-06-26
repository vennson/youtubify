import {
  ActionIcon,
  Button,
  Center,
  Flex,
  Loader,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { IconArrowLeft, IconRefresh, IconSearch } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useRefreshQueue from '~/hooks/useRefreshQueue'
import { filterVids } from './utils'
import { search } from '~/app/api'

type Props = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setResults: Dispatch<SetStateAction<SearchVideo[]>>
  form: UseFormReturnType<{ query: string }>
}

export default function SearchBar({
  loading,
  setLoading,
  setResults,
  form,
}: Props) {
  const onRefreshQueue = useRefreshQueue()
  const [refreshLoading, setRefreshLoading] = useState(false)

  const hasQuery = form.values.query.length > 0

  let searchBarIcon = <IconSearch size={16} />
  if (loading) {
    searchBarIcon = <Loader size={16} />
  } else if (hasQuery) {
    searchBarIcon = <IconSearch size={16} opacity={0} />
  }

  async function onSearch(query: string) {
    setLoading(true)
    setResults([])
    try {
      const res = await search(query)
      const vidsOnly = filterVids(res.data)
      setResults(vidsOnly)
    } catch (error) {
      console.log('onSearch error', error)
    }
    await onRefreshQueue()
    setLoading(false)
  }

  async function clearQuery() {
    form.reset()
    setResults([])
    await onRefreshQueue()
  }

  async function _onRefreshQueue() {
    setRefreshLoading(true)
    await onRefreshQueue()
    setRefreshLoading(false)
  }

  useEffect(() => {
    if (form.values.query.length === 0) {
      setResults([])
    }
  }, [form.values.query.length, setResults])

  return (
    <form onSubmit={form.onSubmit((values) => onSearch(values.query))}>
      {hasQuery && !loading && (
        <Center pos='absolute' w={36} h={36} left={62}>
          <ActionIcon size={34} sx={{ zIndex: 1000 }} onClick={clearQuery}>
            <IconArrowLeft size={16} />
          </ActionIcon>
        </Center>
      )}
      <Flex gap='xs'>
        <Tooltip label='refresh queue'>
          <Button
            variant='outline'
            leftIcon={
              refreshLoading ? <Loader size={16} /> : <IconRefresh size={16} />
            }
            pr={0}
            disabled={refreshLoading}
            onClick={() => _onRefreshQueue()}
            color='gray'
          />
        </Tooltip>

        <TextInput
          id='search'
          placeholder='search for a song'
          icon={searchBarIcon}
          disabled={loading}
          w='100%'
          {...form.getInputProps('query')}
        />
      </Flex>
    </form>
  )
}
