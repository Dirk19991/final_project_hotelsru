import Image from 'next/image'
import styles from './Header.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'
import { useState, FC, useEffect } from 'react'
import HeaderDropdownFilters from '../HeaderDropdownFilters/HeaderDropdownFilters'
import HeaderDropdownProfile from '../HeaderDropdownProfile/HeaderDropdownProfile'
import HeaderDropdownSubscription from '../HeaderDropdownSubscription/HeaderDropdownSubscription'
import useMediaQuery from '@/hooks/useMediaQuery'
import NavigationBar from '../NavigationBar/NavigationBar'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { useI18nContext } from '@/context/i18n'
import mock from '@/data/navigation.json'
import { IHeaderStaticLinks } from '@/types/Response/IHeaderStaticLinks'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Header: FC<any> = () => {
    const matchesDesktopSize = useMediaQuery('(min-width: 1160px)')
    const matchesTabSize = useMediaQuery('(min-width: 600px)')
    
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [currentTabId, setCurrentTabId] = useState<number | null>(null)

    const [headerLinks, setHeaderLinks] = useState<IHeaderStaticLinks>(mock)

    const { locale, push, asPath } = useRouter()

    const openSubMenu = () => matchesDesktopSize && setIsHovering(true)
    const closeSubMenu = () => matchesDesktopSize && setIsHovering(false)

    const handleMouseOver = (id: number, expandable: boolean) => {
        setCurrentTabId(id)
        return expandable ? openSubMenu() : closeSubMenu()
    }

    const toggleLangHandler = (locale: string | undefined) => {
        const lang = locale === 'ru' ? 'en' : 'ru'
        push(asPath, undefined, { locale: lang })
    }

    const { t } = useTranslation(['common'])

    return (
        <header className={styles.header} onMouseLeave={closeSubMenu}>
            <div
                className={`${styles.top} ${
                    isHovering ? styles.topExpanded : styles.topCollapsed
                }`}
            >
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <div className={styles.body}>
                            <div className={styles.content}>
                                <nav className={styles.navigation}>
                                    <Link
                                        href="/"
                                        className={styles.logo}
                                        data-testid="header-logo"
                                        onMouseOver={closeSubMenu}
                                    >
                                        <Image
                                            src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                                            alt="ivi"
                                            width={66}
                                            height={48}
                                        />
                                    </Link>
                                    {matchesDesktopSize && (
                                        <NavigationBar
                                            handleMouseOver={handleMouseOver}
                                        />
                                    )}
                                </nav>
                                <div className={styles.panel}>
                                    <div
                                        onMouseOver={() =>
                                            handleMouseOver(10, true)
                                        }
                                        data-testid="subscription-button"
                                    >
                                        <Button
                                            label={t("watch30days")}
                                            onClick={() => {}}
                                            type="headerThirtyDays"
                                        />
                                    </div>

                                    {matchesDesktopSize && (
                                        <div
                                            className={styles.search}
                                            onMouseOver={closeSubMenu}
                                            data-testid="search-button"
                                        >
                                            <button>
                                                <div>{t('search')}</div>
                                            </button>
                                        </div>
                                    )}
                                    {matchesTabSize && (
                                        <div
                                            className={styles.language}
                                            onMouseOver={closeSubMenu}
                                            data-testid="lang-button"
                                        >
                                            <ButtonRound
                                                onClick={() =>
                                                    toggleLangHandler(locale)
                                                }
                                                type="language"
                                            >
                                                {locale?.toUpperCase()}
                                            </ButtonRound>
                                        </div>
                                    )}
                                    {matchesTabSize && (
                                        <div
                                            className={styles.avatar}
                                            data-testid="profile-button"
                                            onMouseOver={() =>
                                                handleMouseOver(11, true)
                                            }
                                        >
                                            <Link href="https://www.ivi.ru/profile/">
                                                <div>
                                                    <div></div>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${styles.dropdown} ${
                                    isHovering ? styles.dropdownExpanded : ''
                                }`}
                                onMouseLeave={openSubMenu}
                            >
                                {isHovering && matchesDesktopSize && (
                                    <div
                                        className={styles.dropdownContent}
                                        data-testid="dropdown-content"
                                    >
                                        {currentTabId === 3 && (
                                            <HeaderDropdownFilters
                                                data-testid="movies-dropdown"
                                                subMenuData={
                                                    headerLinks.movies_categories
                                                }
                                                type="movie"
                                            />
                                        )}
                                        {currentTabId === 4 && (
                                            <HeaderDropdownFilters
                                                subMenuData={
                                                    headerLinks.series_categories
                                                }
                                                type="series"
                                            />
                                        )}
                                        {currentTabId === 5 && (
                                            <HeaderDropdownFilters
                                                subMenuData={
                                                    headerLinks.animation_categories
                                                }
                                                type="cartoon"
                                            />
                                        )}

                                        {currentTabId === 10 && (
                                            <HeaderDropdownSubscription />
                                        )}
                                        {currentTabId === 11 && (
                                            <HeaderDropdownProfile />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
