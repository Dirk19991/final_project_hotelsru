import React, { useState, FC, useEffect } from 'react'
import Head from 'next/head'
import { useI18nContext } from '@/context/i18n'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import SortingPanel from '@/components/SortingPanel/SortingPanel'
import Filters from '@/components/Filters/Filters'
import MoviesList from '@/components/MoviesList/MoviesList'
import { useRouter } from 'next/router'

const MoviesFilters: FC<any> = () => {
    const { i18n, language } = useI18nContext()
    const { query } = useRouter()

    const [currentSorting, setCurrentSorting] = useState<string>('byRating')

    const breadcrumbsData = [
        { id: 1, title: i18n[language].myIvi, href: '/' },
        { id: 2, title: i18n[language].movies, href: '/movies' },
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
        <>
            <Head>
                <title>
                    Смотреть %жанры% онлайн бесплатно в хорошем HD качестве и
                    без регистрации. Удобный просмотр онлайн фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />

            <SortingPanel
                setCurrentSorting={setCurrentSorting}
                currentSorting={currentSorting}
            />
            <Filters genres={[]} />

            <MoviesList />
        </>
    )
}

export const getServerSideProps = async () => {

    return {
        props: {
        },
    }
}

export default MoviesFilters
