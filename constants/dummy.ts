import { filterVids } from '~/app/search/utils'

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
const moreDummy: SearchResultData = {
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
            url: 'https://i.ytimg.com/an_webp/ScNNfyq3d_w/mqdefault_6s.webp?du=3000&sqp=CPCMmaYG&rs=AOn4CLBMP9Rr2dVxYhJrHpg7hvq2ok8KTQ',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 563053201,
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
            url: 'https://i.ytimg.com/an_webp/D3MB_EkNV5Y/mqdefault_6s.webp?du=3000&sqp=CPD5mKYG&rs=AOn4CLBql3I23WkIK6INRAcoAIw0ClSc0g',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 1367770,
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
            url: 'https://i.ytimg.com/an_webp/8Hr-IK8OdY0/mqdefault_6s.webp?du=3000&sqp=CISOmaYG&rs=AOn4CLCSdRq4yFzE9-jMdDBlCEjpZrBxQw',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 718507,
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
            url: 'https://i.ytimg.com/an_webp/V86RcziyZ_8/mqdefault_6s.webp?du=3000&sqp=CIeemaYG&rs=AOn4CLBkMbAmwLyJRmrZUbTTQTquJqc5fQ',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 7223117,
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
            url: 'https://i.ytimg.com/an_webp/hQ6e-3Hb61Y/mqdefault_6s.webp?du=3000&sqp=CLSYmaYG&rs=AOn4CLCGth8MTaHFKmSNfGfnqpzFJflVaw',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 1943385,
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
          views: 179326,
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
            url: 'https://i.ytimg.com/an_webp/7cpD3t3WwV0/mqdefault_6s.webp?du=3000&sqp=CIWumaYG&rs=AOn4CLDG77fjIkquEKaGpXhbMgsnr-46TA',
            width: 320,
          },
        ],
        publishedTimeText: '8 years ago',
        stats: {
          views: 1274265,
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
            url: 'https://i.ytimg.com/an_webp/RRGSHvlu9Ss/mqdefault_6s.webp?du=3000&sqp=CK6cmaYG&rs=AOn4CLBS6vhUNv-HBwQPl_hebbXtYs6Uqw',
            width: 320,
          },
        ],
        publishedTimeText: '11 years ago',
        stats: {
          views: 20276378,
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
              url: 'https://yt3.ggpht.com/aNxdvUTpveMxZApskq48KLBs6F1oUT5hXTuqXAyXpjUXJYpdYNM1LLSxUCQgL8fPpkrtRl2w5A=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@douglasmacgregorcolonel',
          channelId: 'UCY_MFGvcglkSZmIY3FiF29g',
          title: 'Douglas Macgregor Col',
        },
        badges: ['New'],
        descriptionSnippet:
          "Scott Ritter - Ukraine is Doubling Down on this Offensive. Scott Ritter Interview Would Ukraine's attack on Moscow lead to nuclear ...",
        isLiveNow: false,
        lengthSeconds: 1413,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/ZIRXrk9m9_s/mqdefault_6s.webp?du=3000&sqp=CLiemaYG&rs=AOn4CLCwL8zcZtdexaK4J59KQlctrjDuTQ',
            width: 320,
          },
        ],
        publishedTimeText: '13 hours ago',
        stats: {
          views: 41764,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/ZIRXrk9m9_s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUFR_Pt4Zxsbb9QI9ajZ640-TNlQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/ZIRXrk9m9_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBugO4qcjM6707QVuUgqbh0-gCz_g',
            width: 720,
          },
        ],
        title: 'Scott Ritter - Ukraine is Doubling Down on this Offensive.',
        videoId: 'ZIRXrk9m9_s',
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
            url: 'https://i.ytimg.com/an_webp/Tm8LGxTLtQk/mqdefault_6s.webp?du=3000&sqp=COqFmaYG&rs=AOn4CLDKxKuutqX3QvTb5RdQMSQsq8iqeA',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 261839021,
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
            url: 'https://i.ytimg.com/an_webp/ETDdnlLCnTs/mqdefault_6s.webp?du=3000&sqp=COL4mKYG&rs=AOn4CLCAU2GVfuJufpulksfpDMpdGxo3OA',
            width: 320,
          },
        ],
        publishedTimeText: '1 day ago',
        stats: {
          views: 128891,
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
            url: 'https://i.ytimg.com/an_webp/h8QvpcFR3So/mqdefault_6s.webp?du=3000&sqp=CJKxmaYG&rs=AOn4CLBJBZyQ6ilyKh1ZO5N1S_B1qGJ-sg',
            width: 320,
          },
        ],
        publishedTimeText: '2 years ago',
        stats: {
          views: 9716521,
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
            url: 'https://i.ytimg.com/an_webp/51iquRYKPbs/mqdefault_6s.webp?du=3000&sqp=CLe4maYG&rs=AOn4CLDDJ75jyRDYXMUWcanYkA0ScArn6Q',
            width: 320,
          },
        ],
        publishedTimeText: '12 years ago',
        stats: {
          views: 224418600,
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
            url: 'https://i.ytimg.com/an_webp/wz6MnpJv4ik/mqdefault_6s.webp?du=3000&sqp=CK6hmaYG&rs=AOn4CLApRGGNsLN74Z4KSHwXlI8lsLSyQQ',
            width: 320,
          },
        ],
        publishedTimeText: '3 years ago',
        stats: {
          views: 5371905,
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
            url: 'https://i.ytimg.com/an_webp/zsCD5XCu6CM/mqdefault_6s.webp?du=3000&sqp=COanmaYG&rs=AOn4CLAFMv92NCHRhjsXGmSVUt2ZMKJ9Fg',
            width: 320,
          },
        ],
        publishedTimeText: '16 years ago',
        stats: {
          views: 285681209,
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
              url: 'https://yt3.ggpht.com/ytc/AOPolaTo1J5zatVHNWATGA4lzwZfR2eqTqo80oSMxjSK=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@predaking-1173',
          channelId: 'UCuVdiNgDLNnezI0Pt4AQ7nw',
          title: 'Predaking-117',
        },
        badges: [],
        descriptionSnippet:
          '"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism ...',
        isLiveNow: false,
        lengthSeconds: 3705,
        movingThumbnails: null,
        publishedTimeText: '5 years ago',
        stats: {
          views: 214127,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/CW4TzJvfknw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLwruqM8Pq7eWep5I4sCtnRTfoZw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/CW4TzJvfknw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChApLqbLl9xWPC4-TEUDoZK_jVtg',
            width: 720,
          },
        ],
        title: 'Linkin Park - Breaking the Habit [1 Hour]',
        videoId: 'CW4TzJvfknw',
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
        descriptionSnippet: 'One More Light (Official Audio) - Linkin Park.',
        isLiveNow: false,
        lengthSeconds: 256,
        movingThumbnails: null,
        publishedTimeText: '6 years ago',
        stats: {
          views: 41666670,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/3kaUvGSLMew/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcRTG5eh1Yge8GjmWgLNQ8ZdmpNg',
            width: 480,
          },
        ],
        title: 'One More Light (Official Audio) - Linkin Park',
        videoId: '3kaUvGSLMew',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaTPIqNq0KT1xr4OmVCgIHKu_pZq-oQC5B02STFK=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@enhit4447',
          channelId: 'UC3_mtTrzVkkCI0570EijI8Q',
          title: 'EnHiT444',
        },
        badges: [],
        descriptionSnippet:
          'If you like the video give thumbs-up, share and subscribe. Original Music - https://www.youtube.com/watch?v=ysSxxIqKNN0.',
        isLiveNow: false,
        lengthSeconds: 3734,
        movingThumbnails: null,
        publishedTimeText: '6 years ago',
        stats: {
          views: 328080,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/OiHAECIoDWU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPskyh1o9CHoNJYcd3VdOvmtHNZQ',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/OiHAECIoDWU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD81Or4EPd-53SNsPpPMe1OveI1cg',
            width: 720,
          },
        ],
        title: 'Linkin Park - New Divide [1 HOUR]',
        videoId: 'OiHAECIoDWU',
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
            url: 'https://i.ytimg.com/an_webp/B-He6EzP5zY/mqdefault_6s.webp?du=3000&sqp=CJCCmaYG&rs=AOn4CLDsK-q302uz_RVVodHlPUxpnlgcrQ',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 25633233,
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
            url: 'https://i.ytimg.com/an_webp/kC3QOrv23o0/mqdefault_6s.webp?du=3000&sqp=CIKlmaYG&rs=AOn4CLAF9YDgmJIA9wARdzWVY72Nst-c3w',
            width: 320,
          },
        ],
        publishedTimeText: '7 years ago',
        stats: {
          views: 8061078,
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
              url: 'https://yt3.ggpht.com/E6Xhb9aqxtXKOTJz2k4tfxM5ng_FXgCKd0hdTwIrv4KdbWS2lGcqYaIKOvpX2RHnqweUA4OryQ=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [
            {
              text: 'Verified',
              type: 'VERIFIED_CHANNEL',
            },
          ],
          canonicalBaseUrl: '/@8DTUNES',
          channelId: 'UCrRpYEytIHGyDgNWO6VbHlQ',
          title: '8D TUNES',
        },
        badges: [],
        descriptionSnippet:
          'If you like it please subscribe and turn on the notifications for more (Use headphones and close your eyes for the best ...',
        isLiveNow: false,
        lengthSeconds: 193,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/d8mMQtvi1fw/mqdefault_6s.webp?du=3000&sqp=CIiQmaYG&rs=AOn4CLBdV-Ea5PNm6VxArwONq0UpyUPUeg',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 4613071,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/d8mMQtvi1fw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcLjHiw92sTK46toe0RizrF4yvYw',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/d8mMQtvi1fw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv08Jd6F_dUb2SWZ6-JKz_t6grVw',
            width: 720,
          },
        ],
        title: 'Linkin Park - Castle of Glass (8D AUDIO)',
        videoId: 'd8mMQtvi1fw',
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
            url: 'https://i.ytimg.com/an_webp/eybS4Sxzh0Y/mqdefault_6s.webp?du=3000&sqp=CNSzmaYG&rs=AOn4CLAQQnV-Twq2wfFggZD8cdwuqARxhA',
            width: 320,
          },
        ],
        publishedTimeText: '5 years ago',
        stats: {
          views: 183983,
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
            url: 'https://i.ytimg.com/an_webp/9aA8EMsalXw/mqdefault_6s.webp?du=3000&sqp=CPigmaYG&rs=AOn4CLCS7DS6oKZGJRfa6Cp12dJ2aw_UHw',
            width: 320,
          },
        ],
        publishedTimeText: '9 years ago',
        stats: {
          views: 3037499,
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
            url: 'https://i.ytimg.com/an_webp/rHb84bP1Ptg/mqdefault_6s.webp?du=3000&sqp=CPC3maYG&rs=AOn4CLCTdWtQMeVcjnI_kyXsyAam0rpX2A',
            width: 320,
          },
        ],
        publishedTimeText: '11 months ago',
        stats: {
          views: 854054,
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
            url: 'https://i.ytimg.com/an_webp/SBWa68U1q4I/mqdefault_6s.webp?du=3000&sqp=CKSsmaYG&rs=AOn4CLAd2te0HTHM_Ct6kEoXU5j8Wd6vsQ',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 296004,
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
            url: 'https://i.ytimg.com/an_webp/sdF0_Zxg164/mqdefault_6s.webp?du=3000&sqp=CM6omaYG&rs=AOn4CLD9ngtY6Cco79bwJiMR4nePO-tSDg',
            width: 320,
          },
        ],
        publishedTimeText: '1 year ago',
        stats: {
          views: 12099,
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
            url: 'https://i.ytimg.com/an_webp/7NK_JOkuSVY/mqdefault_6s.webp?du=3000&sqp=CJaMmaYG&rs=AOn4CLAAm-IKagMfcP8hZgnzQFZ5FLValQ',
            width: 320,
          },
        ],
        publishedTimeText: '5 months ago',
        stats: {
          views: 56141265,
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
            url: 'https://i.ytimg.com/an_webp/v2H4l9RpkwM/mqdefault_6s.webp?du=3000&sqp=CK6rmaYG&rs=AOn4CLDn6zhrokD_3n-fjsM1VftrsPii0g',
            width: 320,
          },
        ],
        publishedTimeText: '13 years ago',
        stats: {
          views: 307050076,
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
            url: 'https://i.ytimg.com/an_webp/zsCD5XCu6CM/mqdefault_6s.webp?du=3000&sqp=COanmaYG&rs=AOn4CLAFMv92NCHRhjsXGmSVUt2ZMKJ9Fg',
            width: 320,
          },
        ],
        publishedTimeText: '16 years ago',
        stats: {
          views: 285681209,
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
              url: 'https://yt3.ggpht.com/ytc/AOPolaTAK4VSMn6h7ykVRHNN2jvt7fMGTPiEggbNlANS=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@TheDevilgamerX1',
          channelId: 'UCChBehZVJsjnKTOTdbyup6g',
          title: 'TheDevilgamerX1',
        },
        badges: [],
        descriptionSnippet:
          'Linkin Park - CASTLE OF GLASS (Official Lyrics Music Video) THIS VIDEO IS SUBTITLED WITH ENGLISH LANGUAGE © 2012 ...',
        isLiveNow: false,
        lengthSeconds: 281,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/8fXKSatBPcQ/mqdefault_6s.webp?du=3000&sqp=CJijmaYG&rs=AOn4CLCVQSF-LCBIIcJDp6B9fNCiUEp9Fg',
            width: 320,
          },
        ],
        publishedTimeText: '10 years ago',
        stats: {
          views: 186932,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/8fXKSatBPcQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbKTYVJkZBA8i8ZXl5lMkHMNLKDA',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/8fXKSatBPcQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAu0MQQT-sqJ0jMBY2uphrkjmuyCQ',
            width: 720,
          },
        ],
        title: 'Linkin Park - CASTLE OF GLASS (Official Lyrics Music Video)',
        videoId: '8fXKSatBPcQ',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaQx8js1vsRjqfz1xMZFP2AVAnvwNQ3H6GrXlOEt3w=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@sdmg4482',
          channelId: 'UCFPJq3TcO17JzIUEGLp4Nkw',
          title: 'SDMG',
        },
        badges: [],
        descriptionSnippet:
          "Linkin Park is dedicated to supporting and raising awareness for Cardon Children's Medical Center. Please share this video and ...",
        isLiveNow: false,
        lengthSeconds: 297,
        movingThumbnails: [
          {
            height: 180,
            url: 'https://i.ytimg.com/an_webp/_jx_-J2BOVc/mqdefault_6s.webp?du=3000&sqp=CMWpmaYG&rs=AOn4CLDHpTIi2rSAQcVRWpbBtSkPSLGS3g',
            width: 320,
          },
        ],
        publishedTimeText: '9 years ago',
        stats: {
          views: 200105,
        },
        thumbnails: [
          {
            height: 270,
            url: 'https://i.ytimg.com/vi/_jx_-J2BOVc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdtbMXWdkP_nCQF4DHPZ4vP2B_3Q',
            width: 480,
          },
        ],
        title: 'LINKIN PARK - Castle of Glass - KEEPING HOPE ALIVE',
        videoId: '_jx_-J2BOVc',
      },
    },
    {
      type: 'video',
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: 'https://yt3.ggpht.com/ytc/AOPolaRb9hF_rNTRggyc0lDEZ0-O1MNNUnuY_88IEmLL=s68-c-k-c0x00ffffff-no-rj',
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: '/@NFSRivalsSoundtrack',
          channelId: 'UC26yzjpZ13FArVRUemBkYXg',
          title: 'NFSRivalsSoundtrack',
        },
        badges: [],
        descriptionSnippet:
          'http://nfssoundtrack.com/rivals/ Buy Song (iTunes): http://bit.ly/LinkinParkNFSRivals 100% confirmed song from the game.',
        isLiveNow: false,
        lengthSeconds: 381,
        movingThumbnails: null,
        publishedTimeText: '9 years ago',
        stats: {
          views: 1559920,
        },
        thumbnails: [
          {
            height: 202,
            url: 'https://i.ytimg.com/vi/7MrwSwfQh-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7sZYHv3CulSaGnNI-ZMdTZlG4ww',
            width: 360,
          },
          {
            height: 404,
            url: 'https://i.ytimg.com/vi/7MrwSwfQh-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvE0EjcJ7IIIlMQJC70iZeG8PsjQ',
            width: 720,
          },
        ],
        title:
          'Linkin Park - Castle of Glass (M. Shinoda Remix) (NFS Rivals Soundtrack)',
        videoId: '7MrwSwfQh-4',
      },
    },
  ],
  cursorNext:
    'EqIDEg9jYXN0bGUgb2YgZ2xhc3MajgNTQlNDQVFzd1RuSkJlbmR4TlZRNFJZSUJDMmhDVlRZeFVqTTBjSFp2Z2dFTGNFVkxkM1ZZYTBjM1JuZUNBUXN4TFdSSFFVbDZVbWt0V1lJQkMwVklaR2RUUkRGa2QwVjNnZ0VMTjA5UmRFRjJhRTFNZGsyQ0FRc3hPWE5sVWpaa2Qya3lNSUlCQzNZMFozQkNhRU4xYkVOWmdnRUxZMXAxUWxkSWMyd3dXRTJDQVF0V0xXUmliMmhHU0hsWWM0SUJDelp5VkdOWlpuRm9lSEIzZ2dFTGFUazRaelo1ZDJ0RlVFMkNBUXRHUlV0d2VUTXlUbFpQWTRJQkMxcFlWSGt4V0dGRldUUlZnZ0VMT0ZGUVZrTlRaMWhLZEVHQ0FRdFRRbGRoTmpoVk1YRTBTWUlCQzNOa1JqQmZXbmhuTVRZMGdnRUxPR1pZUzFOaGRFSlFZMUdDQVF0ZmFuaGZMVW95UWs5V1k0SUJDemROY25kVGQyWlJhQzAwc2dFR0NnUUlHUkFDNmdFQ0NBRSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D',
  didYouMean: 'castle of glass',
  estimatedResults: 45251636,
  filterGroups: null,
  refinements: [
    'lost in the echo',
    'linkin park catalyst',
    'linkin park final masquerade',
    'linkin park living things',
  ],
}
const vidsOnly = filterVids(moreDummy.contents)
export const dummyVids = vidsOnly.map((content) => content.video)
const dummyQueue = vidsOnly.map((content) => content.video).slice(0, 1)
