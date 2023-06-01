import axios from 'axios'
import staticFilters from '@/data/filters.json'
import staticHeader from '@/data/navigation.json'

const serverURL = process.env.DEPLOY_API_URL

export default class AppService {
    static getFilters = async () => {
        const dynamicGenres = await axios.get(`${serverURL}/genres`)
        const filters: any = staticFilters
        filters.genres = dynamicGenres.data
        return filters
    }
    static getNavigation = async () => {
        // const response = await axios.get(`${serverURL}/navigation`)
        // после апдейта навигейщена разкомментить
        // return response.data
        return staticHeader
    }
}
