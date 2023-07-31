import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import {
  createQueueMutation,
  createUserMutation,
  createVideoMutation,
} from '~/graphql/graphql'

export const isProduction = process.env.NODE_ENV === 'production'

const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : 'http://localhost:3000'
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
  : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ''
  : 'letmein'

const client = new GraphQLClient(apiUrl)

// for youtube API
export async function search(query: string) {
  const params = { query }
  const { data } = await axios.get<SearchResult>(`${serverUrl}/api/search`, {
    params,
  })
  return data
}

// for grafbase API
const makeGraphQLRequest = async (query: string, variables = {}) => {
  return await client.request(query, variables)
}

export async function createUser(name: string) {
  const variables = { input: { name } }
  return makeGraphQLRequest(
    createUserMutation,
    variables,
  ) as Promise<UserCreateResponse>
}

export async function createQueue(userId: string) {
  const variables = {
    input: {
      owner: {
        link: userId,
      },
    },
  }
  return makeGraphQLRequest(
    createQueueMutation,
    variables,
  ) as Promise<QueueCreateResponse>
}

// author:JSON!
// lengthSeconds:Int!
// queue:QueueToVideoCreateQueueRelation
// stats:JSON!
// thumbnails:[JSON!]!
// title:String!
// videoId:String!
// votes:[UserToVideoCreateUserRelation!]

export async function createVideo(
  video: Video,
  queueId: string,
  userId: string,
) {
  const { author, lengthSeconds, stats, thumbnails, title, videoId } = video

  const variables = {
    input: {
      author,
      lengthSeconds,
      stats,
      thumbnails,
      title,
      videoId,
      queue: {
        link: queueId,
      },
      votes: {
        link: userId,
      },
    },
  }

  return makeGraphQLRequest(createVideoMutation, variables) as Promise<unknown>
}

// export async function getQueueByOwner(owner: string) {
//   return makeGraphQLRequest(getQueueByOwnerQuery, { owner })
// }
