import { Header } from 'components/Header'
import { JobCard } from 'components/JobCard'
import { SearchJobForm } from 'components/SearchJobForm'
import { NextPage } from 'next'

type Props = {}

const SearchJobHistory: NextPage<Props> = () => {
  return (
    <div>
      <Header title="茨城高専 過去の就職先" />
      <div>
        <SearchJobForm />
        <JobCard />
      </div>
    </div>
  )
}

export default SearchJobHistory
