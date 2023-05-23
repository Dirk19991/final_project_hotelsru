import CommentsCarousel from '@/components/CommentsCarousel/CommentsCarousel'
import AllDevices from '@/components/Film/AllDevices/AllDevices'
import CreatorsList from '@/components/Film/CreatorList/CreatorList'
import Film from '@/components/Film/Film'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect, useState } from 'react'
import data from '@/data/mockDataFilm.json'
import styles from './[filmName].module.scss'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import FilmBreadcrumbs from '@/components/Film/Breadcrumbs/Breadcrumbs'
import mock from '@/data/mockData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'

// тут нужно будет убрать useeffect и перенести получение данных в getStaticProps и getStaticPaths когда появится бэкенд

const FilmPage = () => {
    const { t, i18n } = useTranslation(['film'])

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
                setIsLoading(false)
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
                                name: t(
                                    film.type as
                                        | 'movie'
                                        | 'tv-series'
                                        | 'cartoon'
                                ),
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
                    <DefaultCarousel
                        title={'C этим фильмом также смотрят:'}
                        dataList={mock}
                    />
                    <CreatorsList film={film} />
                    <CommentsCarousel />
                    <AllDevices
                        name={
                            i18n.language === 'en' ? film.nameEn : film.nameRu
                        }
                        src={film.poster}
                    />
                </div>
            )}
            {isLoading && (
                <h1 className={styles.loading}>
                    {i18n.language === 'en'
                        ? 'Loading movie...'
                        : 'Загрузка фильма...'}
                </h1>
            )}
            {!film && !isLoading && (
                <h1 className={styles.noFilm}>{t('noMovie')}</h1>
            )}
        </main>
    )
}

export default FilmPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                'film',
                'common',
                'footer',
                'header',
            ])),
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    filmName: '1',
                },
            },
        ],

        fallback: true,
    }
}
