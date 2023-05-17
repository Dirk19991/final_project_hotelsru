import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { useI18nContext } from '@/context/i18n'
import { FC } from 'react'
import Head from 'next/head'
import 'swiper/scss'
import { GetStaticProps } from 'next'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'

const Movies: FC<any> = ({ dramas, comedies }) => {
    const { i18n, language } = useI18nContext()

    const breadcrumbsData = [
        { id: 1, title: i18n[language].myIvi, href: '/' },
        { id: 2, title: i18n[language].movies, href: '/movies' },
    ]

    return (
        <>
            <Head>
                <title>
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без
                    регистрации. Удобный просмотр онлайн фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle />
            <Filters genres={[]} />

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

export default Movies

export const getStaticProps: GetStaticProps = async () => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const data = await response.json()

    return {
        props: { dramas: data, comedies: data },
    }
}
