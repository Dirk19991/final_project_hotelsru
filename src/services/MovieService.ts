import { IActor, IAdminPanelMovie } from '@/types/Component/IMovie'
import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

interface GetActorResponse {
    person: IActor
    movies: {
        result: IAdminPanelMovie[]
    }
}

const serverURL = process.env.DEPLOY_API_URL

export default class MovieService {
    static getMoviesList = async (genresQuery: string, queryObject: IQueryObject) => {
        const response = await axios.get(`${serverURL}/movies/${genresQuery}`, {
            params: { ...queryObject },
        })
        return response.data.result
    }
    static getMovieById = async (id: string | string[] | undefined) => {
        const response = await axios.get(`${serverURL}/movie/${id}`)
        return response.data.movie
    }
    static getMoviesByQuery = async (query: string, name: string) => {
        const queryArray = query.split('?')
        const queryStr = query.split('?')[0] === 'all' ? `?${queryArray[1]}` : query
        const response = await axios.get(`${serverURL}/movies/${queryStr}`)
        return {
            link: query,
            data: response.data.result,
            name,
        }
    }
}
