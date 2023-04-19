import MainCarusel from '@/components/MainCarusel/MainCarusel'
import TopTen from '@/components/TopTen/TopTen'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'

export default function Home() {
    return (
        <>
            <MainCarusel />
            {/* <section>большой баннер с фильмами</section>  */}
            {/* <section>Ряды с плейлистами фильмов</section> */}
            <TopTen />
            <SliderSmall
                endpoint="http://localhost:3001/movies?year=2020"
                headerText="Лучшие комедии"
            />
            <SliderSmall
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        </>
    )
}
