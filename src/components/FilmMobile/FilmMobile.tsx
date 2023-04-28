import { useI18nContext } from '@/context/i18n'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ButtonActor } from '@/stories/Button/ButtonActor'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { ButtonRating } from '@/stories/Button/ButtonRating'
import SliderSmall from '@/stories/SliderSmall/SliderSmall'
import { IMovie } from '@/types/ComponentProps/IMovie'
import toHoursAndMinutes from '@/util/toHoursAndMinutes'
import { useState } from 'react'
import FilmBreadcrumbs from '../FilmBreadcrumbs/FilmBreadcrumbs'
import FilmTrailer from '../FilmTrailer/FilmTrailer'
import styles from './FilmMobile.module.scss'
import classNames from 'classnames/bind'

interface IFilmMobile {
    filmData: IMovie
}

let cx = classNames.bind(styles)

const FilmMobile = ({ filmData }: IFilmMobile) => {
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

    const is700px = useMediaQuery('(max-width: 700px)')
    const is400px = useMediaQuery('(max-width: 400px)')
    const { language, i18n } = useI18nContext()
    const [detailsOpened, setDetailsOpened] = useState(false)

    const filmGenres = genres.map((elem) => elem.name).join(' · ')
    const fixedRating = +parseFloat(rating).toFixed(1)
    const filmType = type as 'movie' | 'tv-series' | 'cartoon'
    const time = toHoursAndMinutes(duration)
    const mainActors = actors.length > 4 ? actors.slice(0, 5) : actors
    const responsiveActors = is400px ? mainActors.slice(0, 3) : mainActors

    let descriptionStyle = cx({
        mobileDescription: is700px,
        descriptionOpened: detailsOpened,
        descriptionClosed: !detailsOpened,
    })

    let buttonStyle = cx({
        mobileButtons: is700px,
        buttons: !is700px,
        smallMobileButtons: is400px,
    })

    return (
        <>
            <div className="container">
                <FilmBreadcrumbs filmData={filmData} />
                <h2 className={styles.name}>
                    {nameRu} ({i18n[language][filmType]} {startYear})
                </h2>
                <div className={styles.info}>
                    <div>
                        {startYear}&nbsp; {time}
                    </div>
                    <div>{filmGenres}</div>
                </div>

                <FilmTrailer filmData={filmData} />
                <div className={is700px ? styles.mobileFlex : styles.flex}>
                    <div className={buttonStyle}>
                        <div className={styles.column}>
                            <ButtonActor image={false}>
                                <ButtonRating
                                    fontSize={15}
                                    height={44}
                                    rating={fixedRating}
                                    width={44}
                                />
                            </ButtonActor>
                            <div className={styles.actorInfo}>
                                {i18n[language].iviRatingNoColon}
                            </div>
                        </div>
                        {responsiveActors.map((actor) => (
                            <div key={actor.id} className={styles.column}>
                                <ButtonActor
                                    height={44}
                                    href={`/person/${actor.id}`}
                                    src={actor.photo}
                                    width={44}
                                    image={true}
                                />
                                <div className={styles.actorInfo}>
                                    {language === 'en'
                                        ? actor.enName
                                        : actor.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttonsRight}>
                        <ButtonFooter
                            height={20}
                            href="/"
                            label={i18n[language].watchLater}
                            onClick={() => {}}
                            src="/icons/bookmark.svg"
                            type="grey"
                            width={20}
                            buttonWidth={is700px ? '100%' : '200px'}
                        />
                        <ButtonFooter
                            height={20}
                            href="/"
                            label=""
                            onClick={() => {}}
                            src="/icons/download.svg"
                            type="grey"
                            width={20}
                            buttonWidth={is700px ? '100%' : '200px'}
                        />
                    </div>
                </div>
                <div className={descriptionStyle}>{description}</div>

                <div
                    onClick={() => setDetailsOpened(true)}
                    className={
                        detailsOpened
                            ? styles.detailsOpened
                            : styles.detailsClosed
                    }
                >
                    {i18n[language].filmDetails}
                </div>
                <h3 className={styles.header}>
                    {language === 'en'
                        ? 'Similar movies:'
                        : `С фильмом "${filmData.nameRu}" смотрят:`}
                </h3>
            </div>
            <div className={styles.slider}>
                <SliderSmall
                    type="similarMovie"
                    similarMovies={filmData.similarMovies}
                    headerText=""
                />
            </div>
        </>
    )
}
export default FilmMobile
