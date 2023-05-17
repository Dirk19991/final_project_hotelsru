import { IMovie } from '@/types/ComponentProps/IMovie'
import { FC, useState } from 'react'
import styles from './CreatorModal.module.scss'
import { useI18nContext } from '@/context/i18n'
import PosterCard from '../PosterCard/PosterCard'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import cn from 'classnames'

interface ICreatorModal {
    film: IMovie
    close: () => void
}

const CreatorModal: FC<ICreatorModal> = ({ film, close }) => {
    const {
        nameEn,
        nameRu,
        producer,
        actors,
        cineatographer,
        director,
        composer,
        screenwriter,
    } = film

    const { language, i18n } = useI18nContext()

    const [isBackHover, setIsBackHover] = useState(false)

    const valuesWithNames = [
        {
            values: director,
            name: i18n[language].profession.director,
        },
        {
            values: actors,
            name: i18n[language].profession.actor,
        },
        {
            values: producer,
            name: i18n[language].profession.producer,
        },
        {
            values: cineatographer,
            name: i18n[language].profession.cineatographer,
        },
        {
            values: screenwriter,
            name: i18n[language].profession.screenwriter,
        },
        {
            values: composer,
            name: i18n[language].profession.composer,
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div
                    className={styles.back}
                    onMouseEnter={() => setIsBackHover(true)}
                    onMouseLeave={() => setIsBackHover(false)}
                    onClick={close}
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        color={isBackHover ? '#fff' : '#a5a1b2'}
                        style={{ transitionDuration: '0.4s' }}
                    />
                    <span
                        className={cn(styles.back__text, {
                            [styles.back__text_hover]: isBackHover,
                        })}
                    >
                        {i18n[language].toMovie}
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            {language === 'en' ? nameEn : nameRu}:{' '}
                            <span className={styles.title__actors}>
                                {i18n[language].actorsAndCreators}
                            </span>
                        </h2>
                        <ul className={styles.menu}>
                            <li className={styles.menu__item}>
                                <div className={styles.menu__name}>
                                    {i18n[language].creators}
                                </div>
                            </li>
                        </ul>
                        {valuesWithNames.map((persons, i) => {
                            return (
                                <>
                                    <h3 className={styles.profession}>
                                        {persons.name}
                                    </h3>
                                    <ul key={i} className={styles.persons}>
                                        {persons.values.map((person, i) => {
                                            return (
                                                <li key={person.id + i}>
                                                    <CreatorMedallion
                                                        size={'big'}
                                                        name={
                                                            language === 'en'
                                                                ? person.enName
                                                                : person.name
                                                        }
                                                        subtitle={
                                                            (
                                                                person.movies
                                                                    ?.length ||
                                                                0
                                                            ).toString() +
                                                            ' фильмов'
                                                        }
                                                        src={person.photo}
                                                        href={'/'}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )
                        })}
                    </div>
                    <PosterCard film={film} />
                </div>
            </div>
        </div>
    )
}

export default CreatorModal
