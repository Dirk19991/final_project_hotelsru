import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { IMovie } from '@/types/ComponentProps/IMovie'
import styles from './FilmDescription.module.scss'

interface IFilmDescription {
    filmData: IMovie
}

const FilmDescription = ({ filmData }: IFilmDescription) => {
    const { nameRU, year, type, genres, description, rating } = filmData
    const filmGenres = genres.map((elem) => elem.name).join(' · ')

    const fixedRating = +parseFloat(rating).toFixed(1)
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.name}>
                {nameRU} ({type} {year})
            </h2>
            <div className={styles.info}>
                <div>
                    {year} {filmGenres}
                </div>
                <div className={styles.description}>{description}</div>
                <div></div>
            </div>
            <div className={styles.buttons}>
                <ButtonActor image={false}>
                    <ButtonRating
                        fontSize={15}
                        height={44}
                        rating={fixedRating}
                        width={44}
                    />
                </ButtonActor>

                <ButtonActor
                    height={44}
                    href="/"
                    src="/icons/mockActor.webp"
                    width={44}
                    image={true}
                />
                <ButtonActor
                    height={44}
                    href="/"
                    src="/icons/mockActor.webp"
                    width={44}
                    image={true}
                />
                <ButtonActor
                    height={44}
                    href="/"
                    src="/icons/mockActor.webp"
                    width={44}
                    image={true}
                />
                <ButtonActor
                    height={44}
                    href="/"
                    src="/icons/mockActor.webp"
                    width={44}
                    image={true}
                />
            </div>
            <div className={styles.bigButton}>
                <ButtonRating
                    fontSize={25}
                    height={56}
                    rating={fixedRating}
                    width={56}
                />
            </div>
        </div>
    )
}
export default FilmDescription
