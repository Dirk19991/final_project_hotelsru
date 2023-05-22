import React, { useEffect, useState } from 'react'
import styles from './MoviesList.module.scss'
import data from '../../data/mockData'
import MoviesListSkeleton from '@/components/MoviesListSkeleton/MoviesListSkeleton'
import { Button } from '@/stories/Button/ButtonStandard'
import { useI18nContext } from '@/context/i18n'
import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import { UseTranslation, useTranslation } from 'next-i18next'

interface IMoviesData {
    id: number
    name: string
    type: string
    rating: string
    description: string
    slogan: null | string
    poster: string
    previewPoster: string
    year: number
    director: string
    genre: {
        id: number
        name: string
    }[]
    country: {
        id: number
        name: string
    }[]
}

const MoviesList = () => {
    const [moviesData, setMoviesData] = useState<IMoviesData[] | null>(null)
    const { t } = useTranslation(['movies'])

    useEffect(() => {
        fetch('http://localhost:3001/movies?year=2020')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setMoviesData(res))
            .catch((error) => setMoviesData(data))
    }, [])

    return (
        <section>
            <div className="container">
                <div className={styles.wrapper}>
                    {/* <MoviesListSkeleton /> */}
                    {/* isLoading === true -> юзать скелетон вместо списка и кнопки  */}
                    <ul className={styles.list}>
                        {moviesData &&
                            moviesData.map((movie) => (
                                <li className={styles.movie} key={movie.id}>
                                    <DefaultCarouselSlide
                                        key={movie.id}
                                        rating={movie.rating}
                                        year={movie.year}
                                        href="/"
                                        image={movie.previewPoster}
                                        country={movie.country}
                                        genre={movie.genre}
                                        name={movie.name}
                                    />
                                </li>
                            ))}
                    </ul>

                    <Button
                        label={t('showMore')}
                        onClick={() => {}}
                        type="showMore"
                    />
                </div>
            </div>
        </section>
    )
}

export default MoviesList
