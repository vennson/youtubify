import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import {
  createQueueMutation,
  createUserMutation,
  getQueueByOwnerQuery,
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

export async function createQueue(owner: string) {
  const variables = { input: { owner } }
  return makeGraphQLRequest(createQueueMutation, variables)
}

export async function getQueueByOwner(owner: string) {
  return makeGraphQLRequest(getQueueByOwnerQuery, { owner })
}
