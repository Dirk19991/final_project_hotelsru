import React, { FC } from 'react'
import styles from './NavigationBar.module.scss'
import Link from 'next/link'
import { useI18nContext } from '@/context/i18n'

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
    const { i18n, language } = useI18nContext()

    const navLinks: INavLink[] = [
        { id: 1, name: i18n[language].myIvi, href: '', expandable: false },
        {
            id: 2,
            name: i18n[language].whatsNew,
            href: 'new',
            expandable: false,
        },
        {
            id: 3,
            name: i18n[language].movies,
            href: 'movies',
            expandable: true,
        },
        {
            id: 4,
            name: i18n[language].tvSeries,
            href: 'series',
            expandable: true,
        },
        {
            id: 5,
            name: i18n[language].cartoons,
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
