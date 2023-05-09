import { IGenresResponse } from '@/types/Response/IHeaderStaticLinks'
import engNameToLink from '@/util/engNameToLink'

const baseurl = process.env.DOCKER_API_URL

export default class MovieService {
    static async getHeaderLinks() {
        try {
            const linksResponse = await fetch('/api/navigation')
            const genresResponse = await fetch(baseurl + `/genres`)

            if (genresResponse.status !== 200) {
                return linksResponse.json()
            }

            const links = await linksResponse.json()
            const genres = await genresResponse.json()

            const dynamicGenres = genres
                .slice(0, 22)
                .map((genre: IGenresResponse) => {
                    const name = engNameToLink(genre.nameEn)
                    const link = `/movies/${name}`

                    return { ...genre, link }
                })

            links.movies_categories.genre = dynamicGenres

            return links
        } catch (err) {
            console.log(err)
        }
    }
}
