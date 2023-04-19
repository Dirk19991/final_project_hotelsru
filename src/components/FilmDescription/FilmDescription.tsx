import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import styles from './FilmDescription.module.scss'

interface IFilmDescription {
    filmData: IMoviesData
}

const FilmDescription = ({ filmData }: IFilmDescription) => {
    const { name, year, type } = filmData
    const filmType = type === 'movie' ? 'Фильм' : 'Телесериал'
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.name}>
                {name} ({filmType} {year})
            </h2>
        </div>
    )
}
export default FilmDescription
