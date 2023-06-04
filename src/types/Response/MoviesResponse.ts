import { Country, Genre } from './MovieResponse'

export interface Movies {
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

export interface Top10Movie {
    id: number
    image: string
    titleImg: string
    link: string
}

export interface MainCarouselMovie {
    id: number
    img: string
    textRU: string
    textEN: string
    titleImg: string
    link: string
}
