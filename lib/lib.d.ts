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
      }
      id: string
    }
  }
}

type VideoCreateResponse = {
  videoCreate: {
    video: {
      title: string
      videoId: string
    }
  }
}

type GQLVideo = {
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
      edges: []
    }
    createdAt: string
  }
}

type QueueQueryResponse = {
  queue: {
    id: string
    owner: {
      name: string
      id: string
    }
    videos: {
      edges: GQLVideo[]
    }
  }
}
