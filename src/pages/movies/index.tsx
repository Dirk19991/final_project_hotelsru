import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { useI18nContext } from '@/context/i18n'
import { FC } from 'react'
import Head from 'next/head'
import 'swiper/scss'
import { GetStaticProps } from 'next'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'

const Movies: FC<any> = ({ genres }) => {
    const { i18n, language } = useI18nContext()

    const breadcrumbsData = [
        { id: 1, title: i18n[language].myIvi, href: '/' },
        { id: 2, title: i18n[language].movies, href: '/movies' },
    ]

    return (
        <>
            <Head>
                <title>
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без
                    регистрации. Удобный просмотр онлайн фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle />
            <Filters genres={genres} />

            <DefaultCarousel
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
            <DefaultCarousel
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        </>
    )
}

export default Movies

export const getStaticProps: GetStaticProps = async () => {
    // const genresResponse = await fetch(process.env.DOCKER_API_URL + '/genres')
    // const genres = await genresResponse.json()

    return {
        props: {
            // genres,
        },
    }
}
