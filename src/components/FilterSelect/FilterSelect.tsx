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
                {filterType === 'genres' && <span>{'Артхаус, Драма, Документальный'}</span>}
                {filterType === 'countries' && (
                    <span>{'Австралия, Великобритания, Германия'}</span>
                )}
                {filterType === 'years' && <span>{'2024 год'}</span>}
            </div>
            <div className={styles.dropdown}>
                {currentFilter === 'genres' && filterType === 'genres' && (
                    <div className={styles.genresDropdown}>genre</div>
                )}
                {currentFilter === 'countries' &&
                    filterType === 'countries' && (
                        <div className={styles.countriesDropdown}>countre</div>
                    )}
                {currentFilter === 'years' && filterType === 'years' && (
                    <div className={styles.yearsDropdown}>year</div>
                )}
            </div>
        </div>
    )
}

export default FilterSelect
