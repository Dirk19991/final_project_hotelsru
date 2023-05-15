import MainCarousel from '@/components/MainCarousel/MainCarousel'
import Promo from '@/components/Promo/Promo'
import MediumCarousel from '@/components/MediumCarousel/MediumCarousel'
import PromoButtons from '@/components/PromoButtons/PromoButtons'
import Head from 'next/head'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const Home: FC<any> = ({ dramas, comedies }) => {
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
                title={'Лучшие комедии'}
                link={'/movies/comedy'}
                dataList={dramas}
            />
            <DefaultCarousel
                title={'Лучшие комедии'}
                link={'/movies/comedy'}
                dataList={comedies}
            />
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const data = await response.json()

    return {
        props: { dramas: data, comedies: data },
    }
}
