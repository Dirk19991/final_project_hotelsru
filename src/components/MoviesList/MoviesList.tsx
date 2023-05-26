import React, { FC } from 'react'
import styles from './MoviesList.module.scss'
import MoviesListSkeleton from '@/components/MoviesListSkeleton/MoviesListSkeleton'
import { Button } from '@/stories/Button/ButtonStandard'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import { useTranslation } from 'next-i18next'

const MoviesList: FC<any> = ({ data, isLoading }) => {
    const { t, i18n } = useTranslation(['movies'])

    console.log(data)

    return (
        <section>
            <div className="container">
                <div className={styles.wrapper}>
                    {isLoading && <MoviesListSkeleton />}
                    {!data?.length && <h1 className={styles.notFound}>Фильмов не найдено</h1>}
                    <ul className={styles.list}>
                        {data.map((movie: any) => (
                            <li className={styles.movie} key={movie.id}>
                                <DefaultCarouselSlide
                                    key={movie.id}
                                    rating={movie.rating}
                                    year={movie.year}
                                    href={`/watch/${movie.id}`}
                                    image={movie.poster}
                                    countries={movie.countries}
                                    genres={movie.genres}
                                    name={i18n.language === 'ru' ? movie.nameRu : movie.nameEn}
                                    duration={movie.duration}
                                />
                            </li>
                        ))}
                    </ul>

                    {!!data.length && <Button label={t('showMore')} onClick={() => {}} type="showMore" />}
                </div>
            </div>
        </section>
    )
}

export default MoviesList
