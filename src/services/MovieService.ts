import { IActor, IAdminPanelMovie } from '@/types/ComponentProps/IMovie'
import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

interface INames {
    [x: string]: string
}

interface GetActorResponse {
    person: IActor
    movies: {
        result: IAdminPanelMovie[]
    }
}

const serverURL = process.env.DEPLOY_API_URL
const localURL = process.env.VERCEL_URL ?? 'http://localhost:3000'

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
    static getMainCarousel = async () => {
        const response = await axios.get(`${localURL}/api/main-carousel`)
        return response.data
    }
    static getMoviesFilters = async () => {
        const localFilters = await axios.get(`${localURL}/api/filters`)
        const dynamicGenres = await axios.get(`${serverURL}/genres`)
        const filters = localFilters.data
        filters.genres = dynamicGenres.data
        return filters
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
    static getTop10Movies = async () => {
        const response = await axios.get(`${localURL}/api/top-10`)
        return response.data.movies
    }
    static getPersonByName = async (type: string, name: string) => {
        const response = await axios.get(`${serverURL}/persons/name/search?position=${type}&personName=${name}`)
        return response.data
    }
    static getPersonById = async (id: string) => {
        const response = await axios.get<GetActorResponse>(`${serverURL}/persons/${id}`)
        return response.data
    }
}
