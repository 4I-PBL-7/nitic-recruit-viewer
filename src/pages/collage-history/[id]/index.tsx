import { Header } from 'components/CollageHeader'
import { GetServerSideProps, NextPage } from 'next'
import styles from 'styles/pages/collage-history/id.module.css'
import { CollageHistory } from 'domain/CollageHistory'
import { getCollageHistory } from 'api/di'
import { Major, MajorBadge } from 'components/MajorBadge'
import { Text } from 'components/Text'

type Props = {
  item: CollageHistory
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const id = params?.id as string
  const history = await getCollageHistory(id)

  if (history === undefined) {
    return { notFound: true }
  }

  return {
    props: {
      item: history,
    },
  }
}

const CollageHistoryDetail: NextPage<Props> = ({ item }) => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の進学先" />
      <div className={styles.content}>
        <div className={styles.content2}>
          <div className={styles.name}>
            <Text text={item.name} fontSize="heading" />
          </div>

          {item.pref !== undefined && (
            <div className={styles.row}>
              <div className={styles.title}>
                <Text text="所在地" fontSize="body" />
              </div>
              <div className={styles.data}>{item.pref}</div>
            </div>
          )}
          {item.recommendation !== undefined && (
            <div className={styles.row}>
              <div className={styles.title}>
                <Text text="推薦" fontSize="body" />
              </div>
              <div className={styles.data}>
                {item.recommendation ? 'あり' : 'なし'}
              </div>
            </div>
          )}
          {item.form !== undefined && (
            <div className={styles.row}>
              <div className={styles.title}>
                <Text text="形態" fontSize="body" />
              </div>
              <div className={styles.data}>{item.form}</div>
            </div>
          )}
          <div className={styles.row}>
            <div className={styles.title}>
              <Text text="進学実績" fontSize="body" />
            </div>
            <div className={styles.data}>
              {item.results.map((r) => (
                <div key={r.year} className={styles.result}>
                  <div>{r.year}</div>
                  <div className={styles.resultinner}>
                    <span>
                      {r.majors.map((m) => {
                        return <MajorBadge key={m} major={m as Major} />
                      })}
                    </span>
                    <div>{r.majors.length}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.title}>
              <Text text="キャリアサポート" fontSize="body" />
            </div>
            <div className={styles.data}>
              <Text
                text={`https://kosen-support.com/student/proceed/${item.id}/detail`}
                href={`https://kosen-support.com/student/proceed/${item.id}/detail`}
                fontSize="body"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CollageHistoryDetail
