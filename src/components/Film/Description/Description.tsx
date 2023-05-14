import { FC, useEffect, useRef, useState } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import { useI18nContext } from '@/context/i18n'

interface IDescription {
    text: string
}

const Description: FC<IDescription> = ({ text }) => {
    const descriptionRef = useRef<HTMLDivElement>(null)
    const [detailsOpened, setDetailsOpened] = useState(false)
    const [isShort, setIsShort] = useState(false)
    const { language, i18n } = useI18nContext()

    useEffect(() => {
        if (descriptionRef.current) {
            if (
                descriptionRef.current.scrollHeight <=
                descriptionRef.current.clientHeight
            ) {
                setIsShort(true)
            }
        }
    }, [text])

    return (
        <div>
            <div
                className={cn(styles.description, {
                    [styles.description_closed]: !detailsOpened,
                })}
                ref={descriptionRef}
            >
                {text}
            </div>
            {!isShort && (
                <div
                    onClick={() => setDetailsOpened(!detailsOpened)}
                    className={styles.details}
                >
                    {detailsOpened
                        ? i18n[language].hideDetails
                        : i18n[language].showDetails}
                </div>
            )}
        </div>
    )
}

export default Description
