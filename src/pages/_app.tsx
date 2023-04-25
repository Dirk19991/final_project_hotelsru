import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import '@/styles/vars.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { I18nProvider } from '@/context/i18n'
import Head from 'next/head'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <I18nProvider>
                <Layout>
                    <style jsx global>{`
                        html {
                            font-family: ${roboto.style.fontFamily};
                        }
                    `}</style>
                    <Component {...pageProps} />
                </Layout>
            </I18nProvider>
        </>
    )
}
