import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React, { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
            <main>{children}</main>
            <Footer />
        </>
    )
}
