import { NextPage } from 'next'

import styles from 'styles/pages/trial/index.module.css'
import { Text } from 'components/Text'
import { Card1 } from 'components/trial/Card1'
import { Card2 } from 'components/trial/Card2'
import { Card3 } from 'components/trial/Card3'

const Trial: NextPage = () => {
  return (
    <main className={styles.main}>
      <Text
        text="テスト"
        fontSize="header"
        fontWeight="black"
        href="https://example.com"
      />
      <Card1 /> {/* TODO: タイトルや人数を追加 (田口) */}
      <Card2 /> {/* TODO: タイトルや人数を追加 (トゥグスー) */}
      <Card3 /> {/* TODO: タイトルや人数を追加 (水流添) */}
    </main>
  )
}

export default Trial
