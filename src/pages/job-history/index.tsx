import { getJobHistories } from 'api/di'
import { Header } from 'components/JobHeader'
import { JobCard } from 'components/JobCard'
import {
  SearchFormData,
  SearchFormFilterKey,
  SearchJobForm,
} from 'components/SearchJobForm'
import { Text } from 'components/Text'
import { JobHistory } from 'domain/JobHistory'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
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
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>('')
  const [filter, setFilter] = useState<SearchFormFilterKey[]>([])
  const [sort, setSort] = useState<string>('')

  const formData: SearchFormData = {
    keyword: keyword,
    filterKey: filter,
    sortKey: sort,
  }
  const setFormData = (formData: SearchFormData) => {
    setKeyword(formData.keyword)
    setFilter(formData.filterKey)
    setSort(formData.sortKey)
  }

  const onSearchFormSubmit = () => {
    const path = '/job-history'
    const queries: string[] = []

    if (keyword !== '') {
      const q = `keyword=${keyword}`
      queries.push(q)
    }

    if (filter.length !== 0) {
      const filterQ = filter.map((k) => `${k.name}:${k.key}`)
      const q = `filter=${filterQ.join(',')}`
      queries.push(q)
    }

    if (sort !== '') {
      const q = `sort=${sort}`
      queries.push(q)
    }

    const query = queries.length === 0 ? '' : `?${queries.join('&')}`
    console.log('subm: query', query)
    router.push(path + query)
  }

  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の就職先" />
      <div className={styles.content}>
        <div className={styles.form}>
          <SearchJobForm
            onSubmit={onSearchFormSubmit}
            formData={formData}
            setFormData={setFormData}
            filters={[
              {
                name: 'テスト',
                choices: [
                  { label: 'one', key: '1' },
                  { label: 'two', key: '2' },
                ],
              },
              {
                name: 'テスト2',
                choices: [
                  { label: 'one', key: '1' },
                  { label: 'two', key: '2' },
                ],
              },
            ]}
            sorts={[
              { name: 'テスト', key: 'test' },
              { name: 'テスト2', key: 'test2' },
              { name: 'テスト3', key: 'test3' },
              { name: 'テスト4', key: 'test4' },
              { name: 'テスト5', key: 'test5' },
            ]}
          />
        </div>
        <div className={styles.result}>
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
