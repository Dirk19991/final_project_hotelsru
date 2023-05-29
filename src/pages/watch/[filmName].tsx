import CommentsCarousel from '@/components/CommentsCarousel/CommentsCarousel'
import AllDevices from '@/components/Film/AllDevices/AllDevices'
import CreatorsList from '@/components/Film/CreatorList/CreatorList'
import Film from '@/components/Film/Film'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { FC, useEffect, useState } from 'react'
import data from '@/data/mockDataFilm.json'
import styles from './[filmName].module.scss'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import FilmBreadcrumbs from '@/components/Film/Breadcrumbs/Breadcrumbs'
import mock from '@/data/mockData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'
import Layout from '@/components/Layout/Layout'

const FilmPage: FC<any> = ({ filmData }) => { 
    const { t, i18n } = useTranslation(['film'])
    const [film, setFilm] = useState<IMovie | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refreshComments, setCommentsRefresh] = useState(false)

    useEffect(() => {
        if (filmData) {
            const updatedFilm = Object.assign({}, JSON.parse(JSON.stringify(data)) as IMovie, filmData?.movie)
            setFilm(updatedFilm)
            setIsLoading(false)
        }
    }, [filmData])
    
    return (
        <Layout>
            <main className="container">
                {film && (
                    <div className={styles.wrapper}>
                        <FilmBreadcrumbs
                            items={[
                                {
                                    name: t(film.type as 'movie' | 'tv-series' | 'cartoon'),
                                    href: '/',
                                },
                                {
                                    name: film.genres.sort((a, b) => a.id - b.id)[0].name,
                                    href: '/',
                                },
                            ]}
                            bold
                        />
                        <Film film={film} />
                        <DefaultCarousel title={'C этим фильмом также смотрят:'} dataList={mock} />
                        <CreatorsList film={film} />
                        <CommentsCarousel
                            film={film}
                            refreshComments={refreshComments}
                            setCommentsRefresh={setCommentsRefresh}
                        />
                        <AllDevices name={i18n.language === 'en' ? film.nameEn : film.nameRu} src={film.poster} />
                    </div>
                )}
                {isLoading && (
                    <h1 className={styles.loading}>
                        {i18n.language === 'en' ? 'Loading movie...' : 'Загрузка фильма...'}
                    </h1>
                )}
                {!film && !isLoading && <h1 className={styles.noFilm}>{t('noMovie')}</h1>}
            </main>
        </Layout>
    )
}

export default FilmPage

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const deployBaseUrl = process.env.DEPLOY_API_URL

    const film = await fetch(`${deployBaseUrl}/movie/${params?.filmName}`)
    const filmData = await film.json()
    return {
        props: {
            filmData,
            ...(await serverSideTranslations(locale as string, ['film', 'common', 'footer', 'header'])),
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
