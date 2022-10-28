import { ReactNode } from 'react'
import styles from 'styles/components/SearchLayout.module.css'

type Props = {
  header: ReactNode
  orderForm: ReactNode
  cards: ReactNode[]
}

export const SearchLayout: React.FC<Props> = ({ header, orderForm, cards }) => {
  return (
    <main className={styles.main}>
      {header}
      <section className={styles['row-container']}>
        {orderForm}
        {cards}
      </section>
    </main>
  )
}
