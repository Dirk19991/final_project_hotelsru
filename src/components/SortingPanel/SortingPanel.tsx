import React, { FC, useState } from 'react'
import styles from './SortingPanel.module.scss'
import cn from 'classnames'
import { useI18nContext } from '@/context/i18n'

interface ISortingPanel {
    currentSorting: string
    setCurrentSorting: any
}

interface ISortingType {
    id: number
    type: string
    active: boolean
}

const SortingPanel: FC<ISortingPanel> = ({
    currentSorting,
    setCurrentSorting,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const { language, i18n } = useI18nContext()
    const [sortingTypes, setSortingTypes] = useState<ISortingType[]>([
        {
            id: 1,
            type: 'byRating',
            active: true,
        },
        {
            id: 2,
            type: 'byRatesAmount',
            active: false,
        },
        {
            id: 3,
            type: 'byReleaseDate',
            active: false,
        },
        {
            id: 4,
            type: 'byAlphabet',
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
                        className={cn(
                            styles.select,
                            isDropdownOpen && styles.active
                        )}
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
                            {currentSorting === 'byRating' &&
                                i18n[language].byRating}
                            {currentSorting === 'byRatesAmount' &&
                                i18n[language].byRatesAmount}
                            {currentSorting === 'byReleaseDate' &&
                                i18n[language].byReleaseDate}
                            {currentSorting === 'byAlphabet' &&
                                i18n[language].byAlphabet}
                        </span>
                    </div>
                    {isDropdownOpen && (
                        <div className={styles.dropdown}>
                            <span>{i18n[language].sortBy}</span>
                            <ul>
                                {sortingTypes.map(({ id, active, type }) => (
                                    <li
                                        key={id}
                                        className={cn(active && styles.active)}
                                        onClick={() => handleSorting(type, id)}
                                    >
                                        {type === 'byRating' &&
                                            i18n[language].byRating}
                                        {type === 'byRatesAmount' &&
                                            i18n[language].byRatesAmount}
                                        {type === 'byReleaseDate' &&
                                            i18n[language].byReleaseDate}
                                        {type === 'byAlphabet' &&
                                            i18n[language].byAlphabet}
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
