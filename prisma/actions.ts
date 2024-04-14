

export async function getQueue(queueId: string) {
  const res = await apolloClient.query<QueueQueryResponse>({
    query: GET_QUEUE,
    variables: { id: queueId },
  })
  return res.data.queue
}
