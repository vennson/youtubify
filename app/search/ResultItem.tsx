import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Flex,
  Text,
  UnstyledButton,
} from '@mantine/core'
import {
  IconCheck,
  IconHeart,
  IconHeartFilled,
  IconPlus,
} from '@tabler/icons-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { RED } from '~/constants/colors'
import { isProduction } from '~/lib/actions'

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
  // const [active, setActive] = useState(false)
  const [votes, setVotes] = useState(0)
  // const isAdded = true
  // const votes = 2

  console.log('video.thumbnails[0].url', video.thumbnails[0].url)

  return (
    <UnstyledButton onClick={() => setVotes((prev) => prev + 1)}>
      <Card withBorder p='xs'>
        <Flex gap='sm' justify='space-between' align='center'>
          <Flex gap='sm'>
            <Avatar miw={60} mih={60}>
              <Image
                src={isProduction ? video.thumbnails[0].url : '/avatar.jpg'}
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

          {votes > 0 ? (
            <Flex align='center'>
              <IconHeartFilled size={24} style={{ color: RED }} />
              {votes}
            </Flex>
          ) : (
            <IconPlus size={24} />
          )}
        </Flex>
      </Card>
    </UnstyledButton>
  )
}
