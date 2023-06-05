import { FC } from 'react'
import styles from './Breadcrumbs.module.scss'
import Link from 'next/link'
import cn from 'classnames'

interface IBreadcrumbs {
    items: { name: string; href: string }[]
    bold?: boolean
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ items, bold }) => {
    return (
        <ul className={cn(styles.list, { [styles.list_bold]: bold })}>
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}
export default Breadcrumbs
