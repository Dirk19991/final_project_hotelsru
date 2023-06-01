import React, { FC, useState } from 'react'
import styles from './HeaderDropdownFilters.module.scss'
import Link from 'next/link'
import SubsciriptionWidget from '../SubscriptionWidget/SubsciriptionWidget'
import { useTranslation } from 'next-i18next'

const HeaderDropdownFilters: FC<any> = ({ subMenuData, type }) => {
    const { t, i18n } = useTranslation(['common'])

    const [chosenTab, setChosenTab] = useState(0)

    const getYearSectionNames = (year: string | undefined, lang: string, type: string) => {
        if (lang === 'en') {
            switch (type) {
                case 'series':
                    return `Series of ${year}`
                case 'movie':
                    return `Movies of ${year}`
                case 'cartoon':
                    return `Cartoons of ${year}`
                default:
                    return `${year} год`
            }
        }

        switch (type) {
            case 'series':
                return `Сериалы ${year} года`
            case 'movie':
                return `Фильмы ${year} года`
            case 'cartoon':
                return `Мультфильмы ${year} года`
            default:
                return `${year} year`
        }
    }

    return (
        <div className={styles.wrapper} data-testid="dropdown-filters">
            <div className={styles.categories}>
                <div className={styles.genres}>
                    <h4>{t('genres')}</h4>
                    <ul>
                        {subMenuData?.genre.map(({ id, nameEn, nameRu, link }: any) => (
                            <li key={id}>
                                <Link href={link}>{i18n.language === 'ru' ? nameRu : nameEn}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.singleColumn}>
                    <div className={styles.countries}>
                        <h4>{t('countries')}</h4>
                        <ul>
                            {subMenuData?.country.map(({ id, nameEn, nameRu, link }: any) => (
                                <li key={id}>
                                    <Link href={link ? link : ''}>{i18n.language === 'ru' ? nameRu : nameEn}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.years}>
                        <h4>{t('years')}</h4>
                        <ul>
                            {subMenuData?.year.map(({ id, year, link }: any) => (
                                <li key={id}>
                                    <Link href={link}>{getYearSectionNames(year, i18n.language, type)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.tabs}>
                    <div style={{ top: `${chosenTab * 28}px` }}></div>
                    <ul>
                        {subMenuData?.selection.map(({ id, nameEn, nameRu, link }: any, index: number) => (
                            <li
                                key={id}
                                onMouseOver={() => setChosenTab(index)}
                                style={chosenTab === index ? { color: 'white' } : {}}
                            >
                                <Link href={link}>{i18n.language === 'ru' ? nameRu : nameEn}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <SubsciriptionWidget />
            </div>
        </div>
    )
}

export default HeaderDropdownFilters
