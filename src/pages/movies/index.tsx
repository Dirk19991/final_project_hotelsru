import Filters from '@/components/filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { FC } from 'react'
import Head from 'next/head'
import 'swiper/scss'
import { GetStaticProps } from 'next'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/layout/Layout'
import MovieService from '@/services/MovieService'
import AppService from '@/services/AppService'
import { Movies } from '@/types/Response/MoviesResponse'
import NavigationResponse from '@/types/Response/NavigationResponse'
import FiltersResponse from '@/types/Response/FiltersResponse'

interface IMovies {
    carousels: Carousel[]
    navigation: NavigationResponse
    allFilters: FiltersResponse
}

interface Carousel {
    data: Movies[]
    name: string
    link: string
}

const Movies: FC<IMovies> = ({ carousels, allFilters, navigation }) => {
    const { t } = useTranslation(['common'])
    const breadcrumbsData = [
        { id: 1, title: t('myIvi'), href: '/' },
        { id: 2, title: t('movies'), href: '/movies' },
    ]

    return (
        <Layout navigation={navigation}>
            <Head>
                <title>
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без регистрации. Удобный просмотр онлайн
                    фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle isActive={false} />
            <Filters allFilters={allFilters} />

            {carousels &&
                carousels.map((carousel: Carousel, i: number) => {
                    if (carousel.data.length) {
                        return (
                            <DefaultCarousel
                                key={i}
                                title={t(`${carousel.name}`)}
                                link={`/movies/${carousel.link}`}
                                dataList={carousel.data}
                            />
                        )
                    }
                })}
        </Layout>
    )
}

export default Movies

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const navigation = await AppService.getNavigation()
    const allFilters = await AppService.getFilters()
    const carousel1 = await MovieService.getMoviesByQuery('all?years=2000-2010', 'remember00s')
    const carousel2 = await MovieService.getMoviesByQuery('comedy?countries=us', 'americanComedies')
    const carousel3 = await MovieService.getMoviesByQuery('sport', 'sportMovies')

    return {
        props: {
            carousels: [carousel1, carousel2, carousel3],
            allFilters: allFilters,
            navigation,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'header', 'movies'])),
        },
    }
}
