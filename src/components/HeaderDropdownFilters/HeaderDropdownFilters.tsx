import React, { FC } from 'react'
import styles from './HeaderDropdownFilters.module.scss'
import Link from 'next/link'
import SubsciriptionWidget from '../SubscriptionWidget/SubsciriptionWidget'
import { useTranslation } from 'next-i18next'
import { ISubMenuData, IHeaderLink } from '@/types/Response/IHeaderStaticLinks'

interface IHeaderDropdownFilters {
    subMenuData: ISubMenuData
    type: string
}

const HeaderDropdownFilters: FC<IHeaderDropdownFilters> = ({
    subMenuData,
    type,
}) => {
    const { t, i18n } = useTranslation(['common'])

    const getYearSectionNames = (
        year: string | undefined,
        lang: string,
        type: string
    ) => {
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
                        {subMenuData?.genre.map(
                            ({ id, nameEn, nameRu, link }: IHeaderLink) => (
                                <li key={id}>
                                    <Link href={link}>
                                        {i18n.language === 'ru'
                                            ? nameRu
                                            : nameEn}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className={styles.singleColumn}>
                    <div className={styles.countries}>
                        <h4>{t('countries')}</h4>
                        <ul>
                            {subMenuData?.country.map(
                                ({ id, nameEn, nameRu, link }: IHeaderLink) => (
                                    <li key={id}>
                                        <Link href={link ? link : ''}>
                                            {i18n.language === 'ru'
                                                ? nameRu
                                                : nameEn}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className={styles.years}>
                        <h4>{t('years')}</h4>
                        <ul>
                            {subMenuData?.year.map(
                                ({ id, year, link }: IHeaderLink) => (
                                    <li key={id}>
                                        <Link href={link}>
                                            {getYearSectionNames(
                                                year,
                                                i18n.language,
                                                type
                                            )}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.tabs}>
                    <ul>
                        {subMenuData?.selection.map(
                            ({ id, nameEn, nameRu, link }: IHeaderLink) => (
                                <li key={id}>
                                    <Link href={link}>
                                        {i18n.language === 'ru'
                                            ? nameRu
                                            : nameEn}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <SubsciriptionWidget />
            </div>
        </div>
    )
}

export default HeaderDropdownFilters
