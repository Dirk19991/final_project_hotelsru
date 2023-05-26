import AdminPanel from '@/components/AdminPanel/AdminPanel'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'

export default function Admin() {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanel />
        </Layout>
    )
}
