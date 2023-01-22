import { Header } from 'components/JobHeader'
import { GetServerSideProps, NextPage } from 'next'
import styles from 'styles/pages/collage-history/id.module.css'
import { JobHistory } from 'domain/JobHistory'
import { getJobHistory } from 'api/di'
import { Major, MajorBadge } from 'components/MajorBadge'
import { Text } from 'components/Text'

type Props = {
  item: JobHistory
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const id = params?.id as string
  const history = await getJobHistory(id)

  if (history === undefined) {
    return { notFound: true }
  }

  return {
    props: {
      item: history,
    },
  }
}

const JobHistoryDetail: NextPage<Props> = ({ item }) => {
  return (
    <main className={styles.main}>
      <Header title="茨城高専 過去の進学先" />
      <div className={styles.content}>
        <div className={styles.content2}>
          <div className={styles.name}>
            <Text text={item.name} fontSize="heading" />
          </div>

          {item.occupation !== undefined && (
            <div className={styles.row}>
              <div className={styles.title}>
                <Text text="職種" fontSize="body" />
              </div>
              <div className={styles.data}>{item.occupation}</div>
            </div>
          )}
          {item.offer !== undefined && (
            <div className={styles.row}>
              <div className={styles.title}>
                <Text text="初任給" fontSize="body" />
              </div>
              <div className={styles.data}>{item.offer}万円</div>
            </div>
          )}
          <div className={styles.row}>
            <div className={styles.title}>
              <Text text="就職実績" fontSize="body" />
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
                text={`https://kosen-support.com/student/recruit/${item.id}/detail`}
                href={`https://kosen-support.com/student/recruit/${item.id}/detail`}
                fontSize="body"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default JobHistoryDetail
