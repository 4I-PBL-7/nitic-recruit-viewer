import { JobHistory } from 'domain/JobHistory'

export const mockGetJobHistories = async (): Promise<JobHistory[]> => {
  const ret: JobHistory[] = [
    {
      id: '1',
      name: 'サンプル企業A',
      results: [
        { year: 2022, majors: ['M', 'M', 'S', 'I'] },
        { year: 2021, majors: ['M', 'I'] },
        { year: 2020, majors: ['I', 'I'] },
      ],
    },
    {
      id: '2',
      name: 'サンプル企業B',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['C'] },
      ],
    },
  ]

  return ret
}
