import React, { FC } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import yearFilterTitle from '@/util/yearFilterTitle'
import { Genre, Country } from '@/types/Response/MovieResponse'
import { Years } from '@/types/Response/FiltersResponse'

const FilterSelect: FC<any> = ({ filterType, currentModal, setCurrentModal, list, title, selectValue }) => {
    const { query, asPath, replace } = useRouter()
    const { t, i18n } = useTranslation(['movies', 'common'])
    const yearTextForms = [t('allYears'), t('before'), t('year')]

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

            const path = { pathname, query: { ...query, genres } }
            const as = { pathname: pathnameCopy, query: { ...queryCopy } }
            const config = { shallow: true }

            replace(path, as, config)
        } else {
            const path = { pathname, query: { ...query, years: value, genres } }
            const as = { pathname: pathnameCopy, query: { ...queryCopy, years: value } }
            const config = { shallow: true }

            replace(path, as, config)
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
            const path = { pathname, query: { ...query, genres, countries: shortName } }
            const as = { pathname: pathnameCopy, query: { ...queryCopy, countries: shortName } }
            const config = { shallow: true }

            replace(path, as, config)
        } else {
            let countriesArr = countries.split(' ')

            if (countriesArr.includes(shortName)) {
                countriesArr = countriesArr.filter((el) => el !== shortName)

                if (!countriesArr.length) {
                    delete query.countries
                    delete queryCopy.countries

                    const path = { pathname, query: { ...query, genres } }
                    const as = { pathname: pathnameCopy, query: { ...queryCopy } }
                    const config = { shallow: true }

                    replace(path, as, config)
                } else {
                    const countriesRequest = countriesArr.join(' ')

                    const path = { pathname, query: { ...query, genres, countries: countriesRequest } }
                    const as = { pathname: pathnameCopy, query: { ...queryCopy, countries: countriesRequest } }
                    const config = { shallow: true }

                    replace(path, as, config)
                }
            } else {
                countriesArr.push(shortName)
                const countriesRequest = countriesArr.join(' ')

                const path = { pathname, query: { ...query, genres, countries: countriesRequest } }
                const as = { pathname: pathnameCopy, query: { ...queryCopy, countries: countriesRequest } }
                const config = { shallow: true }

                replace(path, as, config)
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

                const path = { pathname, query: { ...query, genres: genresRequest } }
                const as = `/movies/${genresRequest}${queryString}`
                const config = { shallow: true }

                replace(path, as, config)
            } else {
                genresArr.push(genreLink)
                const genresRequest = genresArr.join('+')

                const path = { pathname, query: { ...query, genres: genresRequest } }
                const as = `/movies/${genresRequest}${queryString}`
                const config = { shallow: true }

                replace(path, as, config)
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
                            {list.map(({ id, nameEn, nameRu }: Genre) => {
                                const isChecked = String(query.genres).split('+').includes(engNameToLink(nameEn))

                                return (
                                    <li key={id} onChange={() => genresNavigate(nameEn)}>
                                        <label>
                                            <input type="checkbox" defaultChecked={isChecked} name="genres" />
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
                            {list.map(({ id, nameEn, nameRu, shortName }: Country) => {
                                const isChecked = String(query.countries).split(' ').includes(shortName)

                                return (
                                    <li key={id} onChange={() => countriesNavigate(shortName)}>
                                        <label>
                                            <input type="checkbox" name="countries" defaultChecked={isChecked} />
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
                            {list.map(({ id, value }: Years) => {
                                const queryParam = query.years ?? ''

                                return (
                                    <li key={id} onClick={() => yearsNavigate(value)}>
                                        <label>
                                            <input type="radio" name="years" defaultChecked={queryParam === value} />
                                            <div>{yearFilterTitle(value, yearTextForms)}</div>
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
