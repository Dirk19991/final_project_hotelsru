import { $api } from '@/lib/axios'
import staticFilters from '@/data/filters.json'
import { Genre } from '@/types/Response/MovieResponse'
import NavigationResponse from '@/types/Response/NavigationResponse'

export default class AppService {
    static getFilters = async () => {
        const dynamicGenres = await $api.get<Genre[]>(`/genres`)
        const filters: any = staticFilters
        filters.genres = dynamicGenres.data
        return filters
    }
    static getNavigation = async () => {
        const response = await $api.get<NavigationResponse>(`/navigation`)
        return response.data
    }
}
