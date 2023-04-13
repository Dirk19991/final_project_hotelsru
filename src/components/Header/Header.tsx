import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const { wrapper, content, header, navigation, menu, panel, logo, search } =
    styles

const Header = () => {
    return (
        <header className={header}>
            <div className="container">
                <div className={wrapper}>
                    <div className={content}>
                        <nav className={navigation}>
                            <Link href="/" className={logo}>
                                <Image
                                    src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                                    alt="ivi"
                                    width={66}
                                    height={48}
                                />
                            </Link>
                            <ul role="list" className={menu}>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/"
                                        title="Мой Иви"
                                    >
                                        Мой Иви
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/new"
                                        title="Мой Иви"
                                    >
                                        Что нового
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/movies"
                                        title="Мой Иви"
                                    >
                                        Фильмы
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/series"
                                        title="Мой Иви"
                                    >
                                        Сериалы
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/animation"
                                        title="Мой Иви"
                                    >
                                        Мультфильмы
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.ivi.ru/tvplus"
                                        title="Мой Иви"
                                    >
                                        TV+
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={panel}>
                            <Button
                                href="/"
                                label="Смотреть 30 дней бесплатно"
                                type="watchSubscription"
                            ></Button>
                            <div className={search}>
                                <button>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            size="xl"
                                        />
                                        Поиск
                                    </div>
                                </button>
                            </div>
                            <div className="notify">колокольчик</div>
                            <div className="avatar">аватар</div>
                        </div>
                    </div>
                    <div className="dropdownBody"></div>
                </div>
            </div>
        </header>
    )
}

export default Header
