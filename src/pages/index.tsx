import MainCarousel from '@/components/MainCarousel/MainCarousel'
import Promo from '@/components/Promo/Promo'
import MediumCarousel from '@/components/MediumCarousel/MediumCarousel'
import PromoButtons from '@/components/PromoButtons/PromoButtons'
import Head from 'next/head'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'
import MovieService from '@/services/MovieService'
import AppService from '@/services/AppService'
import mainCarouselMock from '@/data/mainCarousel.json'
import top10CarouselMock from '@/data/top10Movies.json'
import { Movies } from '@/types/Response/MoviesResponse'
import NavigationResponse from '@/types/Response/NavigationResponse'

interface Carousel {
    data: Movies[]
    name: string
    link: string
}

interface IHome {
    carousels: Carousel[]
    navigation: NavigationResponse
}

const Home: FC<IHome> = ({ carousels, navigation }) => {
    const { t } = useTranslation(['common'])

    return (
        <Layout navigation={navigation}>
            <Head>
                <title>
                    Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве
                </title>
            </Head>
            <MainCarousel data={mainCarouselMock.movies} />
            <PromoButtons />
            <Promo />
            <MediumCarousel data={top10CarouselMock.movies} />
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

    return {
        props: {
            carousels: [carousel1, carousel2, carousel3],
            navigation,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'promo', 'header'])),
        },
    }
}
