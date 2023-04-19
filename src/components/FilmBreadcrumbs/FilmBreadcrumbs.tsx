import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import styles from './FilmBreadcrumbs.module.scss'

interface IFilmBreadcrumbs {
    filmData: IMoviesData
}

const FilmBreadcrumbs = ({ filmData }: IFilmBreadcrumbs) => {
    const { genre, type } = filmData
    const mainGenre = genre.sort((a, b) => a.id - b.id)[0].name
    // переделать после появления i18n
    const filmType = type === 'movie' ? 'Фильмы' : 'Телесериалы'

    return (
        <div className={styles.breadcrumbs}>
            <div>{filmType}</div>
            <div>·</div>
            <div>{mainGenre}</div>
        </div>
    )
}
export default FilmBreadcrumbs
