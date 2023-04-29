import Head from 'next/head'
import AuthorizationForm from '@/components/AuthorizationForm/AuthorizationForm'

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
