import { FC, useState } from 'react'
import styles from './CreatorModal.module.scss'
import PosterCard from '../PosterCard/PosterCard'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'
import { Movie } from '@/types/Response/MovieResponse'
import { Person } from '@/types/Response/PersonResponse'

interface CreatorModal {
    film: Movie
    close: () => void
}

const CreatorModal: FC<CreatorModal> = ({ film, close }) => {
    const { nameEn, nameRu, producer, actors, operator, director, composer, editor } = film

    const { i18n, t } = useTranslation(['film'])

    const [isBackHover, setIsBackHover] = useState(false)

    const valuesWithNames = [
        {
            values: director,
            name: t('profession.director'),
        },
        {
            values: actors,
            name: t('profession.actors'),
        },
        {
            values: producer,
            name: t('profession.producer'),
        },
        {
            values: composer,
            name: t('profession.composer'),
        },
        {
            values: operator,
            name: t('profession.operator'),
        },
        {
            values: editor,
            name: t('profession.editor'),
        },
    ]

    return (
        <div className={styles.wrapper} data-testid="film-creator-modal">
            <div className={styles.modal}>
                <div
                    className={styles.back}
                    onMouseEnter={() => setIsBackHover(true)}
                    onMouseLeave={() => setIsBackHover(false)}
                    onClick={close}
                    data-testid="film-creator-modal-close"
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
                        {t('toMovie')}
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            {i18n.language === 'en' ? nameEn : nameRu}:{' '}
                            <span className={styles.title__actors}>{t('actorsAndCreators')}</span>
                        </h2>
                        <ul className={styles.menu}>
                            <li className={styles.menu__item}>
                                <div className={styles.menu__name}>{t('creators')}</div>
                            </li>
                        </ul>
                        {valuesWithNames.map((persons, i) => {
                            return (
                                <div key={i}>
                                    <h3 className={styles.profession}>{persons.name}</h3>
                                    <ul className={styles.persons}>
                                        {persons.values.map((person: Person) => {
                                            const personName = i18n.language === 'en' ? person.nameEn : person.nameRu
                                            return (
                                                <li key={person.personId}>
                                                    <CreatorMedallion
                                                        size={'big'}
                                                        name={personName}
                                                        src={person.photo}
                                                        href={`/person/${person.personId}`}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
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
