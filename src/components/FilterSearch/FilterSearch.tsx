import React, { FC, useState } from 'react'
import styles from './FilterSearch.module.scss'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import PersonService from '@/services/PersonService'
import { useRouter } from 'next/router'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Person } from '@/types/Response/PersonResponse'

interface FilterSearch {
    queryName: string
}

const FilterSearch: FC<FilterSearch> = ({ queryName }) => {
    const { t, i18n } = useTranslation(['movies'])
    const { query, replace } = useRouter()
    const placeholderTitle = queryName === 'director' ? t('searchByProducer') : t('searchByActor')
    const personTitle = queryName === 'director' ? t('asDirector') : t('asActor')
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [personsList, setPersonsList] = useState<Person[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const inputHandler = async (e: any) => {
        setIsOpened(true)
        setPersonsList([])
        setInputValue(e.target.value)
        setIsLoading(true)
        const queryNameCopy = 'actor' ? 'actors' : queryName
        try {
            const persons = await PersonService.getPersonByName(queryNameCopy, inputValue)
            setPersonsList(persons)
        } catch (err) {
            console.log(err)
            setIsOpened(false)
        } finally {
            setIsLoading(false)
        }
    }

    const addToQueryHandler = (personId: number, name: string) => {
        setInputValue(name)
        const genres = query.genres ?? 'all'
        const pathname = '/movies/[genres]'
        const pathnameCopy = `/movies/${genres}`
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres

        const path = { pathname, query: { ...query, [queryName]: personId, genres } }
        const as = { pathname: pathnameCopy, query: { ...queryCopy, [queryName]: personId } }
        const config = { shallow: true }
        replace(path, as, config)
    }

    const resetPerson = () => {
        setInputValue('')
        const genres = query.genres ?? 'all'
        const pathname = '/movies/[genres]'
        const pathnameCopy = `/movies/${genres}`
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres
        delete queryCopy[queryName]
        delete query[queryName]

        const path = { pathname, query: { ...query, genres } }
        const as = { pathname: pathnameCopy, query: { ...queryCopy } }
        const config = { shallow: true }
        replace(path, as, config)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.input}>
                <input
                    type="text"
                    placeholder={placeholderTitle}
                    onInput={(e) => inputHandler(e)}
                    onBlur={() => setIsOpened(false)}
                    value={inputValue}
                />
                <button onClick={resetPerson}>
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </button>
            </div>
            {isOpened && (
                <div className={styles.dropdown}>
                    {isLoading && <span>{t('searching')}</span>}
                    {!personsList.length && !isLoading && <span>{t('noResults')}</span>}
                    <ul>
                        {personsList &&
                            personsList.map(({ personId, photo, nameEn, nameRu }: Person) => {
                                const name = i18n.language === 'ru' ? nameRu : nameEn

                                return (
                                    <li
                                        className={styles.person}
                                        key={personId}
                                        onMouseDown={() => addToQueryHandler(personId, name)}
                                    >
                                        <Image alt={nameEn} src={photo} width={42} height={60} />
                                        <div>
                                            <p>{name}</p>
                                            <span>{personTitle}</span>
                                        </div>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default FilterSearch
