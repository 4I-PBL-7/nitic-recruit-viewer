import { sdk } from 'api/graphql/client'
import { JobHistory } from 'domain/JobHistory'
import { Result } from 'domain/Result'

export const gqlGetJobHistories = async (): Promise<JobHistory[]> => {
  const res = await sdk.getJobs()

  const nodes = res.category?.posts?.nodes
  const ret = (nodes ?? []).map((p) => {
    const results: Result[] = (p.tags?.nodes ?? []).map((t) => ({
      year: t.result?.year as number,
      majors: t.result?.majors?.split(',') ?? [],
    }))

    const collage: JobHistory = {
      id: p.slug as string,
      name: p.title as string,
      results: results,
      occupation: p.job?.occupation as string | undefined,
      offer: p.job?.offer as number | undefined,
    }

    return collage
  })

  return ret
}
