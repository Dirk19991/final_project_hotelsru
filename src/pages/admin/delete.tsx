import AdminPanelDelete from '@/components/AdminPanelDelete/AdminPanelDelete'
import Layout from '@/components/Layout/Layout'
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
