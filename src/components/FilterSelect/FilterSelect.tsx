import React, { FC } from 'react'
import styles from './FilterSelect.module.scss'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const FilterSelect: FC<any> = ({ filterType, currentModal, setCurrentModal, list, title }) => {
    const { query, push, asPath, pathname, basePath } = useRouter()
    const { t, i18n } = useTranslation(['common'])

    const handleCurrentFilter = () => {
        return filterType === currentModal ? setCurrentModal('') : setCurrentModal(filterType)
    }

    const yearFilterTitle = (value: string | string[] | undefined) => {
        if (!value) {
            return t('allYears')
        }
        if (value === '1980') {
            return `${t('before')} 1980`
        }
        if (value && String(value).match('-')) {
            return value
        } else {
            return `${value} ${t('year')}`
        }
    }

    const yearsNavigate = (value: string) => {
        // const pathname = '/movies/[genres]'
        // const genres = query.genres ?? 'all'
        // if (value === '') {
        //     delete query.year
        //     push({
        //         pathname,
        //         query: { ...query },
        //     })
        // }
        // if (value !== '') {
        //     push({
        //         pathname,
        //         query: {
        //             ...query,
        //             year: value,
        //             // genres,
        //         },
        //     })
        // }
        // setCurrentModal('')
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

    const genresNavigation = (nameEn: string, nameRu: string) => {
        const genreLink = engNameToLink(nameEn)
        const queryString = asPath.split('?').length > 1 ? `?${asPath.split('?')[1]}` : ''
        let genresString = query.genres === 'all' || !query.genres ? '' : String(query.genres)

        if (!genresString) {
            genresString = genreLink
            push(`/movies/${genresString}${queryString}`)
        }

        if (genresString) {
            let genresArr = genresString.split('+')

            if (genresArr.includes(genreLink)) {
                genresArr = genresArr.filter((el) => el !== genreLink)

                const genresRequest = genresArr.length > 0 ? genresArr.join('+') : 'all'
                push(`/movies/${genresRequest}${queryString}`)
            } else {
                genresArr.push(genreLink)

                const genresRequest = genresArr.join('+')
                push(`/movies/${genresRequest}${queryString}`)
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
                {filterType === 'genres' && <span>{'Артхаус, Драма, Документальный'}</span>}
                {filterType === 'countries' && <span>{'Австралия, Великобритания, Германия'}</span>}
                {filterType === 'years' && <span>{query.filters && yearFilterTitle(query.year)}</span>}
            </div>
            <div className={styles.dropdown}>
                {currentModal === 'genres' && filterType === 'genres' && (
                    <div className={styles.genresDropdown}>
                        <ul>
                            {list.map(({ id, nameEn, nameRu }: any) => {
                                return (
                                    <li key={id}>
                                        <label onClick={() => genresNavigation(nameEn, nameRu)}>
                                            <input type="checkbox" />
                                            <div>{i18n.language === 'ru' ? nameRu : nameEn}</div>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                {currentModal === 'countries' && filterType === 'countries' && (
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
                {currentModal === 'years' && filterType === 'years' && (
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
