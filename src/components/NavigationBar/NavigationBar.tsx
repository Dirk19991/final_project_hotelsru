import React, { FC } from 'react'
import styles from './NavigationBar.module.scss'
import Link from 'next/link'

interface INavigationBar {
    handleMouseOver: (id: number, expandable: boolean) => void
}

interface INavLink {
    id: number
    name: string
    href: string
    expandable: boolean
}

const NavigationBar: FC<INavigationBar> = ({ handleMouseOver }) => {
    const navLinks: INavLink[] = [
        { id: 1, name: 'Мой Иви', href: '', expandable: false },
        { id: 2, name: 'Что нового', href: 'new', expandable: false },
        { id: 3, name: 'Фильмы', href: 'movies', expandable: true },
        { id: 4, name: 'Сериалы', href: 'series', expandable: true },
        {
            id: 5,
            name: 'Мультфильмы',
            href: 'animation',
            expandable: true,
        },
        { id: 6, name: 'TV+', href: 'tvplus', expandable: false },
    ]

    return (
        <ul className={styles.menu} data-testid="navigation-bar">
            {navLinks.map(({ id, name, href, expandable }: INavLink) => (
                <li key={id}>
                    <Link
                        href={`/${href}`}
                        title={name}
                        onMouseOver={() => handleMouseOver(id, expandable)}
                        role="link"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavigationBar
