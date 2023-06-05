import AdminPanelGenre from '@/components/admin/AdminPanelGenre/AdminPanelGenre'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'

const GenrePage = () => {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanelGenre />
        </Layout>
    )
}

export default GenrePage
