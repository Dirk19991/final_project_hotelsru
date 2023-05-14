import { useI18nContext } from '@/context/i18n'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import { IMovie } from '@/types/ComponentProps/IMovie'
import { useEffect, useRef, useState } from 'react'
import styles from './FilmMobile.module.scss'
import Image from 'next/image'
import FilmHeader from '../Film/Header/Header'
import FilmDescription from '../Film/Description/Description'

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

    //879px
    //1159px

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
                    <ButtonFooter
                        height={20}
                        href="/"
                        label={i18n[language].freeMovies}
                        src="/icons/allDevices.svg"
                        type="grey"
                        width={20}
                        buttonWidth={'100%'}
                    />
                    <FilmDescription text={description} />
                </div>
                <div className={styles.info__buttons}>
                    <ButtonFooter
                        height={20}
                        href="/"
                        label={i18n[language].trailer}
                        src="/icons/play.svg"
                        type="grey"
                        width={20}
                        buttonWidth={'100%'}
                    />
                    <div className={styles.info__buttons_bottom}>
                        <div className={styles.info__button}>
                            <ButtonFooter
                                height={20}
                                href="/"
                                src="/icons/bookmark.svg"
                                type="grey"
                                width={20}
                                buttonWidth={'100%'}
                            />
                        </div>
                        <div className={styles.info__button}>
                            <ButtonFooter
                                height={20}
                                href="/"
                                src="/icons/bell.svg"
                                type="grey"
                                width={20}
                                buttonWidth={'100%'}
                            />
                        </div>
                        <div className={styles.info__button}>
                            <ButtonFooter
                                height={20}
                                href="/"
                                src="/icons/download.svg"
                                type="grey"
                                width={20}
                                buttonWidth={'100%'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmMobile
