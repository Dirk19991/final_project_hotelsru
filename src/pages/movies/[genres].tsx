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
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'

const MoviesFilters: FC<any> = ({ allFilters }) => {
    const [moviesList, setMoviesList] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentSorting, setCurrentSorting] = useState<string>('byRating')
    const { t, i18n } = useTranslation(['common'])
    const { query, locale } = useRouter()
    const queryPage = !query.page ? '1' : String(query.page)
    const [currentPage, setCurrentPage] = useState<string>(queryPage)
    const [isMoviesEnded, setIsMoviesEnded] = useState<boolean>(false)

    const genresQuery = allFilters.genres.filter((el: any) =>
        String(query.genres).split('+').includes(el.nameEn.toLowerCase())
    )
    const countriesQuery = allFilters.countries.filter((el: any) =>
        String(query.countries).split(' ').includes(el.shortName)
    )
    const genresString =
        query.genres === 'all'
            ? t('movies').toLowerCase()
            : genresQuery
                  .map(({ nameEn, nameRu }: any) =>
                      i18n.language === 'ru' ? nameRu.toLowerCase() : nameEn.toLowerCase()
                  )
                  .join(', ')

    const breadcrumbsBase = [
        { title: t('myIvi'), href: '/' },
        { title: t('movies'), href: '/movies' },
    ]

    const [dynamicBreadcrumbs, setDynamicBreadcrumbs] = useState<any>([])

    useEffect(() => {
        setDynamicBreadcrumbs([])

        if (genresQuery.length) {
            setDynamicBreadcrumbs((state: any) => [{ links: genresQuery }, ...state])
        }
        if (!genresQuery.length && countriesQuery.length) {
            setDynamicBreadcrumbs((state: any) => [{ links: countriesQuery }, ...state])
        }

        if (query.years) {
            setDynamicBreadcrumbs((state: any) => [
                ...state,
                { title: query.years, href: `/movies/all?years=${query.years}` },
            ])
        }
    }, [query.genres, query.countries, query.years])

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
                    {t('watch')} {genresString} {t('watchMetaHead')}
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={[...breadcrumbsBase, ...dynamicBreadcrumbs]} />
            <MoviesTitle isActive={true} genresValue={genresQuery} countriesValue={countriesQuery} />
            <SortingPanel setCurrentSorting={setCurrentSorting} currentSorting={currentSorting} />
            <Filters allFilters={allFilters} genresValue={genresQuery} countriesValue={countriesQuery} />
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
