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
        roomId
      }
    }
  }
`

export const getLiveQueueQuery = ``

// export const getQueueByOwnerQuery = `
//   query QueueByOwner($owner: String!) {
//     queue(by: { owner: $owner }) {
//       owner
//       videos(first: 20) {
//         edges {
//           node {
//             author
//             lengthSeconds
//             stats
//             thumbnails
//             title
//             videoId
//             votes
//           }
//         }
//       }
//     }
//   }
// `

// export const createQueueMutation = `
//   mutation QueueCreate($input: QueueCreateInput!) {
//     queueCreate(input: $input) {
//       queue {
//         owner
//       }
//     }
//   }
// `
