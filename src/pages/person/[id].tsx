import Layout from '@/components/Layout/Layout'
import Person, { GetActorResponse } from '@/components/Person/Person'
import MovieService from '@/services/MovieService'
import PersonService from '@/services/PersonService'
import AppService from '@/services/AppService'
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
    const navigation = await AppService.getNavigation()
    const personData = await PersonService.getPersonById(params?.id as string)

    return {
        props: {
            personData,
            navigation,
            ...(await serverSideTranslations(locale as string, ['person', 'common', 'footer', 'header'])),
        },
    }
}
