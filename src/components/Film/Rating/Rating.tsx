import { useI18nContext } from '@/context/i18n'
import { Button } from '@/stories/Button/ButtonStandard'
import styles from './Rating.module.scss'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { FC } from 'react'

interface IRating {
    ratingCount: number
    fixedRating: number
}

const Rating: FC<IRating> = ({ ratingCount, fixedRating }) => {
    const { language, i18n } = useI18nContext()

    return (
        <div className={styles.wrapper}>
            <ButtonRating
                fontSize={25}
                height={64}
                rating={fixedRating}
                width={64}
            />
            <div className={styles.description}>
                <div className={styles.title}>
                    {i18n[language].iviRatingNoColon}
                </div>
                <div>{i18n[language].interestingPlot}</div>
                <div>
                    {ratingCount.toLocaleString()} {i18n[language].ratings}
                </div>
            </div>
            <div className={styles.button}>
                <Button
                    label={i18n[language].rate}
                    onClick={() => {}}
                    type="rating"
                />
            </div>
        </div>
    )
}

export default Rating
