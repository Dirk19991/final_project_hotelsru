import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { IMovie } from '@/types/ComponentProps/IMovie'
import styles from './FilmTrailer.module.scss'

interface IFilmTrailer {
    filmData: IMovie
}

const FilmTrailer = ({ filmData }: IFilmTrailer) => {
    const id = filmData.trailer.split('/').at(-1)

    return (
        <div className={styles.wrapper}>
            <div className={styles.trailer}>
                <iframe
                    width="720"
                    height="405"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className={styles.icons}>
                <ButtonFooter
                    height={20}
                    href="/"
                    label="Трейлер"
                    onClick={() => {}}
                    src="/icons/play.svg"
                    type="grey"
                    width={20}
                />

                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/bookmark.svg"
                    type="grey"
                    width={20}
                />
                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/bell.svg"
                    type="grey"
                    width={20}
                />

                <ButtonRound
                    height={20}
                    href="/"
                    onClick={() => {}}
                    src="/icons/download.svg"
                    type="grey"
                    width={20}
                />
            </div>
        </div>
    )
}
export default FilmTrailer
