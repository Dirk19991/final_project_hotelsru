import { IMovie } from '@/types/ComponentProps/IMovie'
import { FC } from 'react'
import styles from './Film.module.scss'
import useMediaQuery from '@/hooks/useMediaQuery'
import FilmMobile from '../FilmMobile/FilmMobile'
import { useI18nContext } from '@/context/i18n'
import FilmHeader from './Header/Header'
import FilmDescription from './Description/Description'
import FilmRating from './Rating/Rating'
import 'swiper/scss'
import 'swiper/css/bundle'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import Image from 'next/image'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRound } from '@/stories/Button/ButtonRound'

export interface IFilm {
    film: IMovie
}

const Film: FC<IFilm> = ({ film }) => {
    const { language, i18n } = useI18nContext()
    const isMobile = useMediaQuery('(max-width: 1200px)')

    const { actors, rating, description, ratingCount } = film
    const mainActors = actors.length > 4 ? actors.slice(0, 4) : actors
    const fixedRating = +parseFloat(rating).toFixed(1)
    const id = film.trailer.split('/').at(-1)

    return (
        <>
            {isMobile && <FilmMobile film={film} />}
            {!isMobile && (
                <div data-testId="film" className={styles.wrapper}>
                    <div className={styles.trailer}>
                        <div className={styles.trailer__content}>
                            <iframe
                                width="720"
                                height="405"
                                src={`https://www.youtube.com/embed/${id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className={styles.video}
                            />
                            <div data-testid="buttons" className={styles.icons}>
                                <ButtonFooter
                                    height={20}
                                    href="/"
                                    label={i18n[language].trailer}
                                    src="/icons/play.svg"
                                    type="grey"
                                    width={20}
                                />
                                <ButtonRound
                                    height={20}
                                    href="/"
                                    src="/icons/bookmark.svg"
                                    type="grey"
                                    width={20}
                                />
                                <ButtonRound
                                    height={20}
                                    href="/"
                                    src="/icons/bell.svg"
                                    type="grey"
                                    width={20}
                                />
                                <ButtonRound
                                    height={20}
                                    href="/"
                                    src="/icons/download.svg"
                                    type="grey"
                                    width={20}
                                />
                                <ButtonFooter
                                    height={20}
                                    href="/"
                                    label={i18n[language].freeMovies}
                                    src="/icons/allDevices.svg"
                                    type="grey"
                                    width={20}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <FilmHeader film={film} align="center" />
                        <div className={styles.buttons}>
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
                            {mainActors.map((actor) => (
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
                                            width={44}
                                            height={44}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    }
                                />
                            ))}
                        </div>
                        <FilmDescription text={description} />
                        <FilmRating
                            ratingCount={ratingCount}
                            fixedRating={fixedRating}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Film
