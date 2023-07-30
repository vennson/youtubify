import { g, config } from '@grafbase/sdk'

const video = g.model('Video', {
  author: g.json(),
  lengthSeconds: g.int(),
  stats: g.json(),
  thumbnails: g.json().list(),
  title: g.string(),
  videoId: g.string(),
  votes: g.string().list(),
  queue: g.relation(() => videoQueue),
})

const videoQueue = g.model('Queue', {
  videos: g.relation(() => video).list(),
  owner: g.string(),
})

export default config({
  schema: g,
})
