import '@/styles/globals.scss'
import '@/styles/vars.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { FC, useEffect } from 'react'
import AuthService from '@/services/AuthService'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        AuthService.checkAuth()
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://gambit-central.dfs.ivi.ru/dist/23.04.05_c1f11edb/storm/images/favicon/64.png"
                />
            </Head>

            <>
                <style jsx global>{`
                    html {
                        font-family: ${openSans.style.fontFamily};
                    }
                `}</style>
                <Component {...pageProps} />
            </>
        </>
    )
}

export default appWithTranslation(App)
