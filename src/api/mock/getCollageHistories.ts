import { CollageHistory } from 'domain/CollageHistory'

export const mockGetCollageHistories = async (): Promise<CollageHistory[]> => {
  const ret: CollageHistory[] = [
    {
      id: '1',
      name: 'サンプル大学A',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: ['M'] },
        { year: 2020, majors: ['M', 'M'] },
      ],
    },
    {
      id: '2',
      name: 'サンプル大学B',
      results: [
        { year: 2022, majors: ['S', 'I', 'C'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['M'] },
      ],
    },
  ]

  return ret
}
