import { $api } from '@/lib/axios'
import MoviesResponse from '@/types/Response/MoviesResponse'
import MovieResponse from '@/types/Response/MovieResponse'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

export default class MovieService {
    static getMoviesList = async (genresQuery: string, queryObject: IQueryObject) => {
        const response = await $api.get<MoviesResponse>(`/movies/${genresQuery}`, {
            params: { ...queryObject },
        })
        return response.data.result
    }
    static getMovieById = async (id: string | string[] | undefined) => {
        const response = await $api.get<MovieResponse>(`/movie/${id}`)
        return response.data.movie
    }
    static getMoviesByQuery = async (query: string, name: string) => {
        const queryArray = query.split('?')
        const queryStr = query.split('?')[0] === 'all' ? `?${queryArray[1]}` : query
        const response = await $api.get<MoviesResponse>(`/movies/${queryStr}`)
        return {
            link: query,
            data: response.data.result,
            name,
        }
    }
}
