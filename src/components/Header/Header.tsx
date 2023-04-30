import Image from 'next/image'
import styles from './Header.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'
import { useState } from 'react'
import headerData from '@/data/links.json'
import HeaderDropdownFilters from '../HeaderDropdownFilters/HeaderDropdownFilters'
import HeaderDropdownProfile from '../HeaderDropdownProfile/HeaderDropdownProfile'
import HeaderDropdownSubscription from '../HeaderDropdownSubscription/HeaderDropdownSubscription'
import useMediaQuery from '@/hooks/useMediaQuery'
import NavigationBar from '../NavigationBar/NavigationBar'
import { ButtonRound } from '@/stories/Button/ButtonRound'
import { useI18nContext } from '@/context/i18n'

const Header = () => {
    const matchesDesktopSize = useMediaQuery('(min-width: 1160px)')
    const matchesTabSize = useMediaQuery('(min-width: 600px)')

    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [currentTabId, setCurrentTabId] = useState<number | null>(null)

    const openExtraMenu = () => matchesDesktopSize && setIsHovering(true)
    const closeExtraMenu = () => matchesDesktopSize && setIsHovering(false)

    const handleMouseOver = (id: number, expandable: boolean) => {
        setCurrentTabId(id)
        return expandable ? openExtraMenu() : closeExtraMenu()
    }

    const { toggleLanguage, language, i18n } = useI18nContext()

    return (
        <header className={styles.header} onMouseLeave={closeExtraMenu}>
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
                                            label={i18n[language].watch30days}
                                            onClick={() => {}}
                                            type="headerThirtyDays"
                                        />
                                    </div>

                                    {matchesDesktopSize && (
                                        <div
                                            className={styles.search}
                                            onMouseOver={closeExtraMenu}
                                            data-testid="search-button"
                                        >
                                            <button>
                                                <div>
                                                    {i18n[language].search}
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                    {matchesTabSize && (
                                        <div
                                            className={styles.language}
                                            onMouseOver={closeExtraMenu}
                                            data-testid="lang-button"
                                        >
                                            <ButtonRound
                                                onClick={toggleLanguage}
                                                type="language"
                                            >
                                                {language === 'en'
                                                    ? 'EN'
                                                    : 'RU'}
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
                                onMouseLeave={openExtraMenu}
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
                                                    headerData.movies_categories
                                                }
                                            />
                                        )}
                                        {currentTabId === 4 && (
                                            <HeaderDropdownFilters
                                                subMenuData={
                                                    headerData.series_categories
                                                }
                                            />
                                        )}
                                        {currentTabId === 5 && (
                                            <HeaderDropdownFilters
                                                subMenuData={
                                                    headerData.animation_categories
                                                }
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
