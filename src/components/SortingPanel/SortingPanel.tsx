import React, { FC, useState } from 'react'
import styles from './SortingPanel.module.scss'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

interface ISortingPanel {
    currentSorting: string
    setCurrentSorting: any
}

interface ISortingType {
    id: number
    type: string
    active: boolean
}

const SortingPanel: FC<ISortingPanel> = ({ currentSorting, setCurrentSorting }) => {
    const { t } = useTranslation(['movies'])
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [sortingTypes, setSortingTypes] = useState<ISortingType[]>([
        {
            id: 1,
            type: 'rating',
            active: true,
        },
        {
            id: 2,
            type: 'ratingCount',
            active: false,
        },
        {
            id: 3,
            type: 'year',
            active: false,
        },
        {
            id: 4,
            type: 'name',
            active: false,
        },
    ])

    const handleSorting = (sortType: string, id: number) => {
        setCurrentSorting(sortType)

        const newSortState = sortingTypes.map((item) => {
            if (item.id === id) {
                return { ...item, active: true }
            }
            return { ...item, active: false }
        })

        setSortingTypes(newSortState)
        setIsDropdownOpen(false)
    }

    return (
        <div className={styles.panel}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div
                        className={cn(styles.select, isDropdownOpen && styles.active)}
                        onClick={() => setIsDropdownOpen((state) => !state)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            width={20}
                            height={20}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                        <span>
                            {currentSorting === 'rating' && t('byRating')}
                            {currentSorting === 'ratingCount' && t('byRatesAmount')}
                            {currentSorting === 'year' && t('byReleaseDate')}
                            {currentSorting === 'name' && t('byAlphabet')}
                        </span>
                    </div>
                    {isDropdownOpen && (
                        <div className={styles.dropdown}>
                            <span>{t('sortBy')}</span>
                            <ul>
                                {sortingTypes.map(({ id, active, type }) => (
                                    <li
                                        key={id}
                                        className={cn(active && styles.active)}
                                        onClick={() => handleSorting(type, id)}
                                    >
                                        {type === 'rating' && t('byRating')}
                                        {type === 'ratingCount' && t('byRatesAmount')}
                                        {type === 'year' && t('byReleaseDate')}
                                        {type === 'name' && t('byAlphabet')}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SortingPanel
