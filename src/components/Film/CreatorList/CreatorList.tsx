import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './CreatorList.module.scss'
import { IMovie, IPerson } from '@/types/ComponentProps/IMovie'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import { useI18nContext } from '@/context/i18n'

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

const CreatorsList: FC<ICreatorsList> = ({
    film: {
        actors,
        cineatographer,
        composer,
        director,
        producer,
        screenwriter,
    },
}) => {
    const { language, i18n } = useI18nContext()

    const itemsRef = useRef<Array<HTMLLIElement | null>>([])

    const addProffesion = (arr: IPerson[], profession: profession) => {
        return arr.map((el) => {
            return { ...el, profession: profession }
        })
    }

    const allPersons = [
        ...addProffesion(director, 'director'),
        ...addProffesion(actors, 'actor'),
        ...addProffesion(producer, 'producer'),
        ...addProffesion(cineatographer, 'cineatographer'),
        ...addProffesion(screenwriter, 'screenwriter'),
        ...addProffesion(composer, 'composer'),
    ]

    const [persons, setPersons] = useState(allPersons.slice(0, 10))

    useEffect(() => {
        window.addEventListener('resize', onResize)
    }, [])

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
        <>
            {/* TODO onClick open modal */}
            <h2 className={styles.title}>{i18n[language].actorsAndCreators}</h2>
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
                {/* TODO onClick open modal */}
                <li className={styles.more}>
                    <span className={styles.more__text}>Ещё</span>
                </li>
            </ul>
        </>
    )
}

export default CreatorsList
