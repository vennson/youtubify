import { Card, Text } from '@mantine/core'

export default function ListCard() {
  return (
    <Card shadow='sm' withBorder my='sm' mx='xs'>
      <Text>1. Sunflower Seeds</Text>
      <Text color='dimmed' size='sm'>
        Uncle John&apos;s
      </Text>
    </Card>
  )
}
