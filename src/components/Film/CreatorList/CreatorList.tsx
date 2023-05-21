import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './CreatorList.module.scss'
import { IMovie, IPerson } from '@/types/ComponentProps/IMovie'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import CreatorModal from '../CreatorModal/CreatorModal'
import { useTranslation } from 'next-i18next'

export interface ICreatorsList {
    film: IMovie
}

type profession =
    | 'director'
    | 'actor'
    | 'cineatographer'
    | 'composer'
    | 'producer'
    | 'screenwriter'

const CreatorsList: FC<ICreatorsList> = ({ film }) => {
    const { t, i18n } = useTranslation(['film'])

    const itemsRef = useRef<Array<HTMLLIElement | null>>([])

    const [isModalOpened, setIsModalOpened] = useState(false)

    const addProffesion = (arr: IPerson[], profession: profession) => {
        return arr.map((el) => {
            return { ...el, profession: profession }
        })
    }

    const allPersons = [
        ...addProffesion(film.director, 'director'),
        ...addProffesion(film.actors, 'actor'),
        ...addProffesion(film.producer, 'producer'),
        ...addProffesion(film.cineatographer, 'cineatographer'),
        ...addProffesion(film.screenwriter, 'screenwriter'),
        ...addProffesion(film.composer, 'composer'),
    ]

    const [persons, setPersons] = useState(allPersons.slice(0, 10))

    useEffect(() => {
        window.addEventListener('resize', onResize)
        onResize()
    }, [])

    useEffect(() => {
        if (isModalOpened) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpened])

    const onResize = () => {
        if (itemsRef.current && itemsRef.current[0]) {
            const maxElements = Math.floor(
                window.outerWidth / itemsRef.current[0].clientWidth
            )
            const needElements = Math.min(10, maxElements - 1)
            setPersons(allPersons.slice(0, needElements))
        }
    }

    return (
        <div>
            <h2 className={styles.title} onClick={() => setIsModalOpened(true)}>
                {t('actorsAndCreators')}
            </h2>
            <ul className={styles.list}>
                {persons.map((p, index) => {
                    return (
                        <li
                            key={p.id + index}
                            className={styles.item}
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <CreatorMedallion
                                size={'small'}
                                name={
                                    i18n.language === 'en' ? p.enName : p.name
                                }
                                subtitle={t(`profession.${p.profession}`)}
                                src={p.photo}
                                href={`person/${p.id}`}
                            />
                        </li>
                    )
                })}
                <li
                    className={styles.more}
                    onClick={() => setIsModalOpened(true)}
                >
                    <span className={styles.more__text}>{t('more')}</span>
                </li>
            </ul>
            {isModalOpened && (
                <CreatorModal
                    film={film}
                    close={() => setIsModalOpened(false)}
                />
            )}
        </div>
    )
}

export default CreatorsList
