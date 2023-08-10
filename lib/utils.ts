export function sortQueue(queue: DBVideo[]) {
  const sortedQueue = queue.sort((a, b) => {
    const bVoteCount = b?.node.votes?.edges.length
    const aVoteCount = a?.node.votes?.edges.length

    if (bVoteCount && aVoteCount) {
      return bVoteCount - aVoteCount
    } else {
      return 0
    }
  })

  return sortedQueue
}
