import Head from 'next/head'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BottomMenu from '@/components/BottomMenu/BottomMenu'
import MainCarusel from '@/components/MainCarusel/MainCarusel'
import TopTen from '@/components/TopTen/TopTen'

export default function Home() {
    return (
        <>
            <MainCarusel />
            Homepage
            {/* <section>большой баннер с фильмами</section>  */}
            {/* <section>Ряды с плейлистами фильмов</section> */}
            <TopTen />
        </>
    )
}
