import { sdk } from 'api/graphql/client'
import { CollageHistory } from 'domain/CollageHistory'
import { Result } from 'domain/Result'

export const gqlGetCollageHistory = async (
  id: string
): Promise<CollageHistory | undefined> => {
  const res = await sdk.getCollage({ id })

  const node = res.post

  const results: Result[] = (node?.tags?.nodes ?? []).map((t) => ({
    year: t.result?.year as number,
    majors: t.result?.majors?.split(',') ?? [],
  }))

  const ret: CollageHistory = {
    id: node?.slug as string,
    name: node?.title as string,
    results: results,
    pref: node?.collage?.pref as string | undefined,
    form: node?.collage?.form as string | undefined,
    recommendation: node?.collage?.recommendation as boolean | undefined,
  }

  return ret
}
