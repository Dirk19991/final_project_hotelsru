import CommentsCarousel from '@/components/CommentsCarousel/CommentsCarousel'
import AllDevices from '@/components/Film/AllDevices/AllDevices'
import CreatorsList from '@/components/Film/CreatorList/CreatorList'
import Film from '@/components/Film/Film'
import { FC, useEffect, useState } from 'react'
import styles from './[id].module.scss'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import FilmBreadcrumbs from '@/components/Film/Breadcrumbs/Breadcrumbs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout/Layout'
import MovieService from '@/services/MovieService'
import AppService from '@/services/AppService'
import engNameToLink from '@/util/engNameToLink'
import updateTrailer from '@/util/updateTrailer'

const FilmPage: FC<any> = ({ movieData, navigation }) => {
    const { t, i18n } = useTranslation(['film'])
    const [isLoading, setIsLoading] = useState(true)

    const [movie, setMovie] = useState<any>(movieData)
    const [refreshComments, setCommentsRefresh] = useState(false)
    const [mainGenre, setMainGenre] = useState<string>('')
    const [mainGenreLink, setMainGenreLink] = useState<string>('')

    useEffect(() => {
        if (movieData) {
            setIsLoading(false)
            setMovie(updateTrailer(movieData))
            const isGenresExist = movie.genres.length && movie.genres[0]
            const mainGenreValue = isGenresExist
                ? i18n.language === 'ru'
                    ? isGenresExist.nameRu
                    : isGenresExist.nameEn
                : 'Нет жанра'
            const mainGenreLinkValue = isGenresExist ? engNameToLink(isGenresExist.nameEn) : 'all'

            setMainGenre(mainGenreValue)
            setMainGenreLink(mainGenreLinkValue)
        }
    }, [movieData, i18n.language, movie.genres])

    return (
        <Layout navigation={navigation}>
            <div className={styles.wrapper}>
                <div className="container">
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
                </div>
                <DefaultCarousel title={'C этим фильмом также смотрят:'} dataList={movie.similarMovies} />
                <div className="container">
                    <CreatorsList data={movie} />
                    <CommentsCarousel
                        film={movie}
                        refreshComments={refreshComments}
                        setCommentsRefresh={setCommentsRefresh}
                    />
                    <AllDevices name={i18n.language === 'en' ? movie.nameEn : movie.nameRu} src={movie.poster} />
                </div>
            </div>

            <div className="container">
                {isLoading && (
                    <h1 className={styles.loading}>
                        {i18n.language === 'en' ? 'Loading movie...' : 'Загрузка фильма...'}
                    </h1>
                )}
                {!movieData && !isLoading && <h1 className={styles.noFilm}>{t('noMovie')}</h1>}
            </div>
        </Layout>
    )
}

export default FilmPage

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
    const movieData = await MovieService.getMovieById(params?.id)
    const navigation = await AppService.getNavigation()

    return {
        props: {
            movieData,
            navigation,
            ...(await serverSideTranslations(locale as string, ['film', 'common', 'footer', 'header'])),
        },
    }
}
