import Head from 'next/head'
import AuthorizationForm from '@/components/AuthorizationForm/AuthorizationForm'
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
