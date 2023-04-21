import React, { FC } from 'react'
import styles from './HeaderDropdownFilters.module.scss'
import Link from 'next/link'
import { ButtonFooter } from '@/stories/Button/ButtonFooter'
import { useI18nContext } from '@/context/i18n'

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

const HeaderDropdownFilters: FC<IHeaderDropdown> = ({ subMenuData }) => {
    const { i18n, language } = useI18nContext()

    return (
        <div className={styles.wrapper} data-testid="dropdown-filters">
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
                    <ButtonFooter
                        height={20}
                        href="/"
                        label={i18n[language].watchOnSmartTV}
                        src="/icons/smartTV.svg"
                        type="long"
                        width={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdownFilters
