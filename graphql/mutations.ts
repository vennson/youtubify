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
          name
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
        id
      }
    }
  }
`

export const updateVideoMutation = `
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

export const deleteVideoMutation = `
  mutation VideoDelete($by: VideoByInput!) {
    videoDelete(by: $by) {
      deletedId
    }
  }
`

export const updateQueueMutation = `
  mutation QueueUpdate($by: QueueByInput!, $input: QueueUpdateInput!) {
    queueUpdate(by: $by, input: $input) {
      queue {
        id
        nowPlaying
        owner {
          name
          id
        }
        videos(orderBy: { createdAt:ASC }, first: 500) {
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
  }
`
