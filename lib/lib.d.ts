type UserCreateResponse = {
  userCreate: {
    user: {
      name: string
      id: string
    }
  }
}

type QueueCreateResponse = {
  queueCreate: {
    queue: {
      owner: {
        id: string
      }
      id: string
    }
  }
}
