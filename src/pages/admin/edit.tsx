import AdminPanelFilm from '@/components/AdminPanelEdit/AdminPanelEdit'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'

const EditPage = () => {
    return (
        <Layout>
            <Head>
                <title>{'Админ панель'}</title>
            </Head>
            <AdminPanelFilm />
        </Layout>
    )
}

export default EditPage
