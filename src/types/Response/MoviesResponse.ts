import { Country, Genre } from './MovieResponse'

interface Movies {
    id: number
    nameEn: string
    nameRu: string
    poster: string
    rating: string
    ratingCount: string
    year: string
    genres: Genre[]
    countries: Country[]
    duration: string
}

export default interface MoviesResponse {
    result: Movies[]
    amount: number
}
