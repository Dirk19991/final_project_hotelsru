import React, { useEffect, useState, FC } from 'react'
import styles from './FilterSelect.module.scss'
import { useI18nContext } from '@/context/i18n'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const FilterSelect: FC<any> = ({ filterType, currentModal, setCurrentModal, genres, yearFilter }) => {
    const { language, i18n } = useI18nContext()
    const { query, push } = useRouter()
    const { t } = useTranslation(['common'])

    const handleCurrentFilter = () => {
        if (filterType === currentModal) {
            setCurrentModal('')
        } else {
            setCurrentModal(filterType)
        }
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
        const pathname = '/movies/[filters]'
        const filters = query.filters ?? 'all'

        if (value === '') {
            delete query.year
            push({
                pathname,
                query: { ...query, filters },
            })
        }

        push({
            pathname,
            query: {
                ...query,
                year: value,
                filters,
            },
        })
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.select, filterType === currentModal && styles.active)}
                onClick={handleCurrentFilter}
            >
                <div>
                    {filterType === 'genres' && t('genres')}
                    {filterType === 'countries' && t('countries')}
                    {filterType === 'years' && t('years')}
                </div>
                {filterType === 'genres' && <span>{'Артхаус, Драма, Документальный'}</span>}
                {filterType === 'countries' && <span>{'Австралия, Великобритания, Германия'}</span>}
                {filterType === 'years' && <span>{query.filters && yearFilterTitle(query.year)}</span>}
            </div>
            <div className={styles.dropdown}>
                {currentModal === 'genres' && filterType === 'genres' && (
                    <div className={styles.genresDropdown}>
                        <ul>
                            {genres &&
                                genres.map(({ id, nameEn, nameRu }: any) => {
                                    return (
                                        <li key={id}>
                                            <label>
                                                <input type="checkbox" value={engNameToLink(nameEn)} />
                                                <div>{language === 'ru' ? nameRu : nameEn}</div>
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
                            <li>
                                <label>
                                    <input type="checkbox" value="Австралия" />
                                    <div>Австралия</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Аргентина" />
                                    <div>Аргентина</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Албания" />
                                    <div>Албания</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Австралия" />
                                    <div>Австралия</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Аргентина" />
                                    <div>Аргентина</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Албания" />
                                    <div>Албания</div>
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
                {currentModal === 'years' && filterType === 'years' && (
                    <div className={styles.yearsDropdown}>
                        <ul>
                            {yearFilter.map(({ id, value }: any) => {
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
