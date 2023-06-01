import MoviesResponse from './MoviesResponse'
import { Person } from './PersonResponse'

export interface Country {
    nameEn: string
    nameRu: string
    shortName: string
}

export interface Genre {
    id: number
    nameRu: string
    nameEn: string
}

interface Movie {
    id: number
    nameEn: string
    nameRu: string
    description: string
    trailer: string
    similarMovies: MoviesResponse[]
    rating: string
    ratingCount: string
    year: string
    ageRating: string
    poster: string
    duration: string
    slogan: string
    actors: Person[]
    director: Person[]
    editor: Person[]
    composer: Person[]
    operator: Person[]
    producer: Person[]
    genres: Genre[]
    countries: Country[]
}

export default interface MovieResponse {
    movie: Movie
    errors: any[]
}
