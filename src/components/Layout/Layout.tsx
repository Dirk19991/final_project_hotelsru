import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import AlternativeHeader from '../AlternativeHeader/AlternativeHeader'
interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const { asPath } = useRouter()
    const urls = ['/admin', '/authorization']

    return (
        <>
            {!urls.includes(asPath) && <Header />}
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
