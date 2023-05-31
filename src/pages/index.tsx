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
    const { t } = useTranslation(['common'])

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
            <MediumCarousel data={top10Movies} />
            {carousels &&
                carousels.map((carousel: any, i: number) => {
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
    const mainCarouselMovies = await MovieService.getMainCarousel()
    const top10Movies = await MovieService.getTop10Movies()

    const carousel1 = await MovieService.getMoviesByQuery('all?rating=8?sort=rating', 'bestMovies')
    const carousel2 = await MovieService.getMoviesByQuery('action?years=1990-2000', 'action90s')
    const carousel3 = await MovieService.getMoviesByQuery('action?countries=ja', 'japanAction')

    return {
        props: {
            carousels: [carousel1, carousel2, carousel3],
            top10Movies,
            mainCarouselMovies,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'promo', 'header'])),
        },
    }
}
