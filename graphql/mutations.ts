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
      }
    }
  }
`
