import styles from 'styles/components/MajorBadge.module.css'
import { Text } from 'components/Text'

export type Major = 'M' | 'S' | 'E' | 'I' | 'C'
type Props = {
  major: Major
}

export const MajorBadge: React.FC<Props> = ({ major }) => {
  return (
    <div className={styles.badge}>
      <Text text={major} fontSize="small" fontWeight="bold" />
    </div>
  )
}
