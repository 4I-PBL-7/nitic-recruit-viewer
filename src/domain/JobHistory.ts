import { Result } from 'domain/Result'

export type JobHistory = {
  id: string
  name: string
  results: Result[]
  occupation?: string
  offer?: number
}
