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

type YoutubeVideo = {
  author: Author
  badges: Badge[] | string[]
  descriptionSnippet: string | null
  isLiveNow: boolean
  lengthSeconds: number
  movingThumbnails: YouTubeImage[] | null
  publishedTimeText: string | null
  stats: {
    views: number
  }
  thumbnails: YouTubeImage[]
  title: string
  videoId: string
}

type Channel = {
  avatar: YouTubeImage[]
  badges: Badge[] | []
  canonicalBaseUrl: string
  channelId: string
  descriptionSnippet: string | null
  stats: {
    subscribers: number
    subscribersText: string
  }
  title: string
  username: string
}

type VideoContent = {
  type: 'video'
  video: YoutubeVideo
}

type ChannelContent = {
  type: 'channel'
  channel: Channel
}

type Content = VideoContent | ChannelContent

type SearchResultData = {
  contents: Content[]
  cursorNext: string
  didYouMean: string | null
  estimatedResults: number
  filterGroups: null
  refinements: string[]
}

type SearchResult = {
  data: SearchResultData
}


