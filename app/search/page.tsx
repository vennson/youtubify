'use client'

import { Box, Stack } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import { filterVids } from './utils'
import QueueItem from './QueueItem'

const dummy: SearchResultData = {
  contents: [
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/esg_LKBGyRS7Mr_SZD5BMJ_B-YiDngcUgj__3uNEdc2hY__XkLLjrSZ5SZOtayE7LM3nQmWJ1w=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@QueenBeeEscobar',
          channelId: 'UCcTw5gVW5-QfdHs6hsosr-g',
          title: 'QueenBee',
        },
        badges: ['New'],
        descriptionSnippet:
          'RyanUpchurch #ryanupchurchinvestigates #Lawsuit #KielyRodni #FactsNOTfuckery #factsmatter #TruthorLie ...',
        isLiveNow: false,
        lengthSeconds: 8236,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/_CKsRI8cSy8/mqdefault_6s.webp?du=3000&sqp=CPbNlqYG&rs=AOn4CLClOxhTiSoGmVOfI74hy080e87PHg',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 5 hours ago',
        stats: {
          views: 3850,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/_CKsRI8cSy8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdPC8a1GPKs7FZw91qHs-gmEGHuw',
            width: 480,
          },
        ],
        title:
          'Kiely Rodni Family VS Ryan Upchurch Lawsuit filed OPEN PANEL DISCUSSION!!',
        videoId: '_CKsRI8cSy8',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTRm18lZvdPRNXcX1wallR7RAkpXSQ0nTNAx4uxFw=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@SpindleHorse',
          channelId: 'UCzfyYtgvkx5mLy8nlLlayYg',
          title: 'Vivziepop',
        },
        badges: ['CC'],
        descriptionSnippet:
          "FINALLY SEASON ONE'S FINALE-PART 2 IS HERE!! This episode was originally meant to follow “Ozzie's” as a big celebration of ...",
        isLiveNow: false,
        lengthSeconds: 948,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/D-2799Y07Zc/mqdefault_6s.webp?du=3000&sqp=CLDElqYG&rs=AOn4CLA7EmEyQROMChhsUWx39kkWJi3PbQ',
            width: 320,
          },
        ],
        publishedTimeText: '1 month ago',
        stats: {
          views: 11631145,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/D-2799Y07Zc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDnEWQMjkkfYkBvMuMmC5dwoSqAg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/D-2799Y07Zc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW5h65Vw9RQpbFYp834lfexVHGSw',
            width: 720,
          },
        ],
        title: 'HELLUVA BOSS - QUEEN BEE // S1: Episode 8',
        videoId: 'D-2799Y07Zc',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSXXH8mzu2ZunQrAcEXk1A98H2i4xwyx4-GJoUP3Q=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@Menace2Sobriety1',
          channelId: 'UCZghwiAuKVvJg2OmPOT1CwA',
          title: 'Menace2Sobriety',
        },
        badges: ['New'],
        descriptionSnippet:
          "Bullhorn Betty gets sued by Queen Bee as Queen's lawyer files a counter suit! Betty's got no way out now! We take a look at that ...",
        isLiveNow: false,
        lengthSeconds: 693,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/f0VhsK-PmmM/mqdefault_6s.webp?du=3000&sqp=COyslqYG&rs=AOn4CLDJwurMmyIbB8mNNt0pZrpiTMTHOg',
            width: 320,
          },
        ],
        publishedTimeText: '23 hours ago',
        stats: {
          views: 2530,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/f0VhsK-PmmM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzRh6gcS5BDIts6h-ND7zsnvoz-A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/f0VhsK-PmmM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpm3LyGrt7ha6Ppp0hLFY6UpikqQ',
            width: 720,
          },
        ],
        title:
          "Bullhorn Betty gets counter sued! JLR Investigates get's a warning in Moscow Idaho!",
        videoId: 'f0VhsK-PmmM',
      },
    },
  ],
  cursorNext:
    'EpwDEglxdWVlbiBiZWUajgNTQlNDQVF0Qk5EaGlZMDU1YVRGV1RZSUJDemxXTmxWMVJWTklRMm8wZ2dFTFpsRTJWR1pOWDBOWVJEU0NBUXR6V0hWUGRFeGZhVW8xT0lJQkN6RnVha3gxVkMxbFVGRmpnZ0VMUm1KU1dtcHplSFIzZG1PQ0FRdFFVVUpsWW1SaE9YQk1jNElCQzFoVVpIbDRTWFJPVkZCemdnRUxMVWh6UzFKcU1EaERObS1DQVFzMmJYSkVaMEl0TTJ0V05JSUJDM1ozZGpWYVQzVk9aRWRqZ2dFTGVUZFNlRk5HVlU5T2FYT0NBUXRhWVZwUFNGOUVNemxZVVlJQkMyVmZMVmQwVldNNGNqVkJnZ0VMWmtKak9EUmZTRVV6TFUyQ0FRdFJRMDQwWDJSRWVYTlJOSUlCQzNsNE1GQkZaRVJEYkdVMGdnRUxVR05FUmpJelNHUnNWVm1DQVF0cVFrOU9lblpwYTE5elVZSUJDMlowWjBWRk5WQnJXRGR2c2dFR0NnUUlHUkFDNmdFQ0NBSSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D',
  didYouMean: null,
  estimatedResults: 40909353,
  filterGroups: null,
  refinements: [
    'mephisto queen bee english cover',
    'queen bee taj mahal',
    'queen bee helluva boss',
    'mephisto / queen bee piano',
    'queen bee - mephisto',
    'mephisto queen bee cover',
    'queen bee first take',
    'queen bee chainsaw man',
    'queen bee rochelle diamante',
    'mephisto queen bee instrumental',
    'queen bee song',
    'queen bee - fire',
    'queen bee live',
    'mephisto queen bee lyrics',
    'helluva boss monster ball',
    'mephisto queen bee reaction',
    'queen bee half',
    'busta rhymes bet awards 2023',
    'helluva boss queen bee reaction',
  ],
}
const vidsOnly = filterVids(dummy.contents)
const dummyVids = vidsOnly.map((content) => content.video).slice(0, 3)
const dummyQueue = vidsOnly.map((content) => content.video).slice(0, 1)

export default function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>(dummyVids)
  const [queue, setQueue] = useState<QueueVideo[]>([])

  const form = useForm({
    initialValues: {
      query: '',
    },
  })
  const hasQuery = form.values.query.length > 0

  return (
    <Box maw={600} mx='auto' my='sm'>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        setResults={setResults}
        form={form}
      />
      <Stack mt='md' spacing='xs'>
        {hasQuery &&
          results?.map((video) => (
            <ResultItem
              key={video.videoId}
              video={video}
              setQueue={setQueue}
              queue={queue}
            />
          ))}
        {!hasQuery &&
          queue?.map((video) => (
            <QueueItem key={video.videoId} video={video} />
          ))}
      </Stack>
    </Box>
  )
}
