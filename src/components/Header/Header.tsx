import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import { Button } from '@/stories/Button/ButtonStandard'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <nav>
                        <Link href="/">
                            <Image
                                className="header__logo"
                                src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                                alt="ivi"
                                width={66}
                                height={48}
                            />
                        </Link>
                        <ul>
                            <li>Мой Иви</li>
                            <li>Что нового</li>
                            <li>Фильмы</li>
                            <li>Сериалы</li>
                            <li>Мультфильмы</li>
                            <li>TV+</li>
                        </ul>
                    </nav>
                    <div>
                        <Button
                            href="/"
                            label="Смотреть по подписке"
                            type="watchSubscription"
                        ></Button>
                        <div>Поиск</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
