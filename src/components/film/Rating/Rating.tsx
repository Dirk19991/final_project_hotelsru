import { Button } from '@/stories/Button/ButtonStandard'
import styles from './Rating.module.scss'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { FC } from 'react'
import { useTranslation } from 'next-i18next'

interface IRating {
    ratingCount: string
    fixedRating: number
}

const Rating: FC<IRating> = ({ ratingCount, fixedRating }) => {
    const { t } = useTranslation(['film'])
    return (
        <div className={styles.wrapper} data-testid="film-rating">
            <ButtonRating fontSize={25} height={64} rating={fixedRating} width={64} />
            <div className={styles.description}>
                <div className={styles.title}>{t('iviRatingNoColon')}</div>
                <div>{t('interestingPlot')}</div>
                <div>
                    {ratingCount.toLocaleString()} {t('ratings')}
                </div>
            </div>
            <div className={styles.button}>
                <Button label={t('rate')} onClick={() => {}} type="rating" />
            </div>
        </div>
    )
}

export default Rating
