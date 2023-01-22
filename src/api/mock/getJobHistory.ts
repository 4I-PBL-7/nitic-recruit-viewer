import { JobHistory } from 'domain/JobHistory'

export const mockGetJobHistory = async (
  id: string
): Promise<JobHistory | undefined> => {
  const ret: JobHistory = {
    id: id,
    name: 'サンプル企業A',
    results: [
      { year: 2022, majors: ['I'] },
      { year: 2021, majors: ['M'] },
      { year: 2020, majors: ['M', 'M'] },
    ],
    occupation: '情報技術者',
    offer: 19,
  }

  return ret
}
