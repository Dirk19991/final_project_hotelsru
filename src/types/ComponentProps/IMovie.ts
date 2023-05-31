interface IGenreParam {
    id: number
    name: string
}

interface ICountryParam {
    id: number
    name: string
}

export interface IPersonMovie {
    description: string
    director: string
    id: number
    name: string
    poster: string
    previewPoster: string
    rating: string
    slogan: null | string
    type: string
    year: number
}

export interface IPerson {
    description: string
    enName: string
    id: number
    name: string
    photo: string
    movies: IPersonMovie[]
}

export interface ISimilarMovie {
    Movie_description: string
    Movie_director: string
    Movie_id: number
    Movie_name: string
    Movie_poster: string
    Movie_previewPoster: string
    Movie_rating: string
    Movie_slogan: string | null
    Movie_type: string
    Movie_year: number
}

export interface IMovie {
    actors: IPerson[]
    cineatographer: IPerson[]
    composer: IPerson[]
    description: string
    director: IPerson[]
    duration: number
    endYear: number | null
    genres: IGenreParam[]
    id: number
    nameEn: string
    nameRu: string
    poster: string
    previewPoster: string
    producer: IPerson[]
    rating: string
    ratingCount: number
    screenwriter: IPerson[]
    similarMovies: ISimilarMovie[]
    slogan: null | string
    startYear: number
    type: string
    trailer: string
    year: number
}

export interface ISmallSliderMovie {
    id: number
    name: string
    type: string
    rating: string
    description: string
    slogan: null | string
    poster: string
    previewPoster: string
    year: number
    director: string
    genre: IGenreParam[]
    country: ICountryParam[]
}

export interface IAdminPanelMovie {
    actors: IActor[]
    ageRating: string
    countries: ICountry[]
    description: string
    director: IActor[]
    duration: string
    editor: IActor[]
    genres: IGenre[]
    id: number
    nameEn: string
    nameRu: string
    operator: IActor[]
    personId: number
    poster: string
    producer: IActor[]
    rating: string
    ratingCount: string
    similarMovies: {
        countries: ICountry[]
        duration: string
        genres: IGenre[]
        id: number
        nameEn: string
        nameRu: string
        poster: string
        rating: string
        ratingCount: string
        year: string
    }[]
    slogan: string
    trailer: string
    year: string
}

export interface IAdminPanelData {
    errors: any[]
    movie: IAdminPanelMovie
}

export interface IGenre {
    id: number
    nameEn: string
    nameRu: string
}

export interface ICountry {
    nameEn: string
    nameRu: string
    shortName: string
}

export interface IActor {
    biography: string
    description: string
    nameEn: string
    nameRu: string
    personId: 1
    photo: string
}
