export const getQueueQuery = `
  query Queue($id: ID!) {
    queue(by: {id: $id}) {
      id
      owner {
        name
        id
      }
      videos(orderBy: { createdAt:ASC }, first: 50) {
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
            id
          }
        }
      }
    }
  }
`

export const getUserQuery = `
  query User($id: ID!) {
    user(by: {id: $id}) {
      id
      name
    }
  }
`
