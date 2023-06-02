import MoviesResponse from './MovieResponse'

export interface Person {
    personId: number
    nameRu: string
    nameEn: string
    photo: string
    description: string
    biography: string
}

export default interface PersonResponse {
    person: Person
    movies: MoviesResponse
}
