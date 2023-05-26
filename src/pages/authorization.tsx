import Head from 'next/head'
import AuthorizationForm from '@/components/AuthorizationForm/AuthorizationForm'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/Layout/Layout'


export default function Authorization() {
    return (
        <Layout>
            <Head>
                <title>Вход или регистрация</title>
            </Head>
            <AuthorizationForm />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['auth'])),
        },
    }
}
