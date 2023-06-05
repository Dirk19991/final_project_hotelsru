import { IActor, IAdminPanelMovie } from '@/types/Component/IMovie'
import { Person } from '@/types/Response/PersonResponse'
import { $api } from '@/lib/axios'

interface GetActorResponse {
    person: IActor
    movies: {
        result: IAdminPanelMovie[]
    }
}

export default class PersonService {
    static getPersonByName = async (position: string, name: string) => {
        const response = await $api.get<Person[]>(`/persons/name/search?position=${position}&personName=${name}`)
        return response.data
    }
    static getPersonById = async (id: string) => {
        const response = await $api.get<GetActorResponse>(`/persons/${id}`)
        return response.data
    }
}
