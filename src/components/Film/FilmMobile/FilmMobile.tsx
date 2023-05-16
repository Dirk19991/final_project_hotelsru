import { useI18nContext } from '@/context/i18n'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useEffect, useRef, useState } from 'react'
import styles from './FilmMobile.module.scss'
import Image from 'next/image'
import FilmHeader from '../Header/Header'
import FilmDescription from '../Description/Description'
import { Button } from '@/stories/Button/ButtonStandard'

interface IFilmMobile {
    film: IMovie
}

const FilmMobile = ({ film }: IFilmMobile) => {
    const { description, rating, actors: allActors } = film
    const { language, i18n } = useI18nContext()
    const [actors, setActors] = useState(allActors.slice(0, 5))
    const actorsRef = useRef<Array<HTMLLIElement | null>>([])

    const fixedRating = +parseFloat(rating).toFixed(1)
    const id = film.trailer.split('/').at(-1)

    useEffect(() => {
        window.addEventListener('resize', onResize)
        onResize()
    }, [])

    const onResize = () => {
        if (actorsRef.current && actorsRef.current[0]) {
            const maxElements = Math.floor(
                window.outerWidth / actorsRef.current[0].clientWidth
            )
            const needElements = Math.min(5, maxElements - 1)
            setActors(allActors.slice(0, needElements))
        }
    }

    return (
        <div className={styles.wrapper}>
            <FilmHeader film={film} align="left" />
            <div className={styles.video}>
                <iframe
                    className={styles.video__frame}
                    width="720"
                    height="405"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.info__data}>
                    <ul className={styles.actors}>
                        <li>
                            <ButtonActor
                                image={
                                    <ButtonRating
                                        fontSize={15}
                                        height={44}
                                        rating={fixedRating}
                                        width={44}
                                    />
                                }
                                text={i18n[language].iviRatingNoColon}
                            />
                        </li>
                        {actors.map((actor, index) => (
                            <li ref={(el) => (actorsRef.current[index] = el)}>
                                <ButtonActor
                                    href={`/person/${actor.id}`}
                                    text={
                                        language === 'en'
                                            ? actor.enName
                                            : actor.name
                                    }
                                    image={
                                        <Image
                                            alt={actor.enName}
                                            src={actor.photo}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                    <Button
                        type={'freeMovies'}
                        label={i18n[language].freeMovies}
                        src="/icons/play.svg"
                        height={20}
                        width={28}
                    />
                    <FilmDescription text={description} />
                </div>
                <div className={styles.info__buttons}>
                    <Button
                        type={'trailerControls'}
                        src="/icons/play.svg"
                        label={i18n[language].trailer}
                        height={20}
                        width={28}
                    />
                    <div className={styles.info__buttons_bottom}>
                        <Button
                            type={'trailerControls'}
                            src="/icons/bookmark.svg"
                            height={20}
                            width={28}
                        />
                        <Button
                            type={'trailerControls'}
                            src="/icons/bell.svg"
                            height={20}
                            width={28}
                        />
                        <Button
                            type={'trailerControls'}
                            src="/icons/download.svg"
                            height={20}
                            width={28}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmMobile
