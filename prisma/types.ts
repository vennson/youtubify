import { Prisma } from '@prisma/client'
import { getQueue } from './actions'

export type QueueResponse = Prisma.PromiseReturnType<typeof getQueue>
export type QueueVideo = NonNullable<QueueResponse>['videos'][0]
