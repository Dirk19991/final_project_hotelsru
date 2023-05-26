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

const Home: FC<any> = ({ dramas, comedies, mainCarouselMovies }) => {
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
            <MediumCarousel />
            <DefaultCarousel
                title={t('bestDramas')}
                link={'/movies/drama'}
                dataList={dramas}
            />
            <DefaultCarousel
                title={t('bestComedies')}
                link={'/movies/comedy'}
                dataList={comedies}
            />
        </Layout>

    )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const MainCarouselRes = await fetch(`${baseURL}/api/main-carousel`)
    const mainCarouselMovies = await MainCarouselRes.json()

    const moviesListRes = await fetch(`${baseURL}/api/movies-list`)
    const mockMovies = await moviesListRes.json()

    return {
        props: {
            dramas: mockMovies,
            comedies: mockMovies,
            mainCarouselMovies,
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'promo', 'header'])),
        },
    }
}
