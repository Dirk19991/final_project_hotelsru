import { Country, Genre } from './MovieResponse'

interface Years {
    id: number
    value: string
}

export default interface FiltersResponse {
    genres?: Genre[]
    years: Years[]
    countries: Country[]
}
