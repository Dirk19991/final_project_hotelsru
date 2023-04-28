import { IMovie } from '@/types/ComponentProps/IMovie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Film.module.scss'
import data from '@/data/mockDataFilm.json'
import FilmBreadcrumbs from '../FilmBreadcrumbs/FilmBreadcrumbs'
import FilmTrailer from '../FilmTrailer/FilmTrailer'
import FilmDescription from '../FilmDescription/FilmDescription'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'
import 'swiper/scss'
import 'swiper/css/bundle'
import useMediaQuery from '@/hooks/useMediaQuery'
import FilmMobile from '../FilmMobile/FilmMobile'
import { useI18nContext } from '@/context/i18n'

const Film = () => {
    const { language, i18n } = useI18nContext()
    const isMobile = useMediaQuery('(max-width: 1200px)')
    const router = useRouter()

    const filmID = router.query.filmName

    const [filmData, setFilmData] = useState<IMovie | null>(null)

    useEffect(() => {
        if (!router.isReady) return
        fetch(`http://localhost:3001/movies/${filmID}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setFilmData(res))
            .catch((error) =>
                setFilmData(JSON.parse(JSON.stringify(data)) as IMovie)
            )
    }, [filmID, router.isReady])

    return (
        <>
            {filmData && !isMobile && (
                <>
                    <div className="container">
                        <div className={styles.wrapper}>
                            <FilmBreadcrumbs filmData={filmData} />
                            <div className={styles.flex}>
                                <FilmTrailer filmData={filmData} />
                                <FilmDescription filmData={filmData} />
                            </div>
                            <h3 className={styles.header}>
                                {language === 'en'
                                    ? 'Similar movies:'
                                    : `С фильмом "${filmData.nameRu}" смотрят:`}
                            </h3>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <SliderSmall
                            type="similarMovie"
                            similarMovies={filmData.similarMovies}
                            headerText=""
                        />
                    </div>
                </>
            )}
            {filmData && isMobile && <FilmMobile filmData={filmData} />}
            {!filmData && (
                <div className="container">
                    <h1 className={styles.header}>НЕТ ФИЛЬМА</h1>
                </div>
            )}
        </>
    )
}

export default Film
