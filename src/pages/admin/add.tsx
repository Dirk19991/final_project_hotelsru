import AdminPanelAdd from '@/components/admin/AdminPanelAdd/AdminPanelAdd'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const AddPage = () => {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanelAdd />
        </Layout>
    )
}

export default AddPage
