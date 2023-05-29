import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
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
    static getDefaultCarouselMovies = async (queryString: string) => {
        const response = await axios.get(`${serverURL}/movies/${queryString}`)
        return response.data.result
    }
    static getMovieById = async (id: string | string[] | undefined) => {
        const response = await axios.get(`${serverURL}/movie/${id}`)
        return response.data.movie
    }
    static getMainCarousel = async () => {
        const response = await fetch(`${localURL}/api/main-carousel`)
        const data = await response.json()
        return data
    }
}
