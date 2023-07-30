import { g, config } from '@grafbase/sdk'

// @ts-ignore
const video = g
  .model('Video', {
    author: g.json(),
    lengthSeconds: g.int(),
    stats: g.json(),
    thumbnails: g.json().list(),
    title: g.string(),
    videoId: g.string().unique(),
    votes: g
      .relation(() => user)
      .list()
      .optional(),
    queue: g.relation(() => queue).optional(),
  })
  .auth((rules) => {
    rules.public().create().read().update()
    rules.private().delete()
  })

// @ts-ignore
const queue = g
  .model('Queue', {
    videos: g
      .relation(() => video)
      .list()
      .optional(),
    owner: g.relation(() => user),
  })
  .auth((rules) => {
    rules.public().create().read().update()
    rules.private().delete()
  })

// @ts-ignore
const user = g
  .model('User', {
    name: g.string(),
    queue: g.relation(() => queue).optional(),
  })
  .auth((rules) => {
    rules.public().create().read().update()
    rules.private().delete()
  })

export default config({
  schema: g,
})
