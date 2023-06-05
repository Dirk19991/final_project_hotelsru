import { FC, useEffect, useRef, useState } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

interface IDescription {
    text: string
}

const Description: FC<IDescription> = ({ text }) => {
    const descriptionRef = useRef<HTMLDivElement>(null)
    const [detailsOpened, setDetailsOpened] = useState(false)
    const [isShort, setIsShort] = useState(false)
    const { t } = useTranslation(['film'])

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
                    {detailsOpened ? t('hideDetails') : t('showDetails')}
                </div>
            )}
        </div>
    )
}

export default Description
