import AdminPanel from '@/components/admin/AdminPanel'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'

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
