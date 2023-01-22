import { Header } from 'components/CollageHeader'
import { CollageCard } from 'components/CollageCard'
import {
  SearchCollageForm,
  SearchFormData,
  SearchFormFilterKey,
} from 'components/SearchCollageForm'
import { GetStaticProps, NextPage } from 'next'
import styles from 'styles/pages/collage-history/index.module.css'
import { Text } from 'components/Text'
import { useState } from 'react'
import { CollageHistory } from 'domain/CollageHistory'
import { getCollageHistories } from 'api/di'

type Props = {
  items: CollageHistory[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const histories: CollageHistory[] = await getCollageHistories()

  return {
    props: {
      items: histories,
    },
  }
}

const SearchCollageHistory: NextPage<Props> = ({ items }) => {
  const [keyword, setKeyword] = useState<string>('')
  const [filter, setFilter] = useState<SearchFormFilterKey[]>([])
  const [sort, setSort] = useState<string>('')
  const [searched, setSearched] = useState<CollageHistory[]>(items)

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

        const filterKey = f.name as keyof CollageHistory
        console.log(f.key)
        console.log(f.name)
        filtered = filtered.filter((j) => {
          console.log(j[filterKey], ':', f.key)
          return j[filterKey] === f.key
        })
      })
    }

    // if (sort !== '') {
    //   const sortKey = sort as keyof CollageHistory
    //   filtered = filtered.sort(
    //     (a, b) => (a[sortKey] as number) - (b[sortKey] as number)
    //   )
    // }

    setSearched(filtered)
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
                name: '所在地',
                fieldName: 'pref',
                choices: items
                  .filter((j) => j.pref)
                  .map((j, i) => ({
                    label: j.pref as string,
                    key: i.toString(),
                  })),
              },
              {
                name: '形態',
                fieldName: 'form',
                choices: items
                  .filter((j) => j.form)
                  .map((j, i) => ({
                    label: j.form as string,
                    key: i.toString(),
                  })),
              },
              {
                name: '推薦',
                fieldName: 'reccomendation',
                choices: items
                  .filter((j) => j.recommendation)
                  .map((j, i) => ({
                    label: j.recommendation ? 'あり' : 'なし',
                    key: i.toString(),
                  })),
              },
            ]}
            sorts={[]}
          />
        </div>
        <div className={styles.result}>
          <Text text="検索結果" fontSize="caption" fontWeight="bold" />
          {searched.map((i) => (
            <CollageCard
              key={i.id}
              empty={i.name}
              prefecture={i.pref ?? '記載なし'}
              form={i.form ?? '記載なし'}
              department1="記載なし"
              department2="記載なし"
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
