import { Result } from 'domain/Result'

export type CollageHistory = {
  id: string
  name: string
  results: Result[]
  recommendation?: boolean
  pref?: string
  form?: string
}
