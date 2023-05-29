import AdminPanelAdd from '@/components/AdminPanelAdd/AdminPanelAdd'
import Layout from '@/components/Layout/Layout'
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
