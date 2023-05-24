import React, { useState, FC } from 'react'
import Head from 'next/head'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import SortingPanel from '@/components/SortingPanel/SortingPanel'
import Filters from '@/components/Filters/Filters'
import MoviesList from '@/components/MoviesList/MoviesList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'

const MoviesFilters: FC<any> = ({ allFilters }) => {
    const [currentSorting, setCurrentSorting] = useState<string>('byRating')
    const { t } = useTranslation(['common'])

    const breadcrumbsData = [
        { id: 1, title: t('myIvi'), href: '/' },
        { id: 2, title: t('movies'), href: '/movies' },
        {
            id: 3,
            countries: [
                { id: 1, country_name: 'Великобритания', href: '/gb' },
                { id: 2, country_name: 'США', href: '/us' },
                { id: 3, country_name: 'Бразилия', href: '/br' },
                { id: 4, country_name: 'Корея', href: '/kr' },
            ],
        },
        { id: 4, title: '2004 год', href: '/2021' },
    ]

    return (
        <Layout>
            <Head>
                <title>
                    Смотреть %жанры% онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн
                    фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <SortingPanel setCurrentSorting={setCurrentSorting} currentSorting={currentSorting} />
            <Filters allFilters={allFilters} />
            <MoviesList />
        </Layout>
    )
}

export const getServerSideProps = async ({ params, locale, query }: any) => {
    const localBaseUrl = process.env.VERCEL_URL ?? 'http://localhost:3000'
    const dockerBaseUrl = process.env.DOCKER_API_URL

    // FILTERS
    const filtersRes = await fetch(`${localBaseUrl}/api/filters`)
    const filters = await filtersRes.json()

    const genresRes = await fetch(`${dockerBaseUrl}/genres`)
    const genres = await genresRes.json()

    const allFilters = filters
    allFilters.genres = genres

    console.log('params', params)
    console.log('query', query)

    return {
        props: {
            allFilters,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'header', 'movies'])),
        },
    }
}

export default MoviesFilters
