'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Flex,
  Loader,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { helloApi, search } from '~/lib/actions'
import ResultItem from './ResultItem'
import SearchBar from './SearchBar'
import { filterVids } from './utils'
import Image from 'next/image'

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
    {
      channel: {
        avatar: [
          {
            height: 88,
            url: 'https://yt3.ggpht.com/esg_LKBGyRS7Mr_SZD5BMJ_B-YiDngcUgj__3uNEdc2hY__XkLLjrSZ5SZOtayE7LM3nQmWJ1w=s88-c-k-c0x00ffffff-no-rj-mo',
            width: 88,
          },
          {
            height: 176,
            url: 'https://yt3.ggpht.com/esg_LKBGyRS7Mr_SZD5BMJ_B-YiDngcUgj__3uNEdc2hY__XkLLjrSZ5SZOtayE7LM3nQmWJ1w=s176-c-k-c0x00ffffff-no-rj-mo',
            width: 176,
          },
        ],
        badges: [],
        canonicalBaseUrl: '/@QueenBeeEscobar',
        channelId: 'UCcTw5gVW5-QfdHs6hsosr-g',
        descriptionSnippet:
          'Disclaimer- QueenBee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        stats: {
          subscribers: 13200,
          subscribersText: '13.2K subscribers',
        },
        title: 'QueenBee',
        username: '@QueenBeeEscobar',
      },
      type: 'channel',
    },
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
          'TaylorShabusiness #ShadThyrion #MurderTrial #Wisconsin Schabusiness, 25, is accused of strangling 25-year-old Shad Thyrion ...',
        isLiveNow: false,
        lengthSeconds: 24671,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/V57KohFHSfI/mqdefault_6s.webp?du=3000&sqp=CJKNlqYG&rs=AOn4CLB6s2stD_YZkBgImFhqyThPkzDCDA',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 2 days ago',
        stats: {
          views: 2635,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/V57KohFHSfI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpit38tbthBkNXtZGOE3UlwU-MUg',
            width: 480,
          },
        ],
        title: 'WI vs Taylor Shabusiness Finishing Day 2 & 3',
        videoId: 'V57KohFHSfI',
      },
    },
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
          'TaylorShabusiness #ShadThyrion #MurderTrial #Wisconsin Schabusiness, 25, is accused of strangling 25-year-old Shad Thyrion ...',
        isLiveNow: false,
        lengthSeconds: 28945,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/DREiP-kVXVQ/mqdefault_6s.webp?du=3000&sqp=CLy3lqYG&rs=AOn4CLCDo2AvISEL-meVVip26p4hPFyKeQ',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 3 days ago',
        stats: {
          views: 4178,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/DREiP-kVXVQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkC1j_eV65MXCq0DyfsXAkqN3L3g',
            width: 480,
          },
        ],
        title: 'WI -VS- Taylor Shabusiness Murder Trial Discussion',
        videoId: 'DREiP-kVXVQ',
      },
    },
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
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 787,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/nro1GeAyhQ8/mqdefault_6s.webp?du=3000&sqp=CJ_AlqYG&rs=AOn4CLDdGh5TZFDc9DX-PDw66zVwjLB-Cw',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 5 days ago',
        stats: {
          views: 1400,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/nro1GeAyhQ8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA54ny7nceFWew17rnBUfaW_USTMg',
            width: 480,
          },
        ],
        title: 'LIVE Press Conference Carlee Russell',
        videoId: 'nro1GeAyhQ8',
      },
    },
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
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 11172,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/n2kEYt0FobY/mqdefault_6s.webp?du=3000&sqp=CNC7lqYG&rs=AOn4CLC5PKHxkWUyb9SRBdKTfuWqDeohRw',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 5 days ago',
        stats: {
          views: 6037,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/n2kEYt0FobY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB6VddtT1AD5SHtIM0e-nYO3PSYA',
            width: 480,
          },
        ],
        title:
          'Lets get this on the table- Clearing the lies up with Chronicles of the Shady! OPEN PANEL',
        videoId: 'n2kEYt0FobY',
      },
    },
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
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 17504,
        movingThumbnails: null,
        publishedTimeText: 'Streamed 5 days ago',
        stats: {
          views: 7873,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/jBONzvik_sQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUq7UId2Ou0wiAQ6ucDg4cBXPlXg',
            width: 480,
          },
        ],
        title:
          'Sunday Shenanigans & SHAMBLES! TIME to CORRECT the LIES, Rumors & Hobbits Drama! OPEN PANEL!!',
        videoId: 'jBONzvik_sQ',
      },
    },
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
        badges: [],
        descriptionSnippet:
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 12934,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/GXDAACqo7p4/mqdefault_6s.webp?du=3000&sqp=CLKilqYG&rs=AOn4CLBjVrdLBzZhACBm1_uG96ngkgZquw',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 7 days ago',
        stats: {
          views: 7380,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/GXDAACqo7p4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKvHxjeLgiuV0Kp8gzgGUjx01JaQ',
            width: 480,
          },
        ],
        title:
          "TGIF! Did we all survive? Let's talk about critical kays 500k lawsuit she just lost! OPEN PANEL",
        videoId: 'GXDAACqo7p4',
      },
    },
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
        badges: [],
        descriptionSnippet:
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 8363,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/ah-UbyZCLMU/mqdefault_6s.webp?du=3000&sqp=CJ7BlqYG&rs=AOn4CLBt4J-1nW4QfAoorwr5L60w_EWAFA',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 9 days ago',
        stats: {
          views: 6120,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/ah-UbyZCLMU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY8V7aPHM3P1VwP_ZWlDT-YxLIXQ',
            width: 480,
          },
        ],
        title:
          'Carlee Russell Press Conference & A well needed Chat! OPEN PANEL',
        videoId: 'ah-UbyZCLMU',
      },
    },
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
        badges: [],
        descriptionSnippet:
          'LongislandserialKiller #TheGilgoGirls #RexHeuermann #truecrime #truecrimecommunity #awareness #factsmatter ...',
        isLiveNow: false,
        lengthSeconds: 17641,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/apxkwkNrhkw/mqdefault_6s.webp?du=3000&sqp=CPjElqYG&rs=AOn4CLBbQ44V88679LMQxsq770uCN4j38A',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 2 weeks ago',
        stats: {
          views: 5571,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/apxkwkNrhkw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwyl1Th75ZGv_ZdyEwp8AsRiz61Q',
            width: 480,
          },
        ],
        title:
          'The Gilgo Four Girls/ The Long Island serial killer Caught! JonBenet Ramseys "Killer" confessed!',
        videoId: 'apxkwkNrhkw',
      },
    },
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
        badges: [],
        descriptionSnippet:
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 16084,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/BIMbEhMvP-s/mqdefault_6s.webp?du=3000&sqp=CMLNlqYG&rs=AOn4CLBM6aIaoacUzhmhdG6b0-bizEsZlw',
            width: 320,
          },
        ],
        publishedTimeText: 'Streamed 2 weeks ago',
        stats: {
          views: 7920,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/BIMbEhMvP-s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYy5VUVN4anRqF6_IbXkVeWzrMtA',
            width: 480,
          },
        ],
        title:
          'The lawyer we ALLL wanna know & Emily Baker talk possible charges over Autopsy pics! OPEN PANEL',
        videoId: 'BIMbEhMvP-s',
      },
    },
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
        badges: [],
        descriptionSnippet:
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 53,
        movingThumbnails: null,
        publishedTimeText: '2 weeks ago',
        stats: {
          views: 2760,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/3aglewb99ms/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAE6VlfYGV2RZKCQPCm3hFRee9z1w',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/3aglewb99ms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI9APFX_rMnPVdhW4CsgRtLCAkMQ',
            width: 720,
          },
        ],
        title:
          "@ZavGirl explains why she didn't upload Autopsy Photos to YouTube/ How to purchase them on patreon",
        videoId: '3aglewb99ms',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTLfcx1KWl5loKtmFZs9ymdoPImGAHCpomvoSh75w=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@QUEENBEAST',
          channelId: 'UCuJqEWMdAced9ChdW4dvbPA',
          title: 'QUEEN BEAST',
        },
        badges: [],
        descriptionSnippet:
          'CALLING MY MOM THE B WORD PRANK + MEGA PRAWNS SEAFOOD BOIL MUKBANG | QUEEN BEAST & LAYLA Road to ...',
        isLiveNow: false,
        lengthSeconds: 1193,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/2Rm3AKrk8Io/mqdefault_6s.webp?du=3000&sqp=CMy_lqYG&rs=AOn4CLAhDXRkPPJSsjMbxEQ1d89apuIxPw',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 1154483,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/2Rm3AKrk8Io/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAgzbJDVvsXh_lJcixNDcmGTtsuA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/2Rm3AKrk8Io/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzcBoxcmXtBVGxcMuTpxhETdVEqQ',
            width: 720,
          },
        ],
        title:
          'CALLING MY MOM THE B WORD PRANK + MEGA PRAWNS SEAFOOD BOIL MUKBANG | QUEEN BEAST & LAYLA',
        videoId: '2Rm3AKrk8Io',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaS8h9Wqu5TSnhpclGj_kiV-fEisgq1mGbOOA8CU=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@BloodySundaySessions',
          channelId: 'UCqPfdgyNBy1DAWyZ-pZbJ8g',
          title: 'BloodySundaySessions',
        },
        badges: [],
        descriptionSnippet:
          'Taj Mahal - Queen Bee - Bloody Sunday Sessions In collaboration with Live For Live Music http://liveforlivemusic.com/ ...',
        isLiveNow: false,
        lengthSeconds: 342,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/sjTEkhXgu_4/mqdefault_6s.webp?du=3000&sqp=CM6wlqYG&rs=AOn4CLBOVbZZe0zsPZMJOs7FCgWnrh3ASw',
            width: 320,
          },
        ],
        publishedTimeText: '7 years ago',
        stats: {
          views: 2698768,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/sjTEkhXgu_4/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGMoVDAP&rs=AOn4CLB35Nwn4IfZkAbqEtIQAzDlPOPOaw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/sjTEkhXgu_4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGMoVDAP&rs=AOn4CLAY-C40OrTSnnHF3IxdCW1eo6gL8g',
            width: 720,
          },
        ],
        title: 'Taj Mahal - Queen Bee - Bloody Sunday Sessions',
        videoId: 'sjTEkhXgu_4',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/DueTfMxbrELl4BI85So16YEmrsRF-jaOhzRqmZlRYT4qHLdivscwV3of7y96zKUSun1byDzx0g=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@ayylmaotv',
          channelId: 'UCKUAVy2Kd0vAsu1D89y7ujg',
          title: 'Ayy Lmao',
        },
        badges: [],
        descriptionSnippet:
          'The Cotton Candy song from HELLUVA BOSS - QUEEN BEE // S1: Episode 8 #helluvaboss #helluvabossseason2 #vivziepop ...',
        isLiveNow: false,
        lengthSeconds: 186,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/iLs8t1N8Xkw/mqdefault_6s.webp?du=3000&sqp=CKyqlqYG&rs=AOn4CLC61jel3k9FbtdruxYHEH1a3Bs_Pg',
            width: 320,
          },
        ],
        publishedTimeText: '1 month ago',
        stats: {
          views: 3348778,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/iLs8t1N8Xkw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPBqtG4c-EMNRYPuDYqsAN0w32QA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/iLs8t1N8Xkw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiDaMaw17PbD28_y0B9SqslfMwjg',
            width: 720,
          },
        ],
        title:
          '"Cotton Candy" Song from HELLUVA BOSS - QUEEN BEE // S1: Episode 8',
        videoId: 'iLs8t1N8Xkw',
      },
    },
    {
      channel: {
        avatar: [
          {
            height: 88,
            url: 'https://yt3.googleusercontent.com/iH4u_kiBwtLUvsDgsHsGYvj9rM_uEFW6HTIBU7ji2l8yH70dh5wIQs-mL8JvX2zEu_MoU-k8=s88-c-k-c0x00ffffff-no-rj-mo',
            width: 88,
          },
          {
            height: 176,
            url: 'https://yt3.googleusercontent.com/iH4u_kiBwtLUvsDgsHsGYvj9rM_uEFW6HTIBU7ji2l8yH70dh5wIQs-mL8JvX2zEu_MoU-k8=s176-c-k-c0x00ffffff-no-rj-mo',
            width: 176,
          },
        ],
        badges: [
          {
            text: 'Official Artist Channel',
            type: 'OFFICIAL_ARTIST_CHANNEL',
          },
        ],
        canonicalBaseUrl: '/@ziyoou-vachiSMEJ',
        channelId: 'UCWYODUHcJbtt1NK0px4grYg',
        descriptionSnippet: null,
        stats: {
          subscribers: 626000,
          subscribersText: '626K subscribers',
        },
        title: '女王蜂 / QUEEN BEE official YouTube channel',
        username: '@ziyoou-vachiSMEJ',
      },
      type: 'channel',
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSPEGZyCYn6jlNu9kbov9oJAw_GG4cSgYAd8fAAyw=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@Aphmau',
          channelId: 'UCzYfz8uibvnB7Yc1LjePi4g',
          title: 'Aphmau',
        },
        badges: [],
        descriptionSnippet: '#Minecraft #Aphmau.',
        isLiveNow: false,
        lengthSeconds: 1054,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/b3kbFDhTPGc/mqdefault_6s.webp?du=3000&sqp=CJKUlqYG&rs=AOn4CLCsyiEPJLzvxEf6JeaBtFXIFuCymw',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 9238844,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/b3kbFDhTPGc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOcQWisubGk0maBax6ATFuPoIFww',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/b3kbFDhTPGc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZKX8p9i1KJHoFf62fxh0GtFUufQ',
            width: 720,
          },
        ],
        title: 'Protecting My Hive As The QUEEN BEE In Minecraft!',
        videoId: 'b3kbFDhTPGc',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTu525o6voFVd3nPdrc5tofqLDp1ZmK7OtWIMfm0w=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@queenbeeparadisetamil',
          channelId: 'UCeCAgFOPBU7R-rO4WOKuWRw',
          title: 'Queen Bee Paradise Tamil',
        },
        badges: ['New'],
        descriptionSnippet:
          'PRODUCTS SHOWN IN THE VIDEO: =========================== https://www.theindusvalley.in/?ref=queenbeeparadise ...',
        isLiveNow: false,
        lengthSeconds: 764,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/l_y2UtByyso/mqdefault_6s.webp?du=3000&sqp=CIa1lqYG&rs=AOn4CLBUrRbl-khAQL0ZfhH9JLu8dCkDTA',
            width: 320,
          },
        ],
        publishedTimeText: '17 hours ago',
        stats: {
          views: 65380,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/l_y2UtByyso/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJVOIcIzib1kSNc5girUtkk25Cig',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/l_y2UtByyso/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRI2rpl9pR8KV2i7hBP7ySr32o7w',
            width: 720,
          },
        ],
        title:
          'Time and Money saving Kitchen Hacks - இந்த TRICKS தெரிந்தால் அதிக நேரம் கிச்சன்-ல் நிக்க மாட்டீங்க',
        videoId: 'l_y2UtByyso',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/uzv-7Erjkj3_WkSenxEEsaHMQuEqp9IVREQDTS3RO5xRqj8wW_ZhdTE8bxRXCr9ISTXwQC3DxQ=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@Tank_Arena',
          channelId: 'UCGsuMfjhQpsj8tykrMNl23A',
          title: 'ARENA TANK CARTOON',
        },
        badges: ['New'],
        descriptionSnippet:
          'POISON QUEEN BEE : The Rage of the Giant Wasp | Arena Tank Cartoon Help Arena reach 1000000 subscribers. Click to ...',
        isLiveNow: false,
        lengthSeconds: 2061,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/z4qdO7Dgw_0/mqdefault_6s.webp?du=3000&sqp=CLrQlqYG&rs=AOn4CLDxDY6raiwsDbuSJQAt0LVpbPXjnw',
            width: 320,
          },
        ],
        publishedTimeText: '1 day ago',
        stats: {
          views: 24357,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/z4qdO7Dgw_0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9zfZvEpyCmk0X60seIHO2G-iBpQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/z4qdO7Dgw_0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS3yBF6Wbd7AG7YbZPHxz2OtOJFw',
            width: 720,
          },
        ],
        title:
          '🐝 POISON QUEEN BEE 🐝 : The Rage of the Giant Wasp | Arena Tank Cartoon',
        videoId: 'z4qdO7Dgw_0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTLfcx1KWl5loKtmFZs9ymdoPImGAHCpomvoSh75w=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@QUEENBEAST',
          channelId: 'UCuJqEWMdAced9ChdW4dvbPA',
          title: 'QUEEN BEAST',
        },
        badges: [],
        descriptionSnippet:
          'RED FOOD VS BLUE FOOD CHALLENGE (JELLY CANDY CAKE SAUSAGE BURGER) MUKBANG 먹방 | QUEEN BEAST ...',
        isLiveNow: false,
        lengthSeconds: 1722,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/U_oOC2ypbG0/mqdefault_6s.webp?du=3000&sqp=COOZlqYG&rs=AOn4CLBkkWNR2xd85FhaDBbVOMPmz9EhLw',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 6861499,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/U_oOC2ypbG0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3W23Uc5pTY7e4KNdiUCKXt9Xgzw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/U_oOC2ypbG0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOWZ1kHraaC8UlOx_VPVOnQ6I3dw',
            width: 720,
          },
        ],
        title:
          'RED FOOD VS BLUE FOOD CHALLENGE MUKBANG (JELLY CANDY CAKE SAUSAGE BURGER)먹방 QUEEN BEAST & LAYLA',
        videoId: 'U_oOC2ypbG0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/iT19RXLQGZfI8LPMTgVDxUyvfkWjI_RyiY6wqJcQ20Av2GMT6spy-DNX2TbsJYIGe_uxU6XKVg=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@japanesenaturalbeekeeping7075',
          channelId: 'UCz-fe00ivfRUO9lP5e4bZsg',
          title: 'Japanese natural beekeeping',
        },
        badges: ['4K', 'CC'],
        descriptionSnippet:
          'Filming in cooperation with @FUMIHIKOHIRAI For more information Website (English) https://www.japan-natural-beekeeping.org ...',
        isLiveNow: false,
        lengthSeconds: 553,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/euMNIu9a7ps/mqdefault_6s.webp?du=3000&sqp=CJ6mlqYG&rs=AOn4CLB5DE27NT4bUp1PTTjcTQ0Pdoo_JA',
            width: 320,
          },
        ],
        publishedTimeText: '5 months ago',
        stats: {
          views: 1513899,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/euMNIu9a7ps/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqUN7j6qht5A9KMAXKsmaIwvsVVQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/euMNIu9a7ps/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBj6-XA5UXh4_MQ7nwcek3rKUpMsA',
            width: 720,
          },
        ],
        title: 'Giant hornet vs Japanese honeybees. Hot defensive bee ball.',
        videoId: 'euMNIu9a7ps',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSPEGZyCYn6jlNu9kbov9oJAw_GG4cSgYAd8fAAyw=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@Aphmau',
          channelId: 'UCzYfz8uibvnB7Yc1LjePi4g',
          title: 'Aphmau',
        },
        badges: [],
        descriptionSnippet: '#Minecraft #Aphmau.',
        isLiveNow: false,
        lengthSeconds: 1133,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/i0Mw_PbZj6M/mqdefault_6s.webp?du=3000&sqp=CJDClqYG&rs=AOn4CLDMHFSyNAzUrWGWI_sZPUPZ2KETsg',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 9798951,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/i0Mw_PbZj6M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSA7BYJG7FiDfzNjmrOHxllIU2Pg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/i0Mw_PbZj6M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmt1HpXzh283gCMMb-lWAJKMss3A',
            width: 720,
          },
        ],
        title: 'Playing Minecraft As The QUEEN BEE!',
        videoId: 'i0Mw_PbZj6M',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/PyhyePIpqLjUNP4WuIgeAXLZXOLq0KlXIBdstvoSxymQ3Ba0ywj3Dx0Wr6gmShaOphwscb91fMg=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@YappyBeeman',
          channelId: 'UCMxMK8p95f-5mWEEDKLA8WA',
          title: 'Yappy Beeman   ',
        },
        badges: [],
        descriptionSnippet:
          'Another awesome day in North Alabama today friends. After really rough day yesterday, with tornadoes running all through the ...',
        isLiveNow: false,
        lengthSeconds: 439,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/YgOYLDf5Wv8/mqdefault_6s.webp?du=3000&sqp=CMD-laYG&rs=AOn4CLCbLEESFXLI9RXbi8yDXkWWFLc8vw',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 32455485,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/YgOYLDf5Wv8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIGAoQDAP&rs=AOn4CLC-7ayvtgMkOOxmVsfcc-2HcgrEMQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/YgOYLDf5Wv8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIGAoQDAP&rs=AOn4CLDqtrwONiT1LqVV9sL3AFBoBVS_1Q',
            width: 720,
          },
        ],
        title: "If I Hadn't Caught It On Camera You Wouldn't Have Believed Me",
        videoId: 'YgOYLDf5Wv8',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/6DHAAg1NYMP0YQ2Vi8_vVy971XrJywh2tbR6nllRCeNjeHN9i7eiJ0XqlT__rPj6wZMPYob18A=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@kawaiiromcommangas',
          channelId: 'UC9Qipk3psnRhwP5Spj0QLGw',
          title: 'Kawaii RomCom Mangas',
        },
        badges: [],
        descriptionSnippet:
          'Kawaii RomCom Mangas posts original RomCom Mangas that were made just for you! All mangas here are exclusive to this ...',
        isLiveNow: false,
        lengthSeconds: 971,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/Qe7JrcMmOKw/mqdefault_6s.webp?du=3000&sqp=CNDGlqYG&rs=AOn4CLA-bS9Lo921_VrmUO1EmishMTzeGQ',
            width: 320,
          },
        ],
        publishedTimeText: '7 days ago',
        stats: {
          views: 159009,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/Qe7JrcMmOKw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0OADoBZaLd8xByL0qQZAkkE39jw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/Qe7JrcMmOKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZEyQE-F2PfWuVLKuWTAW3NljGJA',
            width: 720,
          },
        ],
        title:
          'What Happened After I Kept Ignoring the Stuck-Up Queenbee at My School….【RomCom】【Manga】',
        videoId: 'Qe7JrcMmOKw',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/6DHAAg1NYMP0YQ2Vi8_vVy971XrJywh2tbR6nllRCeNjeHN9i7eiJ0XqlT__rPj6wZMPYob18A=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@kawaiiromcommangas',
          channelId: 'UC9Qipk3psnRhwP5Spj0QLGw',
          title: 'Kawaii RomCom Mangas',
        },
        badges: ['New'],
        descriptionSnippet:
          'Kawaii RomCom Mangas posts original RomCom Mangas that were made just for you! All mangas here are exclusive to this ...',
        isLiveNow: false,
        lengthSeconds: 969,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/GT9y5krZzhA/mqdefault_6s.webp?du=3000&sqp=CMCblqYG&rs=AOn4CLDWwdgOZJAfO-d878Wg_9a1IS0oKw',
            width: 320,
          },
        ],
        publishedTimeText: '3 days ago',
        stats: {
          views: 78600,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/GT9y5krZzhA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIyCYUJwHwMBaH9iUhx4-gl5kySw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/GT9y5krZzhA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBCommnoxWnL4stFZTMWrRjlL6bA',
            width: 720,
          },
        ],
        title:
          'The Queen Bee Who Hates Men Was Sniffing My Gym Clothes in an Empty Classroom After School...【Manga】',
        videoId: 'GT9y5krZzhA',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/goCGyeogpWQz4OBCt6FFrT1vXpno53tkkYB7el62BJcVot7uM6CWIp1VfwvBlL0QvgCwGoGFYA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@PlayingForChange',
          channelId: 'UCn25nZ12HEZq_w_m_1DmbbA',
          title: 'Playing For Change',
        },
        badges: ['4K'],
        descriptionSnippet:
          'Colors” is a feel-good single from the Black Pumas, originally released on their self-titled debut album and nominated for two ...',
        isLiveNow: false,
        lengthSeconds: 297,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/-rM3xn2JXGU/mqdefault_6s.webp?du=3000&sqp=CIKklqYG&rs=AOn4CLAKB7WAdtF5n0d3TLstTpevDzoNxQ',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 3608224,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/-rM3xn2JXGU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNcSpMyGvYGTFsebtQ4KuBYkZvxQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/-rM3xn2JXGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByxy8C8QHdiTO0ezve0BOy0mnHyg',
            width: 720,
          },
        ],
        title:
          'Colors feat. Black Pumas, Slash, The Pocket Queen | Playing For Change | Song Around The World',
        videoId: '-rM3xn2JXGU',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/iH4u_kiBwtLUvsDgsHsGYvj9rM_uEFW6HTIBU7ji2l8yH70dh5wIQs-mL8JvX2zEu_MoU-k8=s88-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Official Artist Channel',
              type: 'OFFICIAL_ARTIST_CHANNEL',
            },
          ],
          canonicalBaseUrl: null,
          channelId: 'UCWYODUHcJbtt1NK0px4grYg',
          title: '女王蜂 / QUEEN BEE official YouTube channel',
        },
        badges: ['4K', 'CC'],
        descriptionSnippet:
          '-------- 『メフィスト(Mephisto)』Official MV Starring : Avu-chan Yashi-chan Hibari-kun Karin Ono Director : Sayaka Nakane ...',
        isLiveNow: false,
        lengthSeconds: 257,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/Yo83M-KOc7k/mqdefault_6s.webp?du=3000&sqp=CMrDlqYG&rs=AOn4CLA_t8sKc0kHmC4MKTLR3Q20KUpbiA',
            width: 320,
          },
        ],
        publishedTimeText: '2 months ago',
        stats: {
          views: 9257576,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/Yo83M-KOc7k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAah83YXO33Z3BurbUPYJU-RhI4RA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/Yo83M-KOc7k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArvEChGrmjKuWaKYo01lU7sYgV1Q',
            width: 720,
          },
        ],
        title: '女王蜂『メフィスト(Mephisto)』Official MV',
        videoId: 'Yo83M-KOc7k',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/sbpCdFf9PmTW5_LECE4TC9qRHDG6-_yEnd83orRGa6YDkEG0mHoiaNsJQqo98-Ab-HV5TB6W=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@PerunGames',
          channelId: 'UCcaTylSny8eiGSwSduJhX2Q',
          title: 'Perun Games',
        },
        badges: ['New'],
        descriptionSnippet:
          'Music Producer Reacts to Queen Bee - Mephisto / THE FIRST TAKE ❗❗ Full Reactions Here: ...',
        isLiveNow: false,
        lengthSeconds: 485,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/uRAOQuH2uhQ/mqdefault_6s.webp?du=3000&sqp=CMzFlqYG&rs=AOn4CLAmE-2zpH6HiMsQTIjvpL5Ml_nF2Q',
            width: 320,
          },
        ],
        publishedTimeText: '8 hours ago',
        stats: {
          views: 109,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/uRAOQuH2uhQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6Naq0nyBl9iJrsTFFTgy-6JTDZw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/uRAOQuH2uhQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhsDQQ4SHkc0nONR8VufLImlnmTw',
            width: 720,
          },
        ],
        title: 'Music Producer Reacts to Queen Bee - Mephisto / THE FIRST TAKE',
        videoId: 'uRAOQuH2uhQ',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/zx9G2DylNE9OkKt7lNNNEC0QnVK0gULGX8mr13E5dsdyLc0JxCxSXhPUfhNVcf9YJdeRuFc7=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@SoundNime99',
          channelId: 'UCwoaAQlffNeifIZw-efQFHQ',
          title: 'SoundNime',
        },
        badges: [],
        descriptionSnippet:
          'Oshi no Ko Ending Theme "Mephisto" by QUEEN BEE TV Anime "Oshi no Ko" Ending Theme ...',
        isLiveNow: false,
        lengthSeconds: 228,
        movingThumbnails: null,
        publishedTimeText: '3 months ago',
        stats: {
          views: 7466323,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/A48bcNyi1VM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgWKy5G3-RN_Tag84-dj1SNqAkZg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/A48bcNyi1VM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTezADfNcp67VLubeF5nomOqjCRQ',
            width: 720,
          },
        ],
        title: 'Oshi no Ko - Ending Full『Mephisto』by QUEEN BEE (Lyrics)',
        videoId: 'A48bcNyi1VM',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/A79Obd6jZ9dFlsftDpAYg5jMJWvtA_dXJ2DYjeQcyoqkTM5QohHixLmOXz2Jfb-QKkv1jrXHYAQ=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@beefitbeekeeping',
          channelId: 'UCjwvWim46dlNGsgwqmu1HMA',
          title: 'BeeFit Beekeeping',
        },
        badges: ['New', '4K'],
        descriptionSnippet:
          'And...WITHOUT GRAFTING! These Apimaye defender hives are a good tool to have in your tool belt when it comes to making ...',
        isLiveNow: false,
        lengthSeconds: 1520,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/9V6UuESHCj4/mqdefault_6s.webp?du=3000&sqp=CPyglqYG&rs=AOn4CLCXnNGODapSgu60hEdQyUpcBSzKYA',
            width: 320,
          },
        ],
        publishedTimeText: '12 hours ago',
        stats: {
          views: 732,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/9V6UuESHCj4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC03bN7RzfD4ygVGbJpyrjo2lZChQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/9V6UuESHCj4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvYMs89ZlF8zLzX3pUgRmNe0pR0A',
            width: 720,
          },
        ],
        title:
          'An EASY Way To Make 1,000 Queen Bees! + splitting hives & pulling honey #beekeeping',
        videoId: '9V6UuESHCj4',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/strovuGseGwWn9DJUy1ORM3XobwbZ5RR97tWYLgeK0b3NroyA6ZqyNv-InlEHZynZjVcvO4j=s88-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Official Artist Channel',
              type: 'OFFICIAL_ARTIST_CHANNEL',
            },
          ],
          canonicalBaseUrl: null,
          channelId: 'UCvwLGtS025Kafufr8SsR_EQ',
          title: 'Barbra Streisand',
        },
        badges: [],
        descriptionSnippet:
          'Provided to YouTube by Columbia Queen Bee · Barbra Streisand A Star Is Born ℗ 1976 Columbia Records, a division of Sony ...',
        isLiveNow: false,
        lengthSeconds: 236,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 280021,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/ZaZOH_D39XQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-RFtuRit2htJywJYEgtwIa1_LzQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/ZaZOH_D39XQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHEGCJaah8JMTitew6OiS5wMG4Xg',
            width: 720,
          },
        ],
        title: 'Queen Bee',
        videoId: 'ZaZOH_D39XQ',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/goCGyeogpWQz4OBCt6FFrT1vXpno53tkkYB7el62BJcVot7uM6CWIp1VfwvBlL0QvgCwGoGFYA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@PlayingForChange',
          channelId: 'UCn25nZ12HEZq_w_m_1DmbbA',
          title: 'Playing For Change',
        },
        badges: [],
        descriptionSnippet:
          'Get “rocked to your soul” with the “sweet” sounds of the blues classic, “Queen Bee,” by legendary musician, Taj Mahal. “Queen ...',
        isLiveNow: false,
        lengthSeconds: 289,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/e_-WtUc8r5A/mqdefault_6s.webp?du=3000&sqp=CICjlqYG&rs=AOn4CLBZ0CGytUBeNYhHWcduoZwYfQGacg',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 1102586,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/e_-WtUc8r5A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQzm3-SyJgITp6SIWVVTNVGAz5RQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/e_-WtUc8r5A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRUnXaOlH29dP4RebVHd_t7jILFw',
            width: 720,
          },
        ],
        title:
          'Queen Bee feat. Taj Mahal, Ben Harper, Rosanne Cash | Playing For Change | Song Around The World',
        videoId: 'e_-WtUc8r5A',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/eOIJuw5N8WS5B1Jv5ChjS1nb-sMxMQCss72HFdBTW-H97IYAcd0_enBjaWDp8sgONQY4S5IUl3o=s88-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Official Artist Channel',
              type: 'OFFICIAL_ARTIST_CHANNEL',
            },
          ],
          canonicalBaseUrl: null,
          channelId: 'UC4w6_foxgGue-rPbVb0BMow',
          title: 'Count Basie',
        },
        badges: [],
        descriptionSnippet:
          'Provided to YouTube by Universal Music Group The Queen Bee · Count Basie And His Orchestra Straight Ahead ℗ 1968 The ...',
        isLiveNow: false,
        lengthSeconds: 254,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 272579,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/fBc84_HE3-M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0B7_6TBvvLe7lNVKlYzM-s3YkLg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/fBc84_HE3-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-EbOmI56zYPRdoSBvthYLMWBdEA',
            width: 720,
          },
        ],
        title: 'The Queen Bee',
        videoId: 'fBc84_HE3-M',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSuzGky6Gi4hcpwhv7tZci18mBU7kuSdgKnxBuk=s88-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Official Artist Channel',
              type: 'OFFICIAL_ARTIST_CHANNEL',
            },
          ],
          canonicalBaseUrl: null,
          channelId: 'UCCIi2-PY_EP6il-Tossk8Sg',
          title: 'Taj Mahal',
        },
        badges: [],
        descriptionSnippet:
          'Provided to YouTube by Private Music Queen Bee · Taj Mahal Señor Blues ℗ 1997 BMG Music Released on: 1997-06-16 ...',
        isLiveNow: false,
        lengthSeconds: 281,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 336418,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/QCN4_dDysQ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmKK-1OGfwhySkXmXBejeuGniqGA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/QCN4_dDysQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEI_0nftfQ_HFPcKrFmlM3RakS_g',
            width: 720,
          },
        ],
        title: 'Queen Bee',
        videoId: 'QCN4_dDysQ4',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTiFXzX8ZtH8fjieZzT5N8YAbqoXPUcoyWkRiYo=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@QueenBeeOfficialVEVO',
          channelId: 'UCMdwuxCUYD0kX-FFp0vPmgA',
          title: 'QueenBeeVEVO',
        },
        badges: [],
        descriptionSnippet:
          'Music video by QUEEN BEE performing Half (Full Version). (C) 2018 Sony Music Associated Records, a division of Sony Music ...',
        isLiveNow: false,
        lengthSeconds: 236,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/yx0PEdDCle4/mqdefault_6s.webp?du=3000&sqp=CMDIlqYG&rs=AOn4CLBtmtVrHNNGiG1dNkQfgokHpTi6Rg',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 3099019,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/yx0PEdDCle4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAE-q8xmwHQ3lLjNOAJi2uZ-whnwg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/yx0PEdDCle4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_Y1YjySQIS3leZXbwJwF12EIw9Q',
            width: 720,
          },
        ],
        title: 'Queen Bee - Half (Full Version)',
        videoId: 'yx0PEdDCle4',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQ_qN88ivIzqLD-BFExW8vpJ44qMA3VHpHoIjBAYNA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@edinburghhoneyco.',
          channelId: 'UCAh0MNuF2uPfbF6O8URoJrA',
          title: 'EDINBURGH HONEY CO.',
        },
        badges: [],
        descriptionSnippet:
          'We all know there is one and only Queen B but what about our Bee Queens. Here is a very interesting video about their amazing ...',
        isLiveNow: false,
        lengthSeconds: 163,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/PcDF23HdlUY/mqdefault_6s.webp?du=3000&sqp=CKiglqYG&rs=AOn4CLDVQ_iXNhGTOAL5OW6UL6_hUk3bRA',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 264336,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/PcDF23HdlUY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7BjRl5sh0mMjO4WMCA0bj3k1vxA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/PcDF23HdlUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKVjgpj4ZhhXjiHWr-NEOw-lQiqw',
            width: 720,
          },
        ],
        title: 'Life of a Queen Bee',
        videoId: 'PcDF23HdlUY',
      },
    },
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
          'Disclaimer   Queen Bee only speaks on her opinions and adds commentary, these are NOT stated as fact, please do your own ...',
        isLiveNow: false,
        lengthSeconds: 17504,
        movingThumbnails: null,
        publishedTimeText: 'Streamed 5 days ago',
        stats: {
          views: 7873,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/jBONzvik_sQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUq7UId2Ou0wiAQ6ucDg4cBXPlXg',
            width: 480,
          },
        ],
        title:
          'Sunday Shenanigans & SHAMBLES! TIME to CORRECT the LIES, Rumors & Hobbits Drama! OPEN PANEL!!',
        videoId: 'jBONzvik_sQ',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQCpDoBIc9XvOFLfpHRNonTZJgF5-nYrnVMhT0x=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@nelsonguerrero1952',
          channelId: 'UCRoUmdhtOL6V8kNis2nYZ8g',
          title: 'Nelson Guerrero',
        },
        badges: [],
        descriptionSnippet:
          'Very glad to see the ruler of Gluttony show a huge thread of decency to her hellhound brethren. Letting Loona know that she ...',
        isLiveNow: false,
        lengthSeconds: 28,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/ftgEE5PkX7o/mqdefault_6s.webp?du=3000&sqp=CL7ClqYG&rs=AOn4CLC8a3y9UHJs49a078YV7NT8KttGbw',
            width: 320,
          },
        ],
        publishedTimeText: '1 month ago',
        stats: {
          views: 206389,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/ftgEE5PkX7o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByUtCxIi4_ZeSROA0Qd79ERKYwUA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/ftgEE5PkX7o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-BtWOsCXdkVw-9oG2KhN4cVGS4Q',
            width: 720,
          },
        ],
        title:
          'Helluva Boss S1: Episode 8 - Queen Bee (Queen Beelzebub Grows into a Giant)',
        videoId: 'ftgEE5PkX7o',
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
const dummyVids = vidsOnly.map((content) => content.video)

export default function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>(dummyVids)

  return (
    <Box maw={600} mx='auto' my='sm'>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        setResults={setResults}
      />

      <Stack mt='md' spacing='xs'>
        {results?.map((video) => (
          <ResultItem key={video.videoId} video={video} />
        ))}
      </Stack>
    </Box>
  )
}
