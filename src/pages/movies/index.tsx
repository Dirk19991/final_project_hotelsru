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
import Layout from '@/components/Layout/Layout'


const Movies: FC<any> = ({ dramas, comedies, yearFilter }) => {
    const { t } = useTranslation(['common'])

    const breadcrumbsData = [
        { id: 1, title: t('myIvi'), href: '/' },
        { id: 2, title: t('movies'), href: '/movies' },
    ]

    return (
        <Layout>
            <Head>
                <title>
                    Смотреть фильмы онлайн бесплатно в хорошем HD качестве и без
                    регистрации. Удобный просмотр онлайн фильмов на ivi.ru
                </title>
            </Head>
            <Breadcrumbs breadcrumbsData={breadcrumbsData} />
            <MoviesTitle />
            <Filters genres={[]} yearFilter={yearFilter} />

            <DefaultCarousel
                title={t('bestComedies')}
                link={'/movies/comedy'}
                dataList={dramas}
            />
            <DefaultCarousel
                title={t('bestDramas')}
                link={'/movies/drama'}
                dataList={comedies}
            />
        </Layout>
    )
}

export default Movies

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
    const baseURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

    const response = await fetch(`${baseURL}/api/movies-list`)
    const data = await response.json()

    const yearsFilterRes = await fetch(`${baseURL}/api/filters`)
    const yearFilter = await yearsFilterRes.json()

    return {
        props: {
            dramas: data,
            comedies: data,
            yearFilter: yearFilter.years,
            ...(await serverSideTranslations(locale as string, [
                'common',
                'footer',
                'header',
                'movies',
            ])),
        },
    }
}
