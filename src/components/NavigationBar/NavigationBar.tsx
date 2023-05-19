import React, { FC } from 'react'
import styles from './NavigationBar.module.scss'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

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
    const { t } = useTranslation(['common'])

    const navLinks: INavLink[] = [
        { id: 1, name: t('myIvi'), href: '', expandable: false },
        {
            id: 2,
            name: t('whatsNew'),
            href: 'new',
            expandable: false,
        },
        {
            id: 3,
            name: t('movies'),
            href: 'movies',
            expandable: true,
        },
        {
            id: 4,
            name: t('tvSeries'),
            href: 'series',
            expandable: true,
        },
        {
            id: 5,
            name: t('cartoons'),
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
