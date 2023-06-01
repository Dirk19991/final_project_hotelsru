import Layout from '@/components/Layout/Layout'
import Person, { GetActorResponse } from '@/components/Person/Person'
import MovieService from '@/services/MovieService'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
    const personData = await MovieService.getPersonById(params?.id as string)

    return {
        props: {
            personData,
            ...(await serverSideTranslations(locale as string, ['person', 'common', 'footer', 'header'])),
        },
    }
}
