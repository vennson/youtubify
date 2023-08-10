import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type IdCollectionFilterInput = {
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Queue */
  queueCreate?: Maybe<QueueCreatePayload>;
  /** Create multiple Queue */
  queueCreateMany?: Maybe<QueueCreateManyPayload>;
  /** Delete a Queue by ID or unique field */
  queueDelete?: Maybe<QueueDeletePayload>;
  /** Delete multiple Queue */
  queueDeleteMany?: Maybe<QueueDeleteManyPayload>;
  /** Update a Queue */
  queueUpdate?: Maybe<QueueUpdatePayload>;
  /** Update multiple Queue */
  queueUpdateMany?: Maybe<QueueUpdateManyPayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Create multiple User */
  userCreateMany?: Maybe<UserCreateManyPayload>;
  /** Delete a User by ID or unique field */
  userDelete?: Maybe<UserDeletePayload>;
  /** Delete multiple User */
  userDeleteMany?: Maybe<UserDeleteManyPayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Update multiple User */
  userUpdateMany?: Maybe<UserUpdateManyPayload>;
  /** Create a Video */
  videoCreate?: Maybe<VideoCreatePayload>;
  /** Create multiple Video */
  videoCreateMany?: Maybe<VideoCreateManyPayload>;
  /** Delete a Video by ID or unique field */
  videoDelete?: Maybe<VideoDeletePayload>;
  /** Delete multiple Video */
  videoDeleteMany?: Maybe<VideoDeleteManyPayload>;
  /** Create a VideoLog */
  videoLogCreate?: Maybe<VideoLogCreatePayload>;
  /** Create multiple VideoLog */
  videoLogCreateMany?: Maybe<VideoLogCreateManyPayload>;
  /** Delete a VideoLog by ID or unique field */
  videoLogDelete?: Maybe<VideoLogDeletePayload>;
  /** Delete multiple VideoLog */
  videoLogDeleteMany?: Maybe<VideoLogDeleteManyPayload>;
  /** Update a VideoLog */
  videoLogUpdate?: Maybe<VideoLogUpdatePayload>;
  /** Update multiple VideoLog */
  videoLogUpdateMany?: Maybe<VideoLogUpdateManyPayload>;
  /** Update a Video */
  videoUpdate?: Maybe<VideoUpdatePayload>;
  /** Update multiple Video */
  videoUpdateMany?: Maybe<VideoUpdateManyPayload>;
};


export type MutationQueueCreateArgs = {
  input: QueueCreateInput;
};


export type MutationQueueCreateManyArgs = {
  input: Array<QueueCreateManyInput>;
};


export type MutationQueueDeleteArgs = {
  by: QueueByInput;
};


export type MutationQueueDeleteManyArgs = {
  input: Array<QueueDeleteManyInput>;
};


export type MutationQueueUpdateArgs = {
  by: QueueByInput;
  input: QueueUpdateInput;
};


export type MutationQueueUpdateManyArgs = {
  input: Array<QueueUpdateManyInput>;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  input: Array<UserCreateManyInput>;
};


export type MutationUserDeleteArgs = {
  by: UserByInput;
};


export type MutationUserDeleteManyArgs = {
  input: Array<UserDeleteManyInput>;
};


export type MutationUserUpdateArgs = {
  by: UserByInput;
  input: UserUpdateInput;
};


export type MutationUserUpdateManyArgs = {
  input: Array<UserUpdateManyInput>;
};


export type MutationVideoCreateArgs = {
  input: VideoCreateInput;
};


export type MutationVideoCreateManyArgs = {
  input: Array<VideoCreateManyInput>;
};


export type MutationVideoDeleteArgs = {
  by: VideoByInput;
};


export type MutationVideoDeleteManyArgs = {
  input: Array<VideoDeleteManyInput>;
};


export type MutationVideoLogCreateArgs = {
  input: VideoLogCreateInput;
};


export type MutationVideoLogCreateManyArgs = {
  input: Array<VideoLogCreateManyInput>;
};


export type MutationVideoLogDeleteArgs = {
  by: VideoLogByInput;
};


export type MutationVideoLogDeleteManyArgs = {
  input: Array<VideoLogDeleteManyInput>;
};


