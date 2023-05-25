import React, { FC } from 'react'
import styles from './MoviesList.module.scss'
import MoviesListSkeleton from '@/components/MoviesListSkeleton/MoviesListSkeleton'
import { Button } from '@/stories/Button/ButtonStandard'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import { useTranslation } from 'next-i18next'

const MoviesList: FC<any> = ({ data }) => {
    const { t, i18n } = useTranslation(['movies'])

    return (
        <section>
            <div className="container">
                <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        {!data && <MoviesListSkeleton />}
                        {data.map((movie: any) => (
                            <li className={styles.movie} key={movie.id}>
                                <DefaultCarouselSlide
                                    key={movie.id}
                                    rating={movie.rating}
                                    year={movie.year}
                                    href={`/watch/${movie.id}`}
                                    image={movie.poster}
                                    countries={movie.country}
                                    genres={movie.genres}
                                    name={i18n.language === 'ru' ? movie.nameRu : movie.nameEn}
                                    duration={movie.duration}
                                />
                            </li>
                        ))}
                    </ul>

                    <Button label={t('showMore')} onClick={() => {}} type="showMore" />
                </div>
            </div>
        </section>
    )
}

export default MoviesList
