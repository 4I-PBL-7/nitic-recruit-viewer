import { sdk } from 'api/graphql/client'
import { JobHistory } from 'domain/JobHistory'
import { Result } from 'domain/Result'

export const gqlGetJobHistory = async (
  id: string
): Promise<JobHistory | undefined> => {
  const res = await sdk.getJob({ id })

  const node = res.post

  const results: Result[] = (node?.tags?.nodes ?? []).map((t) => ({
    year: t.result?.year as number,
    majors: t.result?.majors?.split(',') ?? [],
  }))

  const ret: JobHistory = {
    id: node?.slug as string,
    name: node?.title as string,
    results: results,
    occupation: node?.job?.occupation as string | undefined,
    offer: node?.job?.offer as number | undefined,
  }

  return ret
}
