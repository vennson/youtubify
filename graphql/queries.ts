import { gql } from '@apollo/client'

export const LIVE_GET_QUEUE = gql`
  query Queue($id: ID!) @live {
    queue(by: { id: $id }) {
      id
      nowPlaying
      owner {
        name
        id
      }
      videos(orderBy: { createdAt: ASC }, first: 50) {
        edges {
          node {
            author
            lengthSeconds
            stats
            thumbnails
            title
            videoId
            votes(first: 50) {
              edges {
                node {
                  name
                  id
                }
              }
            }
            createdAt
            addedBy
            isPlaying
            isDone
            id
          }
        }
      }
    }
  }
`

export const GET_USER = gql`
  query User($id: ID!) {
    user(by: { id: $id }) {
      id
      name
    }
  }
`
