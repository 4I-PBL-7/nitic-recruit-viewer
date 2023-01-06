import styles from 'styles/components/JobCard.module.css'
import { Major, MajorBadge } from './MajorBadge'
import Elipsis from './Elipsis.svg'

type Result = {
  year: string
  range: string[]
  data: string
}

type Props = {
  empty: string
  job: string
  amount: string
  id: string
  result: Result
}

export const JobCard: React.FC<Props> = ({
  empty,
  job,
  amount,
  result,
  id,
}) => {
  return (
    <div className={styles.jobcard}>
      <header className={styles.empty}>
        <div>{empty}</div>
      </header>

      <div className={styles.main_frame}>
        <div className={styles.left_frame}>
          <div className={styles.sub_frame}>
            <div className={styles.title}>職種</div>
            <div className={styles.section}>{job}</div>
          </div>

          <div className={styles.sub_frame}>
            <div className={styles.title}>初任給</div>
            <div className={styles.section}>{amount}</div>
          </div>
        </div>

        <div className={styles.right_frame}>
          <div className={styles.title}>受入実績</div>
          <div className={styles.result}>
            <div>{result.year}</div>
            <div className={styles.result2}>
              <span>
                {result.range.map((r) => {
                  return <MajorBadge key={r} major={r as Major} />
                })}
              </span>
              <div>{result.data}</div>
            </div>
          </div>
          <div className={styles.result}>
            <div>{result.year}</div>
            <div className={styles.result2}>
              <span>
                {result.range.map((r) => {
                  return <MajorBadge key={r} major={r as Major} />
                })}
              </span>
              <div>{result.data}</div>
            </div>
          </div>
          <svg
            width="12"
            height="4"
            viewBox="0 0 12 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0.5C0.675 0.5 0 1.175 0 2C0 2.825 0.675 3.5 1.5 3.5C2.325 3.5 3 2.825 3 2C3 1.175 2.325 0.5 1.5 0.5ZM10.5 0.5C9.675 0.5 9 1.175 9 2C9 2.825 9.675 3.5 10.5 3.5C11.325 3.5 12 2.825 12 2C12 1.175 11.325 0.5 10.5 0.5ZM6 0.5C5.175 0.5 4.5 1.175 4.5 2C4.5 2.825 5.175 3.5 6 3.5C6.825 3.5 7.5 2.825 7.5 2C7.5 1.175 6.825 0.5 6 0.5Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <a href={id}>詳しく見る</a>
        </div>
        <div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z"
              fill="#E8A363"
            />
          </svg>
        </div>
      </footer>
    </div>
  )
}
