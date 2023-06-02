import { IActor, IAdminPanelMovie } from '@/types/Component/IMovie'
import { Person } from '@/types/Response/PersonResponse'
import axios from 'axios'

const serverURL = process.env.DEPLOY_API_URL

interface GetActorResponse {
    person: IActor
    movies: {
        result: IAdminPanelMovie[]
    }
}

export default class PersonService {
    static getPersonByName = async (type: string, name: string) => {
        const response = await axios.get<Person[]>(
            `${serverURL}/persons/name/search?position=${type}&personName=${name}`
        )
        return response.data
    }
    static getPersonById = async (id: string) => {
        const response = await axios.get<GetActorResponse>(`${serverURL}/persons/${id}`)
        return response.data
    }
}
