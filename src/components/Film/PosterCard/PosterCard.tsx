import { IMovie } from '@/types/Component/IMovie'
import { FC } from 'react'
import styles from './PosterCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '@/stories/DefaultCarouselSlide/ProgressBar/ProgressBar'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const PosterCard: FC<any> = ({ film }) => {
    const { poster, rating, year, genres, duration, nameEn, nameRu } = film
    const CHARTS = [33, 35, 20, 33]
    const [integerRating, fractionalRating] = parseFloat(rating).toFixed(1).toString().split('.')
    const { t, i18n } = useTranslation(['film'])
    const genreName = genres[0] ? (i18n.language === 'ru' ? genres[0].nameRu : genres[0].nameEn) : ''
    const movieName = i18n.language === 'ru' ? nameRu : nameEn

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={poster} alt={'Постер'} fill className={styles.image__background} />
            </div>
            <div className={styles.info}>
                <div className={styles.rating}>
                    <div className={styles.number}>
                        <span className={styles.number__integer}>{integerRating}</span>
                        <span className={styles.number__fractional}>,{fractionalRating}</span>
                    </div>
                    <div className={styles.charts}>
                        {CHARTS.map((value, index) => (
                            <ProgressBar progress={value} key={index} className={styles.charts__progressbar} />
                        ))}
                    </div>
                </div>
                <div className={styles.description}>
                    {movieName}
                    <br />
                    {year}, {genreName}
                </div>
                <div className={styles.duration}>
                    <FontAwesomeIcon icon={faHourglass} color="#ea003d" />
                    <span>
                        {duration} {t('minutes')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PosterCard
