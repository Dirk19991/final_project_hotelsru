import Layout from '@/components/Layout/Layout'
import Person, { GetActorResponse } from '@/components/Person/Person'
import MovieService from '@/services/MovieService'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

interface PersonPageProps {
    personData: GetActorResponse
}

const PersonPage = ({ personData }: PersonPageProps) => {
    return (
        <Layout>
            <Person personData={personData} />
        </Layout>
    )
}

export default PersonPage

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    let personData = null
    try {
        personData = await MovieService.getPersonById(params?.personID as string)
    } catch (err) {}

    return {
        props: {
            personData,
            ...(await serverSideTranslations(locale as string, ['person', 'common', 'footer', 'header'])),
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    personID: '1',
                },
            },
        ],

        fallback: true,
    }
}
