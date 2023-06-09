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
        { id: 1, name: t('myIvi'), href: '/', expandable: false },
        {
            id: 2,
            name: t('whatsNew'),
            href: 'https://www.ivi.ru/new',
            expandable: false,
        },
        {
            id: 3,
            name: t('movies'),
            href: '/movies',
            expandable: true,
        },
        {
            id: 4,
            name: t('tvSeries'),
            href: 'https://www.ivi.ru/series',
            expandable: true,
        },
        {
            id: 5,
            name: t('cartoons'),
            href: 'https://www.ivi.ru/animation',
            expandable: true,
        },
        { id: 6, name: 'TV+', href: 'https://www.ivi.ru/tvplus', expandable: true },
    ]

    return (
        <ul className={styles.menu} data-testid="navigation-bar">
            {navLinks.map(({ id, name, href, expandable }: INavLink) => (
                <li key={id}>
                    <Link href={`${href}`} title={name} onMouseOver={() => handleMouseOver(id, expandable)} role="link">
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavigationBar
