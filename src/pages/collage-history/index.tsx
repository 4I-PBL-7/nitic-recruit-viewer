import { Header } from 'components/CollageHeader'
import { CollageCard } from 'components/CollageCard'
import { SearchCollageForm } from 'components/SearchCollageForm'
import { NextPage } from 'next'
import styles from 'styles/pages/collage-history/index.module.css'

type Props = {}

const SearchCollageHistory: NextPage<Props> = () => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の進学先" />
      <div>
        <SearchCollageForm />
        <CollageCard />
      </div>
    </main>
  )
}

export default SearchCollageHistory
