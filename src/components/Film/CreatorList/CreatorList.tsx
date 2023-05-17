import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './CreatorList.module.scss'
import { IMovie, IPerson } from '@/types/ComponentProps/IMovie'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import { useI18nContext } from '@/context/i18n'
import CreatorModal from '../CreatorModal/CreatorModal'

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
    const { language, i18n } = useI18nContext()

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
                {i18n[language].actorsAndCreators}
            </h2>
            <ul className={styles.list}>
                {persons.map((p, index) => (
                    <li
                        key={p.id + index}
                        className={styles.item}
                        ref={(el) => (itemsRef.current[index] = el)}
                    >
                        <CreatorMedallion
                            size={'small'}
                            name={language === 'en' ? p.enName : p.name}
                            subtitle={i18n[language].profession[p.profession]}
                            src={p.photo}
                            href={`person/${p.id}`}
                        />
                    </li>
                ))}
                <li
                    className={styles.more}
                    onClick={() => setIsModalOpened(true)}
                >
                    <span className={styles.more__text}>Ещё</span>
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
