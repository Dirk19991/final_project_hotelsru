import Head from 'next/head'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Filters from '@/components/Filters/Filters'
import MoviesHead from '@/components/MoviesHead/MoviesHead'

export default function Movies() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны бесплатные фильмы без регистрации на любой вкус: сериалы, фильмы, мультфильмы и многое другое."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="https://gambit-parent.dfs.ivi.ru/static/23.04.02/images/favicon/64.png"
                />
                <title>
                    Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы
                    смотреть онлайн бесплатно в хорошем качестве
                </title>
            </Head>
            <Header />
            <main>
                <MoviesHead />
                <Filters />
            </main>
            <Footer />
        </>
    )
}
