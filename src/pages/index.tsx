import MainCarousel from '@/components/MainCarousel/MainCarousel'
import Promo from '@/components/Promo/Promo'
import MediumCarousel from '@/components/MediumCarousel/MediumCarousel'
import PromoButtons from '@/components/PromoButtons/PromoButtons'
import Head from 'next/head'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const Home: FC<any> = ({ dramas }) => {

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
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2020"
                headerText="Лучшие комедии"
            />
            <DefaultCarousel
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const dramas = await response.json()

    return {
        props: { dramas },
    }
}
