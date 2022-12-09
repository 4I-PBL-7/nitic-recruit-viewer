import { Header } from 'components/CollageHeader'
import { JobCard } from 'components/JobCard'
import { SearchJobForm } from 'components/SearchJobForm'
import { NextPage } from 'next'
import styles from 'styles/pages/job-history/index.module.css'

type Props = {}

const SearchJobHistory: NextPage<Props> = () => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の就職先" />
      <div className={styles.content}>
        <SearchJobForm />
        <JobCard />
      </div>
    </main>
  )
}

export default SearchJobHistory
