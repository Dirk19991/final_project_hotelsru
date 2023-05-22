import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import '@/styles/vars.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { I18nProvider } from '@/context/i18n'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'

const openSans = Open_Sans({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://gambit-central.dfs.ivi.ru/dist/23.04.05_c1f11edb/storm/images/favicon/64.png"
                />
            </Head>

            <I18nProvider>
                <Layout>
                    <style jsx global>{`
                        html {
                            font-family: ${openSans.style.fontFamily};
                        }
                    `}</style>
                    <Component {...pageProps} />
                </Layout>
            </I18nProvider>
        </>
    )
}

export default appWithTranslation(App)
