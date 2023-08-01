import { ActionIcon, Center, Loader, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { IconArrowLeft, IconSearch } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { search } from '~/lib/actions'
import { filterVids } from './utils'

type Props = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setResults: Dispatch<SetStateAction<Video[]>>
  form: UseFormReturnType<{ query: string }>
}

export default function SearchBar(props: Props) {
  const { loading, setLoading, setResults, form } = props
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
      const { data } = await search(query)
      const vidsOnly = filterVids(data.contents)
      const videos = vidsOnly.map((content) => content.video)
      setResults(videos)
    } catch (error) {
      console.log('onSearch error', error)
    }

    setLoading(false)
  }

  function clearQuery() {
    form.reset()
    setResults([])
  }

  useEffect(() => {
    if (form.values.query.length === 0) {
      setResults([])
    }
  }, [form.values.query.length, setResults])

  return (
    <form onSubmit={form.onSubmit((values) => onSearch(values.query))}>
      {hasQuery && !loading && (
        <Center pos='absolute' w={36} h={36}>
          <ActionIcon size={34} sx={{ zIndex: 1000 }} onClick={clearQuery}>
            <IconArrowLeft size={16} />
          </ActionIcon>
        </Center>
      )}
      <TextInput
        id='search'
        placeholder='type ka dito sirs...'
        icon={searchBarIcon}
        disabled={loading}
        {...form.getInputProps('query')}
      />
    </form>
  )
}
