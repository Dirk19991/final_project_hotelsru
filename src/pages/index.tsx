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

const Home: FC<any> = ({ dramas, comedies }) => {
    const { t } = useTranslation(['common'])

    return (
        <>
            <Head>
                <title>
                    Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы
                    смотреть онлайн бесплатно в хорошем качестве
                </title>
            </Head>
            <MainCarousel />
            <PromoButtons />
            <Promo />
            <MediumCarousel />

            <DefaultCarousel
                title={t("bestDramas")}
                link={'/movies/drama'}
                dataList={dramas}
            />
            <DefaultCarousel
                title={t("bestComedies")}
                link={'/movies/comedy'}
                dataList={comedies}
            />
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const data = await response.json()

    return {
        props: {
            dramas: data,
            comedies: data,
            ...(await serverSideTranslations(locale, ['common', 'footer'])),
        },
    }
}
