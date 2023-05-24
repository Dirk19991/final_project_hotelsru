import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { FC } from 'react'
import Head from 'next/head'
import 'swiper/scss'
import { GetStaticProps } from 'next'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'

const Movies: FC<any> = ({ dramas, comedies, allFilters }) => {
    const { t } = useTranslation(['common', 'movies'])

    const breadcrumbsData = [
        { id: 1, title: t('myIvi'), href: '/' },
        { id: 2, title: t('movies'), href: '/movies' },
    ]

    return (
        <Layout>
            <Head>
                <title>
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн
                    фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle />
            <Filters allFilters={allFilters} />

            <DefaultCarousel title={t('bestComedies')} link={'/movies/comedy'} dataList={dramas} />
            <DefaultCarousel title={t('bestDramas')} link={'/movies/drama'} dataList={comedies} />
        </Layout>
    )
}

export default Movies

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
    const localBaseUrl = process.env.VERCEL_URL ?? 'http://localhost:3000'
    const dockerBaseUrl = process.env.DOCKER_API_URL

    // заменить на рил данные
    const response = await fetch(`${localBaseUrl}/api/movies-list`)
    const data = await response.json()

    // FILTERS
    const filtersRes = await fetch(`${localBaseUrl}/api/filters`)
    const filters = await filtersRes.json()

    const genresRes = await fetch(`${dockerBaseUrl}/genres`)
    const genres = await genresRes.json()

    const allFilters = filters
    allFilters.genres = genres

    return {
        props: {
            dramas: data,
            comedies: data,
            allFilters: allFilters,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'header', 'movies'])),
        },
    }
}
