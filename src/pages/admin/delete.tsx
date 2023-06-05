import AdminPanelDelete from '@/components/admin/AdminPanelDelete/AdminPanelDelete'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const DeletePage = () => {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanelDelete />
        </Layout>
    )
}

export default DeletePage
