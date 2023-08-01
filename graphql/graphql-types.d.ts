type UserCreateResponse = {
  userCreate: {
    user: {
      name: string
      id: string
    }
  }
}

type QueueCreateResponse = {
  queueCreate: {
    queue: {
      owner: {
        id: string
        name: string
      }
      id: string
    }
  }
}

// type VideoCreateResponse = {
//   videoCreate: {
//     video: {
//       title: string
//       videoId: string
//     }
//   }
// }

type DBVideo = {
  node: {
    author: {
      avatar: [
        {
          height: number
          url: string
          width: number
        },
      ]
      badges: [
        {
          text: string
          type: string
        },
      ]
      canonicalBaseUrl: null
      channelId: string
      title: string
    }
    lengthSeconds: number
    stats: {
      views: number
    }
    thumbnails: [
      {
        height: number
        url: string
        width: number
      },
      {
        height: number
        url: string
        width: number
      },
    ]
    title: string
    videoId: string
    votes: {
      edges: [
        {
          node: {
            name: string
            id: string
          }
        },
      ]
    }
    createdAt: string
    id: string
  }
}

type DBQueue = {
  id: string
  owner: {
    name: string
    id: string
  }
  videos: {
    edges: DBVideo[]
  }
}

type QueueQueryResponse = {
  queue: DBQueue
}

type VideoCreateResponse = {
  videoCreate: {
    video: {
      id: string
      title: string
    }
  }
}

type VideoUpdateResponse = {
  videoUpdate: {
    video: {
      id: string
      title: string
    }
  }
}
