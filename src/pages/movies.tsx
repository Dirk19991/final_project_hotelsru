import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import MoviesList from '@/components/MoviesList/MoviesList'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { useState } from 'react'
import { useI18nContext } from '@/context/i18n'

export default function Movies() {
    const { i18n, language } = useI18nContext()

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
            <Breadcrumbs breadcrumbsData={breadcrumbsData}/>
            <MoviesTitle />
            <Filters />
        </>
    )
}
