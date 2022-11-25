import clsx from 'clsx'
import Link from 'next/link'
import styles from 'styles/components/Text.module.css'

type FontSize = 'header' | 'heading' | 'caption' | 'body' | 'small'
type FontWeight = 'normal' | 'bold' | 'bolder'
type Props = {
  text: string
  color?: string
  fontSize?: FontSize
  fontWeight?: FontWeight
  className?: string
  href?: string
}

export const Text: React.FC<Props> = ({
  text,
  color = 'black',
  fontSize = 'body',
  fontWeight = 'normal',
  href,
  className,
}) => {
  return href !== undefined ? (
    <Link href={href} passHref>
      <a>
        <span
          className={clsx(
            styles[color],
            styles[fontSize],
            styles[fontWeight],
            styles.underline,
            className
          )}
        >
          {text}
        </span>
      </a>
    </Link>
  ) : (
    <span className={clsx(styles[fontSize], styles[fontWeight], className)}>
      {text}
    </span>
  )
}
