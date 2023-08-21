import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        name
        id
      }
    }
  }
`

export const CREATE_QUEUE = gql`
  mutation QueueCreate($input: QueueCreateInput!) {
    queueCreate(input: $input) {
      queue {
        owner {
          id
          name
        }
        id
      }
    }
  }
`

export const CREATE_VIDEO = gql`
  mutation VideoCreate($input: VideoCreateInput!) {
    videoCreate(input: $input) {
      video {
        title
        id
      }
    }
  }
`

export const UPDATE_VIDEO = gql`
  mutation VideoUpdate($by: VideoByInput!, $input: VideoUpdateInput!) {
    videoUpdate(by: $by, input: $input) {
      video {
        title
        id
        videoId
        isPlaying
        isDone
      }
    }
  }
`

export const DELETE_VIDEO = gql`
  mutation VideoDelete($by: VideoByInput!) {
    videoDelete(by: $by) {
      deletedId
    }
  }
`

export const UPDATE_QUEUE = gql`
  mutation QueueUpdate($by: QueueByInput!, $input: QueueUpdateInput!) {
    queueUpdate(by: $by, input: $input) {
      queue {
        id
        nowPlaying
        owner {
          name
          id
        }
        videos(orderBy: { createdAt: ASC }, first: 50) {
          edges {
            node {
              channelTitle
              lengthText
              viewCount
              thumbnail
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
  }
`

export const CREATE_VIDEO_LOG = gql`
  mutation VideoLogCreate($input: VideoLogCreateInput!) {
    videoLogCreate(input: $input) {
      videoLog {
        id
      }
    }
  }
`
