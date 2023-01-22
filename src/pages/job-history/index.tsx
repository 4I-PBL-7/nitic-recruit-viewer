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
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import styles from 'styles/pages/job-history/index.module.css'

type Props = {
  items: JobHistory[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const histories: JobHistory[] = await getJobHistories()

  return {
    props: {
      items: histories,
    },
  }
}

const SearchJobHistory: NextPage<Props> = ({ items }) => {
  const [keyword, setKeyword] = useState<string>('')
  const [filter, setFilter] = useState<SearchFormFilterKey[]>([])
  const [sort, setSort] = useState<string>('')
  const [searched, setSearched] = useState<JobHistory[]>(items)

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
    let filtered = items

    if (keyword !== '') {
      filtered = filtered.filter((i) => i.name.includes(keyword))
    }

    if (filter.length !== 0) {
      filter.forEach((f) => {
        if (f.key === undefined) return
        filtered = filtered.filter((j) => j[f.name as keyof typeof j] === f.key)
      })
    }

    if (sort !== '') {
      filtered = filtered.sort((a, b) => a.offer ?? 0 - (b.offer ?? 0))
    }

    setSearched(filtered)
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
                name: '職種',
                fieldName: 'occupation',
                choices: [
                  { label: '情報技術者', key: '1' },
                  { label: '電気技術者', key: '2' },
                ],
              },
              {
                name: '就職実績',
                fieldName: 'results',
                choices: [
                  { label: 'one', key: '1' },
                  { label: 'two', key: '2' },
                ],
              },
            ]}
            sorts={[
              { name: '初任給', key: 'test' },
              { name: '人気順', key: 'test2' },
            ]}
          />
        </div>
        <div className={styles.result}>
          <Text text="検索結果" fontSize="caption" fontWeight="bold" />
          {searched.map((i) => (
            <JobCard
              key={i.name}
              id={i.id}
              empty={i.name}
              job={i.occupation ?? '記載なし'}
              amount={i.offer === undefined ? '記載なし' : i.offer.toString()}
              result={i.results.map((r) => ({
                year: r.year.toString(),
                range: r.majors,
                data: r.majors.length.toString(),
              }))}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default SearchJobHistory
