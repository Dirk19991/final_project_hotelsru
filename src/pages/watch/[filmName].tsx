import CommentsCarousel from '@/components/CommentsCarousel/CommentsCarousel'
import AllDevices from '@/components/Film/AllDevices/AllDevices'
import CreatorsList from '@/components/Film/CreatorList/CreatorList'
import Film from '@/components/Film/Film'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import data from '@/data/mockDataFilm.json'
import styles from './[filmName].module.scss'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { useI18nContext } from '@/context/i18n'
import FilmBreadcrumbs from '@/components/Film/Breadcrumbs/Breadcrumbs'

const FilmPage = () => {
    const { language, i18n } = useI18nContext()

    const router = useRouter()

    const filmID = router.query.filmName

    const [film, setFilm] = useState<IMovie | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!router.isReady) return
        fetch(`http://localhost:3001/movies/${filmID}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error('Error')
            })
            .then((res) => setFilm(res))
            .catch((error) => {
                setFilm(JSON.parse(JSON.stringify(data)) as IMovie)
            })
    }, [filmID, router.isReady])

    useEffect(() => {
        setIsLoading(true)
    }, [filmID])

    useEffect(() => {
        if (film) {
            setIsLoading(false)
        }
    }, [film])

    return (
        <main className="container">
            {film && (
                <div className={styles.wrapper}>
                    <FilmBreadcrumbs
                        items={[
                            {
                                name: i18n[language][
                                    film.type as
                                        | 'movie'
                                        | 'tv-series'
                                        | 'cartoon'
                                ],
                                href: '/',
                            },
                            {
                                name: film.genres.sort((a, b) => a.id - b.id)[0]
                                    .name,
                                href: '/',
                            },
                        ]}
                        bold
                    />
                    <Film film={film} />
                    <div className={styles.slider}>
                        <DefaultCarousel
                            type="similarMovie"
                            similarMovies={film.similarMovies}
                            headerText={`${
                                i18n[language].similarMovies.start
                            } «${
                                language === 'en' ? film.nameEn : film.nameRu
                            }» ${i18n[language].similarMovies.end}:`}
                        />
                    </div>
                    <CommentsCarousel />
                    <CreatorsList film={film} />
                    <AllDevices
                        name={language === 'en' ? film.nameEn : film.nameRu}
                    />
                </div>
            )}
            {isLoading && (
                <div className={styles.loading}>
                    {i18n[language].loadingMovie}
                </div>
            )}
            {!film && !isLoading && (
                <div className="container">
                    <h1 className={styles.noFilm}>{i18n[language].noMovie}</h1>
                </div>
            )}
        </main>
    )
}

export default FilmPage
