import React, { useEffect, useState, FC } from 'react'
import styles from './FilterSelect.module.scss'
import { useI18nContext } from '@/context/i18n'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'
import { useRouter } from 'next/router'

const FilterSelect: FC<any> = ({
    filterType,
    currentModal,
    setCurrentModal,
    genres,
    yearFilter,
}) => {
    const { language, i18n } = useI18nContext()
    const { query, push } = useRouter()

    const handleCurrentFilter = () => {
        if (filterType === currentModal) {
            setCurrentModal('')
        } else {
            setCurrentModal(filterType)
        }
    }

    const yearFilterTitle = (value: string | string[] | undefined) => {
        if (!value) {
            return `Все годы`
        }
        if (value === '1980') {
            return `до 1980`
        }
        if (value && String(value).match('-')) {
            return value
        } else {
            return `${value} год`
        }
    }

    const yearsNavigate = (value: string) => {
        if (value === '') {
            delete query.year
            push({ query: { ...query } }, undefined, {
                shallow: true,
            })
        } else {
            push({ query: { ...query, year: value } }, undefined, {
                shallow: true,
            })
        }
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={cn(
                    styles.select,
                    filterType === currentModal && styles.active
                )}
                onClick={handleCurrentFilter}
            >
                <div>
                    {filterType === 'genres' && i18n[language].genres}
                    {filterType === 'countries' && i18n[language].countries}
                    {filterType === 'years' && i18n[language].years}
                </div>
                {filterType === 'genres' && (
                    <span>{'Артхаус, Драма, Документальный'}</span>
                )}
                {filterType === 'countries' && (
                    <span>{'Австралия, Великобритания, Германия'}</span>
                )}
                {filterType === 'years' && (
                    <span>{yearFilterTitle(query.year)}</span>
                )}
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
                                                <input
                                                    type="checkbox"
                                                    value={engNameToLink(
                                                        nameEn
                                                    )}
                                                />
                                                <div>
                                                    {language === 'ru'
                                                        ? nameRu
                                                        : nameEn}
                                                </div>
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
                                    title = `${value} год`
                                }
                                if (value === '') {
                                    title = `Все годы`
                                }
                                if (value === '1980') {
                                    title = `до 1980`
                                }

                                const queryParam = query.year ?? ''

                                return (
                                    <li key={id}>
                                        <label
                                            onClick={() => yearsNavigate(value)}
                                        >
                                            <input
                                                type="radio"
                                                name="years"
                                                value={value}
                                                checked={
                                                    queryParam === value && true
                                                }
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
