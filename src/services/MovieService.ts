import { IGenresResponse } from '@/types/Response/IHeaderStaticLinks'

const baseurl = process.env.DOCKER_API_URL

const engNameToLink = (engName: string) => {
    let name = engName

    if (name.match(/\s/)) {
        return name.toLowerCase().split(' ').join('-')
    }

    return (name = name.toLowerCase())
}

export default class MovieService {
    static async getHeaderLinks() {
        try {
            const linksResponse = await fetch('/api/navigation')
            const genresResponse = await fetch(baseurl + `/genres`)

            if (!genresResponse.ok) {
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
