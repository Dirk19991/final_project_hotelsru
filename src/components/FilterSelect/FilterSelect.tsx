import React, { useEffect, useState, FC } from 'react'
import styles from './FilterSelect.module.scss'
import { useI18nContext } from '@/context/i18n'
import cn from 'classnames'
import engNameToLink from '@/util/engNameToLink'

interface IFilterSelect {
    filterType: string
}

const FilterSelect: FC<any> = ({
    filterType,
    currentModal,
    setCurrentModal,
    genres,
}) => {
    const { language, i18n } = useI18nContext()

    const handleCurrentFilter = () => {
        if (filterType === currentModal) {
            setCurrentModal('')
        } else {
            setCurrentModal(filterType)
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
                {filterType === 'years' && <span>{'2023 год'}</span>}
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
