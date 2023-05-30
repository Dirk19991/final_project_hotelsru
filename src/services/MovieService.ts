import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

interface INames {
    [x: string]: string
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
        const response = await axios.get(`${serverURL}/movies/${query}`)
        return {
            link: query,
            data: response.data.result,
            name
        }
    }
    static getTop10Movies = async () => {
        const response = await axios.get(`${localURL}/api/top-10`)
        return response.data.movies
    }
}
