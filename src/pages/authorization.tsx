import Head from 'next/head'
import AuthorizationForm from '@/components/AuthorizationForm/AuthorizationForm'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Authorization() {
    return (
        <>
            <Head>
                <title>Вход или регистрация</title>
            </Head>
            <AuthorizationForm />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['auth'])),
        },
    }
}
