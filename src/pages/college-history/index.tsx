import { Header } from 'components/Header'
import { CollageCard } from 'components/CollageCard'
import { SearchCollageForm } from 'components/SearchCollageForm'
import { NextPage } from 'next'

type Props = {}

const SearchCollageHistory: NextPage<Props> = () => {
  return (
    <div>
      <Header title="茨城高専 過去の進学先" />
      <div>
        <SearchCollageForm />
        <CollageCard />
      </div>
    </div>
  )
}

export default SearchCollageHistory
