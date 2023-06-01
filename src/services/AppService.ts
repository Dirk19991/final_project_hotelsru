import axios from 'axios'
import staticFilters from '@/data/filters.json'
import { Genre } from '@/types/Response/MovieResponse'
import NavigationResponse from '@/types/Response/NavigationResponse'

const serverURL = process.env.DEPLOY_API_URL

export default class AppService {
    static getFilters = async () => {
        const dynamicGenres = await axios.get<Genre[]>(`${serverURL}/genres`)
        const filters: any = staticFilters
        filters.genres = dynamicGenres.data
        return filters
    }
    static getNavigation = async () => {
        const response = await axios.get<NavigationResponse>(`${serverURL}/navigation`)
        return response.data
    }
}
