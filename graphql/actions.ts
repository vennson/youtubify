import { GraphQLClient } from 'graphql-request'
import { getQueueQuery } from '~/graphql/queries'
import {
  createQueueMutation,
  createUserMutation,
  createVideoMutation,
} from '~/graphql/mutations'
import { isProduction } from '~/lib/actions'

const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
  : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ''
  : 'letmein'

const client = new GraphQLClient(apiUrl)

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

export async function getQueue(queueId: string) {
  return makeGraphQLRequest(getQueueQuery, {
    id: queueId,
  }) as Promise<QueueQueryResponse>
}
