import { g, config } from '@grafbase/sdk'

const user = g.model('User', {
  name: g.string(),
  queue: g.relation(() => queue).optional(),
})

const queue = g.model('Queue', {
  videos: g
    .relation(() => video)
    .optional()
    .list()
    .optional(),
  owner: g.relation(user).optional(), // !temporary kasi may bug: nagna null ang owner ng queue ng video, pagka delete ng video.
  nowPlaying: g.json().optional(),
})

const video = g.model('Video', {
  channelTitle: g.string(),
  lengthText: g.string(),
  viewCount: g.string(),
  thumbnail: g.json().list(),
  title: g.string(),
  videoId: g.string(),
  votes: g.relation(user).optional().list().optional(),
  queue: g.relation(queue).optional(),
  addedBy: g.json(),
  isPlaying: g.boolean().default(false),
  isDone: g.boolean().default(false),
  extra: g.json().optional(),
})

const videoLog = g.model('VideoLog', {
  video: g.json(),
})

export default config({
  schema: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
