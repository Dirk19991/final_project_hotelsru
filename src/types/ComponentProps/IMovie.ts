interface IGenreParam {
    id: number
    name: string
}

interface ICountryParam {
    id: number
    name: string
}

interface IPerson {
enName: string,
id: number,
name: string,
photo: string
}

interface ISimilarMovie {
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
    nameEN: string
    nameRU: string
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