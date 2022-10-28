import clsx from 'clsx'
import styles from 'styles/components/Header.module.css'

type Props = {
  title: string
  className?: string
}

export const Header: React.FC<Props> = ({ title, className }) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div>{title}</div>
      <div>
        <SearchBar />
        <UserIcon />
      </div>
    </header>
  )
}

const SearchBar: React.FC = () => {
  return <div></div>
}

const UserIcon: React.FC = () => {
  return <div></div>
}
