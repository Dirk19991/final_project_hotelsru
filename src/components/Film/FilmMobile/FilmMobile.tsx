import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useEffect, useRef, useState } from 'react'
import styles from './FilmMobile.module.scss'
import Image from 'next/image'
import FilmHeader from '../Header/Header'
import FilmDescription from '../Description/Description'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'next-i18next'

interface IFilmMobile {
    film: IMovie
}

const FilmMobile = ({ film }: IFilmMobile) => {
    const { description, rating, actors: allActors } = film

    const { t, i18n } = useTranslation(['film'])
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
            <FilmHeader film={film} />
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
                                text={t('iviRatingNoColon')}
                            />
                        </li>
                        {actors.map((actor, index) => (
                            <li ref={(el) => (actorsRef.current[index] = el)}>
                                <ButtonActor
                                    href={`/person/${actor.id}`}
                                    text={
                                        i18n.language === 'en'
                                            ? actor.enName
                                            : actor.name
                                    }
                                    key={actor.id}
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
                        label={t('freeMovies')}
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
                        label={t('trailer')}
                        height={20}
                        width={28}
                    />
                    <div className={styles.info__buttons_bottom}>
                        {[
                            '/icons/bookmark.svg',
                            '/icons/bell.svg',
                            '/icons/download.svg',
                        ].map((src, i) => {
                            return (
                                <Button
                                    type={'trailerControls'}
                                    src={src}
                                    height={20}
                                    width={28}
                                    key={i}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmMobile
