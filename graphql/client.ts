import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { SSELink, isLiveQuery } from '@grafbase/apollo-link'
import { getOperationAST } from 'graphql'
import { isProduction } from '~/lib/actions'

// export const apolloClient = new ApolloClient({
//   uri: 'http://127.0.0.1:4000/graphql',
//   cache: new InMemoryCache(),
// })

// const uri = 'http://127.0.0.1:4000/graphql'

const uri = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
  : 'http://127.0.0.1:4000/graphql'
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ''
  : 'letmein'

const initializeApolloClient = (link: ApolloLink) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })
}

const token = '...'

const createApolloLink = () => {
  const sseLink = new SSELink({
    uri,
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  })

  const httpLink = new HttpLink({
    uri,
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
  })

  return split(
    ({ query, operationName, variables }) =>
      isLiveQuery(getOperationAST(query, operationName), variables),
    sseLink,
    httpLink,
  )
}

export const apolloClient = initializeApolloClient(createApolloLink())
