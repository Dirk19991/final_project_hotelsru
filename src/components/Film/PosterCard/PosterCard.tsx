import { IMovie } from '@/types/ComponentProps/IMovie'
import { FC } from 'react'
import styles from './PosterCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '@/stories/DefaultCarouselSlide/ProgressBar/ProgressBar'
import Image from 'next/image'

interface IPosterCard {
    film: IMovie
}

const PosterCard: FC<IPosterCard> = ({
    film: { previewPoster, rating, year, genres, duration },
}) => {
    const CHARTS = [33, 35, 20, 33]
    const [integerRating, fractionalRating] = parseFloat(rating)
        .toFixed(1)
        .toString()
        .split('.')

    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image
                    src={previewPoster}
                    alt={'Постер'}
                    fill
                    className={styles.image__background}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.rating}>
                    <div className={styles.number}>
                        <span className={styles.number__integer}>
                            {integerRating}
                        </span>
                        <span className={styles.number__fractional}>
                            ,{fractionalRating}
                        </span>
                    </div>
                    <div className={styles.charts}>
                        {CHARTS.map((value, index) => (
                            <ProgressBar
                                progress={value}
                                key={index}
                                className={styles.charts__progressbar}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.description}>
                    {year}, {genres[0]?.name}
                </div>
                <div className={styles.duration}>
                    <FontAwesomeIcon icon={faHourglass} color="#ea003d" />
                    <span>{duration} минут</span>
                </div>
            </div>
        </div>
    )
}

export default PosterCard
