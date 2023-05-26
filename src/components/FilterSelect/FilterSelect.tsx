import React, { FC } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const FilterSelect: FC<any> = ({ filterType, currentModal, setCurrentModal, list, title, selectValue }) => {
    const { query, push, asPath } = useRouter()
    const { t, i18n } = useTranslation(['movies', 'common'])

    const handleCurrentFilter = () => (filterType === currentModal ? setCurrentModal('') : setCurrentModal(filterType))
    const isCurrent = (filter: string) => currentModal === filter && filterType === filter

    const yearsNavigate = (value: string) => {
        const pathname = '/movies/[genres]'
        const genres = query.genres ?? 'all'
        if (value === '') {
            delete query.year
            push({ pathname, query: { ...query, genres } })
            return
        }
        push({ pathname, query: { ...query, year: value, genres } })

        setCurrentModal('')
    }

    const countriesNavigate = (shortName: string) => {
        // const pathname = '/movies/[genres]'
        // const genres = query.genres ?? 'all'
        // const conutriesQuery = String(query.countries)
        // if (conutriesQuery) {
        //     conutriesQuery.split('+')
        // }
        // const conutriesQuery = query.countries ? `${query.countries}+${shortName}` : shortName
        // push({
        //     pathname,
        //     query: {
        //         ...query,
        //         countries: 'uk+br',
        //         genres,
        //     },
        // })
    }

    const genresNavigate = (nameEn: string) => {
        const genreLink = engNameToLink(nameEn)
        const pathname = '/movies/[genres]'
        let genresQuery = query.genres === 'all' || !query.genres ? '' : String(query.genres)

        if (!genresQuery) {
            push({ pathname, query: { ...query, genres: genreLink } })
        }

        if (genresQuery) {
            let genresArr = genresQuery.split('+')

            if (genresArr.includes(genreLink)) {
                genresArr = genresArr.filter((el) => el !== genreLink)
                const genresRequest = genresArr.length > 0 ? genresArr.join('+') : 'all'
                push({ pathname, query: { ...query, genres: genresRequest } })
                return
            }

            genresArr.push(genreLink)
            const genresRequest = genresArr.join('+')
            push({ pathname, query: { ...query, genres: genresRequest } })
        }
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.select, filterType === currentModal && styles.active)}
                onClick={handleCurrentFilter}
            >
                <div>{title}</div>
                {selectValue && <span>{selectValue}</span>}
            </div>
            <div className={styles.dropdown}>
                {isCurrent('genres') && (
                    <div className={styles.genresDropdown}>
                        <ul>
                            {list.map(({ id, nameEn, nameRu }: any) => {
                                const isChecked = String(query.genres).split('+').includes(engNameToLink(nameEn))

                                return (
                                    <li key={id}>
                                        <label onClick={() => genresNavigate(nameEn)}>
                                            <input type="checkbox" checked={isChecked} />
                                            <div>{i18n.language === 'ru' ? nameRu : nameEn}</div>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                {isCurrent('countries') && (
                    <div className={styles.countriesDropdown}>
                        <ul>
                            {list.map(({ id, nameEn, nameRu, shortName }: any) => {
                                return (
                                    <li key={id}>
                                        <label onClick={() => countriesNavigate(shortName)}>
                                            <input type="checkbox" value={engNameToLink(nameEn)} />
                                            <div>{i18n.language === 'ru' ? nameRu : nameEn}</div>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                {isCurrent('years') && (
                    <div className={styles.yearsDropdown}>
                        <ul>
                            {list.map(({ id, value }: any) => {
                                let title

                                if (value.match('-')) {
                                    title = value
                                } else {
                                    title = `${value} ${t('year')}`
                                }
                                if (value === '') {
                                    title = t('allYears')
                                }
                                if (value === '1980') {
                                    title = `${t('before')} 1980`
                                }

                                const queryParam = query.year ?? ''

                                return (
                                    <li key={id}>
                                        <label onClick={() => yearsNavigate(value)}>
                                            <input
                                                type="radio"
                                                name="years"
                                                value={value}
                                                checked={queryParam === value && true}
                                            />
                                            <div>{title}</div>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterSelect
