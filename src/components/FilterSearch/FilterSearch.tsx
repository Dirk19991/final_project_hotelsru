import React, { FC } from 'react'
import styles from './FilterSearch.module.scss'

const FilterSearch: FC<any> = ({ searchType }) => {
    const placeholderTitle =
        searchType === 'producer' ? 'Поиск по режиссеру' : 'Поиск по актеру'

    return (
        <div className={styles.wrapper}>
            <div className={styles.input}>
                <input type="text" placeholder={placeholderTitle} />
            </div>
            <div className={styles.dropdown}></div>
        </div>
    )
}

export default FilterSearch