export type MutationVideoLogUpdateArgs = {
  by: VideoLogByInput;
  input: VideoLogUpdateInput;
};


export type MutationVideoLogUpdateManyArgs = {
  input: Array<VideoLogUpdateManyInput>;
};


export type MutationVideoUpdateArgs = {
  by: VideoByInput;
  input: VideoUpdateInput;
};


export type MutationVideoUpdateManyArgs = {
  input: Array<VideoUpdateManyInput>;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query a single Queue by an ID or a unique field */
  queue?: Maybe<Queue>;
  /** Paginated query to fetch the whole list of `Queue`. */
  queueCollection?: Maybe<QueueConnection>;
  /** Query a single User by an ID or a unique field */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
  /** Query a single Video by an ID or a unique field */
  video?: Maybe<Video>;
  /** Paginated query to fetch the whole list of `Video`. */
  videoCollection?: Maybe<VideoConnection>;
  /** Query a single VideoLog by an ID or a unique field */
  videoLog?: Maybe<VideoLog>;
  /** Paginated query to fetch the whole list of `VideoLog`. */
  videoLogCollection?: Maybe<VideoLogConnection>;
};


export type QueryQueueArgs = {
  by: QueueByInput;
};


export type QueryQueueCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QueueCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QueueOrderByInput>;
};


export type QueryUserArgs = {
  by: UserByInput;
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};


export type QueryVideoArgs = {
  by: VideoByInput;
};


export type QueryVideoCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VideoCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VideoOrderByInput>;
};


export type QueryVideoLogArgs = {
  by: VideoLogByInput;
};


export type QueryVideoLogCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VideoLogCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VideoLogOrderByInput>;
};

export type Queue = {
  __typename?: 'Queue';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  nowPlaying?: Maybe<Scalars['JSON']['output']>;
  owner?: Maybe<User>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  videos?: Maybe<VideoConnection>;
};


export type QueueVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QueueOrderByInput>;
};

