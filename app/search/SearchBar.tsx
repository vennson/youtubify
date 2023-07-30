import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Loader,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { UseFormReturnType, useForm } from '@mantine/form'
import { IconArrowLeft, IconSearch } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { helloApi, search } from '~/lib/actions'
import ResultItem from './ResultItem'
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
    searchBarIcon = <IconSearch size={16} color='white' />
  }

  async function onSearch(query: string) {
    setLoading(true)
    setResults([])

    const { data } = await search(query)
    setLoading(false)
    const vidsOnly = filterVids(data.contents)
    const videos = vidsOnly.map((content) => content.video)
    setResults(videos)
    console.log('data', data)
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
