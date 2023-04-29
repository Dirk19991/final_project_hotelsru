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

interface IMoviesList {
    filterGenre: number | null
    filterCountry: number | null
}

const MoviesList = ({ filterGenre, filterCountry }: IMoviesList) => {
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

    useEffect(() => {
        if (moviesData && (filterGenre || filterCountry)) {
            const newArray = []
            for (let element of moviesData) {
                const isIdMatching = element.genre.some(
                    (genre) => genre.id == filterGenre
                )
                const isCountryMatching = element.country.some(
                    (country) => country.id == filterCountry
                )
                if (isIdMatching || isCountryMatching) {
                    newArray.push(element)
                }
            }
            setMoviesDataFiltred(newArray)
        } else {
            setMoviesDataFiltred(moviesData)
        }
    }, [filterGenre, filterCountry, moviesData])

    return (
        <section className="container">
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    {moviesDataFiltred &&
                        moviesDataFiltred.map((movie) => (
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
                        ))}
                </div>
            </div>
        </section>
    )
}

export default MoviesList