export type QueueByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueueCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type QueueConnection = {
  __typename?: 'QueueConnection';
  edges?: Maybe<Array<Maybe<QueueEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Queue */
export type QueueCreateInput = {
  nowPlaying?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<QueueToUserCreateUserRelation>;
  videos?: InputMaybe<Array<InputMaybe<QueueToVideoCreateVideoRelation>>>;
};

export type QueueCreateManyInput = {
  input: QueueCreateInput;
};

export type QueueCreateManyPayload = {
  __typename?: 'QueueCreateManyPayload';
  queueCollection: Array<Queue>;
};

export type QueueCreatePayload = {
  __typename?: 'QueueCreatePayload';
  queue?: Maybe<Queue>;
};

export type QueueDeleteManyInput = {
  by: QueueByInput;
};

export type QueueDeleteManyPayload = {
  __typename?: 'QueueDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type QueueDeletePayload = {
  __typename?: 'QueueDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type QueueEdge = {
  __typename?: 'QueueEdge';
  cursor: Scalars['String']['output'];
  node: Queue;
};

export type QueueOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to create a Queue for the QueueToUser relation of User */
export type QueueToUserCreateQueue = {
  nowPlaying?: InputMaybe<Scalars['JSON']['input']>;
  videos?: InputMaybe<Array<InputMaybe<QueueToVideoCreateVideoRelation>>>;
};

/** Input to link to or create a Queue for the QueueToUser relation of User */
export type QueueToUserCreateQueueRelation = {
  create?: InputMaybe<QueueToUserCreateQueue>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a User for the QueueToUser relation of Queue */
export type QueueToUserCreateUser = {
  name: Scalars['String']['input'];
};

/** Input to link to or create a User for the QueueToUser relation of Queue */
export type QueueToUserCreateUserRelation = {
  create?: InputMaybe<QueueToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Queue for the QueueToUser relation of User */
export type QueueToUserUpdateQueueRelation = {
  create?: InputMaybe<QueueToUserCreateQueue>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a User for the QueueToUser relation of Queue */
export type QueueToUserUpdateUserRelation = {
  create?: InputMaybe<QueueToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Queue for the QueueToVideo relation of Video */
export type QueueToVideoCreateQueue = {
  nowPlaying?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<QueueToUserCreateUserRelation>;
  videos?: InputMaybe<Array<InputMaybe<QueueToVideoCreateVideoRelation>>>;
};

/** Input to link to or create a Queue for the QueueToVideo relation of Video */
export type QueueToVideoCreateQueueRelation = {
  create?: InputMaybe<QueueToVideoCreateQueue>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Video for the QueueToVideo relation of Queue */
export type QueueToVideoCreateVideo = {
  addedBy: Scalars['JSON']['input'];
  author: Scalars['JSON']['input'];
  isDone?: Scalars['Boolean']['input'];
  isPlaying?: Scalars['Boolean']['input'];
  lengthSeconds: Scalars['Int']['input'];
  stats: Scalars['JSON']['input'];
  thumbnails: Array<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
  votes?: InputMaybe<Array<InputMaybe<UserToVideoCreateUserRelation>>>;
};

/** Input to link to or create a Video for the QueueToVideo relation of Queue */
export type QueueToVideoCreateVideoRelation = {
  create?: InputMaybe<QueueToVideoCreateVideo>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Queue for the QueueToVideo relation of Video */
export type QueueToVideoUpdateQueueRelation = {
  create?: InputMaybe<QueueToVideoCreateQueue>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Video for the QueueToVideo relation of Queue */
export type QueueToVideoUpdateVideoRelation = {
  create?: InputMaybe<QueueToVideoCreateVideo>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Queue */
export type QueueUpdateInput = {
  nowPlaying?: InputMaybe<Scalars['JSON']['input']>;
  owner?: InputMaybe<QueueToUserUpdateUserRelation>;
  videos?: InputMaybe<Array<InputMaybe<QueueToVideoUpdateVideoRelation>>>;
};

export type QueueUpdateManyInput = {
  by: QueueByInput;
  input: QueueUpdateInput;
};

export type QueueUpdateManyPayload = {
  __typename?: 'QueueUpdateManyPayload';
  queueCollection: Array<Queue>;
};

export type QueueUpdatePayload = {
  __typename?: 'QueueUpdatePayload';
  queue?: Maybe<Queue>;
};

export type User = {
  __typename?: 'User';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  queue?: Maybe<Queue>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type UserByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a User */
export type UserCreateInput = {
  name: Scalars['String']['input'];
  queue?: InputMaybe<QueueToUserCreateQueueRelation>;
};

export type UserCreateManyInput = {
  input: UserCreateInput;
};

export type UserCreateManyPayload = {
  __typename?: 'UserCreateManyPayload';
  userCollection: Array<User>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeleteManyInput = {
  by: UserByInput;
};

export type UserDeleteManyPayload = {
  __typename?: 'UserDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to create a User for the UserToVideo relation of Video */
export type UserToVideoCreateUser = {
  name: Scalars['String']['input'];
  queue?: InputMaybe<QueueToUserCreateQueueRelation>;
};

/** Input to link to or create a User for the UserToVideo relation of Video */
export type UserToVideoCreateUserRelation = {
  create?: InputMaybe<UserToVideoCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a User for the UserToVideo relation of Video */
export type UserToVideoUpdateUserRelation = {
  create?: InputMaybe<UserToVideoCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a User */
export type UserUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  queue?: InputMaybe<QueueToUserUpdateQueueRelation>;
};

export type UserUpdateManyInput = {
  by: UserByInput;
  input: UserUpdateInput;
};

export type UserUpdateManyPayload = {
  __typename?: 'UserUpdateManyPayload';
  userCollection: Array<User>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};

export type Video = {
  __typename?: 'Video';
  addedBy: Scalars['JSON']['output'];
  author: Scalars['JSON']['output'];
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  isDone: Scalars['Boolean']['output'];
  isPlaying: Scalars['Boolean']['output'];
  lengthSeconds: Scalars['Int']['output'];
  queue?: Maybe<Queue>;
  stats: Scalars['JSON']['output'];
  thumbnails: Array<Scalars['JSON']['output']>;
  title: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  videoId: Scalars['String']['output'];
  votes?: Maybe<UserConnection>;
};


export type VideoVotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VideoOrderByInput>;
};

export type VideoByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VideoCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  edges?: Maybe<Array<Maybe<VideoEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Video */
export type VideoCreateInput = {
  addedBy: Scalars['JSON']['input'];
  author: Scalars['JSON']['input'];
  isDone?: Scalars['Boolean']['input'];
  isPlaying?: Scalars['Boolean']['input'];
  lengthSeconds: Scalars['Int']['input'];
  queue?: InputMaybe<QueueToVideoCreateQueueRelation>;
  stats: Scalars['JSON']['input'];
  thumbnails: Array<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
  votes?: InputMaybe<Array<InputMaybe<UserToVideoCreateUserRelation>>>;
};

export type VideoCreateManyInput = {
  input: VideoCreateInput;
};

export type VideoCreateManyPayload = {
  __typename?: 'VideoCreateManyPayload';
  videoCollection: Array<Video>;
};

export type VideoCreatePayload = {
  __typename?: 'VideoCreatePayload';
  video?: Maybe<Video>;
};

export type VideoDeleteManyInput = {
  by: VideoByInput;
};

export type VideoDeleteManyPayload = {
  __typename?: 'VideoDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type VideoDeletePayload = {
  __typename?: 'VideoDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type VideoEdge = {
  __typename?: 'VideoEdge';
  cursor: Scalars['String']['output'];
  node: Video;
};

export type VideoLog = {
  __typename?: 'VideoLog';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  video: Scalars['JSON']['output'];
};

export type VideoLogByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VideoLogCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type VideoLogConnection = {
  __typename?: 'VideoLogConnection';
  edges?: Maybe<Array<Maybe<VideoLogEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a VideoLog */
export type VideoLogCreateInput = {
  video: Scalars['JSON']['input'];
};

export type VideoLogCreateManyInput = {
  input: VideoLogCreateInput;
};

export type VideoLogCreateManyPayload = {
  __typename?: 'VideoLogCreateManyPayload';
  videoLogCollection: Array<VideoLog>;
};

export type VideoLogCreatePayload = {
  __typename?: 'VideoLogCreatePayload';
  videoLog?: Maybe<VideoLog>;
};

export type VideoLogDeleteManyInput = {
  by: VideoLogByInput;
};

export type VideoLogDeleteManyPayload = {
  __typename?: 'VideoLogDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type VideoLogDeletePayload = {
  __typename?: 'VideoLogDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type VideoLogEdge = {
  __typename?: 'VideoLogEdge';
  cursor: Scalars['String']['output'];
  node: VideoLog;
};

export type VideoLogOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a VideoLog */
export type VideoLogUpdateInput = {
  video?: InputMaybe<Scalars['JSON']['input']>;
};

export type VideoLogUpdateManyInput = {
  by: VideoLogByInput;
  input: VideoLogUpdateInput;
};

export type VideoLogUpdateManyPayload = {
  __typename?: 'VideoLogUpdateManyPayload';
  videoLogCollection: Array<VideoLog>;
};

export type VideoLogUpdatePayload = {
  __typename?: 'VideoLogUpdatePayload';
  videoLog?: Maybe<VideoLog>;
};

export type VideoOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a Video */
export type VideoUpdateInput = {
  addedBy?: InputMaybe<Scalars['JSON']['input']>;
  author?: InputMaybe<Scalars['JSON']['input']>;
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  isPlaying?: InputMaybe<Scalars['Boolean']['input']>;
  lengthSeconds?: InputMaybe<IntOperationsInput>;
  queue?: InputMaybe<QueueToVideoUpdateQueueRelation>;
  stats?: InputMaybe<Scalars['JSON']['input']>;
  thumbnails?: InputMaybe<Array<Scalars['JSON']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Array<InputMaybe<UserToVideoUpdateUserRelation>>>;
};

export type VideoUpdateManyInput = {
  by: VideoByInput;
  input: VideoUpdateInput;
};

export type VideoUpdateManyPayload = {
  __typename?: 'VideoUpdateManyPayload';
  videoCollection: Array<Video>;
};

export type VideoUpdatePayload = {
  __typename?: 'VideoUpdatePayload';
  video?: Maybe<Video>;
};

export type UserCreateMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate?: { __typename?: 'UserCreatePayload', user?: { __typename?: 'User', name: string, id: string } | null } | null };

export type QueueCreateMutationVariables = Exact<{
  input: QueueCreateInput;
}>;


export type QueueCreateMutation = { __typename?: 'Mutation', queueCreate?: { __typename?: 'QueueCreatePayload', queue?: { __typename?: 'Queue', id: string, owner?: { __typename?: 'User', id: string, name: string } | null } | null } | null };

export type VideoCreateMutationVariables = Exact<{
  input: VideoCreateInput;
}>;


export type VideoCreateMutation = { __typename?: 'Mutation', videoCreate?: { __typename?: 'VideoCreatePayload', video?: { __typename?: 'Video', title: string, id: string } | null } | null };

export type VideoUpdateMutationVariables = Exact<{
  by: VideoByInput;
  input: VideoUpdateInput;
}>;


export type VideoUpdateMutation = { __typename?: 'Mutation', videoUpdate?: { __typename?: 'VideoUpdatePayload', video?: { __typename?: 'Video', title: string, id: string, videoId: string, isPlaying: boolean, isDone: boolean } | null } | null };

export type VideoDeleteMutationVariables = Exact<{
  by: VideoByInput;
}>;


export type VideoDeleteMutation = { __typename?: 'Mutation', videoDelete?: { __typename?: 'VideoDeletePayload', deletedId: string } | null };

export type QueueUpdateMutationVariables = Exact<{
  by: QueueByInput;
  input: QueueUpdateInput;
}>;


export type QueueUpdateMutation = { __typename?: 'Mutation', queueUpdate?: { __typename?: 'QueueUpdatePayload', queue?: { __typename?: 'Queue', id: string, nowPlaying?: any | null, owner?: { __typename?: 'User', name: string, id: string } | null, videos?: { __typename?: 'VideoConnection', edges?: Array<{ __typename?: 'VideoEdge', node: { __typename?: 'Video', author: any, lengthSeconds: number, stats: any, thumbnails: Array<any>, title: string, videoId: string, createdAt: any, addedBy: any, isPlaying: boolean, isDone: boolean, id: string, votes?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', name: string, id: string } } | null> | null } | null } } | null> | null } | null } | null } | null };

export type VideoLogCreateMutationVariables = Exact<{
  input: VideoLogCreateInput;
}>;


export type VideoLogCreateMutation = { __typename?: 'Mutation', videoLogCreate?: { __typename?: 'VideoLogCreatePayload', videoLog?: { __typename?: 'VideoLog', id: string } | null } | null };

export type LiveQueueQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LiveQueueQuery = { __typename?: 'Query', queue?: { __typename?: 'Queue', id: string, nowPlaying?: any | null, owner?: { __typename?: 'User', name: string, id: string } | null, videos?: { __typename?: 'VideoConnection', edges?: Array<{ __typename?: 'VideoEdge', node: { __typename?: 'Video', author: any, lengthSeconds: number, stats: any, thumbnails: Array<any>, title: string, videoId: string, createdAt: any, updatedAt: any, addedBy: any, isPlaying: boolean, isDone: boolean, id: string, votes?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', name: string, id: string } } | null> | null } | null } } | null> | null } | null } | null };

export type QueueQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type QueueQuery = { __typename?: 'Query', queue?: { __typename?: 'Queue', id: string, nowPlaying?: any | null, owner?: { __typename?: 'User', name: string, id: string } | null, videos?: { __typename?: 'VideoConnection', edges?: Array<{ __typename?: 'VideoEdge', node: { __typename?: 'Video', author: any, lengthSeconds: number, stats: any, thumbnails: Array<any>, title: string, videoId: string, createdAt: any, updatedAt: any, addedBy: any, isPlaying: boolean, isDone: boolean, id: string, votes?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', name: string, id: string } } | null> | null } | null } } | null> | null } | null } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string } | null };


export const UserCreateDocument = gql`
    mutation UserCreate($input: UserCreateInput!) {
  userCreate(input: $input) {
    user {
      name
      id
    }
  }
}
    `;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const QueueCreateDocument = gql`
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
    `;
export type QueueCreateMutationFn = Apollo.MutationFunction<QueueCreateMutation, QueueCreateMutationVariables>;

/**
 * __useQueueCreateMutation__
 *
 * To run a mutation, you first call `useQueueCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQueueCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [queueCreateMutation, { data, loading, error }] = useQueueCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQueueCreateMutation(baseOptions?: Apollo.MutationHookOptions<QueueCreateMutation, QueueCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QueueCreateMutation, QueueCreateMutationVariables>(QueueCreateDocument, options);
      }
export type QueueCreateMutationHookResult = ReturnType<typeof useQueueCreateMutation>;
export type QueueCreateMutationResult = Apollo.MutationResult<QueueCreateMutation>;
export type QueueCreateMutationOptions = Apollo.BaseMutationOptions<QueueCreateMutation, QueueCreateMutationVariables>;
export const VideoCreateDocument = gql`
    mutation VideoCreate($input: VideoCreateInput!) {
  videoCreate(input: $input) {
    video {
      title
      id
    }
  }
}
    `;
export type VideoCreateMutationFn = Apollo.MutationFunction<VideoCreateMutation, VideoCreateMutationVariables>;

/**
 * __useVideoCreateMutation__
 *
 * To run a mutation, you first call `useVideoCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVideoCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [videoCreateMutation, { data, loading, error }] = useVideoCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVideoCreateMutation(baseOptions?: Apollo.MutationHookOptions<VideoCreateMutation, VideoCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VideoCreateMutation, VideoCreateMutationVariables>(VideoCreateDocument, options);
      }
export type VideoCreateMutationHookResult = ReturnType<typeof useVideoCreateMutation>;
export type VideoCreateMutationResult = Apollo.MutationResult<VideoCreateMutation>;
export type VideoCreateMutationOptions = Apollo.BaseMutationOptions<VideoCreateMutation, VideoCreateMutationVariables>;
export const VideoUpdateDocument = gql`
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
    `;
export type VideoUpdateMutationFn = Apollo.MutationFunction<VideoUpdateMutation, VideoUpdateMutationVariables>;

/**
 * __useVideoUpdateMutation__
 *
 * To run a mutation, you first call `useVideoUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVideoUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [videoUpdateMutation, { data, loading, error }] = useVideoUpdateMutation({
 *   variables: {
 *      by: // value for 'by'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVideoUpdateMutation(baseOptions?: Apollo.MutationHookOptions<VideoUpdateMutation, VideoUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VideoUpdateMutation, VideoUpdateMutationVariables>(VideoUpdateDocument, options);
      }
export type VideoUpdateMutationHookResult = ReturnType<typeof useVideoUpdateMutation>;
export type VideoUpdateMutationResult = Apollo.MutationResult<VideoUpdateMutation>;
export type VideoUpdateMutationOptions = Apollo.BaseMutationOptions<VideoUpdateMutation, VideoUpdateMutationVariables>;
export const VideoDeleteDocument = gql`
    mutation VideoDelete($by: VideoByInput!) {
  videoDelete(by: $by) {
    deletedId
  }
}
    `;
export type VideoDeleteMutationFn = Apollo.MutationFunction<VideoDeleteMutation, VideoDeleteMutationVariables>;

/**
 * __useVideoDeleteMutation__
 *
 * To run a mutation, you first call `useVideoDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVideoDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [videoDeleteMutation, { data, loading, error }] = useVideoDeleteMutation({
 *   variables: {
 *      by: // value for 'by'
 *   },
 * });
 */
export function useVideoDeleteMutation(baseOptions?: Apollo.MutationHookOptions<VideoDeleteMutation, VideoDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VideoDeleteMutation, VideoDeleteMutationVariables>(VideoDeleteDocument, options);
      }
export type VideoDeleteMutationHookResult = ReturnType<typeof useVideoDeleteMutation>;
export type VideoDeleteMutationResult = Apollo.MutationResult<VideoDeleteMutation>;
export type VideoDeleteMutationOptions = Apollo.BaseMutationOptions<VideoDeleteMutation, VideoDeleteMutationVariables>;
export const QueueUpdateDocument = gql`
    mutation QueueUpdate($by: QueueByInput!, $input: QueueUpdateInput!) {
  queueUpdate(by: $by, input: $input) {
    queue {
      id
      nowPlaying
      owner {
        name
        id
      }
      videos(orderBy: {createdAt: ASC}, first: 50) {
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
    `;
export type QueueUpdateMutationFn = Apollo.MutationFunction<QueueUpdateMutation, QueueUpdateMutationVariables>;

/**
 * __useQueueUpdateMutation__
 *
 * To run a mutation, you first call `useQueueUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQueueUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [queueUpdateMutation, { data, loading, error }] = useQueueUpdateMutation({
 *   variables: {
 *      by: // value for 'by'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useQueueUpdateMutation(baseOptions?: Apollo.MutationHookOptions<QueueUpdateMutation, QueueUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QueueUpdateMutation, QueueUpdateMutationVariables>(QueueUpdateDocument, options);
      }
export type QueueUpdateMutationHookResult = ReturnType<typeof useQueueUpdateMutation>;
export type QueueUpdateMutationResult = Apollo.MutationResult<QueueUpdateMutation>;
export type QueueUpdateMutationOptions = Apollo.BaseMutationOptions<QueueUpdateMutation, QueueUpdateMutationVariables>;
export const VideoLogCreateDocument = gql`
    mutation VideoLogCreate($input: VideoLogCreateInput!) {
  videoLogCreate(input: $input) {
    videoLog {
      id
    }
  }
}
    `;
export type VideoLogCreateMutationFn = Apollo.MutationFunction<VideoLogCreateMutation, VideoLogCreateMutationVariables>;

/**
 * __useVideoLogCreateMutation__
 *
 * To run a mutation, you first call `useVideoLogCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVideoLogCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [videoLogCreateMutation, { data, loading, error }] = useVideoLogCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVideoLogCreateMutation(baseOptions?: Apollo.MutationHookOptions<VideoLogCreateMutation, VideoLogCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VideoLogCreateMutation, VideoLogCreateMutationVariables>(VideoLogCreateDocument, options);
      }
export type VideoLogCreateMutationHookResult = ReturnType<typeof useVideoLogCreateMutation>;
export type VideoLogCreateMutationResult = Apollo.MutationResult<VideoLogCreateMutation>;
export type VideoLogCreateMutationOptions = Apollo.BaseMutationOptions<VideoLogCreateMutation, VideoLogCreateMutationVariables>;
export const LiveQueueDocument = gql`
    query LiveQueue($id: ID!) @live {
  queue(by: {id: $id}) {
    id
    nowPlaying
    owner {
      name
      id
    }
    videos(orderBy: {createdAt: ASC}, first: 50) {
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
          updatedAt
          addedBy
          isPlaying
          isDone
          id
        }
      }
    }
  }
}
    `;

/**
 * __useLiveQueueQuery__
 *
 * To run a query within a React component, call `useLiveQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveQueueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLiveQueueQuery(baseOptions: Apollo.QueryHookOptions<LiveQueueQuery, LiveQueueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LiveQueueQuery, LiveQueueQueryVariables>(LiveQueueDocument, options);
      }
export function useLiveQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LiveQueueQuery, LiveQueueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LiveQueueQuery, LiveQueueQueryVariables>(LiveQueueDocument, options);
        }
export type LiveQueueQueryHookResult = ReturnType<typeof useLiveQueueQuery>;
export type LiveQueueLazyQueryHookResult = ReturnType<typeof useLiveQueueLazyQuery>;
export type LiveQueueQueryResult = Apollo.QueryResult<LiveQueueQuery, LiveQueueQueryVariables>;
export const QueueDocument = gql`
    query Queue($id: ID!) {
  queue(by: {id: $id}) {
    id
    nowPlaying
    owner {
      name
      id
    }
    videos(orderBy: {createdAt: ASC}, first: 50) {
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
          updatedAt
          addedBy
          isPlaying
          isDone
          id
        }
      }
    }
  }
}
    `;

/**
 * __useQueueQuery__
 *
 * To run a query within a React component, call `useQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueueQuery(baseOptions: Apollo.QueryHookOptions<QueueQuery, QueueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueueQuery, QueueQueryVariables>(QueueDocument, options);
      }
export function useQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueueQuery, QueueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueueQuery, QueueQueryVariables>(QueueDocument, options);
        }
export type QueueQueryHookResult = ReturnType<typeof useQueueQuery>;
export type QueueLazyQueryHookResult = ReturnType<typeof useQueueLazyQuery>;
export type QueueQueryResult = Apollo.QueryResult<QueueQuery, QueueQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  user(by: {id: $id}) {
    id
    name
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;