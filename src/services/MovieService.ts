import $api from '../http'
import { IMovie } from '@/types/ComponentProps/IMovie'

export default class MovieService {
    static async getAllMovies() {
        return $api.get<IMovie[]>(`/movies`)
    }
    static async getMovieById(id: number) {
        return $api.get<IMovie>(`/movies/${id}`)
    }
    static async getAllGenres() {
        return $api.get(`/genres`)
    }
}
