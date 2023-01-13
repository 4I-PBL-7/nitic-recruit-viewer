import Link from 'next/link'
import { MenuItem, Menu, MenuButton, MenuDivider } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import styles from 'styles/components/Header.module.css'
import { AiFillCaretDown } from 'react-icons/ai'

type Props = {
  title: string
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.collage_text_color} ${styles.font}`}>
        {title}
      </div>
      <AiFillCaretDown
        className={`${styles.collage_text_color} ${styles.front_button}`}
      />
      <Menu
        menuButton={<MenuButton className={styles.back_button}></MenuButton>}
      >
        <MenuItem>
          <Link href="/collage-history">
            <a className={styles.collage_text_color}>過去の進学先</a>
          </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Link href="/job-history">
            <a className={styles.job_text_color}>過去の就職先</a>
          </Link>
        </MenuItem>
      </Menu>
    </header>
  )
}
