import AdminLayout from '@/components/admin/AdminLayout/AdminLayout'
import AdminPanelGenre from '@/components/admin/AdminPanelGenre/AdminPanelGenre'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const GenrePage = () => {
    return (
        <AdminLayout>
            <Layout>
                <Head>
                    <title>{'Админ панель'}</title>
                </Head>
                <AdminPanelGenre />
            </Layout>
        </AdminLayout>
    )
}

export default GenrePage
