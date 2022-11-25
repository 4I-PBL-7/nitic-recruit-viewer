import clsx from 'clsx'
import Link from 'next/link'
import styles from 'styles/components/Text.module.css'

type FontSize = 'header' | 'heading' | 'caption' | 'body' | 'small'
type FontWeight = 'normal' | 'bold' | 'black'
type Props = {
  text: string
  fontSize?: FontSize
  fontWeight?: FontWeight
  className?: string
  href?: string
}

export const Text: React.FC<Props> = ({
  text,
  fontSize = 'body',
  fontWeight = 'normal',
  href,
  className,
}) => {
  return href !== undefined ? (
    <Link href={href} passHref>
      <a>
        <span className={clsx(styles[fontSize], styles[fontWeight], className)}>
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
