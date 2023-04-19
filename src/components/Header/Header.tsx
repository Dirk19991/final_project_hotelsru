import Image from 'next/image'
import styles from './Header.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'
import { useState } from 'react'
import headerData from './links.json'
import HeaderDropdownFilters from '../HeaderDropdownFilters/HeaderDropdownFilters'
import HeaderDropdownProfile from '../HeaderDropdownProfile/HeaderDropdownProfile'
import HeaderDropdownSubscription from '../HeaderDropdownSubscription/HeaderDropdownSubscription'
import useMediaQuery from '@/hooks/useMediaQuery'

const Header = () => {
    const matchesTabSize = useMediaQuery('(min-width: 1160px)')
    const matchesPhoneSize = useMediaQuery('(min-width: 600px)')

    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [currentTabId, setCurrentTabId] = useState<number | null>(null)

    const openExtraMenu = () => matchesTabSize && setIsHovering(true)
    const closeExtraMenu = () => matchesTabSize && setIsHovering(false)

    const handleMouseOver = (id: number, expandable: boolean) => {
        setCurrentTabId(id)
        return expandable ? openExtraMenu() : closeExtraMenu()
    }

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
                                    <Link href="/" className={styles.logo}>
                                        <Image
                                            src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                                            alt="ivi"
                                            width={66}
                                            height={48}
                                        />
                                    </Link>
                                    {matchesTabSize && (
                                        <ul
                                            data-testid="navigation-bar"
                                            className={styles.menu}
                                        >
                                            {headerData.navigation_links.map(
                                                ({
                                                    id,
                                                    name,
                                                    href,
                                                    expandable,
                                                }) => (
                                                    <li key={id}>
                                                        <Link
                                                            href={`/${href}`}
                                                            title={name}
                                                            onMouseOver={() =>
                                                                handleMouseOver(
                                                                    id,
                                                                    expandable
                                                                )
                                                            }
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </nav>
                                <div className={styles.panel}>
                                    <div
                                        onMouseOver={() =>
                                            handleMouseOver(10, true)
                                        }
                                    >
                                        <Button
                                            label="Смотреть 30 дней бесплатно"
                                            onClick={() => {}}
                                            type="headerThirtyDays"
                                        />
                                    </div>

                                    {matchesTabSize && (
                                        <div
                                            className={styles.search}
                                            onMouseOver={closeExtraMenu}
                                        >
                                            <button>
                                                <div>Поиск</div>
                                            </button>
                                        </div>
                                    )}
                                    {matchesPhoneSize && (
                                        <div
                                            className={styles.language}
                                            onMouseOver={closeExtraMenu}
                                        >
                                            {/* TODO: Storybook */}
                                            <button>RU</button>
                                        </div>
                                    )}
                                    {matchesPhoneSize && (
                                        <div
                                            className={styles.avatar}
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
                                {isHovering && matchesTabSize && (
                                    <div className={styles.dropdownContent}>
                                        {currentTabId === 3 && (
                                            <HeaderDropdownFilters
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
