import { useI18nContext } from '@/context/i18n'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { Button } from '@/stories/Button/ButtonStandard'
import { IMovie } from '@/types/ComponentProps/IMovie'
import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import Link from 'next/link'
import { useState } from 'react'
import styles from './FilmDescription.module.scss'

interface IFilmDescription {
    filmData: IMovie
}

const FilmDescription = ({ filmData }: IFilmDescription) => {
    const {
        nameRu,
        startYear,
        type,
        genres,
        description,
        rating,
        duration,
        actors,
        ratingCount,
    } = filmData
    const [detailsOpened, setDetailsOpened] = useState(false)
    const { language, i18n } = useI18nContext()

    const filmGenres = genres.map((elem) => elem.name).join(' · ')
    const fixedRating = +parseFloat(rating).toFixed(1)
    const filmType = type as 'movie' | 'tv-series' | 'cartoon'
    const time = toHoursAndMinutes(duration)
    const mainActors = actors.length > 4 ? actors.slice(0, 4) : actors
    console.log(mainActors)
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.name}>
                {nameRu} ({i18n[language][filmType]} {startYear})
            </h2>
            <div className={styles.info}>
                <div>
                    {startYear}&nbsp; {time}
                </div>
                <div>{filmGenres}</div>
                <div className={styles.buttons}>
                    <div className={styles.column}>
                        <ButtonActor image={false}>
                            <ButtonRating
                                fontSize={15}
                                height={44}
                                rating={fixedRating}
                                width={44}
                            />
                        </ButtonActor>
                        <div className={styles.actorInfo}>Рейтинг Иви</div>
                    </div>

                    {mainActors.map((actor) => (
                        <div key={actor.id} className={styles.column}>
                            <ButtonActor
                                height={44}
                                href={`/person/${actor.id}`}
                                src={actor.photo}
                                width={44}
                                image={true}
                            />
                            <div className={styles.actorInfo}>{actor.name}</div>
                        </div>
                    ))}
                </div>
                <div
                    className={
                        detailsOpened
                            ? styles.descriptionOpened
                            : styles.descriptionClosed
                    }
                >
                    {description}
                </div>

                <div
                    onClick={() => setDetailsOpened(true)}
                    className={
                        detailsOpened
                            ? styles.detailsOpened
                            : styles.detailsClosed
                    }
                >
                    Детали о фильме
                </div>
            </div>
            <div className={styles.ratingGroup}>
                <div className={styles.bigButton}>
                    <ButtonRating
                        fontSize={25}
                        height={64}
                        rating={fixedRating}
                        width={64}
                    />
                </div>
                <div>
                    <div className={styles.ratingText}>Рейтинг Иви</div>
                    <div>Интересный сюжет</div>
                    <div>{ratingCount.toLocaleString()} оценок</div>
                </div>
                <div className={styles.ratingButton}>
                    <Button label="Оценить" onClick={() => {}} type="rating" />
                </div>
            </div>
        </div>
    )
}
export default FilmDescription
