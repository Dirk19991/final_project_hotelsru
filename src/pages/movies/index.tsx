import Filters from '@/components/Filters/Filters'
import MoviesTitle from '@/components/MoviesTitle/MoviesTitle'
import Breadcrumbs from '@/components/Breakcrumbs/Breadcrumbs'
import { FC } from 'react'
import Head from 'next/head'
import 'swiper/scss'
import { GetStaticProps } from 'next'
import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Movies: FC<any> = ({ dramas, comedies }) => {
    const { t } = useTranslation(['common'])

    const breadcrumbsData = [
        { id: 1, title: t('myIvi'), href: '/' },
        { id: 2, title: t('movies'), href: '/movies' },
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

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const data = await response.json()

    return {
        props: {
            dramas: data,
            comedies: data,
            ...(await serverSideTranslations(locale as string, [
                'common',
                'footer',
                'header',
                'movies',
            ])),
        },
    }
}
