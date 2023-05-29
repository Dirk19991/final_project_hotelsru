import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

const baseUrl = process.env.DEPLOY_API_URL

export default class MovieService {
    static getMoviesList = async (genresQuery: string, queryObject: IQueryObject) => {
        const response = await axios.get(`${baseUrl}/movies/${genresQuery}`, {
            params: { ...queryObject },
        })
        return response.data.result
    }
    static getDefaultCarouselMovies = async (queryString: string) => {
        const response = await axios.get(`${baseUrl}/movies/${queryString}`)
        return response.data.result
    }
    static getMovieById = async (id: string | string[] | undefined) => {
        const response = await axios.get(`${baseUrl}/movie/${id}`)
        return response.data.movie
    }
}
