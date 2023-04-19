import MainCarusel from '@/components/MainCarusel/MainCarusel'
import Promo from '@/components/Promo/Promo'
import TopTen from '@/components/TopTen/TopTen'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'

export default function Home() {
    return (
        <>
            <MainCarusel />
            <Promo />
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
