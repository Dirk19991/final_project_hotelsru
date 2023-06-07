import AdminLayout from '@/components/admin/AdminLayout/AdminLayout'
import AdminPanelAdd from '@/components/admin/AdminPanelAdd/AdminPanelAdd'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const AddPage = () => {
    return (
        <AdminLayout>
            <Layout>
                <Head>
                    <title>{'Админ панель'}</title>
                </Head>
                <AdminPanelAdd />
            </Layout>
        </AdminLayout>
    )
}

export default AddPage
