import React, { useState, useEffect } from 'react'
import styles from './HeaderMoviesCarousel.module.scss'
import Image from 'next/image'
import MovieService from '@/services/MovieService'
import Link from 'next/link'
import { Movies } from '@/types/Response/MoviesResponse'

const HeaderMoviesCarousel = () => {
    const [moviesList, setMoviesList] = useState<Movies[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true)
            try {
                const response = await MovieService.getMoviesByQuery('all?sort=rating', '')
                setMoviesList(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchMovies()
    }, [])

    const sliceStep = moviesList && Math.floor(moviesList.length / 3)
    const movies1 = moviesList && moviesList.slice(0, sliceStep + 1)
    const movies2 = moviesList && moviesList.slice(sliceStep + 2, (sliceStep + 1) * 2)
    const movies3 = moviesList && moviesList.slice((sliceStep + 1) * 2 + 1)
    const moviesArr = [movies1, movies2, movies3]

    return (
        <div className={styles.carousel} data-testid="header-carousel">
            <div className={styles.wrapper}>
                {isLoading && (
                    <>
                        {[...Array(3)].map((el, i: number) => (
                            <div className={styles.column} key={i}>
                                {[...Array(3)].map((el, j) => (
                                    <Link href="/" key={j}>
                                        <div></div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </>
                )}
                {moviesArr.map((list, idx) => {
                    return (
                        <div className={styles.column} key={idx}>
                            {!isLoading &&
                                list.map((movie: Movies) => {
                                    return (
                                        <Link href={`/watch/${movie.id}`} key={movie.id}>
                                            <Image src={movie.poster} alt={movie.nameEn} width={112} height={160} />
                                        </Link>
                                    )
                                })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HeaderMoviesCarousel
