import AdminLayout from '@/components/admin/AdminLayout/AdminLayout'
import AdminPanelEdit from '@/components/admin/AdminPanelEdit/AdminPanelEdit'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const EditPage = () => {
    return (
        <AdminLayout>
            <Layout>
                <Head>
                    <title>{'Админ панель'}</title>
                </Head>
                <AdminPanelEdit />
            </Layout>
        </AdminLayout>
    )
}

export default EditPage
