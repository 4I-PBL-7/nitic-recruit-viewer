import { Header } from 'components/CollageHeader'
import { JobCard } from 'components/JobCard'
import { SearchJobForm } from 'components/SearchJobForm'
import { Text } from 'components/Text'
import { NextPage } from 'next'
import styles from 'styles/pages/job-history/index.module.css'

type Props = {}

const SearchJobHistory: NextPage<Props> = () => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の就職先" />
      <div className={styles.content}>
        <SearchJobForm />
        <div>
          <Text text="検索結果" fontSize="caption" />
          <JobCard empty='Empty' job='ソフトウェアエンジニア' amount='190000' result={{
            year: '2022',
            data: '6',
            range: ['I', 'C']
          }} id=''/>
        </div>
      </div>
    </main>
  )
}

export default SearchJobHistory
