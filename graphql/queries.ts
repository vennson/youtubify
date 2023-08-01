export const getQueueQuery = `
  query Queue($id: ID!) {
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
