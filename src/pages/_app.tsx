import '@/styles/globals.scss'
import '@/styles/vars.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { FC, useState } from 'react'
import AuthContext from '@/types/Component/Context'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

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
                <AuthContext.Provider value={{ isAuth, setIsAuth, isAdmin, setIsAdmin }}>
                    <Component {...pageProps} />
                </AuthContext.Provider>
            </>
        </>
    )
}

export default appWithTranslation(App)
