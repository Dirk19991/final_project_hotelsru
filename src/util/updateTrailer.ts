import { IAdminPanelMovie } from '@/types/Component/IMovie'

export default function updateTrailer(movieData: IAdminPanelMovie) {
    function youtube_parser(url: string) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        return match && match[7].length == 11 ? match[7] : false
    }

    const trailer = movieData.trailer

    if (!trailer.includes('youtu') || trailer.includes('embed')) {
        return movieData
    } else {
        const id = youtube_parser(trailer)
        if (id) {
            return {
                ...movieData,
                trailer: `https://www.youtube.com/embed/${id}`,
            }
        }
    }
    return movieData
}
