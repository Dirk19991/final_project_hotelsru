import React, { FC } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const FilterSelect: FC<any> = ({ filterType, currentModal, setCurrentModal, list, title, selectValue }) => {
    const { query, push, asPath, replace } = useRouter()
    const { t, i18n } = useTranslation(['movies', 'common'])

    const handleCurrentFilter = () => (filterType === currentModal ? setCurrentModal('') : setCurrentModal(filterType))
    const isCurrent = (filter: string) => currentModal === filter && filterType === filter

    const yearsNavigate = (value: string) => {
        const pathname = '/movies/[genres]'
        const genres = query.genres ?? 'all'

        const pathnameCopy = `/movies/${genres}`
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres

        if (value === '') {
            delete query.years
            delete queryCopy.years
            replace(
                { pathname, query: { ...query, genres } },
                {
                    pathname: pathnameCopy,
                    query: { ...queryCopy },
                },
                { shallow: true }
            )
        } else {
            replace(
                { pathname, query: { ...query, years: value, genres } },
                {
                    pathname: pathnameCopy,
                    query: {
                        ...queryCopy,
                        years: value,
                    },
                },
                { shallow: true }
            )
        }

        setCurrentModal('')
    }

    const countriesNavigate = (shortName: string) => {
        const pathname = '/movies/[genres]'
        const genres = query.genres ?? 'all'
        const countries = query.countries ? String(query.countries) : ''

        const pathnameCopy = `/movies/${genres}`
        const queryCopy = Object.assign({}, query)
        delete queryCopy.genres

        if (countries === '') {
            replace(
                { pathname, query: { ...query, genres, countries: shortName } },
                { pathname: pathnameCopy, query: { ...queryCopy, countries: shortName } },
                { shallow: true }
            )
        } else {
            let countriesArr = countries.split(' ')

            if (countriesArr.includes(shortName)) {
                countriesArr = countriesArr.filter((el) => el !== shortName)

                if (!countriesArr.length) {
                    delete query.countries
                    delete queryCopy.countries
                    replace(
                        { pathname, query: { ...query, genres } },
                        { pathname: pathnameCopy, query: { ...queryCopy } },
                        { shallow: true }
                    )
                } else {
                    const countriesRequest = countriesArr.join(' ')
                    replace(
                        { pathname, query: { ...query, genres, countries: countriesRequest } },
                        {
                            pathname: pathnameCopy,
                            query: { ...queryCopy, countries: countriesRequest },
                        },
                        {
                            shallow: true,
                        }
                    )
                }
            } else {
                countriesArr.push(shortName)
                const countriesRequest = countriesArr.join(' ')
                replace(
                    { pathname, query: { ...query, genres, countries: countriesRequest } },
                    {
                        pathname: pathnameCopy,
                        query: { ...queryCopy, countries: countriesRequest },
                    },
                    {
                        shallow: true,
                    }
                )
            }
        }
    }

    const genresNavigate = (nameEn: string) => {
        const genreLink = engNameToLink(nameEn)
        const pathname = '/movies/[genres]'
        let genresQuery = query.genres === 'all' || !query.genres ? '' : String(query.genres)
        const queryString = asPath.split('?').length > 1 ? `?${asPath.split('?')[1]}` : ''

        if (!genresQuery) {
            replace({ pathname, query: { ...query, genres: genreLink } }, undefined, { shallow: true })
        } else {
            let genresArr = genresQuery.split('+')

            if (genresArr.includes(genreLink)) {
                genresArr = genresArr.filter((el) => el !== genreLink)
                const genresRequest = genresArr.length > 0 ? genresArr.join('+') : 'all'
                replace(
                    { pathname, query: { ...query, genres: genresRequest } },
                    `/movies/${genresRequest}${queryString}`,
                    { shallow: true }
                )
            } else {
                genresArr.push(genreLink)
                const genresRequest = genresArr.join('+')
                replace(
                    { pathname, query: { ...query, genres: genresRequest } },
                    `/movies/${genresRequest}${queryString}`,
                    { shallow: true }
                )
            }
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
                                    <li key={id} onChange={() => genresNavigate(nameEn)}>
                                        <label>
                                            <input type="checkbox" checked={isChecked} name="genres" />
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
                                const isChecked = String(query.countries).split(' ').includes(shortName)

                                return (
                                    <li key={id} onChange={() => countriesNavigate(shortName)}>
                                        <label>
                                            <input type="checkbox" name="countries" checked={isChecked} />
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
                                    <li key={id} onClick={() => yearsNavigate(value)}>
                                        <label>
                                            <input type="radio" name="years" checked={queryParam === value} />
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
