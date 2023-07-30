import {
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
import { useForm } from '@mantine/form'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { helloApi, search } from '~/lib/actions'
import ResultItem from './ResultItem'
import { filterVids } from './utils'

type Props = {
  loading: boolean
  setLoading: (loading: boolean) => void
  setResults: (results: Video[]) => void
}

export default function SearchBar(props: Props) {
  const { loading, setLoading, setResults } = props
  const form = useForm({
    initialValues: {
      query: '',
    },
  })

  let searchBarIcon = <IconSearch size={16} />
  if (loading) {
    searchBarIcon = <Loader size={16} />
  }

  // const searchBarIcon = loading ? (
  //   <Loader size={16} />
  // ) : (
  //   <IconSearch size={16} />
  // )

  async function onSearch(query: string) {
    setLoading(true)
    const { data } = await search(query)
    setLoading(false)
    const vidsOnly = filterVids(data.contents)
    const videos = vidsOnly.map((content) => content.video)
    setResults(videos)
    console.log('data', data)
  }

  return (
    <form onSubmit={form.onSubmit((values) => onSearch(values.query))}>
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
