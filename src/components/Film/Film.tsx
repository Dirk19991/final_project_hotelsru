import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Film.module.scss'
import data from '@/data/mockDataFilm'
import FilmBreadcrumbs from '../FilmBreadcrumbs/FilmBreadcrumbs'
import FilmTrailer from '../FilmTrailer/FilmTrailer'
import FilmDescription from '../FilmDescription/FilmDescription'

const Film = () => {
    const router = useRouter()
    const filmID = router.query.filmName

    const [filmData, setFilmData] = useState<IMoviesData | null>(null)

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${filmID}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setFilmData(res))
            .catch((error) => setFilmData(data as IMoviesData))
    }, [filmID])

    console.log(filmData)

    return filmData ? (
        <div className="container">
            <div className={styles.wrapper}>
                <FilmBreadcrumbs filmData={filmData} />
                <div className={styles.flex}>
                    <FilmTrailer />
                    <FilmDescription filmData={filmData} />
                </div>
            </div>
        </div>
    ) : (
        <div className="container">
            <h1 className={styles.header}>НЕТ ФИЛЬМА</h1>
        </div>
    )
}

export default Film