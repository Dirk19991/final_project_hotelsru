import axios from 'axios'

interface IQueryObject {
    [x: string]: string | string[] | undefined
}

export default class MovieService {
    static getMoviesList = async (genresQuery: string, queryObject: IQueryObject) => {
        const response = await axios.get(`${process.env.DEPLOY_API_URL}/movies/${genresQuery}`, {
            params: { ...queryObject },
        })
        return response.data.result
    }
    static getDefaultCarouselMovies = async (queryString: string) => {
        const response = await axios.get(`${process.env.DEPLOY_API_URL}/movies/${queryString}`)
        return response.data.result
    }
}
