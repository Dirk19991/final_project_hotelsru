import { FC } from 'react'
import { IMovie } from '@/types/ComponentProps/IMovie'
import styles from './FilmBreadcrumbs.module.scss'
import { useI18nContext } from '@/context/i18n'

interface IFilmBreadcrumbs {
    filmData: IMovie
}

const FilmBreadcrumbs: FC<IFilmBreadcrumbs> = ({ filmData }) => {
    const { language, i18n } = useI18nContext()

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
