import React, { useState, FC } from 'react'
import Head from 'next/head'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import SortingPanel from '@/components/SortingPanel/SortingPanel'
import Filters from '@/components/Filters/Filters'
import MoviesList from '@/components/MoviesList/MoviesList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'

const MoviesFilters: FC<any> = ({ yearFilter }) => {
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
            <Filters genres={[]} yearFilter={yearFilter} />
            <MoviesList />
        </Layout>
    )
}

export const getServerSideProps = async ({ params, locale, query }: any) => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const yearsFilterRes = await fetch(`${baseURL}/api/filters`)
    const yearFilter = await yearsFilterRes.json()

    console.log(params, query)

    return {
        props: {
            yearFilter: yearFilter.years,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'header', 'movies'])),
        },
    }
}

export default MoviesFilters
