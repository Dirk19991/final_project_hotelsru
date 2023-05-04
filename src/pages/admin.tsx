import AdminPanel from '@/components/AdminPanel/AdminPanel'
import Head from 'next/head'

export default function Admin() {
    return (
        <>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanel />
        </>
    )
}
