import { QueueVideo } from '~/prisma/types'

export const isProduction = process.env.NODE_ENV === 'production'

export function sortQueueVideos(queueVideos: QueueVideo[]) {
  const sortedVideos = queueVideos.sort((a, b) => {
    const bVoteCount = b?.votes?.length
    const aVoteCount = a?.votes?.length

    if (bVoteCount && aVoteCount) {
      return bVoteCount - aVoteCount
    } else {
      return 0
    }
  })

  return sortedVideos
}
