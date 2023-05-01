import React, { useEffect, useState } from 'react'
import styles from './MoviesList.module.scss'
import DefaultCarouselSlide from '../DefaultCarouselSlide/DefaultCarouselSlide'
import data from '../../data/mockData'

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
    const [moviesDataFiltred, setMoviesDataFiltred] = useState<
        IMoviesData[] | null
    >(null)

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
                    <ul className={styles.list}>
                        {moviesData &&
                            moviesData.map((movie) => (
                                <li className={styles.movie}>
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
                </div>
            </div>
        </section>
    )
}

export default MoviesList
