import { sdk } from 'api/graphql/client'
import { CollageHistory } from 'domain/CollageHistory'
import { Result } from 'domain/Result'

export const gqlGetCollageHistories = async (): Promise<CollageHistory[]> => {
  const res = await sdk.getCollages()

  const nodes = res.category?.posts?.nodes
  const ret = (nodes ?? []).map((p) => {
    const results: Result[] = (p.tags?.nodes ?? []).map((t) => ({
      year: t.result?.year as number,
      majors: t.result?.majors?.split(',') ?? [],
    }))

    const collage: CollageHistory = {
      id: p.slug as string,
      name: p.title as string,
      results: results,
      form: p.collage?.form as string | undefined,
      pref: p.collage?.pref as string | undefined,
      recommendation: p.collage?.recommendation as boolean | undefined,
    }

    return collage
  })

  return ret
}
