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
