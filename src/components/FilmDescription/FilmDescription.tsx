import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { IMoviesData } from '@/stories/SliderSmall/SliderSmall'
import styles from './FilmDescription.module.scss'

interface IFilmDescription {
    filmData: IMoviesData
}

const FilmDescription = ({ filmData }: IFilmDescription) => {
    const { name, year, type, genre, description } = filmData
    const genres = genre.map((elem) => elem.name).join(' · ')
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.name}>
                {name} ({type} {year})
            </h2>
            <div className={styles.info}>
                <div>
                    {year} {genres}
                </div>
                <div className={styles.description}>{description}</div>
                <div></div>
            </div>
            <div className={styles.buttons}>
                <ButtonActor height={0} href="/" src="" width={0} image={false}>
                    <ButtonRating
                        fontSize={15}
                        height={44}
                        rating={7.5}
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
                    rating={7.5}
                    width={56}
                />
            </div>
        </div>
    )
}
export default FilmDescription
