import { JobHistory } from 'domain/JobHistory'

export const mockGetJobHistory = async (
  id: string
): Promise<JobHistory | undefined> => {
  const ret: JobHistory = {
    id: id,
    name: 'サンプル企業',
    results: [
      { year: 2022, majors: ['I'] },
      { year: 2021, majors: ['M'] },
      { year: 2020, majors: ['M', 'M'] },
    ],
  }

  return ret
}
