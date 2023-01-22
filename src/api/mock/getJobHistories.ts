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
      occupation: '情報技術者',
      offer: 19,
    },
    {
      id: '2',
      name: 'サンプル企業B',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['C'] },
      ],
      occupation: '情報技術者',
      offer: 30,
    },
    {
      id: '3',
      name: 'サンプル企業C',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['C'] },
      ],
      occupation: '電気技術者',
      offer: 21,
    },
    {
      id: '4',
      name: 'サンプル企業D',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['C'] },
      ],
      occupation: '電気技術者',
      offer: 20,
    },
    {
      id: '5',
      name: 'サンプル企業E',
      results: [
        { year: 2022, majors: ['I'] },
        { year: 2021, majors: [] },
        { year: 2020, majors: ['C'] },
      ],
      occupation: '情報技術者',
      offer: 19,
    },
  ]

  return ret
}
