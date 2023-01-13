import { getJobHistories } from 'api/di'
import { Header } from 'components/JobHeader'
import { JobCard } from 'components/JobCard'
import { SearchJobForm } from 'components/SearchJobForm'
import { Text } from 'components/Text'
import { JobHistory } from 'domain/JobHistory'
import { GetServerSideProps, NextPage } from 'next'
import styles from 'styles/pages/job-history/index.module.css'

type Props = {
  items: JobHistory[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const histories: JobHistory[] = await getJobHistories()

  return {
    props: {
      items: histories,
    },
  }
}

const SearchJobHistory: NextPage<Props> = ({ items }) => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の就職先" />
      <div className={styles.content}>
        <SearchJobForm />
        <div>
          <Text text="検索結果" fontSize="caption" />
          {items.map((i) => (
            <JobCard
              key={i.name}
              empty={i.name}
              job="ソフトウェアエンジニア" /* */
              amount="190000"
              result={i.results.map((r) => ({
                year: r.year.toString(),
                range: r.majors,
                data: r.majors.length.toString(),
              }))}
              id={i.id}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default SearchJobHistory
