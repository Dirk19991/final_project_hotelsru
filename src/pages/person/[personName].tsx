import Person from '@/components/Person/Person'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PersonPage = () => {
    return <Person />
}

export default PersonPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                'person',
                'common',
                'footer',
                'header',
            ])),
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    personName: '1',
                },
            },
        ],

        fallback: true,
    }
}
