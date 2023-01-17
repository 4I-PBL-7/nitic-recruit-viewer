import { Header } from 'components/CollageHeader'
import { CollageCard } from 'components/CollageCard'
import {
  SearchCollageForm,
  SearchFormData,
  SearchFormFilterKey,
} from 'components/SearchCollageForm'
import { GetServerSideProps, NextPage } from 'next'
import styles from 'styles/pages/collage-history/index.module.css'
import { Text } from 'components/Text'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CollageHistory } from 'domain/CollageHistory'
import { getCollageHistories } from 'api/di'

type Props = {
  items: CollageHistory[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const histories: CollageHistory[] = await getCollageHistories()

  return {
    props: {
      items: histories,
    },
  }
}

const SearchCollageHistory: NextPage<Props> = ({ items }) => {
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
    const path = '/collage-history'
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
      <Header title="茨城高専 過去の進学先" />
      <div className={styles.content}>
        <div className={styles.form}>
          <SearchCollageForm
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
          <Text text="検索結果" fontSize="caption" fontWeight="bold" />
          {items.map((i) => (
            <CollageCard
              key={i.id}
              empty={i.name}
              prefecture="茨城県"
              form="国立"
              department1="普通"
              department2="情報学科"
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

export default SearchCollageHistory
