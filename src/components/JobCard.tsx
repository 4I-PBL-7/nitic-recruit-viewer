import styles from 'styles/components/JobCard.module.css'
import { MajorBadge } from './MajorBadge'
/*type Result = {
  year: string
  data: string
}*/

type Props = {
  empty : string 
  job : string
  amount : string
  id : string
  /*result: Result*/

}

export const JobCard: React.FC<Props> = ({empty, job, amount, /*result,*/ id}) => {
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
            <div>2022</div>
            <span>
              <MajorBadge major='M'/>
              <div>6</div>
            </span>
          </div>

          <div className={styles.result}>
            <div>2022</div>
            <span>
              <MajorBadge major='M'/>
              <div>2</div>
            </span>
          </div>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <div><a href = {id}>詳しく見る &gt;</a></div>
      </footer>
    </div>
  )
}
