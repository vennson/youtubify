import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Flex,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { IconCheck, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'

function abbreviateNumber(number: number, decimalPlaces = 2) {
  // 2 decimal places => 100, 3 => 1000, etc
  decimalPlaces = Math.pow(10, decimalPlaces)

  // Enumerate number abbreviations
  var abbrev = ['K', 'M', 'B', 'T']

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3)

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decimalPlaces, round, and then divide by decimalPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decimalPlaces) / size) / decimalPlaces

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1
        i++
      }

      // Add the letter for the abbreviation
      // @ts-ignore
      number += abbrev[i]

      // We are done... stop
      break
    }
  }

  return number
}

export default function ResultItem({ video }: { video: Video }) {
  const isAdded = true

  return (
    <UnstyledButton>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={video.thumbnails[0].url}
                fill
                style={{ objectFit: 'cover', flex: 1 }}
                alt='video'
              />
            </Avatar>

            <Box>
              <Text size='sm'>{video.title}</Text>
              <Text size='xs' color='dimmed'>
                {abbreviateNumber(video.stats.views)} views
              </Text>
              <Text size='xs' color='dimmed'>
                {video.author.title}
              </Text>
            </Box>
          </Flex>

          <ActionIcon pos='relative' right={0}>
            {isAdded ? (
              <IconCheck size={24} color='green' />
            ) : (
              <IconPlus size={24} />
            )}
          </ActionIcon>
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
