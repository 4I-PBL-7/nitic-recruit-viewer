import { CollageHistory } from 'domain/CollageHistory'

export const mockGetCollageHistory = async (
  id: string
): Promise<CollageHistory | undefined> => {
  const ret: CollageHistory = {
    id: id,
    name: 'サンプル大学',
    results: [
      { year: 2022, majors: ['I'] },
      { year: 2021, majors: ['M'] },
      { year: 2020, majors: ['M', 'M'] },
    ],
  }

  return ret
}
