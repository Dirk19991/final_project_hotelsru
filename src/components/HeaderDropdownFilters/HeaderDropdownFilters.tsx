import React, { FC } from 'react'
import styles from './HeaderDropdownFilters.module.scss'
import Link from 'next/link'

interface IHeaderLink {
    id: number
    name: string
    link: string
}

interface ISubMenuData {
    genre: IHeaderLink[]
    country: IHeaderLink[]
    year: IHeaderLink[]
    selection: IHeaderLink[]
}

interface IHeaderDropdown {
    subMenuData: ISubMenuData
}

const HeaderDropdown: FC<IHeaderDropdown> = ({ subMenuData }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.categories}>
                <div className={styles.genres}>
                    <h4>Жанры</h4>
                    <ul>
                        {subMenuData.genre.map(({ id, name, link }) => (
                            <li key={id}>
                                <Link href={`/${link}`}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.singleColumn}>
                    <div className={styles.countries}>
                        <h4>Страны</h4>
                        <ul>
                            {subMenuData.country.map(({ id, name, link }) => (
                                <li key={id}>
                                    <Link href={`/${link}`}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.years}>
                        <h4>Годы</h4>
                        <ul>
                            {subMenuData.year.map(({ id, name, link }) => (
                                <li key={id}>
                                    <Link href={`/${link}`}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.tabs}>
                    <ul>
                        {subMenuData.selection.map(({ id, name, link }) => (
                            <li key={id}>
                                <Link href={link}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.widget}>
                    <div>
                        короче хз пока как делать этот виджет. Возможно, его
                        необязателньо делать точь в точь
                    </div>
                    {/* TODO: Storybook */}
                    <button>Смотреть на SmartTV</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown