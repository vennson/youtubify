// MUTATIONS
export const createUserMutation = `
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        name
        id
      }
    }
  }
`

export const createQueueMutation = `
  mutation QueueCreate($input: QueueCreateInput!) {
    queueCreate(input: $input) {
      queue {
        owner {
          id
        }
        id
      }
    }
  }
`

export const createVideoMutation = `
  mutation VideoCreate($input: VideoCreateInput!) {
    videoCreate(input: $input) {
      video {
        title
        videoId
      }
    }
  }
`

// QUERIES
export const getLiveQueueQuery = `
  query Queue($id: ID!) @live {
    queue(by: {id: $id}) {
      id
      owner {
        name
        id
      }
      videos(first: 50) {
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
          }
        }
      }
    }
  }
`
