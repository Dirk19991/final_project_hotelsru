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
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import HeaderDropdownTV from '../HeaderDropdownTV/HeaderDropdownTV'
import { createPortal } from 'react-dom'
import AuthModal from '../AuthModal/AuthModal'
import cn from 'classnames'
import NavigationResponse from '@/types/Response/NavigationResponse'

interface Header {
    navigation: NavigationResponse
}

const Header: FC<Header> = ({ navigation }) => {
    const matchesDesktopSize = useMediaQuery('(min-width: 1160px)')
    const matchesTabSize = useMediaQuery('(min-width: 600px)')

    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [currentTabId, setCurrentTabId] = useState<number | null>(null)

    const [headerLinks, setHeaderLinks] = useState<NavigationResponse>(navigation)

    const [isAuthModal, setIsAuthModal] = useState(false)

    useEffect(() => {
        if (isAuthModal) {
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        } else {
            document.body.style.overflow = 'overlay'
        }
    }, [isAuthModal])

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
            <div className={`${styles.top} ${isHovering ? styles.topExpanded : styles.topCollapsed}`}>
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
                                    {matchesDesktopSize && <NavigationBar handleMouseOver={handleMouseOver} />}
                                </nav>
                                <div className={styles.panel}>
                                    <div
                                        onMouseOver={() => handleMouseOver(10, true)}
                                        data-testid="subscription-button"
                                    >
                                        <Button label={t('watch30days')} onClick={() => {}} type="headerThirtyDays" />
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
                                            <ButtonRound onClick={() => toggleLangHandler(locale)} type="language">
                                                {locale?.toUpperCase()}
                                            </ButtonRound>
                                        </div>
                                    )}
                                    {matchesTabSize && (
                                        <div
                                            className={styles.avatar}
                                            data-testid="profile-button"
                                            onMouseOver={() => handleMouseOver(11, true)}
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
                            {!isAuthModal && (
                                <div
                                    className={cn(styles.dropdown, {
                                        [styles.dropdownExpanded]: isHovering,
                                    })}
                                    onMouseLeave={openSubMenu}
                                >
                                    {isHovering && matchesDesktopSize && (
                                        <div className={styles.dropdownContent} data-testid="dropdown-content">
                                            {currentTabId === 3 && (
                                                <HeaderDropdownFilters
                                                    data-testid="movies-dropdown"
                                                    subMenuData={headerLinks.movies_categories}
                                                    type="movie"
                                                />
                                            )}
                                            {currentTabId === 4 && (
                                                <HeaderDropdownFilters
                                                    subMenuData={headerLinks.series_categories}
                                                    type="series"
                                                />
                                            )}
                                            {currentTabId === 5 && (
                                                <HeaderDropdownFilters
                                                    subMenuData={headerLinks.animation_categories}
                                                    type="cartoon"
                                                />
                                            )}
                                            {currentTabId === 6 && <HeaderDropdownTV />}

                                            {currentTabId === 10 && <HeaderDropdownSubscription />}
                                            {currentTabId === 11 && (
                                                <HeaderDropdownProfile
                                                    openAuthModal={() => {
                                                        setCurrentTabId(null)
                                                        setIsHovering(false)
                                                        closeSubMenu()
                                                        setIsAuthModal(true)
                                                    }}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isAuthModal && createPortal(<AuthModal close={() => setIsAuthModal(false)} />, document.body)}
        </header>
    )
}

export default Header
