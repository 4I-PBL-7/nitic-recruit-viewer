import { Header } from 'components/CollageHeader'
import { CollageCard } from 'components/CollageCard'
import { SearchCollageForm } from 'components/SearchCollageForm'
import { NextPage } from 'next'
import styles from 'styles/pages/collage-history/index.module.css'
import { Text } from 'components/Text'

type Props = {}

const SearchCollageHistory: NextPage<Props> = () => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の進学先" />
      <div className={styles.content}>
        <SearchCollageForm />
        <div>
          <Text text="検索結果" fontSize="caption" />
          <CollageCard 
          empty='EMPTY' 
          prefecture='あああ' 
          form='国立' 
          department1='普通' 
          department2='情報学科'
          id='test'
          result={{
            year: '2022',
            data: '6',
            range: ['I','C']
          }} />
        </div>
      </div>
    </main>
  )
}

export default SearchCollageHistory
