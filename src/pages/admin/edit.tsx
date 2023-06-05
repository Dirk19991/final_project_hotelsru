import AdminPanelEdit from '@/components/admin/AdminPanelEdit/AdminPanelEdit'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const EditPage = () => {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanelEdit />
        </Layout>
    )
}

export default EditPage
