import { Header } from 'components/CollageHeader'
import { SearchLayout } from 'components/SearchLayout'

type Props = {
  // items:
}

const RecruitSearch: React.FC<Props> = () => {
  return (
    <SearchLayout
      header={<Header title="茨城高専 今年の求人" />}
      orderForm={<div />}
      cards={[<div key={1} />]}
    />
  )
}

export default RecruitSearch
