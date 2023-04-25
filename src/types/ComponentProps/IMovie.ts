interface IGenreParam {
    id: number
    name: string
}

interface ICountryParam {
    id: number
    name: string
}

export interface IMovie {
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