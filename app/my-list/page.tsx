'use client'

import { Avatar, Box, Card, Center, Flex, Text } from '@mantine/core'
import ListCard from './ListCard'

export default function MyList() {
  return (
    <Box>
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
