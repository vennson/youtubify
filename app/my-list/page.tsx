'use client'

import { Avatar, Box, Button, Card, Center, Flex, Text } from '@mantine/core'
import ListCard from './ListCard'
import { helloApi } from '~/lib/actions'

export default function MyList() {
  async function sayHello() {
    const res = await helloApi()
    console.log('res', res)
  }

  return (
    <Box>
      <Button onClick={sayHello}>hello</Button>
      <Flex direction='column' align='center'>
        <Avatar size={100} src='avatar.jpg' alt="it's me" radius='xl' m='md' />
        <Text size='md' fw='bold'>
          Lau Hân
        </Text>
        <Text color='dimmed' size='sm'>
          @cici
        </Text>
      </Flex>

      <ListCard />
    </Box>
  )
}
