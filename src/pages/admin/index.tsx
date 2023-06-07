import AdminPanel from '@/components/admin/AdminPanel'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import AdminLayout from '@/components/admin/AdminLayout/AdminLayout'

export default function Admin() {
    return (
        <AdminLayout>
            <Layout>
                <Head>
                    <title>{'Админ панель'} </title>
                </Head>
                <AdminPanel />
            </Layout>
        </AdminLayout>
    )
}
