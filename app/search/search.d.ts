type YouTubeImage = {
  height: number
  url: string
  width: number
}

type Badge = {
  text: string
  type: string
}

type Author = {
  avatar: YouTubeImage[]
  badges: Badge[] | []
  canonicalBaseUrl: string | null
  channelId: string
  title: string
}

type Video = {
  author: Author
  badges: Badge[] | string[]
  descriptionSnippet: string
  isLiveNow: boolean
  lengthSeconds: number
  movingThumbnails: YouTubeImage[] | null
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
