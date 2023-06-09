import MainCarousel from '@/components/carousels/MainCarousel/MainCarousel'
import Promo from '@/components/promoMain/Promo/Promo'
import MediumCarousel from '@/components/carousels/MediumCarousel/MediumCarousel'
import PromoButtons from '@/components/promoMain/PromoButtons/PromoButtons'
import Head from 'next/head'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/layout/Layout'
import MovieService from '@/services/MovieService'
import AppService from '@/services/AppService'
import mainCarouselMock from '@/data/mainCarousel.json'
import top10CarouselMock from '@/data/top10Movies.json'
import { Movies, MainCarouselMovie, Top10Movie } from '@/types/Response/MoviesResponse'
import NavigationResponse from '@/types/Response/NavigationResponse'

interface Carousel {
    data: Movies[]
    name: string
    link: string
}

interface IHome {
    carousels: Carousel[]
    navigation: NavigationResponse
    mainCarousel: MainCarouselMovie[]
    top10Carousel: Top10Movie[]
}

const Home: FC<IHome> = ({ carousels, navigation, mainCarousel, top10Carousel }) => {
    const { t } = useTranslation(['common'])

    return (
        <Layout navigation={navigation}>
            <Head>
                <title>
                    Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве
                </title>
            </Head>
            <MainCarousel data={mainCarousel} />
            <PromoButtons />
            <Promo />
            <MediumCarousel data={top10Carousel} />
            {carousels &&
                carousels.map((carousel: Carousel, i: number) => {
                    if (carousel.data?.length) {
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

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const navigation = await AppService.getNavigation()
    const carousel1 = await MovieService.getMoviesByQuery('all', 'bestMovies')
    const carousel2 = await MovieService.getMoviesByQuery('action?years=1990-2000', 'action90s')
    const carousel3 = await MovieService.getMoviesByQuery('action?countries=ja', 'japanAction')
    const mainCarousel = mainCarouselMock.movies
    const top10Carousel = top10CarouselMock.movies

    return {
        props: {
            carousels: [carousel1, carousel2, carousel3],
            mainCarousel,
            top10Carousel,
            navigation,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'promo', 'header'])),
        },
    }
}
