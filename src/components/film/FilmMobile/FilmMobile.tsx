import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { useEffect, useRef, useState, FC, useCallback } from 'react'
import styles from './FilmMobile.module.scss'
import Image from 'next/image'
import FilmHeader from '../Header/Header'
import FilmDescription from '../Description/Description'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'next-i18next'
import { Movie } from '@/types/Response/MovieResponse'

interface FilmMobile {
    movie: Movie
}

const FilmMobile: FC<FilmMobile> = ({ movie }) => {
    const { trailer, description, rating, year, nameEn, nameRu, duration, genres, actors: allActors } = movie

    const { t, i18n } = useTranslation(['film'])
    const [actors, setActors] = useState(allActors.slice(0, 5))
    const actorsRef = useRef<Array<HTMLLIElement | null>>([])

    const fixedRating = +parseFloat(rating).toFixed(1)

    const cachedOnResize = useCallback(() => {
        if (actorsRef.current && actorsRef.current[0]) {
            const maxElements = Math.floor(window.innerWidth / actorsRef.current[0].clientWidth)
            const needElements = Math.min(5, maxElements - 1)
            setActors(allActors.slice(0, needElements))
        }
    }, [allActors])

    useEffect(() => {
        window.addEventListener('resize', cachedOnResize)
        cachedOnResize()
    }, [cachedOnResize])

    return (
        <div className={styles.wrapper}>
            <FilmHeader
                year={year}
                title={i18n.language === 'ru' ? nameRu : nameEn}
                duration={duration}
                genres={genres}
            />
            <div className={styles.video}>
                <iframe
                    className={styles.video__frame}
                    width="720"
                    height="405"
                    src={trailer}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div className={styles.info}>
                <div className={styles.info__data}>
                    <ul className={styles.actors}>
                        <li>
                            <ButtonActor
                                image={<ButtonRating fontSize={15} height={44} rating={fixedRating} width={44} />}
                                text={t('iviRatingNoColon')}
                            />
                        </li>
                        {actors.map((actor, index) => (
                            <li ref={(el) => (actorsRef.current[index] = el)} key={actor.personId}>
                                <ButtonActor
                                    href={`/person/${actor.personId}`}
                                    text={i18n.language === 'en' ? actor.nameEn : actor.nameRu}
                                    image={
                                        <Image
                                            alt={actor.nameEn}
                                            src={actor.photo}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                    <Button type={'freeMovies'} label={t('freeMovies')} src="/icons/play.svg" height={20} width={28} />
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
                        {['/icons/bookmark.svg', '/icons/bell.svg', '/icons/download.svg'].map((src, i) => {
                            return <Button type={'trailerControls'} src={src} height={20} width={28} key={i} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmMobile
