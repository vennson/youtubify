type Vote = {
  userId: string
}

type QueueVideo = Video & {
  votes?: Vote[]
}
