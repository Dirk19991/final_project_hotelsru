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

const Home: FC<any> = ({ carousels, mainCarouselMovies, top10Movies }) => {
    const { i18n } = useTranslation(['common'])

    return (
        <Layout>
            <Head>
                <title>
                    Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве
                </title>
            </Head>
            <MainCarousel data={mainCarouselMovies} />
            <PromoButtons />
            <Promo />
            <MediumCarousel />
            {carousels &&
                carousels.map((carousel: any, i: number) => {
                    const name = i18n.language === 'ru' ? carousel.names.nameRu : carousel.names.nameEn
                    return (
                        <DefaultCarousel
                            key={i}
                            title={name}
                            link={`/movies/${carousel.link}`}
                            dataList={carousel.data}
                        />
                    )
                })}
        </Layout>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const mainCarouselMovies = await MovieService.getMainCarousel()

    const carousel1 = await MovieService.getMoviesByQuery('drama', { nameEn: 'Best dramas', nameRu: 'Лучшие драмы' })
    const carousel2 = await MovieService.getMoviesByQuery('drama', { nameEn: 'Best dramas', nameRu: 'Лучшие драмы' })
    // const carousel3 = await MovieService.getMoviesByQuery('drama', { nameEn: 'Best dramas', nameRu: 'Лучшие драмы' })
    // const carousel4 = await MovieService.getMoviesByQuery('drama', { nameEn: 'Best dramas', nameRu: 'Лучшие драмы' })

    return {
        props: {
            carousels: [carousel1, carousel2],
            mainCarouselMovies,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'promo', 'header'])),
        },
    }
}
