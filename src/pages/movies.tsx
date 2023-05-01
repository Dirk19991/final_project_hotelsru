import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { useState } from 'react'
import SortingPanel from '@/components/SortingPanel/SortingPanel'
import { useI18nContext } from '@/context/i18n'
import DefaultCarousel from '@/components/DefaultCarousel/DefaultCarousel'
import Head from 'next/head'

export default function Movies() {
    const { i18n, language } = useI18nContext()
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
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без
                    регистрации. Удобный просмотр онлайн фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle />
            <SortingPanel
                setCurrentSorting={setCurrentSorting}
                currentSorting={currentSorting}
            />
            <Filters />
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
