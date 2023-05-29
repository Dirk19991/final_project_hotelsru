import CommentsCarousel from '@/components/CommentsCarousel/CommentsCarousel'
import AllDevices from '@/components/Film/AllDevices/AllDevices'
import CreatorsList from '@/components/Film/CreatorList/CreatorList'
import Film from '@/components/Film/Film'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { FC, useEffect, useState } from 'react'
import data from '@/data/mockDataFilm.json'
import styles from './[id].module.scss'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import FilmBreadcrumbs from '@/components/Film/Breadcrumbs/Breadcrumbs'
import mock from '@/data/mockData'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout/Layout'
import MovieService from '@/services/MovieService'
import engNameToLink from '@/util/engNameToLink'

const FilmPage: FC<any> = ({ movieData }) => {
    const { t, i18n } = useTranslation(['film'])
    const [isLoading, setIsLoading] = useState(true)

    const [movie, setMovie] = useState<any>(movieData)
    const [refreshComments, setCommentsRefresh] = useState(false)

    useEffect(() => {
        if (movieData) {
            setIsLoading(false)
            setMovie(movieData)
        }
    }, [movieData])

    const isGenresExist = movieData && movieData.genres.length && movieData.genres[0]
    const mainGenre = isGenresExist
        ? i18n.language === 'ru'
            ? isGenresExist.nameRu
            : isGenresExist.nameEn
        : 'Нет жанра'
    const mainGenreLink = isGenresExist ? engNameToLink(isGenresExist.nameEn) : 'all'

    return (
        <Layout>
            <main className="container">
                {movie && (
                    <div className={styles.wrapper}>
                        <FilmBreadcrumbs
                            items={[
                                {
                                    name: t('movies'),
                                    href: '/',
                                },
                                {
                                    name: mainGenre,
                                    href: `/movies/${mainGenreLink}`,
                                },
                            ]}
                            bold
                        />
                        <Film movie={movie} />
                        <DefaultCarousel title={'C этим фильмом также смотрят:'} dataList={movie.similarMovies} />
                        {/* <CreatorsList film={film} /> */}
                        <CommentsCarousel
                            film={movie}
                            refreshComments={refreshComments}
                            setCommentsRefresh={setCommentsRefresh}
                        />
                        <AllDevices name={i18n.language === 'en' ? movie.nameEn : movie.nameRu} src={movie.poster} />
                    </div>
                )}
                {isLoading && (
                    <h1 className={styles.loading}>
                        {i18n.language === 'en' ? 'Loading movie...' : 'Загрузка фильма...'}
                    </h1>
                )}
                {!movieData && !isLoading && <h1 className={styles.noFilm}>{t('noMovie')}</h1>}
            </main>
        </Layout>
    )
}

export default FilmPage

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
    const movieData = await MovieService.getMovieById(params?.id)

    console.log(movieData)

    return {
        props: {
            movieData,
            ...(await serverSideTranslations(locale as string, ['film', 'common', 'footer', 'header'])),
        },
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { id: '1' } }],
//         fallback: true,
//     }
// }
