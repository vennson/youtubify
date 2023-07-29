type YouTubeImage = {
  height: number
  url: string
  width: number
}

type Author = {
  avatar: YouTubeImage[]
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

type Video = {
  author: Author
  badges: []
  descriptionSnippet: string
  isLiveNow: boolean
  lengthSeconds: number
  movingThumbnails: YouTubeImage[]
  publishedTimeText: string
  stats: {
    views: number
  }
  thumbnails: YouTubeImage[]
  title: string
  videoId: string
}

type Content = {
  type: 'video'
  video: Video
}

type SearchResultData = {
  contents: Content[]
  cursorNext: string
  didYouMean: string
  estimatedResults: number
  filterGroups: null
  refinements: string[]
}

type SearchResult = {
  data: SearchResultData
}
