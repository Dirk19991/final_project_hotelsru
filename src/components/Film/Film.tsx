import { FC } from 'react'
import styles from './Film.module.scss'
import useMediaQuery from '@/hooks/useMediaQuery'
import FilmMobile from './FilmMobile/FilmMobile'
import FilmHeader from './Header/Header'
import FilmDescription from './Description/Description'
import FilmRating from './Rating/Rating'
import 'swiper/scss'
import 'swiper/css/bundle'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import Image from 'next/image'
import { Button } from '@/stories/Button/ButtonStandard'
import { useTranslation } from 'next-i18next'

const Film: FC<any> = ({ movie }) => {
    const isMobile = useMediaQuery('(max-width: 1159px)')
    const { t, i18n } = useTranslation(['film'])

    const { trailer, description, rating, ratingCount, year, nameEn, nameRu, duration, genres, actors } = movie
    const fixedRating = +parseFloat(rating).toFixed(1)
    const mainActors = actors.length > 4 ? actors.slice(0, 4) : actors

    return (
        <>
            {isMobile && <FilmMobile movie={movie} />}
            {!isMobile && (
                <div data-testid="film" className={styles.wrapper}>
                    <div className={styles.trailer}>
                        <div className={styles.trailer__content}>
                            <div className={styles.video}>
                                <iframe
                                    width={'100%'}
                                    height={'100%'}
                                    src={trailer}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div data-testid="buttons" className={styles.icons}>
                                <div className={styles.icons_left}>
                                    <Button
                                        type={'trailerControls'}
                                        src="/icons/play.svg"
                                        label={t('trailer')}
                                        height={20}
                                        width={28}
                                    />
                                </div>
                                <div className={styles.icons_center}>
                                    {['/icons/bookmark.svg', '/icons/bell.svg', '/icons/download.svg'].map((src, i) => {
                                        return (
                                            <Button type={'trailerControls'} src={src} key={i} height={20} width={28} />
                                        )
                                    })}
                                </div>
                                <div className={styles.icons_right}>
                                    <Button
                                        type={'freeMovies'}
                                        label={t('freeMovies')}
                                        src="/icons/play.svg"
                                        height={20}
                                        width={28}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <FilmHeader
                            year={year}
                            title={i18n.language === 'ru' ? nameRu : nameEn}
                            duration={duration}
                            genres={genres}
                        />
                        <div className={styles.buttons}>
                            <ButtonActor
                                image={<ButtonRating fontSize={15} height={44} rating={fixedRating} width={44} />}
                                text={t('iviRatingNoColon')}
                            />

                            {mainActors.map((actor: any) => {
                                const name = i18n.language === 'en' ? actor.nameEn : actor.nameRu

                                return (
                                    <ButtonActor
                                        href={`/person/${actor.personId}`}
                                        text={name}
                                        key={actor.personId}
                                        image={
                                            <Image
                                                alt={actor.nameEn}
                                                src={actor.photo}
                                                width={44}
                                                height={44}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        }
                                    />
                                )
                            })}
                        </div>
                        <FilmDescription text={description} />
                        <FilmRating ratingCount={ratingCount} fixedRating={fixedRating} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Film
