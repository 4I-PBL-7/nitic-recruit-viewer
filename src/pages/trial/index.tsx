import { NextPage } from 'next'

import styles from 'styles/pages/trial/index.module.css'
import { Text } from 'components/Text'
import { Card1 } from 'components/trial/Card1'
import { Card2 } from 'components/trial/Card2'
import { Card3 } from 'components/trial/Card3'
import { MajorBadge } from 'components/MajorBadge'

const Trial: NextPage = () => {
  return (
    <main className={styles.main}>
      <MajorBadge major="I" />
      <div>
        <Text text="田口" fontSize="caption" />
        <Card1 /> {/* TODO: タイトルや人数を追加 (田口) */}
      </div>
      <div>
        <Text text="トゥグスー" fontSize="caption" />
        <Card2 /> {/* TODO: タイトルや人数を追加 (トゥグスー) */}
      </div>
      <div>
        <Text text="水流添" fontSize="caption" />
        <Card3 /> {/* TODO: タイトルや人数を追加 (水流添) */}
      </div>
    </main>
  )
}

export default Trial
