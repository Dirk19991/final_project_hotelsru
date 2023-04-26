import { FC } from 'react'
import { IMovie } from '@/types/ComponentProps/IMovie'
import styles from './FilmBreadcrumbs.module.scss'

interface IFilmBreadcrumbs {
    filmData: IMovie
}

const FilmBreadcrumbs: FC<IFilmBreadcrumbs> = ({ filmData }) => {
    const { genres, type } = filmData
    const mainGenre = genres.sort((a, b) => a.id - b.id)[0].name
    // переделать после появления i18n

    return (
        <div className={styles.breadcrumbs}>
            <div>{type}</div>
            <div>·</div>
            <div>{mainGenre}</div>
        </div>
    )
}
export default FilmBreadcrumbs
