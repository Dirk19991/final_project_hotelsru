import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Film.module.scss'
import data from '@/data/mockDataFilm'

const Film = () => {
    // на случай если бэк не запущен
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
    }, [filmID, filmData])

    console.log(filmData)

    return filmData ? (
        <div className="container">
            <h1 className={styles.header}>{filmData.name}</h1>
        </div>
    ) : (
        <div className="container">
            <h1>НЕТ ФИЛЬМА</h1>
        </div>
    )
}

export default Film
