import { Video } from '~/gql/gql'

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
