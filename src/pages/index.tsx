import MainCarusel from '@/components/MainCarousel/MainCarousel'
import Promo from '@/components/Promo/Promo'
import MediumCarousel from '@/components/MediumCarousel/MediumCarousel'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'
import PromoButtons from '@/components/PromoButtons/PromoButtons'

export default function Home() {
    return (
        <>
            <MainCarusel />
            <PromoButtons />
            <Promo />
            <MediumCarousel />
            <SliderSmall
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2020"
                headerText="Лучшие комедии"
            />
            <SliderSmall
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        </>
    )
}
