import '@/styles/globals.scss'
import '@/styles/vars.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { FC, useEffect, useState } from 'react'
import AuthService from '@/services/AuthService'
import { AuthContext } from '@/types/Component/Context'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const refresh = async () => await AuthService.checkAuth()
        if (localStorage.getItem('token')) {
            refresh()
        }
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="/icons/ivi-subscription-logo.png" />
            </Head>

            <>
                <style jsx global>{`
                    html {
                        font-family: ${openSans.style.fontFamily};
                    }
                `}</style>
                <AuthContext.Provider
                    value={{ isAuth: isAuth, setIsAuth: setIsAuth, isAdmin: isAdmin, setIsAdmin: setIsAdmin }}
                >
                    <Component {...pageProps} />
                </AuthContext.Provider>
            </>
        </>
    )
}

export default appWithTranslation(App)
