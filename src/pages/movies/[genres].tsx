import React, { useState, FC, useEffect } from 'react'
import Head from 'next/head'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import SortingPanel from '@/components/SortingPanel/SortingPanel'
import Filters from '@/components/Filters/Filters'
import MoviesList from '@/components/MoviesList/MoviesList'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/router'
import axios from 'axios'

const MoviesFilters: FC<any> = ({ allFilters }) => {
    const [moviesList, setMoviesList] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentSorting, setCurrentSorting] = useState<string>('byRating')
    const { t } = useTranslation(['common'])
    const { query } = useRouter()
    const queryPage = !query.page ? '1' : String(query.page)
    const [currentPage, setCurrentPage] = useState<string>(queryPage)
    const [isMoviesEnded, setIsMoviesEnded] = useState<boolean>(false)

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

    useEffect(() => {
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres

        const fetchMovies = async () => {
            setIsLoading(true)
            try {
                const genresQuery = query.genres === 'all' ? '' : query.genres
                const response = await axios.get(`${process.env.DEPLOY_API_URL}/movies/${genresQuery}`, {
                    params: { ...queryCopy },
                })
                const movies = await response.data
                setMoviesList(movies.result)
                setCurrentPage('1')
                setIsMoviesEnded(false)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovies()
    }, [query])

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
            <MoviesList
                data={moviesList}
                isLoading={isLoading}
                setMoviesList={setMoviesList}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isMoviesEnded={isMoviesEnded}
                setIsMoviesEnded={setIsMoviesEnded}
            />
        </Layout>
    )
}

export const getServerSideProps = async ({ locale, query }: any) => {
    const localBaseUrl = process.env.VERCEL_URL ?? 'http://localhost:3000'
    const deployBaseUrl = process.env.DEPLOY_API_URL

    // FILTERS
    const filtersRes = await fetch(`${localBaseUrl}/api/filters`)
    const filters = await filtersRes.json()
    const genresRes = await fetch(`${deployBaseUrl}/genres`)
    const genres = await genresRes.json()
    const allFilters = filters
    allFilters.genres = genres

    return {
        props: {
            allFilters,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'header', 'movies'])),
        },
    }
}

export default MoviesFilters
