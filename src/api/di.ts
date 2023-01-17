import { gqlGetCollageHistories } from 'api/graphql/getCallageHistories'
import { gqlGetCollageHistory } from 'api/graphql/getCollageHistory'
import { gqlGetJobHistories } from 'api/graphql/getJobHistories'
import { gqlGetJobHistory } from 'api/graphql/getJobHistory'
import { mockGetCollageHistories } from 'api/mock/getCollageHistories'
import { mockGetCollageHistory } from 'api/mock/getCollageHistory'
import { mockGetJobHistories } from 'api/mock/getJobHistories'
import { mockGetJobHistory } from 'api/mock/getJobHistory'
import { CollageHistory } from 'domain/CollageHistory'
import { JobHistory } from 'domain/JobHistory'

const API = process.env.API ?? 'mock'

export const getJobHistories: () => Promise<JobHistory[]> =
  API === 'mock' ? mockGetJobHistories : gqlGetJobHistories

export const getJobHistory: (
  id: string
) => Promise<CollageHistory | undefined> =
  API === 'mock' ? mockGetJobHistory : gqlGetJobHistory

export const getCollageHistories: () => Promise<CollageHistory[]> =
  API === 'mock' ? mockGetCollageHistories : gqlGetCollageHistories

export const getCollageHistory: (
  id: string
) => Promise<CollageHistory | undefined> =
  API === 'mock' ? mockGetCollageHistory : gqlGetCollageHistory
