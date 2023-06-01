import Layout from '@/components/Layout/Layout'
import Person, { GetActorResponse } from '@/components/Person/Person'
import MovieService from '@/services/MovieService'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface PersonPageProps {
    personData: GetActorResponse
    navigation?: any
}

const PersonPage = ({ personData, navigation }: PersonPageProps) => {
    return (
        <Layout navigation={navigation}>
            <Person personData={personData} />
        </Layout>
    )
}

export default PersonPage

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
    const navigation = await MovieService.getNavigation()
    const personData = await MovieService.getPersonById(params?.id as string)

    return {
        props: {
            personData,
            navigation,
            ...(await serverSideTranslations(locale as string, ['person', 'common', 'footer', 'header'])),
        },
    }
}
