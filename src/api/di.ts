import { gqlGetCollageHistories } from 'api/graphql/getCallageHistories'
import { gqlGetJobHistories } from 'api/graphql/getJobHistories'
import { mockGetCollageHistories } from 'api/mock/getCollageHistories'
import { mockGetJobHistories } from 'api/mock/getJobHistories'
import { CollageHistory } from 'domain/CollageHistory'
import { JobHistory } from 'domain/JobHistory'

const API = process.env.API ?? 'mock'

export const getJobHistories: () => Promise<JobHistory[]> =
  API === 'mock' ? mockGetJobHistories : gqlGetJobHistories

export const etCollageHistories: () => Promise<CollageHistory[]> =
  API === 'mock' ? mockGetCollageHistories : gqlGetCollageHistories
