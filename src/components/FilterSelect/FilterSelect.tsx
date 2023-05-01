import React, { useEffect, useState, FC } from 'react'
import styles from './FilterSelect.module.scss'
import { useI18nContext } from '@/context/i18n'
import cn from 'classnames'

interface IFilterSelect {
    filterType: string
}

const FilterSelect: FC<any> = ({
    filterType,
    currentFilter,
    setCurrentFilter,
}) => {
    const { language, i18n } = useI18nContext()

    const handleCurrentFilter = () => {
        if (filterType === currentFilter) {
            setCurrentFilter('')
        } else {
            setCurrentFilter(filterType)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div
                className={cn(
                    styles.select,
                    filterType === currentFilter && styles.active
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
                {filterType === 'years' && <span>{'2023 год'}</span>}
            </div>
            <div className={styles.dropdown}>
                {currentFilter === 'genres' && filterType === 'genres' && (
                    <div className={styles.genresDropdown}>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" value="Детективы" />
                                    <div>Детективы</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Боевики" />
                                    <div>Боевики</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Драмы" />
                                    <div>Драмы</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Детективы" />
                                    <div>Детективы</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Боевики" />
                                    <div>Боевики</div>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" value="Драмы" />
                                    <div>Драмы</div>
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
                {currentFilter === 'countries' &&
                    filterType === 'countries' && (
                        <div className={styles.countriesDropdown}>
                            <ul>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Австралия"
                                        />
                                        <div>Австралия</div>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Аргентина"
                                        />
                                        <div>Аргентина</div>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Албания"
                                        />
                                        <div>Албания</div>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Австралия"
                                        />
                                        <div>Австралия</div>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Аргентина"
                                        />
                                        <div>Аргентина</div>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Албания"
                                        />
                                        <div>Албания</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    )}
                {currentFilter === 'years' && filterType === 'years' && (
                    <div className={styles.yearsDropdown}>
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="years"
                                        value="all"
                                    />
                                    <div>Все годы</div>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="years"
                                        value="2022"
                                    />
                                    <div>2022 год</div>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="years"
                                        value="2021"
                                    />
                                    <div>2021 год</div>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="years"
                                        value="1980-2000"
                                    />
                                    <div>1980-2000</div>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="years"
                                        value="<1980"
                                    />
                                    <div>до 1980</div>
                                </label>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterSelect
