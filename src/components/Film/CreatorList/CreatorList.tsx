import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './CreatorList.module.scss'
import CreatorMedallion from '../CreatorMedallion/CreatorMedallion'
import CreatorModal from '../CreatorModal/CreatorModal'
import { useTranslation } from 'next-i18next'

const CreatorsList: FC<any> = ({ data }) => {
    const { t, i18n } = useTranslation(['film'])

    const itemsRef = useRef<Array<HTMLLIElement | null>>([])

    const [isModalOpened, setIsModalOpened] = useState(false)

    const addProffesion = (arr: any, profession: any) =>
        arr && arr.map((el: any) => ({ ...el, profession: profession }))

    // const allPersons = [
    //     ...addProffesion(data.director, 'director'),
    //     ...addProffesion(data.actors, 'actor'),
    //     // ...addProffesion(data.producer, 'producer'),
    //     // ...addProffesion(data.cineatographer, 'cineatographer'),
    //     // ...addProffesion(data.screenwriter, 'screenwriter'),
    //     // ...addProffesion(data.composer, 'composer'),
    // ]

    // const [persons, setPersons] = useState(allPersons.slice(0, 10))

    // useEffect(() => {
    //     window.addEventListener('resize', onResize)
    //     onResize()
    // }, [])

    useEffect(() => {
        if (isModalOpened) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpened])

    // const onResize = () => {
    //     if (itemsRef.current && itemsRef.current[0]) {
    //         const maxElements = Math.floor(window.outerWidth / itemsRef.current[0].clientWidth)
    //         const needElements = Math.min(10, maxElements - 1)
    //         setPersons(allPersons.slice(0, needElements))
    //     }
    // }

    return (
        <div>
            <h2 className={styles.title} onClick={() => setIsModalOpened(true)}>
                {t('actorsAndCreators')}
            </h2>
            <ul className={styles.list}>
                {/* {persons.map((person, i) => {
                    const {personId, nameEn, nameRu, profession, photo} = person
                    return (
                        <li key={personId} className={styles.item} ref={(el) => (itemsRef.current[i] = el)}>
                            <CreatorMedallion
                                size={'small'}
                                name={i18n.language === 'en' ? nameEn : nameRu}
                                subtitle={t(`profession.${profession}`)}
                                src={photo}
                                href={`/person/${personId}`}
                            />
                        </li>
                    )
                })} */}
                <li className={styles.more} onClick={() => setIsModalOpened(true)}>
                    <span className={styles.more__text}>{t('more')}</span>
                </li>
            </ul>
            {isModalOpened && <CreatorModal film={data} close={() => setIsModalOpened(false)} />}
        </div>
    )
}

export default CreatorsList
