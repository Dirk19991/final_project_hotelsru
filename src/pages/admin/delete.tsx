import AdminLayout from '@/components/admin/AdminLayout/AdminLayout'
import AdminPanelDelete from '@/components/admin/AdminPanelDelete/AdminPanelDelete'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const DeletePage = () => {
    return (
        <AdminLayout>
            <Layout>
                <Head>
                    <title>{'Админ панель'}</title>
                </Head>
                <AdminPanelDelete />
            </Layout>
        </AdminLayout>
    )
}

export default DeletePage
