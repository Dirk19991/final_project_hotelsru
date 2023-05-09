import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AlternativeHeader from '../AlternativeHeader/AlternativeHeader'
import MovieService from '@/services/MovieService'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const { asPath } = useRouter()
    const urls = ['/admin', '/authorization']
    const [headerData, setHeaderData] = useState<any>([])

    useEffect(() => {
        const fetchHeaderData = async () => {
            const res = await MovieService.getHeaderLinks()
            setHeaderData(res)
        }

        fetchHeaderData()
    }, [])

    return (
        <>
            {!urls.includes(asPath) && <Header headerData={headerData} />}
            {asPath === '/authorization' && (
                <AlternativeHeader title={'Вход или регистрация'} />
            )}
            {asPath === '/admin' && (
                <AlternativeHeader title={'Админ-панель'} />
            )}
            <main>{children}</main>
            {!urls.includes(asPath) && <Footer />}
        </>
    )
}
