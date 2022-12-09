import styles from 'styles/components/Header.module.css'

type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div>{title}</div>
      <div></div>
    </header>
  )
}
