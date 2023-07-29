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

const dummy: SearchResultData = {
  contents: [
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          "Linkin Park is an alternative rock band renowned for their hits “Numb,” “In the End,” “What I've Done,” “Castle of Glass,” “New ...",
        isLiveNow: false,
        lengthSeconds: 290,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/ScNNfyq3d_w/mqdefault_6s.webp?du=3000&sqp=CIillqYG&rs=AOn4CLCvRTsdBV1TDYn2uTkfkgcm4U-qBg',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 563026322,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/ScNNfyq3d_w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7AxnAzuf2a6Mvy0hvSgXcAqJxwA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/ScNNfyq3d_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB63qsTVhq3rg8l24NxC3sYgE4iSw',
            width: 720,
          },
        ],
        title: 'CASTLE OF GLASS [Official Music Video] - Linkin Park',
        videoId: 'ScNNfyq3d_w',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaR8Kos8iWqmx1k55d9NkNs33rngsHGs-XSpnug=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@AfterSoundTV',
          channelId: 'UCKeja0hBygGzwHojDiGS9sw',
          title: 'AfterSoundTV',
        },
        badges: [],
        descriptionSnippet:
          'Linkin Park - Castle Of Glass (Audio HD) Album: Living Things.',
        isLiveNow: false,
        lengthSeconds: 206,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/D3MB_EkNV5Y/mqdefault_6s.webp?du=3000&sqp=CJKUlqYG&rs=AOn4CLB_Tznhd1UXjKelADjN3nk_TQHS2Q',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 1366764,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/D3MB_EkNV5Y/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDQjSAcbhpKjKUMrI9wxsqmBTQ93A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/D3MB_EkNV5Y/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCVRmE36yupwz-SZWcMQdLR5uhMUw',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle Of Glass (Audio HD)',
        videoId: 'D3MB_EkNV5Y',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQyjPRsrp-BJ0-ZBYA1U3lBbxSF1tZ1ruH63IA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@YourFavLyrics',
          channelId: 'UCJ8-P_LX-W-gshvh2s2r4Eg',
          title: 'Your Fav Lyrics',
        },
        badges: [],
        descriptionSnippet:
          'Video containing the lyrics (only) to the song "Castle of Glass" by Linkin Park. Hope you like it! -------------------------- Lyrics: ...',
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/8Hr-IK8OdY0/mqdefault_6s.webp?du=3000&sqp=CMmflqYG&rs=AOn4CLAqcbScLyTtlOnRrxmxML2Ew9FFag',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 717779,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/8Hr-IK8OdY0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxraOOAaRThUnjlBY3jLfIviHMMQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/8Hr-IK8OdY0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSwiSEAF7ficF6Y7wWOUeQMOzBLg',
            width: 720,
          },
        ],
        title: 'Castle of Glass (Lyrics) - Linkin Park',
        videoId: '8Hr-IK8OdY0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          'Linkin Park performing "Castle of Glass" live at the Spike Video Games Awards in Culver City. http://www.linkinpark.com ...',
        isLiveNow: false,
        lengthSeconds: 223,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/V86RcziyZ_8/mqdefault_6s.webp?du=3000&sqp=CIyilqYG&rs=AOn4CLDoLcBJGVigzmX0N0RnaXV3JefsAg',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 7222239,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/V86RcziyZ_8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpd2RxOY4C9pyy9bR9gdAoMlJROA',
            width: 480,
          },
        ],
        title:
          'Castle of Glass [Live from Spike Video Game Awards 2012] - Linkin Park',
        videoId: 'V86RcziyZ_8',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSIKfIcn5txA_JlcalJNgq7IbYV-uAjqlv8emxmsw=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@diondharmawan2134',
          channelId: 'UCBDOvKsb_R5azhEynx-FqMg',
          title: 'Dion Dharmawan',
        },
        badges: [],
        descriptionSnippet:
          'Movie: The Outpost(2020) Storyline During the Afghanistan war, several outposts were placed to control the Taliban movement ...',
        isLiveNow: false,
        lengthSeconds: 209,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/hQ6e-3Hb61Y/mqdefault_6s.webp?du=3000&sqp=CPaflqYG&rs=AOn4CLAusLFqKEUUEXXhhpXRz45BKRfHJA',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 1941620,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/hQ6e-3Hb61Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDje7ee0uYbr5VTM72Wt_A-RE9E6g',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/hQ6e-3Hb61Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHo2O3QzssA6-IcO6jX39Y-r0ooQ',
            width: 720,
          },
        ],
        title: 'CASTLE OF GLASS - Linkin Park. THE OUTPOST MUSIC VIDEO',
        videoId: 'hQ6e-3Hb61Y',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSRDJMrZoAzwWgS_miNUjlhfQ0zmbFCEMIVJA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@greenblood998',
          channelId: 'UCRBtk-W-prWX60cdf4o5a3g',
          title: 'greenblood998',
        },
        badges: [],
        descriptionSnippet:
          "I do not own this song, all credits go to Linkin Park and Warner Bros Records. Castle of Glass from 'Living Things'. Enjoy!",
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/RRGSHvlu9Ss/mqdefault_6s.webp?du=3000&sqp=CNa9lqYG&rs=AOn4CLAjg61clVllY2vbaJjobpT08jSlxA',
            width: 320,
          },
        ],
        publishedTimeText: '11 years ago',
        stats: {
          views: 20276304,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/RRGSHvlu9Ss/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARhlIGUoZTAP&rs=AOn4CLDYbMmE2BUDWNSNJ3sfsOJJ_7JMcQ',
            width: 480,
          },
        ],
        title: 'Linkin Park - Castle of Glass',
        videoId: 'RRGSHvlu9Ss',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQ4j9D-7_J0CL4ymAQ2P6l6AJd8Uwzgqt7aJHebAA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@pitstab',
          channelId: 'UC9OlDi29H2Evp8sQzYna5OA',
          title: 'pitstab',
        },
        badges: [],
        descriptionSnippet:
          'Das ist eine 1 Hour Version von dem Lied "Castle of Glass" von der Rock Band Linkin Park. Viel Spaß Pitstab.',
        isLiveNow: false,
        lengthSeconds: 3669,
        movingThumbnails: null,
        publishedTimeText: '7 years ago',
        stats: {
          views: 179310,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/H_eDXr0Irac/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBgX9lzQg9rqaqgv54qf1J1lFSzg',
            width: 480,
          },
        ],
        title: 'Linkin Park - Castle of Glass (1 Hour)',
        videoId: 'H_eDXr0Irac',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/MLzWEQNaglO07puayDOL6KjeeGUJsUn5Lw_jki986y3VGFjBYYX0xXUFcnr8ycThTBL8Xk6kmvs=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@nightcorereality',
          channelId: 'UCqX8hO4JWM6IJfEabbZmhUw',
          title: 'NightcoreReality',
        },
        badges: [],
        descriptionSnippet:
          'Music: Castle of Glass - Linkin Park Lyrics in the video, enjoy :) Various links are below ~ Please support the original artist: ...',
        isLiveNow: false,
        lengthSeconds: 182,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/kC3QOrv23o0/mqdefault_6s.webp?du=3000&sqp=CJfAlqYG&rs=AOn4CLBqg760f_CIJzQPHBuI1kN9y4Bzvw',
            width: 320,
          },
        ],
        publishedTimeText: '7 years ago',
        stats: {
          views: 8060805,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/kC3QOrv23o0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3g9UlaUVqby3l3a8ust-OQlG78Q',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/kC3QOrv23o0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfBSFqyWsYHnmKmGZcUhWXOQpZMg',
            width: 720,
          },
        ],
        title: 'Nightcore - Castle of Glass',
        videoId: 'kC3QOrv23o0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@CNN',
          channelId: 'UCupvZG-5ko_eiXAupbDfxWw',
          title: 'CNN',
        },
        badges: ['New', 'CC'],
        descriptionSnippet:
          "Sen. Tim Scott of South Carolina pushed back Thursday against Republican rival Ron DeSantis over his state's new Black history ...",
        isLiveNow: false,
        lengthSeconds: 478,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/ETDdnlLCnTs/mqdefault_6s.webp?du=3000&sqp=CLuTlqYG&rs=AOn4CLAdjRtHatY4qmqM_09tFCeCq0WBRQ',
            width: 320,
          },
        ],
        publishedTimeText: '1 day ago',
        stats: {
          views: 121641,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/ETDdnlLCnTs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVQezmkJoJTj_cIuTG6g7XddUNww',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/ETDdnlLCnTs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5J9Y631akk3RgnXUnU185Kol26A',
            width: 720,
          },
        ],
        title:
          'Scott pushes back on DeSantis over Florida curriculum: ‘No silver lining’ in slavery',
        videoId: 'ETDdnlLCnTs',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          "... rock band renowned for their hits “Numb,” “In the End,” “What I've Done,” “Castle of Glass,” “New Divide,” “Crawling,” and “Faint.",
        isLiveNow: false,
        lengthSeconds: 271,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/Tm8LGxTLtQk/mqdefault_6s.webp?du=3000&sqp=CJSelqYG&rs=AOn4CLA0iz2tAq78I6P9FPkVECgvJpj0xw',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 261803705,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/Tm8LGxTLtQk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO6ohAVGBLdss1VmJCKmOAkqMr_A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/Tm8LGxTLtQk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfi-cS0G_DnmWCYkON1tgBcgDkEQ',
            width: 720,
          },
        ],
        title: 'One More Light [Official Music Video] - Linkin Park',
        videoId: 'Tm8LGxTLtQk',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/kkyWeM3OZ7gLLFVFhWJRXwLCfZ1d2mUx2m1bwK2d2jM8ww0puU1S4HQxBCN6YbuZazd2ggwVnR4=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@TheVoiceFinest',
          channelId: 'UC6IuAwaMYPwABARv0AkjAoQ',
          title: 'Voice Finest',
        },
        badges: [],
        descriptionSnippet:
          'SIGN UP TO OUR MUSIC NEWSLETTER FOR MUSIC LOVERS & ARTISTS - SEE BELOW (Out every Sunday, featuring ...',
        isLiveNow: false,
        lengthSeconds: 637,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/h8QvpcFR3So/mqdefault_6s.webp?du=3000&sqp=CPDAlqYG&rs=AOn4CLD6Q-fI-PWro-K3_HHZut9WW_qGvQ',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 9714072,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/h8QvpcFR3So/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEF6kc9AB-qRq0OkbUhglnst0NJA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/h8QvpcFR3So/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsd7b6lnVz4DXrGEsc_hz7ZCK0CQ',
            width: 720,
          },
        ],
        title: "TOP 5 LINKIN PARK'S COVERS ON THE VOICE | BEST AUDITIONS",
        videoId: 'h8QvpcFR3So',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQIazWqCy7_Yn6Ryh_Rfc1v4lghcLnoULYNCC5nFg=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@RuslanMalyshev',
          channelId: 'UCL2FM6HO8F7M40FR--gkEyQ',
          title: 'Ruslan Malyshev',
        },
        badges: ['New'],
        descriptionSnippet:
          'METAL IN PUBLIC: best LINKIN PARK riffs/breakdowns on guitar strings: https://www.donationalerts.com/r/ruslan_malysheff 0:14 ...',
        isLiveNow: false,
        lengthSeconds: 284,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/eWH7nwEb9QU/mqdefault_6s.webp?du=3000&sqp=COGslqYG&rs=AOn4CLAwrNFgQSmw6CW4_bW__hi_bCzh5w',
            width: 320,
          },
        ],
        publishedTimeText: '6 hours ago',
        stats: {
          views: 3652,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/eWH7nwEb9QU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD152Sh7XO6vvHT87SmYehQjQYlNw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/eWH7nwEb9QU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHXDqz5jpK_oRf5qz8QWd5A0eApQ',
            width: 720,
          },
        ],
        title: 'METAL IN PUBLIC: best LINKIN PARK riffs/breakdowns',
        videoId: 'eWH7nwEb9QU',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/AWDWw_nRAi_yLEzWHvv6Bp-8yyWk7sH9KGq50TfLr2OHGTKmMdIF52e7f7liQMST95WkNsU2Cg=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCPnwQLqtO7ESlLH_329WE-g',
          title: 'Epic Orchestra',
        },
        badges: ['4K'],
        descriptionSnippet:
          'Ever wondered what Linkin Park Castle Of Glass would sound like played by an orchestra? Well the Epic Orchestra has arranged ...',
        isLiveNow: false,
        lengthSeconds: 229,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/4jf2qjwxUH0/mqdefault_6s.webp?du=3000&sqp=CI2XlqYG&rs=AOn4CLDIHeLo7jOuae6IcLWmcetOFii5uQ',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 114992,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/4jf2qjwxUH0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOPXibeqYnpaLEfWM9asCmToDTag',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/4jf2qjwxUH0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDreabooJofw3bgAN4uLvCoXGd93g',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle Of Glass | Epic Orchestra',
        videoId: '4jf2qjwxUH0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          "... rock band renowned for their hits “Numb,” “In the End,” “What I've Done,” “Castle of Glass,” “New Divide,” “Crawling,” and “Faint.",
        isLiveNow: false,
        lengthSeconds: 284,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/51iquRYKPbs/mqdefault_6s.webp?du=3000&sqp=CMCllqYG&rs=AOn4CLCNxhiDgd097vdgEnvPEKx2pLBsqQ',
            width: 320,
          },
        ],
        publishedTimeText: '12 years ago',
        stats: {
          views: 224409070,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/51iquRYKPbs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm8gPOd8VUiTnnBuylBzzDBRLNow',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/51iquRYKPbs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-Ykm3QrG95IiEj6YJMlb_RoLn2g',
            width: 720,
          },
        ],
        title: 'The Catalyst [Official Music Video] - Linkin Park',
        videoId: '51iquRYKPbs',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSI8JrhCCRLT01LPR50DAKkpUKwrSetLGMyXuli=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@KillmRDJmashups',
          channelId: 'UCY9Wnb_5hEHUlt5bmKKrXwQ',
          title: 'Kill_mR_DJ mashups',
        },
        badges: [],
        descriptionSnippet:
          'MP3 DOWNLOAD: https://bit.ly/2WHjYCx Songs used: * Linkin Park - Castle of Glass (instrumental) * Evanescence - My Heart Is ...',
        isLiveNow: false,
        lengthSeconds: 226,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/wz6MnpJv4ik/mqdefault_6s.webp?du=3000&sqp=COa0lqYG&rs=AOn4CLAwN81v7IOssmOKnOkRKbKOCMcx4A',
            width: 320,
          },
        ],
        publishedTimeText: '3 years ago',
        stats: {
          views: 5370809,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/wz6MnpJv4ik/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC23Ul23x6u-_z7ZS3-Ierup2PfeQ',
            width: 480,
          },
        ],
        title:
          'Linkin Park VS Evanescence - Castle Of Burnt Hearts (Kill_mR_DJ MASHUP)',
        videoId: 'wz6MnpJv4ik',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/N9p4j0NCLmBW_8Wk6m6PaPAOcd3NIrh1GnHI4KCjMPJy3DpoWUgNcw_p6qNFr7t6maRGjMOf=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@musichalltoprock1180',
          channelId: 'UCONPzuZTuOYd0l87xsgEV0g',
          title: 'Music Hall Top Rock',
        },
        badges: [],
        descriptionSnippet:
          'Tracklist: 01:02 New divide 5:26 Papercut 8:37 Given up 12:14 Faint 16:52 When they come for me 21:45 No more sorrow 29:15 ...',
        isLiveNow: false,
        lengthSeconds: 4398,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/UE9ZrL9TeVA/mqdefault_6s.webp?du=3000&sqp=CICjlqYG&rs=AOn4CLCotXkcOWyGWkloamhFVv2sTwuDgA',
            width: 320,
          },
        ],
        publishedTimeText: '3 years ago',
        stats: {
          views: 1632401,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/UE9ZrL9TeVA/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhkIGQoZDAP&rs=AOn4CLDoVNxcW3B2C_iJCh-xNC10E6hn1A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/UE9ZrL9TeVA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhkIGQoZDAP&rs=AOn4CLBTiFFRFh_5S0oMwOhxE46hcXPFbg',
            width: 720,
          },
        ],
        title: 'Linkin Park Live Moscow Russia 2011 06 23 [Full Show]',
        videoId: 'UE9ZrL9TeVA',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          'Lyric video for Linkin Park\'s "Final Masquerade" off of the album THE HUNTING PARTY. iTunes: http://go.lprk.co/ml/3qu/ Spotify: ...',
        isLiveNow: false,
        lengthSeconds: 218,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/1wF1sgXqF90/mqdefault_6s.webp?du=3000&sqp=CKOulqYG&rs=AOn4CLCT8tUCamAVZ-QWw1SKpO-MtIH3Wg',
            width: 320,
          },
        ],
        publishedTimeText: '9 years ago',
        stats: {
          views: 12586617,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/1wF1sgXqF90/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5LIgWi19uaaJ-oCLR-MyD-gzB-A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/1wF1sgXqF90/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA82GXih1M7RjfPgTAyPQfmpf_gbw',
            width: 720,
          },
        ],
        title: 'Final Masquerade (Official Lyric Video) - Linkin Park',
        videoId: '1wF1sgXqF90',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/c99FaZy4MUaIaQLmLDNJR2YxMcl2FLhV48r0NnkdzCLNN-5e_BsWPA1haGn1L0FvKWKYajxlAA=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@SilverStarEagles',
          channelId: 'UCCRBQk4HwrBAWtVU6A316VA',
          title: 'Silver Star Eagles ',
        },
        badges: ['New'],
        descriptionSnippet:
          'uPVC coin flips➡ https://amzn.to/3Oeefy9 ✓Digital Pocket Scale➡ https://amzn.to/3bfzxNa ✓Pocket Pinger Precious Metal ...',
        isLiveNow: false,
        lengthSeconds: 606,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/AXdlsdoonac/mqdefault_6s.webp?du=3000&sqp=CIjElqYG&rs=AOn4CLD29b2cyyqqGY4MvFIf7Ttu5vcQ3w',
            width: 320,
          },
        ],
        publishedTimeText: '7 hours ago',
        stats: {
          views: 562,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/AXdlsdoonac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6Jl8paSDsGAY9KNwjM_SRXG56WA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/AXdlsdoonac/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEvHEwHqbRksaYIOkv7kYm6ITm0w',
            width: 720,
          },
        ],
        title:
          'My Thoughts On The BRICS Nations And Gold Backed Currency - More Lip Service',
        videoId: 'AXdlsdoonac',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/OaGfaEIIcadpkHoniGRSDLVXWBzKYqQEVVxUAXUQtccMwncEfEniV2GTOlEO9mFaxZCG96eH=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCgud6LRumMmJEu733uRWT1w',
          title: 'Yet Not I',
        },
        badges: ['New'],
        descriptionSnippet:
          'Castle of Glass - Linkin Park cover In honor of Chester Bennington ♥️ Performed, recorded and mixed by Cheyenne McKnight ...',
        isLiveNow: false,
        lengthSeconds: 258,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/TJyBrLbjlec/mqdefault_6s.webp?du=3000&sqp=CNa9lqYG&rs=AOn4CLBnySzZxTvKt7093bmWjeCrDdnRRg',
            width: 320,
          },
        ],
        publishedTimeText: '1 day ago',
        stats: {
          views: 375,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/TJyBrLbjlec/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGEf3u_QEghFVt4VYiDEEoGP_b_A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/TJyBrLbjlec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB75T57GppPfOEYqfMtgRG1iEaBlQ',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle of Glass - Cover by Cheyenne McKnight',
        videoId: 'TJyBrLbjlec',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaSFwPWeLHcOwrRDX1PpuQip8M_6FweOGPRJZ4FT=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@TheMPices',
          channelId: 'UC6cMj2-6dwSVwzc3Oa-rIlQ',
          title: 'TheMPices',
        },
        badges: [],
        descriptionSnippet:
          'performer: Linkin Park album: LIVING THINGS year: 2012.',
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/B-He6EzP5zY/mqdefault_6s.webp?du=3000&sqp=CIKslqYG&rs=AOn4CLC0SZxpwr7Ax9pf-9XmFs-PQbYsVA',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 25632584,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/B-He6EzP5zY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDDp8vf2yi11S__RuPAcAtYlDUTgg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/B-He6EzP5zY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLAZXTMsq1HwsahxkSXIbPUovFZTkg',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle Of Glass (lyrics)',
        videoId: 'B-He6EzP5zY',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          'Castle Of Glass (M. Shinoda Remix) from the album Recharged - the second remix album of recordings by American band Linkin ...',
        isLiveNow: false,
        lengthSeconds: 381,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/7cpD3t3WwV0/mqdefault_6s.webp?du=3000&sqp=CJ20lqYG&rs=AOn4CLCvMWxLlpks1VMwtcTyPkZ0J4ku8A',
            width: 320,
          },
        ],
        publishedTimeText: '8 years ago',
        stats: {
          views: 1274152,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/7cpD3t3WwV0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADsYINS8jUVjRjOMXTr76mGDduHw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/7cpD3t3WwV0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmH-Nv0xYh3bHOjVJ1VIekGRgRiA',
            width: 720,
          },
        ],
        title: 'Castle Of Glass (M. Shinoda Remix) - Linkin Park (Recharged)',
        videoId: '7cpD3t3WwV0',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTmybrayNxa3UgXg5jvo3QbpSuJoIYgCwS82V6J=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@MelodickaBros',
          channelId: 'UCuLr0QmdN899rTMCpAveJaw',
          title: 'Melodicka Bros',
        },
        badges: [],
        descriptionSnippet:
          'Our acoustic/cinematic/folk cover of Castle of Glass by @Linkin Park featuring Michalina Malisz, hurdy gurdy player in @eluveitie .',
        isLiveNow: false,
        lengthSeconds: 328,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/SBWa68U1q4I/mqdefault_6s.webp?du=3000&sqp=CIy4lqYG&rs=AOn4CLCO8Gg_bjX2YzWKifdrWq3whW1IUA',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 295944,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/SBWa68U1q4I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaDHgKZLt98gA68tPzuS6YLltgDg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/SBWa68U1q4I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDM2lzIsZAcgmdUAWeM6A5BEMFxg',
            width: 720,
          },
        ],
        title:
          'LINKIN PARK - Castle of Glass (EPIC/ACOUSTIC COVER feat. @michalina_malisz   from Eluveitie)',
        videoId: 'SBWa68U1q4I',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaS96Zkv_KA6xstmHw5O_4G6aJOBOHh6E7tYL2hM=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@avishektitung9412',
          channelId: 'UC51Y3ADGdMggeKe4OfuHW4A',
          title: 'Avishek Titung',
        },
        badges: [],
        descriptionSnippet:
          'i dont owe this video this is not the official video. this is for entertainment only. In Afghanistan, Taliban leader Ahmad Shah is ...',
        isLiveNow: false,
        lengthSeconds: 282,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/9aA8EMsalXw/mqdefault_6s.webp?du=3000&sqp=COjAlqYG&rs=AOn4CLCzgXBEE4DzRnNRlA7rDFC8zQhjyw',
            width: 320,
          },
        ],
        publishedTimeText: '9 years ago',
        stats: {
          views: 3037463,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/9aA8EMsalXw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg08_7DAva6sxau9wsD3w9I9IUFg',
            width: 480,
          },
        ],
        title: 'Lone Survivor Castle of glass (linkinpark) new video',
        videoId: '9aA8EMsalXw',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaRemJO8Sg05-VBDyiMMKMuj5Kw-uyh_hcJvuyto=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@60minsongs47',
          channelId: 'UC0s7RF47ytxd1JUCNlPvMKA',
          title: '60 Min Songs',
        },
        badges: [],
        descriptionSnippet:
          'Leave some song suggestions for me in the comments! If you are the owner of any material/content used and uploaded on this ...',
        isLiveNow: false,
        lengthSeconds: 3666,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/sdF0_Zxg164/mqdefault_6s.webp?du=3000&sqp=CNS5lqYG&rs=AOn4CLAjhfWnEuC2tkEjTT0IFuU2TuL0RA',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 12094,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/sdF0_Zxg164/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IC0oJzAP&rs=AOn4CLBMQ6l0CiciDnFH2ZjCxwKuq94Ecw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/sdF0_Zxg164/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IC0oJzAP&rs=AOn4CLASfgTRsyfmCbaT35_gv9AYOy-ePQ',
            width: 720,
          },
        ],
        title: 'Castle of Glass (1 HOUR) - Linkin Park',
        videoId: 'sdF0_Zxg164',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/c82IAlKQky0wpVhyi_JYtzeciaYZoTztxbjxolpzNyMwNtxTxYqDAG9q7cUF2qnxFJrO4sYR=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCoimajyGy33X_Pqt-SHCWeA',
          title: 'Halocene',
        },
        badges: ['4K'],
        descriptionSnippet:
          'Halocene adds another Linkin Park cover to their vast collection! Another chance to pay tribute to Chester, Mike, and the band ...',
        isLiveNow: false,
        lengthSeconds: 251,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/rHb84bP1Ptg/mqdefault_6s.webp?du=3000&sqp=COivlqYG&rs=AOn4CLCTR-A-t5NikzPrtOsOouMjUDvOSQ',
            width: 320,
          },
        ],
        publishedTimeText: '11 months ago',
        stats: {
          views: 853528,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/rHb84bP1Ptg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVH-7fDqkjN20nxEyl-NhcHPqA8g',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/rHb84bP1Ptg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTanoTcblWmEYrJkq46lr7n-Za9w',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle of Glass - Cover by Halocene',
        videoId: 'rHb84bP1Ptg',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ffudoC6VbSS7unIcP_iqbUlUEL53NLwoXqxFBR1NNdrIJHpPbvhAQPCUfAfZ1rrsTOzom_eJ=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@LinkinParkLyrics100',
          channelId: 'UCFcaHLfkXZppMwINmKXh92w',
          title: 'LinkinParkLyrics',
        },
        badges: [],
        descriptionSnippet:
          'Song: Castle Of Glass Album: Living Things Follow me on Twitter: https://twitter.com/MatejaLazin.',
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/L1amSiM3YuQ/mqdefault_6s.webp?du=3000&sqp=CKColqYG&rs=AOn4CLAysRCHAoq-iSdVdhSRhtbnOnkKaQ',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 142710,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/L1amSiM3YuQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDdvndab8gCLuSZ5yN7CqTqlN2GA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/L1amSiM3YuQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBp15oGDbOyRGto8bRXGdhS-pZNhg',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle Of Glass [Lyrics on screen] HD',
        videoId: 'L1amSiM3YuQ',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: [],
        descriptionSnippet:
          'Video Credits: Directors: Maciej Kuciara, pplpleasr Production Company: Shibuya - http://shibuya.xyz AI Production: Kaiber, Jacky ...',
        isLiveNow: false,
        lengthSeconds: 199,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/7NK_JOkuSVY/mqdefault_6s.webp?du=3000&sqp=COyflqYG&rs=AOn4CLDcAV1u0i8ZOZcBtfGZTnf_noMFiQ',
            width: 320,
          },
        ],
        publishedTimeText: '5 months ago',
        stats: {
          views: 56074075,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/7NK_JOkuSVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCck0JiSmldOU_wzMjXc1XbRretzQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/7NK_JOkuSVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAobd8evwDnK0tLWppFS3Hs0DjL5A',
            width: 720,
          },
        ],
        title: 'Lost [Official Music Video] - Linkin Park',
        videoId: '7NK_JOkuSVY',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: ['4K'],
        descriptionSnippet:
          "... rock band renowned for their hits “Numb,” “In the End,” “What I've Done,” “Castle of Glass,” “New Divide,” “Crawling,” and “Faint.",
        isLiveNow: false,
        lengthSeconds: 199,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/v2H4l9RpkwM/mqdefault_6s.webp?du=3000&sqp=CIrGlqYG&rs=AOn4CLAGLGFvP6qqQ095x1YK8-LRpw8iYw',
            width: 320,
          },
        ],
        publishedTimeText: '13 years ago',
        stats: {
          views: 306995047,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/v2H4l9RpkwM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8LvW7NC7Tk1XhxfatQpfq71QFjw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/v2H4l9RpkwM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAx_NQxaM6yfaUwLX1PgbSXX94IYQ',
            width: 720,
          },
        ],
        title:
          'Breaking the Habit (Official Music Video) [HD UPGRADE] – Linkin Park',
        videoId: 'v2H4l9RpkwM',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/o55NmuK5fNbiK9mZv8d0LwoGzUa5Yvw2W1StfnmkunOSVMF3wjr7dfHmNphIbwXHvQzPuFA6=s88-c-k-c0x00ffffff-no-rj',
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
          channelId: 'UCZU9T1ceaOgwfLRq7OKFU4Q',
          title: 'Linkin Park',
        },
        badges: ['4K'],
        descriptionSnippet: '#LinkinPark #Meteora #Lost #Meteora20.',
        isLiveNow: false,
        lengthSeconds: 226,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/zsCD5XCu6CM/mqdefault_6s.webp?du=3000&sqp=CKeOlqYG&rs=AOn4CLDFX2hkVFipezAaSXIuUzQMnz3emQ',
            width: 320,
          },
        ],
        publishedTimeText: '16 years ago',
        stats: {
          views: 285606921,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/zsCD5XCu6CM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANxTDXepNmKUKaBvfqJF-UJ3Y-Qg',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/zsCD5XCu6CM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA76NZPhIF-3ttEgjZWkxov0S9h3A',
            width: 720,
          },
        ],
        title:
          'Somewhere I Belong (Official Music Video) [4K UPGRADE] – Linkin Park',
        videoId: 'zsCD5XCu6CM',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaT8cmYJmQ3HXmcGigLPgJDw0YIg8X1hb9exthxD=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@hakkovision',
          channelId: 'UC0v72d5hwQC05DZ_69kUZVg',
          title: 'hakkovision',
        },
        badges: [],
        descriptionSnippet:
          'Linkin Park Song : Castle Of Glass Concert : 2017 Rock Werchter Festival Belgium Lyrics Take me down to the river bend Take ...',
        isLiveNow: false,
        lengthSeconds: 223,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/eybS4Sxzh0Y/mqdefault_6s.webp?du=3000&sqp=COaOlqYG&rs=AOn4CLBxsdbxwATDujRa32USBT1XL6C0KA',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 183959,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/eybS4Sxzh0Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLcvjC7uk-QCdDVsuL2XKlVRLfow',
            width: 480,
          },
        ],
        title: 'Linkin Park - Castle Of Glass (Live 2017)',
        videoId: 'eybS4Sxzh0Y',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaRm56qn3E1-9iHWcG0rlbjcMNvLM0LNkp3rmcI1=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@ergastulumspride6192',
          channelId: 'UCwDM01EYCHzl-uH5zrST3Fw',
          title: 'Ergastulums Pride',
        },
        badges: [],
        descriptionSnippet:
          'I love the flashback episodes of GANGSTA. and finally got a hold of the raws. I hope you enjoy it. Focuses mainly on young Nic, ...',
        isLiveNow: false,
        lengthSeconds: 205,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/7LWFsIzF4OA/mqdefault_6s.webp?du=3000&sqp=CIDHlqYG&rs=AOn4CLCAac3M56q9fsBOaocQYR1oO8vD3Q',
            width: 320,
          },
        ],
        publishedTimeText: '7 years ago',
        stats: {
          views: 11889979,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/7LWFsIzF4OA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_NUi2_YEUA9ZrTsozOatEB2LK2A',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/7LWFsIzF4OA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmUM_LHHmLB0bSyWPyrp6K9Fra0g',
            width: 720,
          },
        ],
        title: 'GANGSTA. AMV -Castle of Glass-',
        videoId: '7LWFsIzF4OA',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQbedHCN8IOT2zYV_brtcqs2OCDrinhfY0P-Pm5=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@j2sband796',
          channelId: 'UCt4-kzLkGyXj6RGOLX_K0yg',
          title: 'J2S Band',
        },
        badges: [],
        descriptionSnippet:
          'In the loving Memory of Chester bennington Castle of Glass Song Emotional Piano version with Chester Vocal Like and Comment ...',
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: null,
        publishedTimeText: '3 years ago',
        stats: {
          views: 187377,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/4j2jn2eNLw4/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLBrYxAaf3ghpehkwCXWSEuAjQlI1Q',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/4j2jn2eNLw4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDuAEYL92Nk5xQNeSp-BV_GKvkwKg',
            width: 720,
          },
        ],
        title:
          'Linkin Park. Castle of Glass emotional Piano Version With Chester Vocal',
        videoId: '4j2jn2eNLw4',
      },
    },
  ],
  cursorNext:
    'EqIDEg9jYXN0bGUgb2YgZ2xhc3MajgNTQlNDQVFzd1RuSkJlbmR4TlZRNFJZSUJDM0JGUzNkMVdHdEhOMFozZ2dFTGVXMVVaMlZVYjJsUU5uT0NBUXMyY2xSaldXWnhhSGh3ZDRJQkMyaENWVFl4VWpNMGNIWnZnZ0VMTVRselpWSTJaSGRwTWpDQ0FRdEdSVXR3ZVRNeVRsWlBZNElCQzIxeVRtVlNUekY2YldwWmdnRUxWaTFrWW05b1JraDVXSE9DQVF0alduVkNWMGh6YkRCWVRZSUJDemRQVVhSQmRtaE5USFpOZ2dFTE1TMWtSMEZKZWxKcExWbUNBUXQyTkdkd1FtaERkV3hEV1lJQkMyazVPR2MyZVhkclJWQk5nZ0VMUlVoa1oxTkVNV1IzUlhlQ0FRdG9WRlJDZGt0RFEyOVlUWUlCQzBaR0xWOUJTVmhpU21KSmdnRUxSelZHVVZSUFduQTJVbS1DQVFzNFVWQldRMU5uV0VwMFFZSUJDelJxTW1wdU1tVk9USGMwc2dFR0NnUUlHUkFDNmdFQ0NBRSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D',
  didYouMean: 'castle of glass',
  estimatedResults: 42967669,
  filterGroups: null,
  refinements: [
    'lost in the echo',
    'linkin park final masquerade',
    'linkin park catalyst',
  ],
}
const dummyVids = dummy.contents.map((content) => content.video)

export default function SearchPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Video[]>()

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
