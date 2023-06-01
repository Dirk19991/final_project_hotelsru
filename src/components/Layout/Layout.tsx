import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React, { ReactNode, FC } from 'react'
import { useRouter } from 'next/router'
import AlternativeHeader from '../AlternativeHeader/AlternativeHeader'
import NavigationResponse from '@/types/Response/NavigationResponse'

interface LayoutProps {
    children: ReactNode
    navigation?: NavigationResponse
}

const Layout: FC<LayoutProps> = ({ children, navigation }) => {
    const { asPath } = useRouter()
    const urls = ['/admin', '/authorization']

    return (
        <>
            {!urls.some((url) => asPath.includes(url)) && <Header navigation={navigation} />}
            {asPath === '/authorization' && <AlternativeHeader title={'Вход или регистрация'} />}
            {asPath.includes('/admin') && <AlternativeHeader title={'Админ-панель'} />}
            <main>{children}</main>
            {!urls.some((url) => asPath.includes(url)) && <Footer />}
        </>
    )
}

export default Layout
