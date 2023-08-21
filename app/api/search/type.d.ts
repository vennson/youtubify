type SearchVideoResponse = {
  continuation: string
  estimatedResults: string
  data: SearchVideo[]
  msg: string
  refinements: string[]
}

type SearchVideo = {
  type: 'shorts_listing' | 'video' | 'query_listing'
  title: string
  data?: DatumDatum[]
  videoId?: string
  channelTitle?: string
  channelId?: string
  channelThumbnail?: Thumbnail[]
  description?: string
  viewCount?: string
  publishedTimeText?: string
  publishDate?: Date
  publishedAt?: Date
  lengthText?: string
  thumbnail?: Thumbnail[]
  richThumbnail?: Thumbnail[] | null
  badges?: string[]
}

type Thumbnail = {
  url: string
  width: number
  height: number
}

type DatumDatum = {
  type?: 'shorts'
  videoId?: string
  title?: string
  viewCountText?: string
  thumbnail: Thumbnail[]
  isOriginalAspectRatio?: boolean
  params?: string
  playerParams?: string
  sequenceParams?: string
  query?: string
}
