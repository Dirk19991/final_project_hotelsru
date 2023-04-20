import Filters from '@/components/Filters/Filters'
import MoviesHead from '@/components/MoviesHead/MoviesHead'
import MoviesList from '@/components/MoviesList/MoviesList'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'
import { useState } from 'react'

export default function Movies() {
    const [filterGenre, setFilterGenre] = useState<number | null>(null)
    const [filterCountry, setFilterCountry] = useState<number | null>(null)
    return (
        <>
            <MoviesHead />
            <Filters
                setFilterGenre={setFilterGenre}
                setFilterCountry={setFilterCountry}
                filterCountry={filterCountry}
                filterGenre={filterGenre}
            />
            {filterGenre || filterCountry ? (
                <MoviesList filterGenre={filterGenre} filterCountry={filterCountry}/>
            ) : (
                <SliderSmall
                    endpoint="http://localhost:3001/movies?year=2021"
                    headerText="Остросюжетные боевики"
                />
            )}
        </>
    )
}
