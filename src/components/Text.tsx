import clsx from 'clsx'
import Link from 'next/link'
import styles from 'styles/components/Text.module.css'

type Font = 'NotoSansJP' | 'SourceCodePro'
type FontSize = 'header' | 'heading' | 'caption' | 'md' | 'body' | 'small'
type FontWeight = 'normal' | 'medium' | 'bold' | 'black'
type Props = {
  text: string
  font?: Font
  fontSize?: FontSize
  fontWeight?: FontWeight
  className?: string
  href?: string
}

export const Text: React.FC<Props> = ({
  text,
  font = 'NotoSansJP',
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
            styles[fontSize],
            styles[fontWeight],
            styles[font],
            styles.text,
            className
          )}
        >
          {text}
        </span>
      </a>
    </Link>
  ) : (
    <span
      className={clsx(
        styles[fontSize],
        styles[fontWeight],
        styles[font],
        styles.text,
        className
      )}
    >
      {text}
    </span>
  )
}
