import axios from 'axios'
import { Video } from '~/gql/gql'

export const isProduction = process.env.NODE_ENV === 'production'

const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : 'http://localhost:3000'

export async function search(query: string) {
  const params = { query }
  const { data } = await axios.get<SearchVideoResponse>(
    `${serverUrl}/api/search`,
    { params },
  )
  return data
}

export function sortQueue(queue: (Video | undefined)[]) {
  const sortedQueue = queue.sort((a, b) => {
    const bVoteCount = b?.votes?.edges?.length
    const aVoteCount = a?.votes?.edges?.length

    if (bVoteCount && aVoteCount) {
      return bVoteCount - aVoteCount
    } else {
      return 0
    }
  })

  return sortedQueue
}
