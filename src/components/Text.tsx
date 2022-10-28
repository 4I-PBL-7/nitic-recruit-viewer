import clsx from 'clsx'
import styles from 'styles/components/Text.module.css'

type FontSize = 'header' | 'heading' | 'caption' | 'body' | 'small'
type FontWeight = 'normal' | 'bold' | 'black'
type Props = {
  text: string
  fontSize?: FontSize
  fontWeight?: FontWeight
  className?: string
}

export const Text: React.FC<Props> = ({
  text,
  fontSize = 'body',
  fontWeight = 'normal',
  className,
}) => {
  return (
    <span className={clsx(styles[fontSize], styles[fontWeight], className)}>
      {text}
    </span>
  )
}
