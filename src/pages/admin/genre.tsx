import AdminPanelGenre from '@/components/AdminPanelGenre/AdminPanelGenre'
import Layout from '@/components/Layout/Layout'
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
